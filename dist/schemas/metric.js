"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMetric = exports.metricSchema = exports.metricStateSchema = exports.metricRecentSliceSchema = exports.metricWindowSchema = exports.METRIC_NAME_MAX_LENGTH = exports.DEFAULT_METRIC_SCALE_ADJECTIVES = exports.DEFAULT_METRIC_SCALE_LABELS = exports.metricScaleSchema = exports.METRIC_SCALE_ADJECTIVE_MAX_LENGTH = exports.METRIC_SCALE_WORD_MAX_LENGTH = exports.metricValueSchema = void 0;
exports.defaultMetricScale = defaultMetricScale;
exports.metricScaleLabels = metricScaleLabels;
exports.metricValueLabel = metricValueLabel;
exports.normalizeMetricScale = normalizeMetricScale;
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
/** Longest `word` / adjective a scale accepts — they render on a single chip. */
exports.METRIC_SCALE_WORD_MAX_LENGTH = 20;
exports.METRIC_SCALE_ADJECTIVE_MAX_LENGTH = 12;
/**
 * How a metric's three states are worded: ONE word, which is the middle state
 * on its own, and the adjectives that mark the ends.
 *
 *   { word: "bored", low: "a little", high: "very" }
 *   → 1 "a little bored"   2 "bored"   3 "very bored"
 *
 * The bare word is the middle state on purpose: "I'm bored" is the natural
 * thing to say, and the adjective is an optional refinement of it, so the UI
 * records the word first and lets the user modify it.
 *
 * Every metric is one-ended — it names a single state and measures how much of
 * it there is (Energy is "energetic", not Low/Okay/High). Adjectives are chosen
 * per word, because "very" does not fit everything ("well rested").
 *
 * All three strings are stored lowercase; capitalize at render.
 */
exports.metricScaleSchema = zod_1.z.object({
    /** The state itself, e.g. "bored". The middle value, unmodified. */
    word: zod_1.z.string().min(1).max(exports.METRIC_SCALE_WORD_MAX_LENGTH),
    /** Prefix for value 1, e.g. "a little", "somewhat" */
    low: zod_1.z.string().min(1).max(exports.METRIC_SCALE_ADJECTIVE_MAX_LENGTH),
    /** Prefix for value 3, e.g. "very", "well" */
    high: zod_1.z.string().min(1).max(exports.METRIC_SCALE_ADJECTIVE_MAX_LENGTH),
});
/**
 * Generic labels for a metric with no `scale` — only metrics predating the
 * word scale, which the migration gives one. Never written to a document.
 */
exports.DEFAULT_METRIC_SCALE_LABELS = [
    "low",
    "okay",
    "high",
];
/** The adjectives most words take. Prefer choosing per word where it reads better. */
exports.DEFAULT_METRIC_SCALE_ADJECTIVES = {
    low: "a little",
    high: "very",
};
/** A scale for `word` with the default adjectives. */
function defaultMetricScale(word) {
    return { word: word.trim().toLowerCase(), ...exports.DEFAULT_METRIC_SCALE_ADJECTIVES };
}
/** The three state labels for a scale, e.g. ["a little bored", "bored", "very bored"]. */
function metricScaleLabels(scale) {
    if (!scale)
        return exports.DEFAULT_METRIC_SCALE_LABELS;
    return [`${scale.low} ${scale.word}`, scale.word, `${scale.high} ${scale.word}`];
}
/** Resolve the user-facing label for an observation, e.g. 3 → "very bored". */
function metricValueLabel(value, scale) {
    return metricScaleLabels(scale)[value - 1];
}
/**
 * Coerce untrusted input (an AI tool argument, a form field) into a scale, or
 * undefined if any part is missing or too long. Lowercases and trims. Returning
 * undefined rather than filling gaps is deliberate: a guessed adjective can read
 * wrong ("very rested"), and callers should fall back to `defaultMetricScale`
 * explicitly where that is acceptable.
 */
function normalizeMetricScale(input) {
    if (!input || typeof input !== "object")
        return undefined;
    const clean = (v) => typeof v === "string" ? v.trim().replace(/\s+/g, " ").toLowerCase() : "";
    const candidate = {
        word: clean(input.word),
        low: clean(input.low),
        high: clean(input.high),
    };
    const parsed = exports.metricScaleSchema.safeParse(candidate);
    return parsed.success ? parsed.data : undefined;
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
     * How the three states are worded, e.g. { word: "rested", low: "somewhat",
     * high: "well" }. Optional only for metrics created before the word scale;
     * read it through `metricValueLabel` / `metricScaleLabels`.
     */
    scale: exports.metricScaleSchema.optional(),
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
