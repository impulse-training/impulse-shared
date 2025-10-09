import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { daySummarySchema } from "../daySummary";
import { goalSchema } from "../goal";

export const experimentPhaseEnum = z.enum(["baseline", "test", "results"]);

export const experimentSchema = z.object({
  startedAt: timestampSchema.optional(),
  name: z.string(),
  subtitle: z.string(),
  behaviorId: z.string(),
  questionIds: z.array(z.string()),
  config: z.object({
    baseline: z.object({
      requiredDays: z.number().default(5),
      description: z.string(),
    }),
    test: z
      .object({
        requiredGoal: goalSchema,
        requiredDays: z.number().default(7),
        requireContiguousDays: z.boolean().default(false),
        // E.g. "Go 7 days in a row without watching YouTube"
        description: z.string(),
      })
      .optional(),
  }),
  // Map of yyyy-MM-dd -> DaySummary. This is "input" data.
  daySummaries: z.record(z.string(), daySummarySchema).default({}),

  // Next, calculate whether requirements were met for a given day for a phase
  requirementsMet: z.object({
    baseline: z.record(z.string(), z.boolean()),
    test: z.record(z.string(), z.boolean()),
  }),

  // Finally, compute data for display.
  completion: z.object({
    baseline: z.object({
      startDateString: z.string(),
      days: z.array(
        z.object({ date: z.string(), requirementsMet: z.boolean() })
      ),
    }),
    test: z.object({
      startDateString: z.string(),
      days: z.array(
        z.object({ date: z.string(), requirementsMet: z.boolean() })
      ),
    }),
  }),
  currentPhase: experimentPhaseEnum.default("baseline"),
});

export type ExperimentPhase = z.infer<typeof experimentPhaseEnum>;
export type Experiment = z.infer<typeof experimentSchema>;
