import { z } from "zod";
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
export declare const metricValueSchema: z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>;
export type MetricValue = z.infer<typeof metricValueSchema>;
/** Longest `word` / adjective a scale accepts — they render on a single chip. */
export declare const METRIC_SCALE_WORD_MAX_LENGTH = 20;
export declare const METRIC_SCALE_ADJECTIVE_MAX_LENGTH = 12;
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
export declare const metricScaleSchema: z.ZodObject<{
    /** The state itself, e.g. "bored". The middle value, unmodified. */
    word: z.ZodString;
    /** Prefix for value 1, e.g. "a little", "somewhat" */
    low: z.ZodString;
    /** Prefix for value 3, e.g. "very", "well" */
    high: z.ZodString;
}, "strip", z.ZodTypeAny, {
    low: string;
    high: string;
    word: string;
}, {
    low: string;
    high: string;
    word: string;
}>;
export type MetricScale = z.infer<typeof metricScaleSchema>;
/** The three rendered state labels, ordered low → high. Index = value - 1. */
export type MetricScaleLabels = [string, string, string];
/**
 * Generic labels for a metric with no `scale` — only metrics predating the
 * word scale, which the migration gives one. Never written to a document.
 */
export declare const DEFAULT_METRIC_SCALE_LABELS: MetricScaleLabels;
/** The adjectives most words take. Prefer choosing per word where it reads better. */
export declare const DEFAULT_METRIC_SCALE_ADJECTIVES: {
    readonly low: "a little";
    readonly high: "very";
};
/** A scale for `word` with the default adjectives. */
export declare function defaultMetricScale(word: string): MetricScale;
/** The three state labels for a scale, e.g. ["a little bored", "bored", "very bored"]. */
export declare function metricScaleLabels(scale?: MetricScale | null): MetricScaleLabels;
/** Resolve the user-facing label for an observation, e.g. 3 → "very bored". */
export declare function metricValueLabel(value: MetricValue, scale?: MetricScale | null): string;
/**
 * Coerce untrusted input (an AI tool argument, a form field) into a scale, or
 * undefined if any part is missing or too long. Lowercases and trims. Returning
 * undefined rather than filling gaps is deliberate: a guessed adjective can read
 * wrong ("very rested"), and callers should fall back to `defaultMetricScale`
 * explicitly where that is acceptable.
 */
export declare function normalizeMetricScale(input: unknown): MetricScale | undefined;
/**
 * Longest metric name that still fits the Home matrix's fixed label column
 * without truncation. Enforced at creation rather than truncated at render, so
 * the constraint is visible once instead of degrading every surface.
 */
export declare const METRIC_NAME_MAX_LENGTH = 24;
/**
 * Computed metrics for a specific time window (7, 30, or 90 days).
 * Analogous to BehaviorWindow, but over ordered 3-point observations.
 */
export declare const metricWindowSchema: z.ZodObject<{
    windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
    /**
     * How the window's observations were distributed across the three states.
     * A distribution rather than a mean: averaging ordinal states invents a
     * precision the data does not have ("2.4 energy" means nothing to a user).
     */
    distribution: z.ZodOptional<z.ZodObject<{
        low: z.ZodNumber;
        okay: z.ZodNumber;
        high: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        low: number;
        high: number;
        okay: number;
    }, {
        low: number;
        high: number;
        okay: number;
    }>>;
    /** The most frequently observed state in the window, if any. */
    modal: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
    /**
     * Direction of change over the window (IMPROVING = rising score,
     * DECLINING = falling score). Note: whether rising is "good" depends
     * on the metric's orientation.
     */
    trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
    stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
    sampleCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    windowSizeDays: 7 | 30 | 90;
    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
    stability: "HIGH" | "MEDIUM" | "LOW";
    sampleCount: number;
    distribution?: {
        low: number;
        high: number;
        okay: number;
    } | undefined;
    modal?: 1 | 2 | 3 | undefined;
}, {
    windowSizeDays: 7 | 30 | 90;
    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
    stability: "HIGH" | "MEDIUM" | "LOW";
    sampleCount: number;
    distribution?: {
        low: number;
        high: number;
        okay: number;
    } | undefined;
    modal?: 1 | 2 | 3 | undefined;
}>;
export type MetricWindow = z.infer<typeof metricWindowSchema>;
/**
 * The most-recent 5 data points for a metric, with derived signals.
 * Analogous to BehaviorRecentSlice.
 */
export declare const metricRecentSliceSchema: z.ZodObject<{
    /** Most-recent entries, newest first. offset=0 is today, offset=1 is yesterday, … */
    days: z.ZodArray<z.ZodObject<{
        offset: z.ZodNumber;
        value: z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>;
    }, "strip", z.ZodTypeAny, {
        value: 1 | 2 | 3;
        offset: number;
    }, {
        value: 1 | 2 | 3;
        offset: number;
    }>, "many">;
    /** Direction of change across this slice */
    direction: z.ZodEnum<["IMPROVING", "DECLINING", "FLAT", "MIXED"]>;
    /** Magnitude of change relative to the full scale */
    contrast: z.ZodEnum<["LOW", "MODERATE", "STRONG"]>;
    /** How noteworthy this pattern is */
    salience: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
}, "strip", z.ZodTypeAny, {
    days: {
        value: 1 | 2 | 3;
        offset: number;
    }[];
    direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
    contrast: "LOW" | "MODERATE" | "STRONG";
    salience: "HIGH" | "MEDIUM" | "LOW";
}, {
    days: {
        value: 1 | 2 | 3;
        offset: number;
    }[];
    direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
    contrast: "LOW" | "MODERATE" | "STRONG";
    salience: "HIGH" | "MEDIUM" | "LOW";
}>;
export type MetricRecentSlice = z.infer<typeof metricRecentSliceSchema>;
/**
 * Pre-computed state for a single metric.
 * Stored as `state` on the metric document at users/{userId}/metrics/{metricId}.
 * Updated by a cloud function whenever a metricLog is written.
 */
export declare const metricStateSchema: z.ZodObject<{
    metricId: z.ZodString;
    windows: z.ZodObject<{
        short: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            /**
             * How the window's observations were distributed across the three states.
             * A distribution rather than a mean: averaging ordinal states invents a
             * precision the data does not have ("2.4 energy" means nothing to a user).
             */
            distribution: z.ZodOptional<z.ZodObject<{
                low: z.ZodNumber;
                okay: z.ZodNumber;
                high: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                low: number;
                high: number;
                okay: number;
            }, {
                low: number;
                high: number;
                okay: number;
            }>>;
            /** The most frequently observed state in the window, if any. */
            modal: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
            /**
             * Direction of change over the window (IMPROVING = rising score,
             * DECLINING = falling score). Note: whether rising is "good" depends
             * on the metric's orientation.
             */
            trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
            stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        }>;
        medium: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            /**
             * How the window's observations were distributed across the three states.
             * A distribution rather than a mean: averaging ordinal states invents a
             * precision the data does not have ("2.4 energy" means nothing to a user).
             */
            distribution: z.ZodOptional<z.ZodObject<{
                low: z.ZodNumber;
                okay: z.ZodNumber;
                high: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                low: number;
                high: number;
                okay: number;
            }, {
                low: number;
                high: number;
                okay: number;
            }>>;
            /** The most frequently observed state in the window, if any. */
            modal: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
            /**
             * Direction of change over the window (IMPROVING = rising score,
             * DECLINING = falling score). Note: whether rising is "good" depends
             * on the metric's orientation.
             */
            trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
            stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        }>;
        long: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            /**
             * How the window's observations were distributed across the three states.
             * A distribution rather than a mean: averaging ordinal states invents a
             * precision the data does not have ("2.4 energy" means nothing to a user).
             */
            distribution: z.ZodOptional<z.ZodObject<{
                low: z.ZodNumber;
                okay: z.ZodNumber;
                high: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                low: number;
                high: number;
                okay: number;
            }, {
                low: number;
                high: number;
                okay: number;
            }>>;
            /** The most frequently observed state in the window, if any. */
            modal: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
            /**
             * Direction of change over the window (IMPROVING = rising score,
             * DECLINING = falling score). Note: whether rising is "good" depends
             * on the metric's orientation.
             */
            trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
            stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        };
    }, {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        };
    }>;
    recentSlice: z.ZodOptional<z.ZodObject<{
        /** Most-recent entries, newest first. offset=0 is today, offset=1 is yesterday, … */
        days: z.ZodArray<z.ZodObject<{
            offset: z.ZodNumber;
            value: z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>;
        }, "strip", z.ZodTypeAny, {
            value: 1 | 2 | 3;
            offset: number;
        }, {
            value: 1 | 2 | 3;
            offset: number;
        }>, "many">;
        /** Direction of change across this slice */
        direction: z.ZodEnum<["IMPROVING", "DECLINING", "FLAT", "MIXED"]>;
        /** Magnitude of change relative to the full scale */
        contrast: z.ZodEnum<["LOW", "MODERATE", "STRONG"]>;
        /** How noteworthy this pattern is */
        salience: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
    }, "strip", z.ZodTypeAny, {
        days: {
            value: 1 | 2 | 3;
            offset: number;
        }[];
        direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
        contrast: "LOW" | "MODERATE" | "STRONG";
        salience: "HIGH" | "MEDIUM" | "LOW";
    }, {
        days: {
            value: 1 | 2 | 3;
            offset: number;
        }[];
        direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
        contrast: "LOW" | "MODERATE" | "STRONG";
        salience: "HIGH" | "MEDIUM" | "LOW";
    }>>;
    /**
     * A pre-generated natural-language summary for the AI. State it as a
     * distribution over the three states, e.g. "Energy has been high on 4 of the
     * last 7 tracked days and low on 1, up from mostly-okay the week before."
     * Never as a mean — "avg 3.4/5" is not a thing a 3-point ordinal supports.
     */
    textSummary: z.ZodString;
    meta: z.ZodObject<{
        lastUpdatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
        dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
    }, "strip", z.ZodTypeAny, {
        lastUpdatedAt: import("../types").Timestamp;
        dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
    }, {
        lastUpdatedAt: import("../types").Timestamp;
        dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
    }>;
}, "strip", z.ZodTypeAny, {
    windows: {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        };
    };
    meta: {
        lastUpdatedAt: import("../types").Timestamp;
        dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
    };
    metricId: string;
    textSummary: string;
    recentSlice?: {
        days: {
            value: 1 | 2 | 3;
            offset: number;
        }[];
        direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
        contrast: "LOW" | "MODERATE" | "STRONG";
        salience: "HIGH" | "MEDIUM" | "LOW";
    } | undefined;
}, {
    windows: {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            distribution?: {
                low: number;
                high: number;
                okay: number;
            } | undefined;
            modal?: 1 | 2 | 3 | undefined;
        };
    };
    meta: {
        lastUpdatedAt: import("../types").Timestamp;
        dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
    };
    metricId: string;
    textSummary: string;
    recentSlice?: {
        days: {
            value: 1 | 2 | 3;
            offset: number;
        }[];
        direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
        contrast: "LOW" | "MODERATE" | "STRONG";
        salience: "HIGH" | "MEDIUM" | "LOW";
    } | undefined;
}>;
export type MetricState = z.infer<typeof metricStateSchema>;
/**
 * A user-level metric document.
 * Path: users/{userId}/metrics/{metricId}
 *
 * Metrics are repeated day-scoped state observations on an ordered 3-point
 * scale — "how I was", as opposed to behaviors' "what I did". One observation
 * per metric per day. Event-scoped measurements (e.g. urge intensity) belong to
 * the impulse/moment model, not here.
 */
export declare const metricSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    /** Display name, e.g. "Mental clarity" */
    name: z.ZodString;
    /** Prompt shown when tracking, e.g. "How clear is your thinking?" */
    description: z.ZodOptional<z.ZodString>;
    /**
     * How the three states are worded, e.g. { word: "rested", low: "somewhat",
     * high: "well" }. Optional only for metrics created before the word scale;
     * read it through `metricValueLabel` / `metricScaleLabels`.
     */
    scale: z.ZodOptional<z.ZodObject<{
        /** The state itself, e.g. "bored". The middle value, unmodified. */
        word: z.ZodString;
        /** Prefix for value 1, e.g. "a little", "somewhat" */
        low: z.ZodString;
        /** Prefix for value 3, e.g. "very", "well" */
        high: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        low: string;
        high: string;
        word: string;
    }, {
        low: string;
        high: string;
        word: string;
    }>>;
    /** If created from METRIC_REGISTRY, stores the registry id for dedup */
    metricRegistryId: z.ZodOptional<z.ZodString>;
    /** Circumplex quadrant — present only on pre-seeded feeling metrics */
    quadrant: z.ZodOptional<z.ZodEnum<["activated", "stressed", "calm", "low"]>>;
    /** Whether higher or lower values are desirable. Used to filter insights
     *  so we never present a harmful behavior as producing positive outcomes. */
    desiredDirection: z.ZodOptional<z.ZodEnum<["higher", "lower"]>>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Set when the user initiates deletion; the metric shows as "deleting" until removed */
    startedDeletingAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    /** Pre-computed trend state. Written by cloud function on metricLog writes. */
    state: z.ZodOptional<z.ZodObject<{
        metricId: z.ZodString;
        windows: z.ZodObject<{
            short: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                /**
                 * How the window's observations were distributed across the three states.
                 * A distribution rather than a mean: averaging ordinal states invents a
                 * precision the data does not have ("2.4 energy" means nothing to a user).
                 */
                distribution: z.ZodOptional<z.ZodObject<{
                    low: z.ZodNumber;
                    okay: z.ZodNumber;
                    high: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    low: number;
                    high: number;
                    okay: number;
                }, {
                    low: number;
                    high: number;
                    okay: number;
                }>>;
                /** The most frequently observed state in the window, if any. */
                modal: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
                /**
                 * Direction of change over the window (IMPROVING = rising score,
                 * DECLINING = falling score). Note: whether rising is "good" depends
                 * on the metric's orientation.
                 */
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                sampleCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            }>;
            medium: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                /**
                 * How the window's observations were distributed across the three states.
                 * A distribution rather than a mean: averaging ordinal states invents a
                 * precision the data does not have ("2.4 energy" means nothing to a user).
                 */
                distribution: z.ZodOptional<z.ZodObject<{
                    low: z.ZodNumber;
                    okay: z.ZodNumber;
                    high: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    low: number;
                    high: number;
                    okay: number;
                }, {
                    low: number;
                    high: number;
                    okay: number;
                }>>;
                /** The most frequently observed state in the window, if any. */
                modal: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
                /**
                 * Direction of change over the window (IMPROVING = rising score,
                 * DECLINING = falling score). Note: whether rising is "good" depends
                 * on the metric's orientation.
                 */
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                sampleCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            }>;
            long: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                /**
                 * How the window's observations were distributed across the three states.
                 * A distribution rather than a mean: averaging ordinal states invents a
                 * precision the data does not have ("2.4 energy" means nothing to a user).
                 */
                distribution: z.ZodOptional<z.ZodObject<{
                    low: z.ZodNumber;
                    okay: z.ZodNumber;
                    high: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    low: number;
                    high: number;
                    okay: number;
                }, {
                    low: number;
                    high: number;
                    okay: number;
                }>>;
                /** The most frequently observed state in the window, if any. */
                modal: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
                /**
                 * Direction of change over the window (IMPROVING = rising score,
                 * DECLINING = falling score). Note: whether rising is "good" depends
                 * on the metric's orientation.
                 */
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                sampleCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
        }, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
        }>;
        recentSlice: z.ZodOptional<z.ZodObject<{
            /** Most-recent entries, newest first. offset=0 is today, offset=1 is yesterday, … */
            days: z.ZodArray<z.ZodObject<{
                offset: z.ZodNumber;
                value: z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>;
            }, "strip", z.ZodTypeAny, {
                value: 1 | 2 | 3;
                offset: number;
            }, {
                value: 1 | 2 | 3;
                offset: number;
            }>, "many">;
            /** Direction of change across this slice */
            direction: z.ZodEnum<["IMPROVING", "DECLINING", "FLAT", "MIXED"]>;
            /** Magnitude of change relative to the full scale */
            contrast: z.ZodEnum<["LOW", "MODERATE", "STRONG"]>;
            /** How noteworthy this pattern is */
            salience: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
        }, "strip", z.ZodTypeAny, {
            days: {
                value: 1 | 2 | 3;
                offset: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        }, {
            days: {
                value: 1 | 2 | 3;
                offset: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        }>>;
        /**
         * A pre-generated natural-language summary for the AI. State it as a
         * distribution over the three states, e.g. "Energy has been high on 4 of the
         * last 7 tracked days and low on 1, up from mostly-okay the week before."
         * Never as a mean — "avg 3.4/5" is not a thing a 3-point ordinal supports.
         */
        textSummary: z.ZodString;
        meta: z.ZodObject<{
            lastUpdatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
            dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
        }, "strip", z.ZodTypeAny, {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        }, {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        }>;
    }, "strip", z.ZodTypeAny, {
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
        metricId: string;
        textSummary: string;
        recentSlice?: {
            days: {
                value: 1 | 2 | 3;
                offset: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        } | undefined;
    }, {
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
        metricId: string;
        textSummary: string;
        recentSlice?: {
            days: {
                value: 1 | 2 | 3;
                offset: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    scale?: {
        low: string;
        high: string;
        word: string;
    } | undefined;
    description?: string | undefined;
    state?: {
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
        metricId: string;
        textSummary: string;
        recentSlice?: {
            days: {
                value: 1 | 2 | 3;
                offset: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        } | undefined;
    } | undefined;
    metricRegistryId?: string | undefined;
    quadrant?: "low" | "activated" | "stressed" | "calm" | undefined;
    desiredDirection?: "higher" | "lower" | undefined;
    startedDeletingAt?: import("../types").Timestamp | undefined;
}, {
    name: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    scale?: {
        low: string;
        high: string;
        word: string;
    } | undefined;
    description?: string | undefined;
    state?: {
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                distribution?: {
                    low: number;
                    high: number;
                    okay: number;
                } | undefined;
                modal?: 1 | 2 | 3 | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
        metricId: string;
        textSummary: string;
        recentSlice?: {
            days: {
                value: 1 | 2 | 3;
                offset: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        } | undefined;
    } | undefined;
    metricRegistryId?: string | undefined;
    quadrant?: "low" | "activated" | "stressed" | "calm" | undefined;
    desiredDirection?: "higher" | "lower" | undefined;
    startedDeletingAt?: import("../types").Timestamp | undefined;
}>;
export type Metric = z.infer<typeof metricSchema>;
export declare const isMetric: (value: unknown) => value is Metric;
/**
 * Resolve the desired direction for a metric, falling back to quadrant
 * heuristics or "higher" for metrics that predate the field.
 */
export declare function resolveDesiredDirection(metric: Pick<Metric, "desiredDirection" | "quadrant">): "higher" | "lower";
