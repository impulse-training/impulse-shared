import { z } from "zod";
import { documentReferenceSchema, timestampSchema } from "../../utils";
import { daySummarySchema } from "../daySummary";
import { goalSchema } from "../goal";

export const experimentPhaseEnum = z.enum(["baseline", "test", "results"]);

export const experimentSchema = z.object({
  startedAt: timestampSchema.optional(),
  hypothesis: z.string(),
  nextRequirement: z.string(),
  name: z.string().optional(),
  behavior: documentReferenceSchema,
  question: documentReferenceSchema,
  config: z.object({
    baseline: z.object({
      requiredDays: z.number().default(5),
      requirementDescription: z.string(),
    }),
    test: z.object({
      requiredGoal: goalSchema,
      requiredDays: z.number().default(7),
      requireContiguousDays: z.boolean().default(false),
      // E.g. "Go 5 days without watching YouTube"
      requirementDescription: z.string(),
    }),
  }),
  completion: z.object({
    // A map of yyyy-MM-dd -> { requirementsMet: boolean }
    baseline: z.record(z.string(), z.object({ requirementsMet: z.boolean() })),
    test: z.record(z.string(), z.object({ requirementsMet: z.boolean() })),
  }),
  currentPhase: experimentPhaseEnum.default("baseline"),
  // Map of yyyy-MM-dd -> DaySummary
  daySummaries: z.record(z.string(), daySummarySchema).default({}),
});

export type ExperimentPhase = z.infer<typeof experimentPhaseEnum>;
export type Experiment = z.infer<typeof experimentSchema>;
