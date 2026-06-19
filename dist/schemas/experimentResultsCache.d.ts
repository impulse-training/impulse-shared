import { z } from "zod";
/**
 * Overall behavior summary from BigQuery (impulse session counts).
 */
declare const behaviorSummarySchema: z.ZodObject<{
    /** Total impulse sessions */
    totalSessions: z.ZodNumber;
    /** Sessions where user acted on urge */
    actedCount: z.ZodNumber;
    /** Sessions where user resisted */
    resistedCount: z.ZodNumber;
    /** Average sessions per day */
    dailyAverage: z.ZodNumber;
    /** Resist rate (0-1) */
    resistRate: z.ZodOptional<z.ZodNumber>;
    /** Number of days with session data */
    daysWithData: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    totalSessions: number;
    actedCount: number;
    resistedCount: number;
    dailyAverage: number;
    daysWithData: number;
    resistRate?: number | undefined;
}, {
    totalSessions: number;
    actedCount: number;
    resistedCount: number;
    dailyAverage: number;
    daysWithData: number;
    resistRate?: number | undefined;
}>;
/**
 * Overall metric summary (average of 1-5 scale ratings).
 */
declare const metricSummarySchema: z.ZodObject<{
    /** Average rating across all measurements */
    average: z.ZodNumber;
    /** Number of individual ratings recorded */
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    count: number;
    average: number;
}, {
    count: number;
    average: number;
}>;
/**
 * A single day's data point for time series charts.
 */
declare const dailyDataPointSchema: z.ZodObject<{
    date: z.ZodString;
    value: z.ZodNumber;
    rollingAvg7d: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    value: number;
    date: string;
    rollingAvg7d?: number | undefined;
}, {
    value: number;
    date: string;
    rollingAvg7d?: number | undefined;
}>;
/**
 * Confidence level based on data quantity.
 * - low: 0-6 days (basic averages only)
 * - moderate: 7-13 days (+ trends)
 * - high: 14+ days (+ correlations)
 */
declare const confidenceLevelEnum: z.ZodEnum<["low", "moderate", "high"]>;
/**
 * Map a number of days-with-data to a confidence level. Shared between the
 * backend (computing experiment + per-metric confidence) and the app (deriving
 * confidence for discovered insights from their overlap days) so the thresholds
 * never drift apart.
 */
export declare function confidenceLevelForDays(daysWithData: number): "low" | "moderate" | "high";
/** Lower of two confidence levels (the limiting factor). */
export declare function minConfidence(a: "low" | "moderate" | "high", b: "low" | "moderate" | "high"): "low" | "moderate" | "high";
/** Highest confidence in a list, or "low" if empty. */
export declare function maxConfidence(levels: Array<"low" | "moderate" | "high">): "low" | "moderate" | "high";
/**
 * Confidence in an experiment metric, based on before/after evidence rather than
 * raw days-with-data. An experiment asks "does the metric move when the behavior
 * changes, and does it stick?" — so the meaningful signal is whether we have a
 * baseline reading and how many post-behavior-change (milestone-anchored)
 * readings confirm a direction.
 *
 * - low  ("Building")      — baseline only / no comparison possible yet
 * - moderate ("Some signal") — baseline + ≥1 reading after a milestone
 * - high ("Strong signal") — the change held across a higher rung (≥2 readings)
 *
 * Milestone check-ins are sparse by design (we only ask when the behavior
 * actually changes), so day-counting would read "low" forever. This keeps
 * confidence honest to the experiment's logic instead.
 */
export declare function metricConfidenceFromReadings(input: {
    hasBaseline: boolean;
    postMilestoneReadings: number;
}): "low" | "moderate" | "high";
/**
 * Overall metric data for the experiment.
 */
declare const metricResultSchema: z.ZodObject<{
    metricId: z.ZodString;
    metricName: z.ZodString;
    minLabel: z.ZodOptional<z.ZodString>;
    maxLabel: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodObject<{
        /** Average rating across all measurements */
        average: z.ZodNumber;
        /** Number of individual ratings recorded */
        count: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        count: number;
        average: number;
    }, {
        count: number;
        average: number;
    }>>;
    /** Daily time series for charts */
    dailySeries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        value: z.ZodNumber;
        rollingAvg7d: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        date: string;
        rollingAvg7d?: number | undefined;
    }, {
        value: number;
        date: string;
        rollingAvg7d?: number | undefined;
    }>, "many">>;
    /**
     * Confidence in inferences about THIS metric. Derived from before/after
     * evidence (see metricConfidenceFromReadings): whether a baseline exists and
     * how many milestone-anchored readings confirm a direction. Optional for
     * back-compat with caches written before per-metric confidence existed.
     */
    confidence: z.ZodOptional<z.ZodEnum<["low", "moderate", "high"]>>;
    /**
     * Whether a baseline reading (before the first behavior milestone) exists.
     * Drives the before/after confidence model and the results-screen framing.
     */
    hasBaseline: z.ZodOptional<z.ZodBoolean>;
    /**
     * Number of distinct milestone-anchored readings taken after the behavior
     * changed. 0 = baseline only, 1 = one before/after comparison, ≥2 = held
     * across a higher rung.
     */
    postMilestoneReadings: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    metricId: string;
    metricName: string;
    confidence?: "low" | "high" | "moderate" | undefined;
    minLabel?: string | undefined;
    maxLabel?: string | undefined;
    summary?: {
        count: number;
        average: number;
    } | undefined;
    hasBaseline?: boolean | undefined;
    postMilestoneReadings?: number | undefined;
    dailySeries?: {
        value: number;
        date: string;
        rollingAvg7d?: number | undefined;
    }[] | undefined;
}, {
    metricId: string;
    metricName: string;
    confidence?: "low" | "high" | "moderate" | undefined;
    minLabel?: string | undefined;
    maxLabel?: string | undefined;
    summary?: {
        count: number;
        average: number;
    } | undefined;
    hasBaseline?: boolean | undefined;
    postMilestoneReadings?: number | undefined;
    dailySeries?: {
        value: number;
        date: string;
        rollingAvg7d?: number | undefined;
    }[] | undefined;
}>;
/**
 * Overall behavior data for the experiment.
 */
declare const behaviorResultSchema: z.ZodObject<{
    behaviorId: z.ZodString;
    behaviorName: z.ZodString;
    trackingType: z.ZodOptional<z.ZodString>;
    trackingUnit: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodObject<{
        /** Total impulse sessions */
        totalSessions: z.ZodNumber;
        /** Sessions where user acted on urge */
        actedCount: z.ZodNumber;
        /** Sessions where user resisted */
        resistedCount: z.ZodNumber;
        /** Average sessions per day */
        dailyAverage: z.ZodNumber;
        /** Resist rate (0-1) */
        resistRate: z.ZodOptional<z.ZodNumber>;
        /** Number of days with session data */
        daysWithData: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        totalSessions: number;
        actedCount: number;
        resistedCount: number;
        dailyAverage: number;
        daysWithData: number;
        resistRate?: number | undefined;
    }, {
        totalSessions: number;
        actedCount: number;
        resistedCount: number;
        dailyAverage: number;
        daysWithData: number;
        resistRate?: number | undefined;
    }>>;
    /** Daily time series for charts */
    dailySeries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        value: z.ZodNumber;
        rollingAvg7d: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        date: string;
        rollingAvg7d?: number | undefined;
    }, {
        value: number;
        date: string;
        rollingAvg7d?: number | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    behaviorId: string;
    behaviorName: string;
    trackingType?: string | undefined;
    trackingUnit?: string | undefined;
    summary?: {
        totalSessions: number;
        actedCount: number;
        resistedCount: number;
        dailyAverage: number;
        daysWithData: number;
        resistRate?: number | undefined;
    } | undefined;
    dailySeries?: {
        value: number;
        date: string;
        rollingAvg7d?: number | undefined;
    }[] | undefined;
}, {
    behaviorId: string;
    behaviorName: string;
    trackingType?: string | undefined;
    trackingUnit?: string | undefined;
    summary?: {
        totalSessions: number;
        actedCount: number;
        resistedCount: number;
        dailyAverage: number;
        daysWithData: number;
        resistRate?: number | undefined;
    } | undefined;
    dailySeries?: {
        value: number;
        date: string;
        rollingAvg7d?: number | undefined;
    }[] | undefined;
}>;
/**
 * Lagged-effect insight: how yesterday's behavior relates to today's metric.
 */
declare const laggedInsightSchema: z.ZodObject<{
    behaviorId: z.ZodString;
    metricId: z.ZodString;
    metricName: z.ZodString;
    /** Correlation between previous-day behavior sessions and current-day metric */
    correlation: z.ZodNumber;
    /** Number of data points used */
    dataPoints: z.ZodNumber;
    /** Human-readable summary */
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    behaviorId: string;
    metricId: string;
    metricName: string;
    correlation: number;
    dataPoints: number;
    description?: string | undefined;
}, {
    behaviorId: string;
    metricId: string;
    metricName: string;
    correlation: number;
    dataPoints: number;
    description?: string | undefined;
}>;
/**
 * A discovered behavior × metric correlation from mart_behavior_metric_insights.
 * Surfaced regardless of whether the metric was selected upfront for the experiment.
 */
declare const discoveredInsightSchema: z.ZodObject<{
    behaviorId: z.ZodString;
    metricId: z.ZodString;
    metricName: z.ZodString;
    /** Non-null for feeling-type metrics (activated/stressed/calm/low) */
    quadrant: z.ZodNullable<z.ZodEnum<["activated", "stressed", "calm", "low"]>>;
    /** Strongest correlation (same-day or lagged) */
    rBest: z.ZodNumber;
    /** Which window was stronger */
    rBestLag: z.ZodEnum<["same_day", "lagged"]>;
    /** Direction of the correlation */
    direction: z.ZodEnum<["positive", "negative"]>;
    /** Magnitude bucket */
    strength: z.ZodEnum<["strong", "moderate", "weak"]>;
    /** Days of overlap used for the best correlation */
    overlapDaysBest: z.ZodNumber;
    /** Grand average of the metric across overlap days */
    metricGrandAvg: z.ZodNumber;
    /** Grand average of behavior sessions across overlap days */
    behaviorGrandAvg: z.ZodNumber;
    /** Daily time series — populated when data is available, enabling the same
     *  chart treatment as intentionally-tracked experiment metrics. */
    dailySeries: z.ZodOptional<z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        value: z.ZodNumber;
        rollingAvg7d: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        value: number;
        date: string;
        rollingAvg7d?: number | undefined;
    }, {
        value: number;
        date: string;
        rollingAvg7d?: number | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    behaviorId: string;
    direction: "positive" | "negative";
    metricId: string;
    metricName: string;
    quadrant: "low" | "activated" | "stressed" | "calm" | null;
    rBest: number;
    rBestLag: "same_day" | "lagged";
    strength: "moderate" | "strong" | "weak";
    overlapDaysBest: number;
    metricGrandAvg: number;
    behaviorGrandAvg: number;
    dailySeries?: {
        value: number;
        date: string;
        rollingAvg7d?: number | undefined;
    }[] | undefined;
}, {
    behaviorId: string;
    direction: "positive" | "negative";
    metricId: string;
    metricName: string;
    quadrant: "low" | "activated" | "stressed" | "calm" | null;
    rBest: number;
    rBestLag: "same_day" | "lagged";
    strength: "moderate" | "strong" | "weak";
    overlapDaysBest: number;
    metricGrandAvg: number;
    behaviorGrandAvg: number;
    dailySeries?: {
        value: number;
        date: string;
        rollingAvg7d?: number | undefined;
    }[] | undefined;
}>;
/**
 * Cached experiment results.
 * Document: users/{userId}/experiments/{experimentId}/cache/experimentResults
 *
 * The frontend subscribes to this document for instant rendering and bumps
 * `requestedAt` on mount. A backend trigger compares `requestedAt` vs
 * `fetchedAt` and recomputes from BigQuery/dbt data when stale.
 */
export declare const experimentResultsCacheSchema: z.ZodObject<{
    experimentName: z.ZodString;
    experimentQuestion: z.ZodString;
    /** Total days with data */
    totalDaysWithData: z.ZodNumber;
    /** Confidence level based on data quantity */
    confidence: z.ZodEnum<["low", "moderate", "high"]>;
    /** Per-behavior results */
    behaviorResults: z.ZodArray<z.ZodObject<{
        behaviorId: z.ZodString;
        behaviorName: z.ZodString;
        trackingType: z.ZodOptional<z.ZodString>;
        trackingUnit: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodObject<{
            /** Total impulse sessions */
            totalSessions: z.ZodNumber;
            /** Sessions where user acted on urge */
            actedCount: z.ZodNumber;
            /** Sessions where user resisted */
            resistedCount: z.ZodNumber;
            /** Average sessions per day */
            dailyAverage: z.ZodNumber;
            /** Resist rate (0-1) */
            resistRate: z.ZodOptional<z.ZodNumber>;
            /** Number of days with session data */
            daysWithData: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            totalSessions: number;
            actedCount: number;
            resistedCount: number;
            dailyAverage: number;
            daysWithData: number;
            resistRate?: number | undefined;
        }, {
            totalSessions: number;
            actedCount: number;
            resistedCount: number;
            dailyAverage: number;
            daysWithData: number;
            resistRate?: number | undefined;
        }>>;
        /** Daily time series for charts */
        dailySeries: z.ZodOptional<z.ZodArray<z.ZodObject<{
            date: z.ZodString;
            value: z.ZodNumber;
            rollingAvg7d: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }, {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        behaviorId: string;
        behaviorName: string;
        trackingType?: string | undefined;
        trackingUnit?: string | undefined;
        summary?: {
            totalSessions: number;
            actedCount: number;
            resistedCount: number;
            dailyAverage: number;
            daysWithData: number;
            resistRate?: number | undefined;
        } | undefined;
        dailySeries?: {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }[] | undefined;
    }, {
        behaviorId: string;
        behaviorName: string;
        trackingType?: string | undefined;
        trackingUnit?: string | undefined;
        summary?: {
            totalSessions: number;
            actedCount: number;
            resistedCount: number;
            dailyAverage: number;
            daysWithData: number;
            resistRate?: number | undefined;
        } | undefined;
        dailySeries?: {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }[] | undefined;
    }>, "many">;
    /** Metric results */
    metricResults: z.ZodArray<z.ZodObject<{
        metricId: z.ZodString;
        metricName: z.ZodString;
        minLabel: z.ZodOptional<z.ZodString>;
        maxLabel: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodObject<{
            /** Average rating across all measurements */
            average: z.ZodNumber;
            /** Number of individual ratings recorded */
            count: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            count: number;
            average: number;
        }, {
            count: number;
            average: number;
        }>>;
        /** Daily time series for charts */
        dailySeries: z.ZodOptional<z.ZodArray<z.ZodObject<{
            date: z.ZodString;
            value: z.ZodNumber;
            rollingAvg7d: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }, {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }>, "many">>;
        /**
         * Confidence in inferences about THIS metric. Derived from before/after
         * evidence (see metricConfidenceFromReadings): whether a baseline exists and
         * how many milestone-anchored readings confirm a direction. Optional for
         * back-compat with caches written before per-metric confidence existed.
         */
        confidence: z.ZodOptional<z.ZodEnum<["low", "moderate", "high"]>>;
        /**
         * Whether a baseline reading (before the first behavior milestone) exists.
         * Drives the before/after confidence model and the results-screen framing.
         */
        hasBaseline: z.ZodOptional<z.ZodBoolean>;
        /**
         * Number of distinct milestone-anchored readings taken after the behavior
         * changed. 0 = baseline only, 1 = one before/after comparison, ≥2 = held
         * across a higher rung.
         */
        postMilestoneReadings: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        metricId: string;
        metricName: string;
        confidence?: "low" | "high" | "moderate" | undefined;
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
        summary?: {
            count: number;
            average: number;
        } | undefined;
        hasBaseline?: boolean | undefined;
        postMilestoneReadings?: number | undefined;
        dailySeries?: {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }[] | undefined;
    }, {
        metricId: string;
        metricName: string;
        confidence?: "low" | "high" | "moderate" | undefined;
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
        summary?: {
            count: number;
            average: number;
        } | undefined;
        hasBaseline?: boolean | undefined;
        postMilestoneReadings?: number | undefined;
        dailySeries?: {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }[] | undefined;
    }>, "many">;
    /** Lagged-effect insights (yesterday's behavior -> today's metric). Only populated at high confidence (14+ days). */
    laggedInsights: z.ZodOptional<z.ZodArray<z.ZodObject<{
        behaviorId: z.ZodString;
        metricId: z.ZodString;
        metricName: z.ZodString;
        /** Correlation between previous-day behavior sessions and current-day metric */
        correlation: z.ZodNumber;
        /** Number of data points used */
        dataPoints: z.ZodNumber;
        /** Human-readable summary */
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        behaviorId: string;
        metricId: string;
        metricName: string;
        correlation: number;
        dataPoints: number;
        description?: string | undefined;
    }, {
        behaviorId: string;
        metricId: string;
        metricName: string;
        correlation: number;
        dataPoints: number;
        description?: string | undefined;
    }>, "many">>;
    /** Pre-computed behavior × metric correlations from mart_behavior_metric_insights.
     *  Surfaced for any metric with sufficient overlap (≥7 days, |r| ≥ 0.3),
     *  regardless of which metrics were pre-selected for the experiment. */
    discoveredInsights: z.ZodOptional<z.ZodArray<z.ZodObject<{
        behaviorId: z.ZodString;
        metricId: z.ZodString;
        metricName: z.ZodString;
        /** Non-null for feeling-type metrics (activated/stressed/calm/low) */
        quadrant: z.ZodNullable<z.ZodEnum<["activated", "stressed", "calm", "low"]>>;
        /** Strongest correlation (same-day or lagged) */
        rBest: z.ZodNumber;
        /** Which window was stronger */
        rBestLag: z.ZodEnum<["same_day", "lagged"]>;
        /** Direction of the correlation */
        direction: z.ZodEnum<["positive", "negative"]>;
        /** Magnitude bucket */
        strength: z.ZodEnum<["strong", "moderate", "weak"]>;
        /** Days of overlap used for the best correlation */
        overlapDaysBest: z.ZodNumber;
        /** Grand average of the metric across overlap days */
        metricGrandAvg: z.ZodNumber;
        /** Grand average of behavior sessions across overlap days */
        behaviorGrandAvg: z.ZodNumber;
        /** Daily time series — populated when data is available, enabling the same
         *  chart treatment as intentionally-tracked experiment metrics. */
        dailySeries: z.ZodOptional<z.ZodArray<z.ZodObject<{
            date: z.ZodString;
            value: z.ZodNumber;
            rollingAvg7d: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }, {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        behaviorId: string;
        direction: "positive" | "negative";
        metricId: string;
        metricName: string;
        quadrant: "low" | "activated" | "stressed" | "calm" | null;
        rBest: number;
        rBestLag: "same_day" | "lagged";
        strength: "moderate" | "strong" | "weak";
        overlapDaysBest: number;
        metricGrandAvg: number;
        behaviorGrandAvg: number;
        dailySeries?: {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }[] | undefined;
    }, {
        behaviorId: string;
        direction: "positive" | "negative";
        metricId: string;
        metricName: string;
        quadrant: "low" | "activated" | "stressed" | "calm" | null;
        rBest: number;
        rBestLag: "same_day" | "lagged";
        strength: "moderate" | "strong" | "weak";
        overlapDaysBest: number;
        metricGrandAvg: number;
        behaviorGrandAvg: number;
        dailySeries?: {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }[] | undefined;
    }>, "many">>;
    /** Set by the frontend each time the screen is viewed */
    requestedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    /** Set by the backend after a successful computation */
    fetchedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    requestedAt: import("../types").Timestamp;
    confidence: "low" | "high" | "moderate";
    experimentQuestion: string;
    experimentName: string;
    totalDaysWithData: number;
    behaviorResults: {
        behaviorId: string;
        behaviorName: string;
        trackingType?: string | undefined;
        trackingUnit?: string | undefined;
        summary?: {
            totalSessions: number;
            actedCount: number;
            resistedCount: number;
            dailyAverage: number;
            daysWithData: number;
            resistRate?: number | undefined;
        } | undefined;
        dailySeries?: {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }[] | undefined;
    }[];
    metricResults: {
        metricId: string;
        metricName: string;
        confidence?: "low" | "high" | "moderate" | undefined;
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
        summary?: {
            count: number;
            average: number;
        } | undefined;
        hasBaseline?: boolean | undefined;
        postMilestoneReadings?: number | undefined;
        dailySeries?: {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }[] | undefined;
    }[];
    fetchedAt?: import("../types").Timestamp | undefined;
    laggedInsights?: {
        behaviorId: string;
        metricId: string;
        metricName: string;
        correlation: number;
        dataPoints: number;
        description?: string | undefined;
    }[] | undefined;
    discoveredInsights?: {
        behaviorId: string;
        direction: "positive" | "negative";
        metricId: string;
        metricName: string;
        quadrant: "low" | "activated" | "stressed" | "calm" | null;
        rBest: number;
        rBestLag: "same_day" | "lagged";
        strength: "moderate" | "strong" | "weak";
        overlapDaysBest: number;
        metricGrandAvg: number;
        behaviorGrandAvg: number;
        dailySeries?: {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }[] | undefined;
    }[] | undefined;
}, {
    requestedAt: import("../types").Timestamp;
    confidence: "low" | "high" | "moderate";
    experimentQuestion: string;
    experimentName: string;
    totalDaysWithData: number;
    behaviorResults: {
        behaviorId: string;
        behaviorName: string;
        trackingType?: string | undefined;
        trackingUnit?: string | undefined;
        summary?: {
            totalSessions: number;
            actedCount: number;
            resistedCount: number;
            dailyAverage: number;
            daysWithData: number;
            resistRate?: number | undefined;
        } | undefined;
        dailySeries?: {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }[] | undefined;
    }[];
    metricResults: {
        metricId: string;
        metricName: string;
        confidence?: "low" | "high" | "moderate" | undefined;
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
        summary?: {
            count: number;
            average: number;
        } | undefined;
        hasBaseline?: boolean | undefined;
        postMilestoneReadings?: number | undefined;
        dailySeries?: {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }[] | undefined;
    }[];
    fetchedAt?: import("../types").Timestamp | undefined;
    laggedInsights?: {
        behaviorId: string;
        metricId: string;
        metricName: string;
        correlation: number;
        dataPoints: number;
        description?: string | undefined;
    }[] | undefined;
    discoveredInsights?: {
        behaviorId: string;
        direction: "positive" | "negative";
        metricId: string;
        metricName: string;
        quadrant: "low" | "activated" | "stressed" | "calm" | null;
        rBest: number;
        rBestLag: "same_day" | "lagged";
        strength: "moderate" | "strong" | "weak";
        overlapDaysBest: number;
        metricGrandAvg: number;
        behaviorGrandAvg: number;
        dailySeries?: {
            value: number;
            date: string;
            rollingAvg7d?: number | undefined;
        }[] | undefined;
    }[] | undefined;
}>;
export type ExperimentResultsCache = z.infer<typeof experimentResultsCacheSchema>;
export type MetricResult = z.infer<typeof metricResultSchema>;
export type BehaviorResult = z.infer<typeof behaviorResultSchema>;
export type BehaviorSummary = z.infer<typeof behaviorSummarySchema>;
export type MetricSummary = z.infer<typeof metricSummarySchema>;
export type DailyDataPoint = z.infer<typeof dailyDataPointSchema>;
export type LaggedInsight = z.infer<typeof laggedInsightSchema>;
export type DiscoveredInsight = z.infer<typeof discoveredInsightSchema>;
export type ConfidenceLevel = z.infer<typeof confidenceLevelEnum>;
export {};
