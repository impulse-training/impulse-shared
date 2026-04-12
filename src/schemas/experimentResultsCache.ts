import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Overall behavior summary from BigQuery (impulse session counts).
 */
const behaviorSummarySchema = z.object({
  /** Total impulse sessions */
  totalSessions: z.number(),
  /** Sessions where user acted on urge */
  actedCount: z.number(),
  /** Sessions where user resisted */
  resistedCount: z.number(),
  /** Average sessions per day */
  dailyAverage: z.number(),
  /** Resist rate (0-1) */
  resistRate: z.number().optional(),
  /** Number of days with session data */
  daysWithData: z.number(),
});

/**
 * Overall metric summary (average of 1-5 scale ratings).
 */
const metricSummarySchema = z.object({
  /** Average rating across all measurements */
  average: z.number(),
  /** Number of individual ratings recorded */
  count: z.number(),
});

/**
 * A single day's data point for time series charts.
 */
const dailyDataPointSchema = z.object({
  date: z.string(),
  value: z.number(),
  rollingAvg7d: z.number().optional(),
});

/**
 * Confidence level based on data quantity.
 * - low: 3-6 days (basic averages only)
 * - moderate: 7-13 days (+ trends)
 * - high: 14+ days (+ correlations)
 */
const confidenceLevelEnum = z.enum(["low", "moderate", "high"]);

/**
 * Overall metric data for the experiment.
 */
const metricResultSchema = z.object({
  metricId: z.string(),
  metricName: z.string(),
  minLabel: z.string().optional(),
  maxLabel: z.string().optional(),
  summary: metricSummarySchema.optional(),
  /** Daily time series for charts */
  dailySeries: z.array(dailyDataPointSchema).optional(),
});

/**
 * Overall behavior data for the experiment.
 */
const behaviorResultSchema = z.object({
  behaviorId: z.string(),
  behaviorName: z.string(),
  trackingType: z.string().optional(),
  trackingUnit: z.string().optional(),
  summary: behaviorSummarySchema.optional(),
  /** Daily time series for charts */
  dailySeries: z.array(dailyDataPointSchema).optional(),
});

/**
 * Lagged-effect insight: how yesterday's behavior relates to today's metric.
 */
const laggedInsightSchema = z.object({
  behaviorId: z.string(),
  metricId: z.string(),
  metricName: z.string(),
  /** Correlation between previous-day behavior sessions and current-day metric */
  correlation: z.number(),
  /** Number of data points used */
  dataPoints: z.number(),
  /** Human-readable summary */
  description: z.string().optional(),
});

/**
 * A discovered behavior × metric correlation from mart_behavior_metric_insights.
 * Surfaced regardless of whether the metric was selected upfront for the experiment.
 */
const discoveredInsightSchema = z.object({
  behaviorId: z.string(),
  metricId: z.string(),
  metricName: z.string(),
  /** Non-null for feeling-type metrics (activated/stressed/calm/low) */
  quadrant: z.enum(["activated", "stressed", "calm", "low"]).nullable(),
  /** Strongest correlation (same-day or lagged) */
  rBest: z.number(),
  /** Which window was stronger */
  rBestLag: z.enum(["same_day", "lagged"]),
  /** Direction of the correlation */
  direction: z.enum(["positive", "negative"]),
  /** Magnitude bucket */
  strength: z.enum(["strong", "moderate", "weak"]),
  /** Days of overlap used for the best correlation */
  overlapDaysBest: z.number(),
  /** Grand average of the metric across overlap days */
  metricGrandAvg: z.number(),
  /** Grand average of behavior sessions across overlap days */
  behaviorGrandAvg: z.number(),
});

/**
 * Cached experiment results.
 * Collection: users/{userId}/experimentResultsCache/{experimentId}
 *
 * The frontend subscribes to this document for instant rendering and bumps
 * `requestedAt` on mount. A backend trigger compares `requestedAt` vs
 * `fetchedAt` and recomputes from BigQuery/dbt data when stale.
 */
export const experimentResultsCacheSchema = z.object({
  experimentName: z.string(),
  experimentQuestion: z.string(),

  /** Total days with data */
  totalDaysWithData: z.number(),

  /** Confidence level based on data quantity */
  confidence: confidenceLevelEnum,

  /** Per-behavior results */
  behaviorResults: z.array(behaviorResultSchema),

  /** Metric results */
  metricResults: z.array(metricResultSchema),

  /** Lagged-effect insights (yesterday's behavior -> today's metric). Only populated at high confidence (14+ days). */
  laggedInsights: z.array(laggedInsightSchema).optional(),

  /** Pre-computed behavior × metric correlations from mart_behavior_metric_insights.
   *  Surfaced for any metric with sufficient overlap (≥7 days, |r| ≥ 0.3),
   *  regardless of which metrics were pre-selected for the experiment. */
  discoveredInsights: z.array(discoveredInsightSchema).optional(),

  /** Set by the frontend each time the screen is viewed */
  requestedAt: timestampSchema,
  /** Set by the backend after a successful computation */
  fetchedAt: timestampSchema.optional(),
});

export type ExperimentResultsCache = z.infer<
  typeof experimentResultsCacheSchema
>;
export type MetricResult = z.infer<typeof metricResultSchema>;
export type BehaviorResult = z.infer<typeof behaviorResultSchema>;
export type BehaviorSummary = z.infer<typeof behaviorSummarySchema>;
export type MetricSummary = z.infer<typeof metricSummarySchema>;
export type DailyDataPoint = z.infer<typeof dailyDataPointSchema>;
export type LaggedInsight = z.infer<typeof laggedInsightSchema>;
export type DiscoveredInsight = z.infer<typeof discoveredInsightSchema>;
export type ConfidenceLevel = z.infer<typeof confidenceLevelEnum>;
