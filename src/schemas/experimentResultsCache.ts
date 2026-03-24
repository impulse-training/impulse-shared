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
 * Per-phase behavior summary (e.g. daily average count/time).
 */
const phaseBehaviorSummarySchema = z.object({
  /** Total tracked value across all days in this phase */
  total: z.number(),
  /** Daily average value */
  dailyAverage: z.number(),
  /** Number of days the behavior was tracked */
  daysTracked: z.number(),
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
});

/**
 * Cached experiment results.
 * Collection: users/{userId}/experimentResultsCache/{experimentId}
 *
 * The frontend subscribes to this document for instant rendering and bumps
 * `requestedAt` on mount. A backend trigger compares `requestedAt` vs
 * `fetchedAt` and recomputes from Firestore data when stale.
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
