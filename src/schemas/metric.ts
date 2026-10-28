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
 * Most metrics are one-ended — they name a single state and measure how much
 * of it there is (Energy is "energetic", not Low/Okay/High). Adjectives are
 * chosen per word, because "very" does not fit everything ("well rested").
 *
 * A metric whose low end has a word of its own sets `lowWord`, and value 1 is
 * that word alone:
 *
 *   { word: "clear-headed", low: "somewhat", high: "very", lowWord: "foggy" }
 *   → 1 "foggy"   2 "clear-headed"   3 "very clear-headed"
 *
 * Without it, someone who felt foggy could only be recorded as "somewhat
 * clear-headed", a little of the state they did not have (SSB BXPAoy). Still
 * three ordered states, still higher = more of the named state; `low` stays
 * on the doc but is not shown while `lowWord` is set.
 *
 * All strings are stored lowercase; capitalize at render.
 */
export const metricScaleSchema = z.object({
  /** The state itself, e.g. "bored". The middle value, unmodified. */
  word: z.string().min(1).max(METRIC_SCALE_WORD_MAX_LENGTH),
  /** Prefix for value 1, e.g. "a little", "somewhat" */
  low: z.string().min(1).max(METRIC_SCALE_ADJECTIVE_MAX_LENGTH),
  /** Prefix for value 3, e.g. "very", "well" */
  high: z.string().min(1).max(METRIC_SCALE_ADJECTIVE_MAX_LENGTH),
  /**
   * The low state's own word, e.g. "foggy" for "clear-headed". When set, value
   * 1 reads as this word alone instead of `low` + `word`.
   */
  lowWord: z.string().min(1).max(METRIC_SCALE_WORD_MAX_LENGTH).optional(),
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
  return [
    scale.lowWord || `${scale.low} ${scale.word}`,
    scale.word,
    `${scale.high} ${scale.word}`,
  ];
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
  const lowWord = clean((input as Record<string, unknown>).lowWord);
  const candidate = {
    word: clean((input as Record<string, unknown>).word),
    low: clean((input as Record<string, unknown>).low),
    high: clean((input as Record<string, unknown>).high),
    ...(lowWord ? { lowWord } : {}),
  };
  const parsed = metricScaleSchema.safeParse(candidate);
  return parsed.success ? parsed.data : undefined;
}

// ─── The 5-point level scale ──────────────────────────────────────────────────

/**
 * A metric reading on the five-point scale every metric uses, centred on the
 * user's usual:
 *
 *   1 very low end   2 low end   3 normal   4 high end   5 very high end
 *
 *   Mental clarity: very foggy / foggy / normal / clear / very clear
 *   Energy:         drained / low / normal / energetic / very energetic
 *
 * "Normal" means the user's usual day, so a baseline settles what normal is and
 * a trial shows movement away from it. Higher still always means MORE of the
 * named metric, never better: high Anxiety is 5 ("very anxious") and only
 * `desiredDirection` says whether rising is welcome.
 *
 * Stored beside the 3-point `value`, not instead of it. Every field that held a
 * 3-point value keeps that meaning, so app builds and functions that predate
 * the level keep reading and writing correctly; see `metricLogLevel` for how a
 * reading's level is resolved.
 */
export const metricLevelSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);
export type MetricLevel = z.infer<typeof metricLevelSchema>;

export const METRIC_LEVELS: readonly MetricLevel[] = [1, 2, 3, 4, 5];

/** The middle level, the user's usual. Its label is always this word. */
export const METRIC_NORMAL_LEVEL: MetricLevel = 3;
export const METRIC_NORMAL_LABEL = "normal";

/** Longest level label ("very unproductive"); they render on one chip. */
export const METRIC_LEVEL_LABEL_MAX_LENGTH = 20;

const metricLevelLabelSchema = z
  .string()
  .min(1)
  .max(METRIC_LEVEL_LABEL_MAX_LENGTH);

/**
 * The five labels of a metric's levels, lowest first. The middle one is always
 * "normal"; the others are worded per metric so each reads the way a person
 * would say it ("foggy", "drained", "very energetic"). Lowercase; capitalize at
 * render.
 */
export const metricLevelLabelsSchema = z.tuple([
  metricLevelLabelSchema,
  metricLevelLabelSchema,
  z.literal(METRIC_NORMAL_LABEL),
  metricLevelLabelSchema,
  metricLevelLabelSchema,
]);
export type MetricLevelLabels = z.infer<typeof metricLevelLabelsSchema>;

/** Labels for a metric that has none of its own and no registry entry. */
export const GENERIC_METRIC_LEVEL_LABELS: MetricLevelLabels = [
  "very low",
  "low",
  "normal",
  "high",
  "very high",
];

/**
 * A 3-point value as a level: low → low, okay → normal, high → high. Nothing
 * becomes an extreme, because a 3-point reading never said "very".
 */
export function levelFromValue(value: MetricValue): MetricLevel {
  return (value + 1) as MetricLevel;
}

/**
 * A level as the 3-point value older readers understand: both low levels are
 * 1, normal is 2, both high levels are 3.
 */
export function valueFromLevel(level: MetricLevel): MetricValue {
  if (level <= 2) return 1;
  if (level === 3) return 2;
  return 3;
}

const isLevel = (v: unknown): v is MetricLevel =>
  v === 1 || v === 2 || v === 3 || v === 4 || v === 5;
const isValue = (v: unknown): v is MetricValue => v === 1 || v === 2 || v === 3;

/**
 * The level of a reading, or null while it waits for an answer.
 *
 * A stored `level` is trusted only while it agrees with `value`. An app build
 * that predates levels edits a reading by rewriting `data.value` alone, which
 * would leave a stale level behind; when they disagree the value is the newer
 * answer, and it maps to a level as `levelFromValue` does. A reading without a
 * level (every one written before the five-point scale) maps the same way.
 */
export function metricLogLevel(
  data: { value?: unknown; level?: unknown } | null | undefined,
): MetricLevel | null {
  if (!data) return null;
  const { value, level } = data;
  if (isLevel(level) && (value == null || (isValue(value) && valueFromLevel(level) === value))) {
    return level;
  }
  return isValue(value) ? levelFromValue(value) : null;
}

/** The fields a writer stores for a level: the level and its 3-point value. */
export function metricReadingFields(level: MetricLevel): {
  level: MetricLevel;
  value: MetricValue;
} {
  return { level, value: valueFromLevel(level) };
}

/** The label of one level, e.g. 2 → "foggy". */
export function metricLevelLabel(
  level: MetricLevel,
  labels?: MetricLevelLabels | null,
): string {
  return (labels ?? GENERIC_METRIC_LEVEL_LABELS)[level - 1];
}

/**
 * Coerce untrusted input (an AI tool argument, a coach form) into level
 * labels, or undefined if anything is missing, too long, repeated or "normal".
 * Accepts the four end words as an object `{ veryLow, low, high, veryHigh }`
 * or the five labels as an array. Lowercases and trims; the middle is always
 * written as "normal" whatever was passed.
 */
export function normalizeMetricLevelLabels(
  input: unknown,
): MetricLevelLabels | undefined {
  if (!input || typeof input !== "object") return undefined;
  const clean = (v: unknown) =>
    typeof v === "string" ? v.trim().replace(/\s+/g, " ").toLowerCase() : "";
  let ends: string[];
  if (Array.isArray(input)) {
    if (input.length !== 5) return undefined;
    ends = [input[0], input[1], input[3], input[4]].map(clean);
  } else {
    const o = input as Record<string, unknown>;
    ends = [o.veryLow, o.low, o.high, o.veryHigh].map(clean);
  }
  if (ends.some((e) => !e || e === METRIC_NORMAL_LABEL)) return undefined;
  if (new Set(ends).size !== 4) return undefined;
  const parsed = metricLevelLabelsSchema.safeParse([
    ends[0],
    ends[1],
    METRIC_NORMAL_LABEL,
    ends[2],
    ends[3],
  ]);
  return parsed.success ? parsed.data : undefined;
}

/**
 * Counts of readings at each level, lowest first. Index = level - 1. A
 * distribution rather than a mean, for the same reason as the 3-point one.
 */
export const metricLevelCountsSchema = z.tuple([
  z.number().int().min(0),
  z.number().int().min(0),
  z.number().int().min(0),
  z.number().int().min(0),
  z.number().int().min(0),
]);
export type MetricLevelCounts = z.infer<typeof metricLevelCountsSchema>;

/** Count readings by level. Nulls (unanswered) are skipped. */
export function countMetricLevels(
  levels: Array<MetricLevel | null | undefined>,
): MetricLevelCounts {
  const counts: MetricLevelCounts = [0, 0, 0, 0, 0];
  for (const l of levels) if (l) counts[l - 1]++;
  return counts;
}

/** The 3-point distribution a set of level counts collapses to. */
export function valueDistributionFromLevelCounts(counts: MetricLevelCounts): {
  low: number;
  okay: number;
  high: number;
} {
  return { low: counts[0] + counts[1], okay: counts[2], high: counts[3] + counts[4] };
}

/**
 * The level label nearest a mean of levels, for showing an average as words
 * ("normal", "clear") rather than as "3.4". Rounds half away from normal.
 */
export function nearestMetricLevel(mean: number): MetricLevel {
  const clamped = Math.min(5, Math.max(1, mean));
  const r = clamped >= 3 ? Math.floor(clamped + 0.5) : Math.ceil(clamped - 0.5);
  return r as MetricLevel;
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
  /** Readings at each of the five levels, lowest first (see metricLevelSchema). */
  levelCounts: metricLevelCountsSchema.optional(),
  /** The most frequently observed state in the window, if any. */
  modal: metricValueSchema.optional(),
  /** The most frequently observed level in the window, if any. */
  modalLevel: metricLevelSchema.optional(),
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
        /** The reading's level; absent on slices written before levels. */
        level: metricLevelSchema.optional(),
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
   * LEGACY 3-point wording, e.g. { word: "rested", low: "somewhat", high:
   * "well" }. Kept for app builds that predate the five-point `levels` and
   * read `value`; current readers use `levels`.
   */
  scale: metricScaleSchema.optional(),
  /**
   * The five level labels, e.g. ["very foggy", "foggy", "normal", "clear",
   * "very clear"]. What every current reader shows; read it through
   * `metricLevelLabelsFor`, which falls back to the registry for a metric that
   * predates levels. `scale` stays beside it for app builds that predate levels.
   */
  levels: metricLevelLabelsSchema.optional(),
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
