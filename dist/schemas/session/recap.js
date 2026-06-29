"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recapSessionSchema = exports.recapDayFactSchema = exports.recapDayEventSchema = exports.recapStreakContextEntrySchema = exports.recapQuestionSourceSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.recapQuestionSourceSchema = zod_1.z.enum([
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
/**
 * Authoritative streak figure for a focus behavior, computed synchronously when
 * the user confirms day totals and pinned onto the recap session. The AI reads
 * this directly so the streak it reports can't lag behind the async behavior-state
 * recompute (the `afterDaySummaryWrite` trigger races `respondWithAI` otherwise).
 */
exports.recapStreakContextEntrySchema = zod_1.z.object({
    behaviorName: zod_1.z.string(),
    /** Days the current streak spans, inclusive of the just-confirmed day. */
    streakDays: zod_1.z.number(),
    currentStreakStartDate: zod_1.z.string().optional(),
    lastAchievedRungLabel: zod_1.z.string().optional(),
});
/**
 * The salient streak event for a behavior on the recap day, derived from the
 * goal-comparison history at day-totals confirmation. This is the factual spine
 * the recap is grounded in — the question layer enriches it, never replaces it.
 */
exports.recapDayEventSchema = zod_1.z.enum([
    // A meaningful streak ended today (the user logged the behavior past goal).
    "relapse",
    // The streak reached a milestone rung today.
    "milestone",
    // An active streak continued today (no rung hit, no break).
    "streak_continues",
    // Nothing notable about this behavior's streak today.
    "none",
]);
/**
 * Deterministic per-behavior fact for the recap day, computed and pinned at
 * day-totals confirmation. Authoritative "what happened today" the recap leads
 * with — so the opener can never miss a relapse or milestone.
 */
exports.recapDayFactSchema = zod_1.z.object({
    behaviorId: zod_1.z.string(),
    behaviorName: zod_1.z.string(),
    /** How today's logged total compared to this behavior's goal. */
    goalStatus: zod_1.z.enum(["met", "missed", "no_goal", "unknown"]),
    event: exports.recapDayEventSchema,
    /**
     * For "relapse": length (days) of the run that ended today.
     * For "streak_continues" / "milestone": current run length including today.
     */
    streakDays: zod_1.z.number().optional(),
    /** Start date of the (broken or ongoing) run, when known. */
    streakStartDate: zod_1.z.string().optional(),
    /** For "milestone": the rung label reached today (e.g. "7 days"). */
    milestoneLabel: zod_1.z.string().optional(),
});
exports.recapSessionSchema = base_1.sessionBaseSchema.extend({
    type: zod_1.z.literal("recap"),
    /** Set when user confirms day totals — mirrors daySummary.dayTotalsConfirmedAt */
    completedAt: timestampSchema_1.timestampSchema.nullable().optional(),
    /**
     * Set by processRecaps when the recap-prompt push notification has been sent.
     * Decouples notification idempotency from day_totals_prompt existence so a
     * session pre-created by scheduled_preCreateRecaps doesn't suppress the
     * trigger-time notification.
     */
    recapPromptNotifiedAt: timestampSchema_1.timestampSchema.nullable().optional(),
    /** True while open tasks are being resolved before day totals */
    pendingTaskResolution: zod_1.z.boolean().optional(),
    recapQuestionId: zod_1.z.string().nullable().optional(),
    recapQuestionSource: exports.recapQuestionSourceSchema.optional(),
    recapQuestionTaskId: zod_1.z.string().nullable().optional(),
    focusBehaviorId: zod_1.z.string().optional(),
    focusBehaviorName: zod_1.z.string().optional(),
    focusBehaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
    focusBehaviorNames: zod_1.z.array(zod_1.z.string()).optional(),
    /**
     * Streak figures pinned at day-totals confirmation, keyed by behaviorId.
     * Authoritative source for the AI's "N day streak" language in the recap.
     */
    recapStreakContextByBehaviorId: zod_1.z
        .record(zod_1.z.string(), exports.recapStreakContextEntrySchema)
        .optional(),
    /**
     * Deterministic per-behavior facts for the recap day, pinned at day-totals
     * confirmation. The factual spine the recap leads with.
     */
    recapDayFacts: zod_1.z.array(exports.recapDayFactSchema).optional(),
    /**
     * The question chosen from the recap question graph at confirmation (source
     * "graph"), pinned with its text so the prompt builder renders it without a
     * lookup. Enriches the day's facts.
     */
    recapSelectedQuestion: zod_1.z
        .object({
        questionId: zod_1.z.string(),
        question: zod_1.z.string(),
        metaInstructions: zod_1.z.string(),
    })
        .optional(),
});
