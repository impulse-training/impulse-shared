import { z } from "zod";
import { strategyModificationOperationSchema } from "./log/proposedStrategyModificationLog";
import { timestampSchema } from "../utils/timestampSchema";

export const strategyDraftStatusSchema = z.enum([
  "drafting",
  "accepted",
  "dismissed",
]);

/**
 * The weekly review's working strategy change — session-scoped state at
 * users/{uid}/sessions/{sid}/strategyDraft/current, rendered as a sheet at the
 * bottom of the session with its own "Accept this strategy" button.
 *
 * One draft per CONCERN, sequentially: the AI drafts the change for the
 * currently-active suggest_strategy task (sourceTaskId), the user iterates in
 * conversation (each updateStrategyDraft call overwrites this doc), and accept
 * applies the operations to the plans server-side — which completes the source
 * task, letting the next task's draft take the sheet. An abandoned draft costs
 * nothing: strategy snapshots only ever record actual plan state.
 */
export const strategyDraftSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  sessionId: z.string(),
  /** The session task (suggest_strategy) this draft realizes, when task-driven. */
  sourceTaskId: z.string().optional(),
  title: z.string().min(1),
  summary: z.string().optional(),
  operations: z.array(strategyModificationOperationSchema).min(1),
  status: strategyDraftStatusSchema.default("drafting"),
  /** How many times the draft has been (re)written this session. */
  revision: z.number().int().positive(),
  acceptedAt: timestampSchema.optional(),
  dismissedAt: timestampSchema.optional(),
  /** Set server-side once the operations have been applied to the plans. */
  appliedAt: timestampSchema.optional(),
  createdTriggerIds: z.array(z.string()).optional(),
  createdPlanIds: z.array(z.string()).optional(),
  updatedBehaviorIds: z.array(z.string()).optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
export type StrategyDraft = z.infer<typeof strategyDraftSchema>;

export const isStrategyDraft = (value: unknown): value is StrategyDraft =>
  strategyDraftSchema.safeParse(value).success;
