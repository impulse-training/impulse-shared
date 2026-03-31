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

  /** Primary behavior data */
  behaviorResult: behaviorResultSchema,

  /** Metric results */
  metricResults: z.array(metricResultSchema),

  /** Lagged-effect insights (yesterday's behavior -> today's metric). Only populated at high confidence (14+ days). */
  laggedInsights: z.array(laggedInsightSchema).optional(),

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
export type ConfidenceLevel = z.infer<typeof confidenceLevelEnum>;
