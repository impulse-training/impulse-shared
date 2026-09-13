import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";
import {
  trendSchema,
  stabilitySchema,
  dataCompletenessSchema,
} from "./behavior";

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
export const metricValueSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
]);
export type MetricValue = z.infer<typeof metricValueSchema>;

/** Longest `word` / adjective a scale accepts — they render on a single chip. */
export const METRIC_SCALE_WORD_MAX_LENGTH = 20;
export const METRIC_SCALE_ADJECTIVE_MAX_LENGTH = 12;

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
export const metricScaleSchema = z.object({
  /** The state itself, e.g. "bored". The middle value, unmodified. */
  word: z.string().min(1).max(METRIC_SCALE_WORD_MAX_LENGTH),
  /** Prefix for value 1, e.g. "a little", "somewhat" */
  low: z.string().min(1).max(METRIC_SCALE_ADJECTIVE_MAX_LENGTH),
  /** Prefix for value 3, e.g. "very", "well" */
  high: z.string().min(1).max(METRIC_SCALE_ADJECTIVE_MAX_LENGTH),
});
export type MetricScale = z.infer<typeof metricScaleSchema>;

/** The three rendered state labels, ordered low → high. Index = value - 1. */
export type MetricScaleLabels = [string, string, string];

/**
 * Generic labels for a metric with no `scale` — only metrics predating the
 * word scale, which the migration gives one. Never written to a document.
 */
export const DEFAULT_METRIC_SCALE_LABELS: MetricScaleLabels = [
  "low",
  "okay",
  "high",
];

/** The adjectives most words take. Prefer choosing per word where it reads better. */
export const DEFAULT_METRIC_SCALE_ADJECTIVES = {
  low: "a little",
  high: "very",
} as const;

/** A scale for `word` with the default adjectives. */
export function defaultMetricScale(word: string): MetricScale {
  return { word: word.trim().toLowerCase(), ...DEFAULT_METRIC_SCALE_ADJECTIVES };
}

/** The three state labels for a scale, e.g. ["a little bored", "bored", "very bored"]. */
export function metricScaleLabels(scale?: MetricScale | null): MetricScaleLabels {
  if (!scale) return DEFAULT_METRIC_SCALE_LABELS;
  return [`${scale.low} ${scale.word}`, scale.word, `${scale.high} ${scale.word}`];
}

/** Resolve the user-facing label for an observation, e.g. 3 → "very bored". */
export function metricValueLabel(
  value: MetricValue,
  scale?: MetricScale | null,
): string {
  return metricScaleLabels(scale)[value - 1];
}

/**
 * Coerce untrusted input (an AI tool argument, a form field) into a scale, or
 * undefined if any part is missing or too long. Lowercases and trims. Returning
 * undefined rather than filling gaps is deliberate: a guessed adjective can read
 * wrong ("very rested"), and callers should fall back to `defaultMetricScale`
 * explicitly where that is acceptable.
 */
export function normalizeMetricScale(input: unknown): MetricScale | undefined {
  if (!input || typeof input !== "object") return undefined;
  const clean = (v: unknown) =>
    typeof v === "string" ? v.trim().replace(/\s+/g, " ").toLowerCase() : "";
  const candidate = {
    word: clean((input as Record<string, unknown>).word),
    low: clean((input as Record<string, unknown>).low),
    high: clean((input as Record<string, unknown>).high),
  };
  const parsed = metricScaleSchema.safeParse(candidate);
  return parsed.success ? parsed.data : undefined;
}

/**
 * Longest metric name that still fits the Home matrix's fixed label column
 * without truncation. Enforced at creation rather than truncated at render, so
 * the constraint is visible once instead of degrading every surface.
 */
export const METRIC_NAME_MAX_LENGTH = 24;

// ─── Metric State (computed cache, stored on the metric document) ─────────────

/**
 * Computed metrics for a specific time window (7, 30, or 90 days).
 * Analogous to BehaviorWindow, but over ordered 3-point observations.
 */
export const metricWindowSchema = z.object({
  windowSizeDays: z.union([z.literal(7), z.literal(30), z.literal(90)]),
  /**
   * How the window's observations were distributed across the three states.
   * A distribution rather than a mean: averaging ordinal states invents a
   * precision the data does not have ("2.4 energy" means nothing to a user).
   */
  distribution: z
    .object({
      low: z.number().int().min(0),
      okay: z.number().int().min(0),
      high: z.number().int().min(0),
    })
    .optional(),
  /** The most frequently observed state in the window, if any. */
  modal: metricValueSchema.optional(),
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
        value: metricValueSchema,
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
   * A pre-generated natural-language summary for the AI. State it as a
   * distribution over the three states, e.g. "Energy has been high on 4 of the
   * last 7 tracked days and low on 1, up from mostly-okay the week before."
   * Never as a mean — "avg 3.4/5" is not a thing a 3-point ordinal supports.
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
 * Metrics are repeated day-scoped state observations on an ordered 3-point
 * scale — "how I was", as opposed to behaviors' "what I did". One observation
 * per metric per day. Event-scoped measurements (e.g. urge intensity) belong to
 * the impulse/moment model, not here.
 */
export const metricSchema = z.object({
  id: z.string().optional(),
  /** Display name, e.g. "Mental clarity" */
  name: z.string().min(1).max(METRIC_NAME_MAX_LENGTH),
  /** Prompt shown when tracking, e.g. "How clear is your thinking?" */
  description: z.string().optional(),
  /**
   * How the three states are worded, e.g. { word: "rested", low: "somewhat",
   * high: "well" }. Optional only for metrics created before the word scale;
   * read it through `metricValueLabel` / `metricScaleLabels`.
   */
  scale: metricScaleSchema.optional(),
  /** If created from METRIC_REGISTRY, stores the registry id for dedup */
  metricRegistryId: z.string().optional(),
  /** Circumplex quadrant — present only on pre-seeded feeling metrics */
  quadrant: z.enum(["activated", "stressed", "calm", "low"]).optional(),
  /** Whether higher or lower values are desirable. Used to filter insights
   *  so we never present a harmful behavior as producing positive outcomes. */
  desiredDirection: z.enum(["higher", "lower"]).optional(),
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

/**
 * Resolve the desired direction for a metric, falling back to quadrant
 * heuristics or "higher" for metrics that predate the field.
 */
export function resolveDesiredDirection(
  metric: Pick<Metric, "desiredDirection" | "quadrant">,
): "higher" | "lower" {
  if (metric.desiredDirection) return metric.desiredDirection;
  if (metric.quadrant === "stressed" || metric.quadrant === "low")
    return "lower";
  return "higher";
}
