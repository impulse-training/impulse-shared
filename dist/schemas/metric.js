"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMetric = exports.metricSchema = exports.metricStateSchema = exports.metricRecentSliceSchema = exports.metricWindowSchema = exports.METRIC_NAME_MAX_LENGTH = exports.DEFAULT_METRIC_SCALE_LABELS = exports.metricScaleLabelsSchema = exports.metricValueSchema = void 0;
exports.metricValueLabel = metricValueLabel;
exports.normalizeScaleLabels = normalizeScaleLabels;
exports.resolveDesiredDirection = resolveDesiredDirection;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
const behavior_1 = require("./behavior");
// ─── The 3-point ordered scale ────────────────────────────────────────────────
/**
 * A metric observation. An ORDERED STATE, not a quantity — so it is compared and
 * counted, never averaged in anything user-facing.
 *
 * A literal union rather than `number().min(1).max(3)` on purpose: narrowing a
 * numeric range produces zero compile errors at assignment sites, so a literal
 * union is the only version of this that the type checker can police.
 *
 * Higher always means MORE OF THE NAMED METRIC, never "better". High Stress and
 * High Energy are both 3. Never invert a negatively valenced metric — use
 * `desiredDirection` to decide whether rising is good.
 */
exports.metricValueSchema = zod_1.z.union([
    zod_1.z.literal(1),
    zod_1.z.literal(2),
    zod_1.z.literal(3),
]);
/**
 * The three labels for a metric's scale, ordered low → high, e.g.
 * ["Poor", "Okay", "Good"] for Sleep quality. Index = value - 1.
 */
exports.metricScaleLabelsSchema = zod_1.z.tuple([
    zod_1.z.string().min(1),
    zod_1.z.string().min(1),
    zod_1.z.string().min(1),
]);
/** Resolve the user-facing label for an observation. */
function metricValueLabel(value, scaleLabels) {
    return (scaleLabels !== null && scaleLabels !== void 0 ? scaleLabels : exports.DEFAULT_METRIC_SCALE_LABELS)[value - 1];
}
/** Fallback for metrics that predate `scaleLabels`. */
exports.DEFAULT_METRIC_SCALE_LABELS = [
    "Low",
    "Okay",
    "High",
];
/**
 * Coerce untrusted input (an AI tool argument, a form field) into scale labels,
 * or undefined if it isn't exactly three non-empty strings. Returning undefined
 * rather than padding is deliberate: a partial set would silently mislabel a
 * state, and `DEFAULT_METRIC_SCALE_LABELS` is a safer read than a wrong label.
 */
function normalizeScaleLabels(input) {
    if (!Array.isArray(input) || input.length !== 3)
        return undefined;
    const trimmed = input.map((v) => (typeof v === "string" ? v.trim() : ""));
    if (trimmed.some((v) => v.length === 0))
        return undefined;
    return [trimmed[0], trimmed[1], trimmed[2]];
}
/**
 * Longest metric name that still fits the Home matrix's fixed label column
 * without truncation. Enforced at creation rather than truncated at render, so
 * the constraint is visible once instead of degrading every surface.
 */
exports.METRIC_NAME_MAX_LENGTH = 24;
// ─── Metric State (computed cache, stored on the metric document) ─────────────
/**
 * Computed metrics for a specific time window (7, 30, or 90 days).
 * Analogous to BehaviorWindow, but over ordered 3-point observations.
 */
exports.metricWindowSchema = zod_1.z.object({
    windowSizeDays: zod_1.z.union([zod_1.z.literal(7), zod_1.z.literal(30), zod_1.z.literal(90)]),
    /**
     * How the window's observations were distributed across the three states.
     * A distribution rather than a mean: averaging ordinal states invents a
     * precision the data does not have ("2.4 energy" means nothing to a user).
     */
    distribution: zod_1.z
        .object({
        low: zod_1.z.number().int().min(0),
        okay: zod_1.z.number().int().min(0),
        high: zod_1.z.number().int().min(0),
    })
        .optional(),
    /** The most frequently observed state in the window, if any. */
    modal: exports.metricValueSchema.optional(),
    /**
     * Direction of change over the window (IMPROVING = rising score,
     * DECLINING = falling score). Note: whether rising is "good" depends
     * on the metric's orientation.
     */
    trend: behavior_1.trendSchema,
    stability: behavior_1.stabilitySchema,
    sampleCount: zod_1.z.number(),
});
/**
 * The most-recent 5 data points for a metric, with derived signals.
 * Analogous to BehaviorRecentSlice.
 */
exports.metricRecentSliceSchema = zod_1.z.object({
    /** Most-recent entries, newest first. offset=0 is today, offset=1 is yesterday, … */
    days: zod_1.z
        .array(zod_1.z.object({
        offset: zod_1.z.number().int().min(0),
        value: exports.metricValueSchema,
    }))
        .max(5),
    /** Direction of change across this slice */
    direction: zod_1.z.enum(["IMPROVING", "DECLINING", "FLAT", "MIXED"]),
    /** Magnitude of change relative to the full scale */
    contrast: zod_1.z.enum(["LOW", "MODERATE", "STRONG"]),
    /** How noteworthy this pattern is */
    salience: zod_1.z.enum(["LOW", "MEDIUM", "HIGH"]),
});
/**
 * Pre-computed state for a single metric.
 * Stored as `state` on the metric document at users/{userId}/metrics/{metricId}.
 * Updated by a cloud function whenever a metricLog is written.
 */
exports.metricStateSchema = zod_1.z.object({
    metricId: zod_1.z.string(),
    windows: zod_1.z.object({
        short: exports.metricWindowSchema,
        medium: exports.metricWindowSchema,
        long: exports.metricWindowSchema,
    }),
    recentSlice: exports.metricRecentSliceSchema.optional(),
    /**
     * A pre-generated natural-language summary for the AI. State it as a
     * distribution over the three states, e.g. "Energy has been high on 4 of the
     * last 7 tracked days and low on 1, up from mostly-okay the week before."
     * Never as a mean — "avg 3.4/5" is not a thing a 3-point ordinal supports.
     */
    textSummary: zod_1.z.string(),
    meta: zod_1.z.object({
        lastUpdatedAt: timestampSchema_1.timestampSchema,
        dataCompleteness: behavior_1.dataCompletenessSchema,
    }),
});
// ─── Metric document ─────────────────────────────────────────────────────────
/**
 * A user-level metric document.
 * Path: users/{userId}/metrics/{metricId}
 *
 * Metrics are repeated day-scoped state observations on an ordered 3-point
 * scale — "how I was", as opposed to behaviors' "what I did". One observation
 * per metric per day. Event-scoped measurements (e.g. urge intensity) belong to
 * the impulse/moment model, not here.
 */
exports.metricSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    /** Display name, e.g. "Mental clarity" */
    name: zod_1.z.string().min(1).max(exports.METRIC_NAME_MAX_LENGTH),
    /** Prompt shown when tracking, e.g. "How clear is your thinking?" */
    description: zod_1.z.string().optional(),
    /**
     * The three scale labels, ordered low → high, e.g.
     * ["Very foggy", "Okay", "Very clear"]. Optional only for metrics created
     * before the 3-point migration; use `metricValueLabel` to read it.
     */
    scaleLabels: exports.metricScaleLabelsSchema.optional(),
    /** If created from METRIC_REGISTRY, stores the registry id for dedup */
    metricRegistryId: zod_1.z.string().optional(),
    /** Circumplex quadrant — present only on pre-seeded feeling metrics */
    quadrant: zod_1.z.enum(["activated", "stressed", "calm", "low"]).optional(),
    /** Whether higher or lower values are desirable. Used to filter insights
     *  so we never present a harmful behavior as producing positive outcomes. */
    desiredDirection: zod_1.z.enum(["higher", "lower"]).optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    /** Set when the user initiates deletion; the metric shows as "deleting" until removed */
    startedDeletingAt: timestampSchema_1.timestampSchema.optional(),
    /** Pre-computed trend state. Written by cloud function on metricLog writes. */
    state: exports.metricStateSchema.optional(),
});
const isMetric = (value) => exports.metricSchema.safeParse(value).success;
exports.isMetric = isMetric;
/**
 * Resolve the desired direction for a metric, falling back to quadrant
 * heuristics or "higher" for metrics that predate the field.
 */
function resolveDesiredDirection(metric) {
    if (metric.desiredDirection)
        return metric.desiredDirection;
    if (metric.quadrant === "stressed" || metric.quadrant === "low")
        return "lower";
    return "higher";
}
