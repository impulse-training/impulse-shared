"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBehavior = exports.behaviorSchema = exports.streakForgivenessEntrySchema = exports.formatBenefitsForPrompt = exports.normalizeBehaviorBenefits = exports.behaviorBenefitElementSchema = exports.behaviorBenefitSchema = exports.benefitNeedSchema = exports.behaviorStateSchema = exports.WINDOW_SIZES = exports.recentSliceSchema = exports.behaviorStateMetaSchema = exports.behaviorStateGoalSchema = exports.trackingWindowSchema = exports.behaviorWindowSchema = exports.behaviorMeaningSchema = exports.behaviorStretchesSchema = exports.globalStreaksSchema = exports.changeStageSchema = exports.streaksSchema = exports.behaviorStateGoalTypeSchema = exports.dataCompletenessSchema = exports.stabilitySchema = exports.trendSchema = exports.behaviorTemplateSchema = exports.streakLabels = exports.baselinePeriods = exports.trackingTypes = void 0;
exports.isBehaviorState = isBehaviorState;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
const goal_1 = require("./goal");
const behaviorTrackingData_1 = require("./behaviorTrackingData");
const behaviorTemplate_1 = require("./behaviorTemplate");
const behaviorTopic_1 = require("./behaviorTopic");
const milestoneAchievement_1 = require("./milestoneAchievement");
// Re-export for backward compatibility
var behaviorTemplate_2 = require("./behaviorTemplate");
Object.defineProperty(exports, "trackingTypes", { enumerable: true, get: function () { return behaviorTemplate_2.trackingTypes; } });
Object.defineProperty(exports, "baselinePeriods", { enumerable: true, get: function () { return behaviorTemplate_2.baselinePeriods; } });
Object.defineProperty(exports, "streakLabels", { enumerable: true, get: function () { return behaviorTemplate_2.streakLabels; } });
var behaviorTemplate_3 = require("./behaviorTemplate");
Object.defineProperty(exports, "behaviorTemplateSchema", { enumerable: true, get: function () { return behaviorTemplate_3.behaviorTemplateSchema; } });
// Trend indicates the direction of behavior adherence over time
exports.trendSchema = zod_1.z.enum([
    "IMPROVING",
    "DECLINING",
    "STABLE",
    "VOLATILE",
    "INSUFFICIENT_DATA",
]);
// Stability indicates how consistent the behavior pattern is
exports.stabilitySchema = zod_1.z.enum(["HIGH", "MEDIUM", "LOW"]);
// Data completeness indicates how much data is available for the window
exports.dataCompletenessSchema = zod_1.z.enum(["HIGH", "MEDIUM", "LOW"]);
// Goal type for behavior state (simplified from the behavior goal schema)
exports.behaviorStateGoalTypeSchema = zod_1.z.enum([
    "MAX_PER_DAY",
    "MIN_PER_DAY",
    "ELIMINATE",
    "CUSTOM",
]);
// Streaks tracking for a behavior window (window-scoped)
exports.streaksSchema = zod_1.z.object({
    longestMet: zod_1.z.number(),
    currentMet: zod_1.z.number(),
    currentFail: zod_1.z.number(),
});
// Stage of Change (Prochaska & DiClemente's Transtheoretical Model). A
// first-class, user-declared primitive per behavior — NOT inferred from data.
// Drives which reflective recap questions are surfaced: e.g. once a user is in
// "action", questions designed to move them *toward* acting (readiness checks,
// "when did you realize you wanted to change") are no longer served.
exports.changeStageSchema = zod_1.z.enum([
    "precontemplation",
    "contemplation",
    "preparation",
    "action",
    "maintenance",
    "relapse",
]);
// Global streaks tracking (not limited to any window)
exports.globalStreaksSchema = zod_1.z.object({
    currentStreak: zod_1.z.number(),
    longestStreak: zod_1.z.number(),
    // Date when the current streak started (ISO date string)
    currentStreakStartDate: zod_1.z.string().optional(),
    // Date when the longest streak started (ISO date string)
    longestStreakStartDate: zod_1.z.string().optional(),
});
// Sub-day "time without the behavior" stats for eliminate goals. Wall-clock
// anchored: clients render the live figure as now − currentStartAt.
exports.behaviorStretchesSchema = zod_1.z.object({
    longestMs: zod_1.z.number(),
    longestStartAt: timestampSchema_1.timestampSchema.optional(),
    // Null/absent while the longest stretch is the ongoing one. Written as an
    // explicit null (not omitted) because behavior state is persisted with a
    // deep merge — omission would leave a stale end time behind.
    longestEndAt: timestampSchema_1.timestampSchema.nullable().optional(),
    // When the current stretch began (last occurrence, or a conservative day
    // boundary when times are unknown). MAY BE IN THE FUTURE (acted today with
    // unknown last time → end of today) — consumers must clamp elapsed to 0.
    currentStartAt: timestampSchema_1.timestampSchema.optional(),
});
// Rich, reflective meaning associated with a behavior
exports.behaviorMeaningSchema = zod_1.z.object({
    importance: zod_1.z.enum(["LOW", "MEDIUM", "HIGH", "CORE"]),
    emotionalTone: zod_1.z.object({
        primary: zod_1.z.enum([
            "NEUTRAL",
            "FRUSTRATED",
            "ASHAMED",
            "CONFLICTED",
            "MOTIVATED",
            "RESIGNED",
        ]),
        confidence: zod_1.z.enum(["LOW", "MEDIUM", "HIGH"]),
    }),
    motivation: zod_1.z.object({
        reasons: zod_1.z.array(zod_1.z.string()),
        valuesLinked: zod_1.z.array(zod_1.z.string()),
        avoidanceDriven: zod_1.z.boolean(),
    }),
    selfNarrative: zod_1.z.object({
        identityStatement: zod_1.z.string().optional(),
        perceivedControl: zod_1.z.enum(["LOW", "MEDIUM", "HIGH"]),
    }),
    friction: zod_1.z
        .object({
        commonTriggers: zod_1.z.array(zod_1.z.string()).optional(),
        highRiskContexts: zod_1.z.array(zod_1.z.string()).optional(),
    })
        .optional(),
});
// BehaviorWindow represents computed metrics for a specific time window (7, 30, or 90 days)
exports.behaviorWindowSchema = zod_1.z.object({
    windowSizeDays: zod_1.z.union([zod_1.z.literal(7), zod_1.z.literal(30), zod_1.z.literal(90)]),
    adherenceRate: zod_1.z.number().min(0).max(1),
    averageMeasured: zod_1.z.number().optional(),
    trend: exports.trendSchema,
    stability: exports.stabilitySchema,
    streaks: exports.streaksSchema,
    recencyWeightedScore: zod_1.z.number().min(0).max(1),
    sampleCount: zod_1.z.number(),
});
// TrackingWindow represents computed metrics for a specific time window based on measured values
// (used for behaviors without goals).
exports.trackingWindowSchema = zod_1.z.object({
    windowSizeDays: zod_1.z.union([zod_1.z.literal(7), zod_1.z.literal(30), zod_1.z.literal(90)]),
    averageMeasured: zod_1.z.number().optional(),
    trend: exports.trendSchema,
    stability: exports.stabilitySchema,
    sampleCount: zod_1.z.number(),
});
// Goal information stored in behavior state
exports.behaviorStateGoalSchema = zod_1.z.object({
    goalLabel: zod_1.z.string(),
    unit: zod_1.z.string(),
    targetValue: zod_1.z.number().optional(),
    goalType: exports.behaviorStateGoalTypeSchema,
});
// Metadata for the behavior state
exports.behaviorStateMetaSchema = zod_1.z.object({
    lastUpdatedAt: timestampSchema_1.timestampSchema,
    dataCompleteness: exports.dataCompletenessSchema,
});
exports.recentSliceSchema = zod_1.z.object({
    days: zod_1.z
        .array(zod_1.z.object({
        offset: zod_1.z.number().int().min(0),
        measured: zod_1.z.number(),
        status: zod_1.z.enum(["MET", "NOT_MET_FAIL", "UNSPECIFIED_FOR_DAY"]),
        // Whether the user confirmed this day's totals (dayTotalsConfirmedAt on
        // the daySummary). Unconfirmed days (incl. an in-progress today) are
        // rendered as gaps in the behavior-card trendline rather than points.
        // Optional so legacy docs (written before this field) stay valid; the
        // writers always populate it, and a missing value reads as unconfirmed.
        confirmed: zod_1.z.boolean().optional(),
    }))
        .max(7),
    direction: zod_1.z.enum(["IMPROVING", "DECLINING", "FLAT", "MIXED"]),
    contrast: zod_1.z.enum(["LOW", "MODERATE", "STRONG"]),
    salience: zod_1.z.enum(["LOW", "MEDIUM", "HIGH"]),
});
// Window size constants
exports.WINDOW_SIZES = {
    short: 7,
    medium: 30,
    long: 90,
};
// BehaviorState represents the embedded state for a single behavior at
// users/{userId}/behaviors/{behaviorId}.state
exports.behaviorStateSchema = zod_1.z.object({
    behaviorId: zod_1.z.string(),
    goal: exports.behaviorStateGoalSchema.optional(),
    meaning: exports.behaviorMeaningSchema.optional(),
    // Global streaks (not limited to any window)
    globalStreaks: exports.globalStreaksSchema.optional(),
    // Sub-day stretch stats (eliminate goals only)
    stretches: exports.behaviorStretchesSchema.optional(),
    windows: zod_1.z.object({
        short: exports.behaviorWindowSchema,
        medium: exports.behaviorWindowSchema,
        long: exports.behaviorWindowSchema,
    }),
    trackingWindows: zod_1.z
        .object({
        short: exports.trackingWindowSchema,
        medium: exports.trackingWindowSchema,
        long: exports.trackingWindowSchema,
    })
        .optional(),
    recentSlice: exports.recentSliceSchema.optional(),
    milestoneProgress: milestoneAchievement_1.milestoneProgressSchema.optional(),
    meta: exports.behaviorStateMetaSchema,
});
function isBehaviorState(value) {
    return exports.behaviorStateSchema.safeParse(value).success;
}
// The normalized "need" a behavior serves — the underlying pull behind a
// benefit. Deliberately small and closed: it exists so benefits can be matched
// across behaviors ("things that relax me") when suggesting substitutes.
// `need` is optional on each benefit — the model tags a need only when
// confident; absence means "other/unclassified", so there is no "other" value.
exports.benefitNeedSchema = zod_1.z.enum([
    "relaxation", // winding down, calming, stress relief
    "stimulation", // excitement, novelty, the dopamine hit
    "escape", // numbing / avoiding feelings or situations
    "connection", // social belonging, intimacy, not feeling alone
    "control", // sense of agency, order, autonomy
    "pleasure", // sensory enjoyment (taste, arousal, physical feel)
    "achievement", // progress, mastery, competence
    "boredom_relief", // filling empty time
    "comfort", // self-soothing, familiarity, safety
    "focus", // concentration, alertness, mental energy
]);
// One benefit a behavior gives the user: their own words, plus (when the
// model/coach is confident) the normalized need it serves.
exports.behaviorBenefitSchema = zod_1.z.object({
    /** What the behavior gives them, in the user's own words. */
    text: zod_1.z.string().min(1),
    need: exports.benefitNeedSchema.optional(),
});
// Tolerant element schema: benefits were historically bare strings, and old
// docs (and old denormalized userContexts copies) still hold them. Strings
// parse and normalize to `{ text }`, so schema validation stays green across
// both shapes and no deploy ordering hinges on the data migration
// (migrateBehaviorBenefitsShape in impulse-functions is hygiene, not a gate).
exports.behaviorBenefitElementSchema = zod_1.z.union([
    exports.behaviorBenefitSchema,
    zod_1.z
        .string()
        .min(1)
        .transform((text) => ({ text }))
        .pipe(exports.behaviorBenefitSchema),
]);
/**
 * Normalize a raw `benefits` value (possibly legacy `string[]`, possibly mixed)
 * into structured entries. Most readers cast Firestore data without zod
 * parsing, so anything consuming benefits should go through this.
 */
const normalizeBehaviorBenefits = (raw) => {
    if (!Array.isArray(raw))
        return [];
    const entries = [];
    for (const item of raw) {
        if (typeof item === "string") {
            const text = item.trim();
            if (text)
                entries.push({ text });
        }
        else if (item &&
            typeof item === "object" &&
            typeof item.text === "string") {
            const text = item.text.trim();
            if (!text)
                continue;
            const need = item.need;
            entries.push(exports.benefitNeedSchema.safeParse(need).success
                ? { text, need: need }
                : { text });
        }
    }
    return entries;
};
exports.normalizeBehaviorBenefits = normalizeBehaviorBenefits;
/**
 * The one shared rendering of benefits/drawbacks for LLM prompts (used by
 * impulse-tools, impulse-functions and impulse-voice-agent so the framing
 * never drifts). Returns [] when there is nothing to say; callers join with
 * newlines at whatever indent suits their prompt.
 */
const formatBenefitsForPrompt = (benefits, drawbacks) => {
    const lines = [];
    const normalized = (0, exports.normalizeBehaviorBenefits)(benefits);
    if (normalized.length > 0) {
        const rendered = normalized
            .map((b) => (b.need ? `${b.need.replace("_", " ")}: "${b.text}"` : `"${b.text}"`))
            .join("; ");
        lines.push(`What it gives them: ${rendered}`);
    }
    const cleanedDrawbacks = (drawbacks !== null && drawbacks !== void 0 ? drawbacks : [])
        .map((d) => d.trim())
        .filter(Boolean);
    if (cleanedDrawbacks.length > 0) {
        lines.push(`What it costs them: ${cleanedDrawbacks.join("; ")}`);
    }
    return lines;
};
exports.formatBenefitsForPrompt = formatBenefitsForPrompt;
// These are stored at the user-level, as in, users/$userId/behaviors/$behaviorId
// A coach-granted, retroactive streak rescue: a specific NOT_MET_FAIL day that
// should NOT break the streak. The usage stays logged and honest — only the
// streak forgives the day. Set only via the coach dashboard (coach-only for now).
exports.streakForgivenessEntrySchema = zod_1.z.object({
    /** Local ISO date (YYYY-MM-DD) of the forgiven day. */
    date: zod_1.z.string(),
    reason: zod_1.z.string().optional(),
    byCoachId: zod_1.z.string().optional(),
    at: timestampSchema_1.timestampSchema,
});
exports.behaviorSchema = behaviorTemplate_1.behaviorTemplateBase
    .extend({
    id: zod_1.z.string().optional(),
    description: zod_1.z.string(),
    ordinal: zod_1.z.number().default(0),
    // What the behavior gives the user. Structured (see behaviorBenefitSchema);
    // legacy string entries still parse via the tolerant element schema.
    // Captured conversationally by the understand_behavior task
    // (updateBehaviorUnderstanding tool). Drawbacks stay freeform strings —
    // only benefits need the normalized `need` dimension for substitute
    // matching.
    benefits: zod_1.z.array(exports.behaviorBenefitElementSchema).default([]),
    drawbacks: zod_1.z.array(zod_1.z.string()).default([]),
    goal: goal_1.goalSchema.optional(),
    lastTrackedAt: timestampSchema_1.timestampSchema.optional(),
    // Tactics pinned to this behavior. Surfaced as a ranking boost for
    // in-the-moment recommendations on sessions involving this behavior.
    tactics: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema).optional(),
    // Tactic IDs to never recommend in-the-moment for this behavior. Applied as
    // a hard exclude in the scoring engine. Set by the user or a coach when a
    // tactic is a poor fit for this behavior (e.g. cold-water for arousal urges).
    suppressedTacticIds: zod_1.z.array(zod_1.z.string()).optional(),
    initialUsage: behaviorTrackingData_1.behaviorTrackingDataSchema.optional(),
    masked: zod_1.z.boolean().optional().default(false),
    behaviorTemplateId: zod_1.z.string().optional(),
    // Display color for this behavior (hex string, e.g. "#C4362C")
    color: zod_1.z.string().optional(),
    // Reference to the behavior topic (e.g., "substances", "digital-screen-use")
    // Used for matching users to support groups with similar focus areas
    behaviorTopicId: behaviorTopic_1.behaviorTopicIdSchema.optional(),
    // When true, the recap session should collect baseline usage data for this behavior
    needsBaselineData: zod_1.z.boolean().optional().default(false),
    // User-declared Stage of Change for this behavior (Transtheoretical Model).
    // Set explicitly by the user; gates which reflective recap questions are
    // surfaced. Absent = unknown → no stage gating applied.
    changeStage: exports.changeStageSchema.optional(),
    // When the user last set/changed changeStage.
    changeStageUpdatedAt: timestampSchema_1.timestampSchema.optional(),
    customMilestoneRungs: zod_1.z.array(milestoneAchievement_1.milestoneRungSchema).optional(),
    mergedIntoBehaviorId: zod_1.z.string().optional(),
    mergedFromBehaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
    mergedAt: timestampSchema_1.timestampSchema.optional(),
    // User-confirmed streak start date (ISO string), set when backdating a streak after a goal change
    streakOverrideStartDate: zod_1.z.string().optional(),
    // Coach-granted retroactive streak rescues (per-day). A forgiven NOT_MET_FAIL
    // day is treated as non-breaking by computeGlobalStreaks; the underlying
    // usage/logs are untouched. Complementary to `tolerance` (prospective by
    // design and unable to rescue a past break).
    streakForgiveness: zod_1.z.array(exports.streakForgivenessEntrySchema).optional(),
    // Grace band for win-day streaks, in the same unit as the day's measured
    // total (minutes for timers, raw count for counters). A day still counts
    // toward the streak when its total stays within goal target + tolerance.
    // Sourced from the behavior template's defaultTolerance at creation
    // (0 for abstinence-style behaviors), user-overridable.
    //
    // IMPORTANT: tolerance is invisible prospectively. It is NEVER surfaced as a
    // "remaining today"/spend-down budget anywhere in the UI. The displayed
    // target stays at the goal (0 for eliminate); tolerance only ever operates
    // silently as streak-survival, observed after the fact.
    // Optional (not `.default(0)`) so it stays additive — absent is treated as 0
    // by resolveEffectiveTolerance / computeGoalComparison.
    tolerance: zod_1.z.number().optional(),
    // A scheduled tolerance change that only takes effect from effectiveDate
    // (local ISO date, YYYY-MM-DD) forward. This is the edit guard: editing
    // tolerance sets effectiveDate = tomorrow so it cannot retroactively rescue
    // a break already in progress for the current day.
    pendingTolerance: zod_1.z
        .object({ value: zod_1.z.number(), effectiveDate: zod_1.z.string() })
        .optional(),
    // Computed state for this behavior (windows, trend, etc.)
    state: exports.behaviorStateSchema.optional(),
    // High-water mark: the largest single-day total ever recorded for this
    // behavior, in the SAME canonical unit as daySummary
    // behaviorDataTotalByBehaviorId.value (minutes for timer, raw count for
    // counter, level for scale). Used purely as the fixed y-axis ceiling for
    // behavior charts so bar heights stay comparable across weeks instead of
    // rescaling to each week's own max. Maintained monotonically by
    // reaggregateDaySummaryBehaviorTotals (bumped when a day's total exceeds
    // it) and populated historically by backfillMaxTrackedPerDay. Absent for
    // behaviors with no tracked data yet; consumers fall back to the visible
    // window's max.
    maxTrackedPerDay: zod_1.z.number().optional(),
});
const isBehavior = (value) => exports.behaviorSchema.safeParse(value).success;
exports.isBehavior = isBehavior;
