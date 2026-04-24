"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMetric = exports.metricSchema = exports.metricStateSchema = exports.metricRecentSliceSchema = exports.metricWindowSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
const behavior_1 = require("./behavior");
// ─── Metric State (computed cache, stored on the metric document) ─────────────
/**
 * Computed metrics for a specific time window (7, 30, or 90 days).
 * Analogous to BehaviorWindow, but for continuous 1-10 scale values.
 */
exports.metricWindowSchema = zod_1.z.object({
    windowSizeDays: zod_1.z.union([zod_1.z.literal(7), zod_1.z.literal(30), zod_1.z.literal(90)]),
    /** Average measured value across the window */
    averageMeasured: zod_1.z.number().optional(),
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
        value: zod_1.z.number(),
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
     * A pre-generated natural-language summary for the AI, e.g.
     * "The user has been scoring low energy lately (avg 3.4/10), and this has been declining."
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
 * Metrics are lightweight self-report scales (1-10) that users track
 * during experiments to measure how a behavior change affects them.
 */
exports.metricSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    /** Display name, e.g. "Mental clarity" */
    name: zod_1.z.string().min(1),
    /** Prompt shown when tracking, e.g. "How clear is your thinking?" */
    description: zod_1.z.string().optional(),
    /** Label for the low end of the 1-10 scale, e.g. "Very foggy" */
    minLabel: zod_1.z.string().optional(),
    /** Label for the high end of the 1-10 scale, e.g. "Very clear" */
    maxLabel: zod_1.z.string().optional(),
    /** If created from METRIC_REGISTRY, stores the registry id for dedup */
    metricRegistryId: zod_1.z.string().optional(),
    /** Circumplex quadrant — present only on pre-seeded feeling metrics */
    quadrant: zod_1.z.enum(["activated", "stressed", "calm", "low"]).optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    /** Set when the user initiates deletion; the metric shows as "deleting" until removed */
    startedDeletingAt: timestampSchema_1.timestampSchema.optional(),
    /** Pre-computed trend state. Written by cloud function on metricLog writes. */
    state: exports.metricStateSchema.optional(),
});
const isMetric = (value) => exports.metricSchema.safeParse(value).success;
exports.isMetric = isMetric;
