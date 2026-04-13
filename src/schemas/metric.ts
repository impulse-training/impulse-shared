import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";
import {
  trendSchema,
  stabilitySchema,
  dataCompletenessSchema,
} from "./behavior";

// ─── Metric State (computed cache, stored on the metric document) ─────────────

/**
 * Computed metrics for a specific time window (7, 30, or 90 days).
 * Analogous to BehaviorWindow, but for continuous 1-10 scale values.
 */
export const metricWindowSchema = z.object({
  windowSizeDays: z.union([z.literal(7), z.literal(30), z.literal(90)]),
  /** Average measured value across the window */
  averageMeasured: z.number().optional(),
  /**
   * Direction of change over the window (IMPROVING = rising score,
   * DECLINING = falling score). Note: whether rising is "good" depends
   * on the metric's orientation.
   */
  trend: trendSchema,
  stability: stabilitySchema,
  sampleCount: z.number(),
});
export type MetricWindow = z.infer<typeof metricWindowSchema>;

/**
 * The most-recent 5 data points for a metric, with derived signals.
 * Analogous to BehaviorRecentSlice.
 */
export const metricRecentSliceSchema = z.object({
  /** Most-recent entries, newest first. offset=0 is today, offset=1 is yesterday, … */
  days: z
    .array(
      z.object({
        offset: z.number().int().min(0),
        value: z.number(),
      }),
    )
    .max(5),
  /** Direction of change across this slice */
  direction: z.enum(["IMPROVING", "DECLINING", "FLAT", "MIXED"]),
  /** Magnitude of change relative to the full scale */
  contrast: z.enum(["LOW", "MODERATE", "STRONG"]),
  /** How noteworthy this pattern is */
  salience: z.enum(["LOW", "MEDIUM", "HIGH"]),
});
export type MetricRecentSlice = z.infer<typeof metricRecentSliceSchema>;

/**
 * Pre-computed state for a single metric.
 * Stored as `state` on the metric document at users/{userId}/metrics/{metricId}.
 * Updated by a cloud function whenever a metricLog is written.
 */
export const metricStateSchema = z.object({
  metricId: z.string(),
  windows: z.object({
    short: metricWindowSchema,
    medium: metricWindowSchema,
    long: metricWindowSchema,
  }),
  recentSlice: metricRecentSliceSchema.optional(),
  /**
   * A pre-generated natural-language summary for the AI, e.g.
   * "The user has been scoring low energy lately (avg 3.4/10), and this has been declining."
   */
  textSummary: z.string(),
  meta: z.object({
    lastUpdatedAt: timestampSchema,
    dataCompleteness: dataCompletenessSchema,
  }),
});
export type MetricState = z.infer<typeof metricStateSchema>;

// ─── Metric document ─────────────────────────────────────────────────────────

/**
 * A user-level metric document.
 * Path: users/{userId}/metrics/{metricId}
 *
 * Metrics are lightweight self-report scales (1-10) that users track
 * during experiments to measure how a behavior change affects them.
 */
export const metricSchema = z.object({
  id: z.string().optional(),
  /** Display name, e.g. "Mental clarity" */
  name: z.string().min(1),
  /** Prompt shown when tracking, e.g. "How clear is your thinking?" */
  description: z.string().optional(),
  /** Label for the low end of the 1-10 scale, e.g. "Very foggy" */
  minLabel: z.string().optional(),
  /** Label for the high end of the 1-10 scale, e.g. "Very clear" */
  maxLabel: z.string().optional(),
  /** If created from METRIC_REGISTRY, stores the registry id for dedup */
  metricRegistryId: z.string().optional(),
  /** Circumplex quadrant — present only on pre-seeded feeling metrics */
  quadrant: z.enum(["activated", "stressed", "calm", "low"]).optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
  /** Set when the user initiates deletion; the metric shows as "deleting" until removed */
  startedDeletingAt: timestampSchema.optional(),
  /** Pre-computed trend state. Written by cloud function on metricLog writes. */
  state: metricStateSchema.optional(),
});

export type Metric = z.infer<typeof metricSchema>;

export const isMetric = (value: unknown): value is Metric =>
  metricSchema.safeParse(value).success;
