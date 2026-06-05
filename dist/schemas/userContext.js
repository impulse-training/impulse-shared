"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserContext = exports.isTacticContext = exports.isBehaviorContext = exports.userContextSchema = exports.impulseUsageStatsSchema = exports.catchRateWindowSchema = exports.activeExperimentContextSchema = exports.tacticContextSchema = exports.behaviorContextSchema = void 0;
const zod_1 = require("zod");
const behavior_1 = require("./behavior");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.behaviorContextSchema = zod_1.z.object({
    behaviorId: zod_1.z.string(),
    behaviorName: zod_1.z.string(),
    trackingType: zod_1.z.enum(["counter", "timer", "boolean", "scale"]),
    description: zod_1.z.string().optional(),
    benefits: zod_1.z.array(zod_1.z.string()).optional(),
    drawbacks: zod_1.z.array(zod_1.z.string()).optional(),
    trackingUnit: zod_1.z.string().optional(),
    goalLabel: zod_1.z.string().optional(),
});
exports.tacticContextSchema = zod_1.z.object({
    tacticId: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    instructions: zod_1.z.string().optional(),
});
exports.activeExperimentContextSchema = zod_1.z.object({
    behaviorIds: zod_1.z.array(zod_1.z.string()),
    behaviorNames: zod_1.z.array(zod_1.z.string()),
    experimentQuestion: zod_1.z.string(),
    observations: zod_1.z.array(zod_1.z.string()),
});
/**
 * One time-window of Impulse Mode catch-rate data. Mirrors the behavior-state
 * windowing (short/medium/long = 7/30/90 days) so the two trend systems read
 * consistently. `trend` compares this window's catch rate to its longer-window
 * baseline; `dataCompleteness` reflects how many events fell in the window
 * (impulse events are far sparser than daily behavior samples, so absolute
 * event-count thresholds are used rather than a per-day ratio).
 */
exports.catchRateWindowSchema = zod_1.z.object({
    windowSizeDays: zod_1.z.union([zod_1.z.literal(7), zod_1.z.literal(30), zod_1.z.literal(90)]),
    /** Impulse Mode sessions in the window (caught moments). */
    activations: zod_1.z.number(),
    /** Direct behavior logs in the window (missed moments). */
    misses: zod_1.z.number(),
    /** activations / (activations + misses); null when no events in the window. */
    catchRate: zod_1.z.number().min(0).max(1).nullable(),
    /** activations + misses. */
    sampleCount: zod_1.z.number(),
    trend: behavior_1.trendSchema,
    dataCompleteness: behavior_1.dataCompletenessSchema,
});
/**
 * Denormalized Impulse Mode usage stats, refreshed daily at recap-build (and by
 * the backfill script). Lets the recap AI calibrate framing to the user's real
 * engagement — critically, the catch rate: how often they reach for Impulse Mode
 * when an urge hits (activations) vs. logging the behavior directly (misses).
 */
exports.impulseUsageStatsSchema = zod_1.z.object({
    /** Lifetime count of Impulse Mode sessions (caught moments). */
    impulseActivations: zod_1.z.number(),
    /** Lifetime count of behavior occurrence logs NOT tied to an impulse session (misses). */
    directLogs: zod_1.z.number(),
    catchRateLifetime: zod_1.z.number().nullable(),
    /** Catch-rate windows mirroring behavior-state windowing (7/30/90 days). */
    windows: zod_1.z.object({
        short: exports.catchRateWindowSchema,
        medium: exports.catchRateWindowSchema,
        long: exports.catchRateWindowSchema,
    }),
    firstImpulseAt: timestampSchema_1.timestampSchema.nullable().optional(),
    lastImpulseAt: timestampSchema_1.timestampSchema.nullable().optional(),
    /** Local date the stats were last computed for; used to skip same-day recompute. */
    computedDateString: zod_1.z.string().optional(),
    computedAt: timestampSchema_1.timestampSchema.optional(),
});
exports.userContextSchema = zod_1.z.object({
    behaviors: zod_1.z.record(exports.behaviorContextSchema),
    tactics: zod_1.z.record(exports.tacticContextSchema),
    activeExperiment: exports.activeExperimentContextSchema.nullable().optional(),
    communicationProfile: zod_1.z.string().optional(),
    communicationProfileVersion: zod_1.z.number().optional(),
    usage: exports.impulseUsageStatsSchema.optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
// Type guard functions
const isBehaviorContext = (value) => {
    return exports.behaviorContextSchema.safeParse(value).success;
};
exports.isBehaviorContext = isBehaviorContext;
const isTacticContext = (value) => {
    return exports.tacticContextSchema.safeParse(value).success;
};
exports.isTacticContext = isTacticContext;
const isUserContext = (value) => {
    return exports.userContextSchema.safeParse(value).success;
};
exports.isUserContext = isUserContext;
