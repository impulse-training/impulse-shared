import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

const experimentMemoryNotesEntrySchema = z.object({
  behaviorIds: z.array(z.string()),
  insights: z.array(z.string()).default([]),
});

const experimentMemorySchema = z.object({
  notesByDate: z
    .record(z.string(), experimentMemoryNotesEntrySchema)
    .default({}),
});

const phaseCompletionDaySchema = z.object({
  dateString: z.string(),
  requirementsMet: z.boolean(),
});

const phaseCompletionSchema = z.object({
  startDateString: z.string().optional(),
  days: z.array(phaseCompletionDaySchema).default([]),
});

const phaseConfigSchema = z.object({
  requiredGoal: z.number().optional(),
  requireContiguousDays: z.boolean().optional(),
  description: z.string().optional(),
});

export const experimentSchema = z.object({
  startedAt: timestampSchema.optional(),
  name: z.string(),
  experimentQuestion: z.string(),
  behaviorIds: z.array(z.string()).min(1),
  /** Metric document ids being tracked during this experiment */
  metricIds: z.array(z.string()).default([]),

  memory: experimentMemorySchema.optional(),
  resultsSummary: z.string().optional(),

  archivedAt: timestampSchema.optional(),

  /** Current phase of the experiment */
  currentPhase: z
    .enum(["baseline", "transition", "observation"])
    .optional(),

  /** Phase configuration */
  config: z
    .object({
      baseline: phaseConfigSchema.optional(),
      transition: phaseConfigSchema.optional(),
      observation: phaseConfigSchema.optional(),
    })
    .optional(),

  /** Phase completion tracking */
  completion: z
    .object({
      baseline: phaseCompletionSchema.optional(),
      transition: phaseCompletionSchema.optional(),
      observation: phaseCompletionSchema.optional(),
    })
    .optional(),

  /** Set by scheduled function when baseline has enough data to suggest a transition trial */
  suggestTransition: z.boolean().optional(),

  /** Set by recap AI when it surfaces the experiment analysis to the user */
  chartUnlocked: z.boolean().optional(),

  /** AI-generated insight blocks, written once during recap conversation */
  insights: z
    .array(
      z.object({
        heading: z.string(),
        body: z.string(),
      }),
    )
    .optional(),

  /** Pending descriptions for phase transitions */
  pendingTransitionDescription: z.string().optional(),
  pendingObservationDescription: z.string().optional(),
});

export type Experiment = z.infer<typeof experimentSchema>;
