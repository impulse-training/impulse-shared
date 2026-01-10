"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBehavior = exports.behaviorSchema = exports.behaviorStateSchema = exports.WINDOW_SIZES = exports.behaviorStateMetaSchema = exports.behaviorStateGoalSchema = exports.behaviorWindowSchema = exports.behaviorMeaningSchema = exports.streaksSchema = exports.behaviorStateGoalTypeSchema = exports.dataCompletenessSchema = exports.stabilitySchema = exports.trendSchema = exports.behaviorTemplateSchema = exports.trackingTypes = void 0;
exports.isBehaviorState = isBehaviorState;
const zod_1 = __importDefault(require("zod"));
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
const goal_1 = require("./goal");
const behaviorTrackingData_1 = require("./behaviorTrackingData");
const behaviorTemplate_1 = require("./behaviorTemplate");
const behaviorTopic_1 = require("./behaviorTopic");
// Re-export for backward compatibility
var behaviorTemplate_2 = require("./behaviorTemplate");
Object.defineProperty(exports, "trackingTypes", { enumerable: true, get: function () { return behaviorTemplate_2.trackingTypes; } });
var behaviorTemplate_3 = require("./behaviorTemplate");
Object.defineProperty(exports, "behaviorTemplateSchema", { enumerable: true, get: function () { return behaviorTemplate_3.behaviorTemplateSchema; } });
// Trend indicates the direction of behavior adherence over time
exports.trendSchema = zod_1.default.enum([
    "IMPROVING",
    "DECLINING",
    "STABLE",
    "VOLATILE",
    "INSUFFICIENT_DATA",
]);
// Stability indicates how consistent the behavior pattern is
exports.stabilitySchema = zod_1.default.enum(["HIGH", "MEDIUM", "LOW"]);
// Data completeness indicates how much data is available for the window
exports.dataCompletenessSchema = zod_1.default.enum(["HIGH", "MEDIUM", "LOW"]);
// Goal type for behavior state (simplified from the behavior goal schema)
exports.behaviorStateGoalTypeSchema = zod_1.default.enum([
    "MAX_PER_DAY",
    "MIN_PER_DAY",
    "ELIMINATE",
    "CUSTOM",
]);
// Streaks tracking for a behavior window
exports.streaksSchema = zod_1.default.object({
    longestMet: zod_1.default.number(),
    currentMet: zod_1.default.number(),
    currentFail: zod_1.default.number(),
});
// Rich, reflective meaning associated with a behavior
exports.behaviorMeaningSchema = zod_1.default.object({
    importance: zod_1.default.enum(["LOW", "MEDIUM", "HIGH", "CORE"]),
    emotionalTone: zod_1.default.object({
        primary: zod_1.default.enum([
            "NEUTRAL",
            "FRUSTRATED",
            "ASHAMED",
            "CONFLICTED",
            "MOTIVATED",
            "RESIGNED",
        ]),
        confidence: zod_1.default.enum(["LOW", "MEDIUM", "HIGH"]),
    }),
    motivation: zod_1.default.object({
        reasons: zod_1.default.array(zod_1.default.string()),
        valuesLinked: zod_1.default.array(zod_1.default.string()),
        avoidanceDriven: zod_1.default.boolean(),
    }),
    selfNarrative: zod_1.default.object({
        identityStatement: zod_1.default.string().optional(),
        perceivedControl: zod_1.default.enum(["LOW", "MEDIUM", "HIGH"]),
    }),
    friction: zod_1.default.object({
        commonTriggers: zod_1.default.array(zod_1.default.string()).optional(),
        highRiskContexts: zod_1.default.array(zod_1.default.string()).optional(),
    }),
});
// BehaviorWindow represents computed metrics for a specific time window (7, 30, or 90 days)
exports.behaviorWindowSchema = zod_1.default.object({
    windowSizeDays: zod_1.default.union([zod_1.default.literal(7), zod_1.default.literal(30), zod_1.default.literal(90)]),
    adherenceRate: zod_1.default.number().min(0).max(1),
    averageMeasured: zod_1.default.number().optional(),
    trend: exports.trendSchema,
    stability: exports.stabilitySchema,
    streaks: exports.streaksSchema,
    recencyWeightedScore: zod_1.default.number().min(0).max(1),
    sampleCount: zod_1.default.number(),
});
// Goal information stored in behavior state
exports.behaviorStateGoalSchema = zod_1.default.object({
    goalLabel: zod_1.default.string(),
    unit: zod_1.default.string(),
    targetValue: zod_1.default.number().optional(),
    goalType: exports.behaviorStateGoalTypeSchema,
});
// Metadata for the behavior state
exports.behaviorStateMetaSchema = zod_1.default.object({
    lastUpdatedAt: timestampSchema_1.timestampSchema,
    dataCompleteness: exports.dataCompletenessSchema,
});
// Window size constants
exports.WINDOW_SIZES = {
    short: 7,
    medium: 30,
    long: 90,
};
// BehaviorState represents the embedded state for a single behavior at
// users/{userId}/behaviors/{behaviorId}.state
exports.behaviorStateSchema = zod_1.default.object({
    behaviorId: zod_1.default.string(),
    goal: exports.behaviorStateGoalSchema.optional(),
    meaning: exports.behaviorMeaningSchema.optional(),
    windows: zod_1.default.object({
        short: exports.behaviorWindowSchema,
        medium: exports.behaviorWindowSchema,
        long: exports.behaviorWindowSchema,
    }),
    meta: exports.behaviorStateMetaSchema,
});
function isBehaviorState(value) {
    return exports.behaviorStateSchema.safeParse(value).success;
}
// These are stored at the user-level, as in, users/$userId/behaviors/$behaviorId
exports.behaviorSchema = behaviorTemplate_1.behaviorTemplateBase
    .extend({
    id: zod_1.default.string().optional(),
    description: zod_1.default.string(),
    ordinal: zod_1.default.number().default(0),
    benefits: zod_1.default.array(zod_1.default.string()),
    drawbacks: zod_1.default.array(zod_1.default.string()),
    goal: goal_1.goalSchema.optional(),
    lastTrackedAt: timestampSchema_1.timestampSchema.optional(),
    tactics: zod_1.default.array(documentReferenceSchema_1.documentReferenceSchema).optional(),
    initialUsage: behaviorTrackingData_1.behaviorTrackingDataSchema.optional(),
    hidden: zod_1.default.boolean().optional().default(false),
    // Reference to the behavior topic (e.g., "substances", "digital-screen-use")
    // Used for matching users to support groups with similar focus areas
    behaviorTopicId: behaviorTopic_1.behaviorTopicIdSchema.optional(),
    // Questions to ask during impulse tracking
    impulseQuestions: zod_1.default.array(documentReferenceSchema_1.documentReferenceSchema).optional(),
    // Questions to ask during debrief (success/setback)
    debriefQuestions: zod_1.default
        .object({
        success: zod_1.default.array(documentReferenceSchema_1.documentReferenceSchema).optional(),
        setback: zod_1.default.array(documentReferenceSchema_1.documentReferenceSchema).optional(),
    })
        .optional(),
    // Computed state for this behavior (windows, trend, etc.)
    state: exports.behaviorStateSchema.optional(),
})
    .superRefine((val, ctx) => {
    if (val.trackingType === "counter" && !val.trackingUnit) {
        ctx.addIssue({
            code: zod_1.default.ZodIssueCode.custom,
            message: "Tracking unit is required when tracking type is 'counter'",
            path: ["trackingUnit"],
        });
    }
});
const isBehavior = (value) => exports.behaviorSchema.safeParse(value).success;
exports.isBehavior = isBehavior;
