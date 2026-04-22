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

const stageEnum = z.enum(["observe", "intervene", "maintain"]);

const stageHistoryEntrySchema = z.object({
  stage: stageEnum,
  enteredAt: timestampSchema,
  exitedAt: timestampSchema.optional(),
  summary: z.string().optional(),
});

export const experimentSchema = z.object({
  startedAt: timestampSchema.optional(),
  name: z.string(),
  experimentQuestion: z.string(),
  behaviorIds: z.array(z.string()).min(1),
  metricIds: z.array(z.string()).default([]),

  memory: experimentMemorySchema.optional(),
  resultsSummary: z.string().optional(),

  archivedAt: timestampSchema.optional(),

  stage: stageEnum.default("observe"),
  stageChangedAt: timestampSchema.optional(),
  stageHistory: z.array(stageHistoryEntrySchema).default([]),

  hypothesis: z.string().optional(),

  goal: z
    .object({
      metricId: z.string(),
      target: z.number(),
      direction: z.enum(["increase", "decrease"]),
    })
    .optional(),

  chartUnlocked: z.boolean().optional(),

  insights: z
    .array(
      z.object({
        heading: z.string(),
        body: z.string(),
      }),
    )
    .optional(),
});

export type Experiment = z.infer<typeof experimentSchema>;

export const experimentProposalSchema = z.object({
  proposedBy: z.enum(["admin", "ai"]),
  proposedByUid: z.string().optional(),
  proposedAt: timestampSchema,
  status: z.enum(["pending", "accepted", "declined", "superseded"]),
  changes: z.record(z.string(), z.unknown()),
  rationale: z.string().optional(),
  respondedAt: timestampSchema.optional(),
  declineNote: z.string().optional(),
});

export type ExperimentProposal = z.infer<typeof experimentProposalSchema>;
