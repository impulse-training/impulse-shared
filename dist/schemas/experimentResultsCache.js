"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experimentResultsCacheSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
/**
 * Overall behavior summary from BigQuery (impulse session counts).
 */
const behaviorSummarySchema = zod_1.z.object({
    /** Total impulse sessions */
    totalSessions: zod_1.z.number(),
    /** Sessions where user acted on urge */
    actedCount: zod_1.z.number(),
    /** Sessions where user resisted */
    resistedCount: zod_1.z.number(),
    /** Average sessions per day */
    dailyAverage: zod_1.z.number(),
    /** Resist rate (0-1) */
    resistRate: zod_1.z.number().optional(),
    /** Number of days with session data */
    daysWithData: zod_1.z.number(),
});
/**
 * Overall metric summary (average of 1-5 scale ratings).
 */
const metricSummarySchema = zod_1.z.object({
    /** Average rating across all measurements */
    average: zod_1.z.number(),
    /** Number of individual ratings recorded */
    count: zod_1.z.number(),
});
/**
 * A single day's data point for time series charts.
 */
const dailyDataPointSchema = zod_1.z.object({
    date: zod_1.z.string(),
    value: zod_1.z.number(),
    rollingAvg7d: zod_1.z.number().optional(),
});
/**
 * Confidence level based on data quantity.
 * - low: 3-6 days (basic averages only)
 * - moderate: 7-13 days (+ trends)
 * - high: 14+ days (+ correlations)
 */
const confidenceLevelEnum = zod_1.z.enum(["low", "moderate", "high"]);
/**
 * Overall metric data for the experiment.
 */
const metricResultSchema = zod_1.z.object({
    metricId: zod_1.z.string(),
    metricName: zod_1.z.string(),
    minLabel: zod_1.z.string().optional(),
    maxLabel: zod_1.z.string().optional(),
    summary: metricSummarySchema.optional(),
    /** Daily time series for charts */
    dailySeries: zod_1.z.array(dailyDataPointSchema).optional(),
});
/**
 * Overall behavior data for the experiment.
 */
const behaviorResultSchema = zod_1.z.object({
    behaviorId: zod_1.z.string(),
    behaviorName: zod_1.z.string(),
    trackingType: zod_1.z.string().optional(),
    trackingUnit: zod_1.z.string().optional(),
    summary: behaviorSummarySchema.optional(),
    /** Daily time series for charts */
    dailySeries: zod_1.z.array(dailyDataPointSchema).optional(),
});
/**
 * Lagged-effect insight: how yesterday's behavior relates to today's metric.
 */
const laggedInsightSchema = zod_1.z.object({
    behaviorId: zod_1.z.string(),
    metricId: zod_1.z.string(),
    metricName: zod_1.z.string(),
    /** Correlation between previous-day behavior sessions and current-day metric */
    correlation: zod_1.z.number(),
    /** Number of data points used */
    dataPoints: zod_1.z.number(),
    /** Human-readable summary */
    description: zod_1.z.string().optional(),
});
/**
 * A discovered behavior × metric correlation from mart_behavior_metric_insights.
 * Surfaced regardless of whether the metric was selected upfront for the experiment.
 */
const discoveredInsightSchema = zod_1.z.object({
    behaviorId: zod_1.z.string(),
    metricId: zod_1.z.string(),
    metricName: zod_1.z.string(),
    /** Non-null for feeling-type metrics (activated/stressed/calm/low) */
    quadrant: zod_1.z.enum(["activated", "stressed", "calm", "low"]).nullable(),
    /** Strongest correlation (same-day or lagged) */
    rBest: zod_1.z.number(),
    /** Which window was stronger */
    rBestLag: zod_1.z.enum(["same_day", "lagged"]),
    /** Direction of the correlation */
    direction: zod_1.z.enum(["positive", "negative"]),
    /** Magnitude bucket */
    strength: zod_1.z.enum(["strong", "moderate", "weak"]),
    /** Days of overlap used for the best correlation */
    overlapDaysBest: zod_1.z.number(),
    /** Grand average of the metric across overlap days */
    metricGrandAvg: zod_1.z.number(),
    /** Grand average of behavior sessions across overlap days */
    behaviorGrandAvg: zod_1.z.number(),
    /** Daily time series — populated when data is available, enabling the same
     *  chart treatment as intentionally-tracked experiment metrics. */
    dailySeries: zod_1.z.array(dailyDataPointSchema).optional(),
});
/**
 * Cached experiment results.
 * Collection: users/{userId}/experimentResultsCache/{experimentId}
 *
 * The frontend subscribes to this document for instant rendering and bumps
 * `requestedAt` on mount. A backend trigger compares `requestedAt` vs
 * `fetchedAt` and recomputes from BigQuery/dbt data when stale.
 */
exports.experimentResultsCacheSchema = zod_1.z.object({
    experimentName: zod_1.z.string(),
    experimentQuestion: zod_1.z.string(),
    /** Total days with data */
    totalDaysWithData: zod_1.z.number(),
    /** Confidence level based on data quantity */
    confidence: confidenceLevelEnum,
    /** Per-behavior results */
    behaviorResults: zod_1.z.array(behaviorResultSchema),
    /** Metric results */
    metricResults: zod_1.z.array(metricResultSchema),
    /** Lagged-effect insights (yesterday's behavior -> today's metric). Only populated at high confidence (14+ days). */
    laggedInsights: zod_1.z.array(laggedInsightSchema).optional(),
    /** Pre-computed behavior × metric correlations from mart_behavior_metric_insights.
     *  Surfaced for any metric with sufficient overlap (≥7 days, |r| ≥ 0.3),
     *  regardless of which metrics were pre-selected for the experiment. */
    discoveredInsights: zod_1.z.array(discoveredInsightSchema).optional(),
    /** Set by the frontend each time the screen is viewed */
    requestedAt: timestampSchema_1.timestampSchema,
    /** Set by the backend after a successful computation */
    fetchedAt: timestampSchema_1.timestampSchema.optional(),
});
