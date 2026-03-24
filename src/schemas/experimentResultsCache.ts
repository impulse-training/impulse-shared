import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Per-phase summary of behavior tracking data.
 */
const phaseDataSchema = z.object({
  /** Dates included in this phase */
  dates: z.array(z.string()),
  /** Number of days with data */
  daysWithData: z.number(),
});

/**
 * Per-phase behavior summary from BigQuery (impulse session counts).
 */
const phaseBehaviorSummarySchema = z.object({
  /** Total impulse sessions in this phase */
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
 * Per-phase metric summary (average of 1-5 scale ratings).
 */
const phaseMetricSummarySchema = z.object({
  /** Average rating across all measurements in the phase */
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
 * Comparison of a metric across experiment phases.
 */
const metricComparisonSchema = z.object({
  metricId: z.string(),
  metricName: z.string(),
  minLabel: z.string().optional(),
  maxLabel: z.string().optional(),
  baseline: phaseMetricSummarySchema.optional(),
  observation: phaseMetricSummarySchema.optional(),
  /** Change in average from baseline to observation */
  delta: z.number().optional(),
  /** Percentage change from baseline to observation */
  deltaPercent: z.number().optional(),
  /** Daily time series for charts */
  dailySeries: z.array(dailyDataPointSchema).optional(),
});

/**
 * Comparison of behavior data across experiment phases.
 */
const behaviorComparisonSchema = z.object({
  behaviorId: z.string(),
  behaviorName: z.string(),
  trackingType: z.string().optional(),
  trackingUnit: z.string().optional(),
  baseline: phaseBehaviorSummarySchema.optional(),
  observation: phaseBehaviorSummarySchema.optional(),
  /** Change in daily average from baseline to observation */
  delta: z.number().optional(),
  /** Percentage change from baseline to observation */
  deltaPercent: z.number().optional(),
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

  /** Phase date metadata */
  baselinePhase: phaseDataSchema.optional(),
  observationPhase: phaseDataSchema.optional(),

  /** Primary behavior comparison */
  behaviorComparison: behaviorComparisonSchema,

  /** Metric comparisons */
  metricComparisons: z.array(metricComparisonSchema),

  /** Lagged-effect insights (yesterday's behavior → today's metric) */
  laggedInsights: z.array(laggedInsightSchema).optional(),

  /** Set by the frontend each time the screen is viewed */
  requestedAt: timestampSchema,
  /** Set by the backend after a successful computation */
  fetchedAt: timestampSchema.optional(),
});

export type ExperimentResultsCache = z.infer<
  typeof experimentResultsCacheSchema
>;
export type MetricComparison = z.infer<typeof metricComparisonSchema>;
export type BehaviorComparison = z.infer<typeof behaviorComparisonSchema>;
export type PhaseBehaviorSummary = z.infer<typeof phaseBehaviorSummarySchema>;
export type PhaseMetricSummary = z.infer<typeof phaseMetricSummarySchema>;
export type PhaseData = z.infer<typeof phaseDataSchema>;
export type DailyDataPoint = z.infer<typeof dailyDataPointSchema>;
export type LaggedInsight = z.infer<typeof laggedInsightSchema>;
