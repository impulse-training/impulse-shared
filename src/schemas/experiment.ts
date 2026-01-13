import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";
import { daySummarySchema } from "./daySummary";
import { goalSchema } from "./goal";

export const experimentPhaseEnum = z.enum([
  "baseline",
  "transition",
  "observation",
]);

const basicPhaseConfigSchema = z.object({
  requiredDays: z.number().default(5),
  description: z.string().optional(),
});

const transitionPhaseConfigSchema = basicPhaseConfigSchema.extend({
  requiredGoal: goalSchema,
  requiredDays: z.number().default(7),
  requireContiguousDays: z.boolean().default(false),
  description: z.string().optional(),
});

const experimentRequirementsSchema = z.record(
  z.string(),
  z.boolean().nullable()
);

const experimentPhaseCompletionSchema = z.object({
  startDateString: z.string(),
  days: z.array(
    z.object({
      date: z.string(),
      requirementsMet: z.boolean().nullable().default(null),
    })
  ),
});

const experimentMemoryNotesEntrySchema = z.object({
  behaviorId: z.string(),
  insights: z.array(z.string()).default([]),
});

const experimentMemorySchema = z.object({
  notesByDate: z
    .record(z.string(), experimentMemoryNotesEntrySchema)
    .default({}),
});

export const experimentSchema = z.object({
  startedAt: timestampSchema.optional(),
  name: z.string(),
  experimentQuestion: z.string(),
  behaviorId: z.string(),
  questionIds: z.array(z.string()),
  pendingTestDescription: z.string().optional(),
  pendingTransitionDescription: z.string().optional(),
  pendingObservationDescription: z.string().optional(),
  config: z.object({
    baseline: basicPhaseConfigSchema,
    transition: transitionPhaseConfigSchema.optional(),
    observation: basicPhaseConfigSchema,
  }),
  memory: experimentMemorySchema.optional(),
  // Map of yyyy-MM-dd -> DaySummary. This is "input" data.
  daySummaries: z.record(z.string(), daySummarySchema).default({}),

  // Next, calculate whether requirements were met for a given day for a phase
  requirementsMet: z.object({
    baseline: experimentRequirementsSchema,
    transition: experimentRequirementsSchema.optional(),
    observation: experimentRequirementsSchema.optional(),
  }),

  // Finally, compute data for display.
  completion: z.object({
    baseline: experimentPhaseCompletionSchema,
    transition: experimentPhaseCompletionSchema.optional(),
    observation: experimentPhaseCompletionSchema.optional(),
  }),
  currentPhase: experimentPhaseEnum.default("baseline"),
});

export type ExperimentPhase = z.infer<typeof experimentPhaseEnum>;
export type Experiment = z.infer<typeof experimentSchema>;
