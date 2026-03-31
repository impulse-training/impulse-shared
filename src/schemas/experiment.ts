import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

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
  /** Metric document ids being tracked during this experiment */
  metricIds: z.array(z.string()).default([]),

  memory: experimentMemorySchema.optional(),
  resultsSummary: z.string().optional(),

  archivedAt: timestampSchema.optional(),
});

export type Experiment = z.infer<typeof experimentSchema>;
