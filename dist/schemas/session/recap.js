"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recapSessionSchema = exports.recapStreakContextEntrySchema = exports.recapQuestionSourceSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.recapQuestionSourceSchema = zod_1.z.enum([
    "sequence",
    "baseline",
    "milestone",
    "trend",
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
exports.recapSessionSchema = base_1.sessionBaseSchema.extend({
    type: zod_1.z.literal("recap"),
    /** Set when user confirms day totals — mirrors daySummary.dayTotalsConfirmedAt */
    completedAt: timestampSchema_1.timestampSchema.nullable().optional(),
    /** True while open tasks are being resolved before day totals */
    pendingTaskResolution: zod_1.z.boolean().optional(),
    recapQuestionId: zod_1.z.string().nullable().optional(),
    recapQuestionSource: exports.recapQuestionSourceSchema.optional(),
    recapQuestionTaskId: zod_1.z.string().optional(),
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
});
