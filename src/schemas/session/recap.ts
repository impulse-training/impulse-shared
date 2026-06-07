import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { sessionBaseSchema } from "./base";

export const recapQuestionSourceSchema = z.enum([
  "sequence",
  "baseline",
  "milestone",
  // Active clean streak continuing on an in-between (non-rung) early day — a
  // light "still going" beat, distinct from a milestone celebration.
  "streak-progress",
  "trend",
]);
export type RecapQuestionSource = z.infer<typeof recapQuestionSourceSchema>;

/**
 * Authoritative streak figure for a focus behavior, computed synchronously when
 * the user confirms day totals and pinned onto the recap session. The AI reads
 * this directly so the streak it reports can't lag behind the async behavior-state
 * recompute (the `afterDaySummaryWrite` trigger races `respondWithAI` otherwise).
 */
export const recapStreakContextEntrySchema = z.object({
  behaviorName: z.string(),
  /** Days the current streak spans, inclusive of the just-confirmed day. */
  streakDays: z.number(),
  currentStreakStartDate: z.string().optional(),
  lastAchievedRungLabel: z.string().optional(),
});
export type RecapStreakContextEntry = z.infer<
  typeof recapStreakContextEntrySchema
>;

export const recapSessionSchema = sessionBaseSchema.extend({
  type: z.literal("recap"),
  /** Set when user confirms day totals — mirrors daySummary.dayTotalsConfirmedAt */
  completedAt: timestampSchema.nullable().optional(),
  /** True while open tasks are being resolved before day totals */
  pendingTaskResolution: z.boolean().optional(),
  recapQuestionId: z.string().nullable().optional(),
  recapQuestionSource: recapQuestionSourceSchema.optional(),
  recapQuestionTaskId: z.string().optional(),
  focusBehaviorId: z.string().optional(),
  focusBehaviorName: z.string().optional(),
  focusBehaviorIds: z.array(z.string()).optional(),
  focusBehaviorNames: z.array(z.string()).optional(),
  /**
   * Streak figures pinned at day-totals confirmation, keyed by behaviorId.
   * Authoritative source for the AI's "N day streak" language in the recap.
   */
  recapStreakContextByBehaviorId: z
    .record(z.string(), recapStreakContextEntrySchema)
    .optional(),
});

export type RecapSession = z.infer<typeof recapSessionSchema>;
