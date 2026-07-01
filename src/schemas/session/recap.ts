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
  // A question chosen from the recap question graph by (day-event, change-stage,
  // behavior similarity), pinned in `recapSelectedQuestion`. Enriches the day's
  // facts; never replaces them.
  "graph",
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

/**
 * The salient streak event for a behavior on the recap day, derived from the
 * goal-comparison history at day-totals confirmation. This is the factual spine
 * the recap is grounded in — the question layer enriches it, never replaces it.
 */
export const recapDayEventSchema = z.enum([
  // A meaningful streak ended today (the user logged the behavior past goal).
  "relapse",
  // Today is another miss in the ongoing aftermath of a meaningful streak that
  // broke on an earlier day — i.e. day 2+ of a slip, still not back on track.
  // The break itself was flagged "relapse" on its day; this keeps the recap
  // grounded in the human-terms arc (long streak, recent break, N days into the
  // slip) so the opener doesn't drift into "nice work / standard day." Awareness,
  // not a fresh event to lead with.
  "relapse_aftermath",
  // The streak reached a milestone rung today.
  "milestone",
  // An active streak continued today (no rung hit, no break).
  "streak_continues",
  // Nothing notable about this behavior's streak today.
  "none",
]);
export type RecapDayEvent = z.infer<typeof recapDayEventSchema>;

/**
 * Deterministic per-behavior fact for the recap day, computed and pinned at
 * day-totals confirmation. Authoritative "what happened today" the recap leads
 * with — so the opener can never miss a relapse or milestone.
 */
export const recapDayFactSchema = z.object({
  behaviorId: z.string(),
  behaviorName: z.string(),
  /** How today's logged total compared to this behavior's goal. */
  goalStatus: z.enum(["met", "missed", "no_goal", "unknown"]),
  event: recapDayEventSchema,
  /**
   * For "relapse" / "relapse_aftermath": length (days) of the run that broke.
   * For "streak_continues" / "milestone": current run length including today.
   */
  streakDays: z.number().optional(),
  /** Start date of the (broken or ongoing) run, when known. */
  streakStartDate: z.string().optional(),
  /**
   * For "relapse_aftermath": how many days into the current slip the user is
   * (consecutive misses ending today, inclusive), so the arc reads in human
   * terms ("day 2 of the slip").
   */
  daysIntoRelapse: z.number().optional(),
  /** For "milestone": the rung label reached today (e.g. "7 days"). */
  milestoneLabel: z.string().optional(),
});
export type RecapDayFact = z.infer<typeof recapDayFactSchema>;

export const recapSessionSchema = sessionBaseSchema.extend({
  type: z.literal("recap"),
  /** Set when user confirms day totals — mirrors daySummary.dayTotalsConfirmedAt */
  completedAt: timestampSchema.nullable().optional(),
  /**
   * Set by processRecaps when the recap-prompt push notification has been sent.
   * Decouples notification idempotency from day_totals_prompt existence so a
   * session pre-created by scheduled_preCreateRecaps doesn't suppress the
   * trigger-time notification.
   */
  recapPromptNotifiedAt: timestampSchema.nullable().optional(),
  /** True while open tasks are being resolved before day totals */
  pendingTaskResolution: z.boolean().optional(),
  recapQuestionId: z.string().nullable().optional(),
  recapQuestionSource: recapQuestionSourceSchema.optional(),
  recapQuestionTaskId: z.string().nullable().optional(),
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
  /**
   * Deterministic per-behavior facts for the recap day, pinned at day-totals
   * confirmation. The factual spine the recap leads with.
   */
  recapDayFacts: z.array(recapDayFactSchema).optional(),
  /**
   * The question chosen from the recap question graph at confirmation (source
   * "graph"), pinned with its text so the prompt builder renders it without a
   * lookup. Enriches the day's facts.
   */
  recapSelectedQuestion: z
    .object({
      questionId: z.string(),
      question: z.string(),
      metaInstructions: z.string(),
    })
    .optional(),
});

export type RecapSession = z.infer<typeof recapSessionSchema>;
