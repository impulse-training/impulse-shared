import { z } from "zod";
/**
 * Computed metrics for a specific time window (7, 30, or 90 days).
 * Analogous to BehaviorWindow, but for continuous 1-10 scale values.
 */
export declare const metricWindowSchema: z.ZodObject<{
    windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
    /** Average measured value across the window */
    averageMeasured: z.ZodOptional<z.ZodNumber>;
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
    averageMeasured?: number | undefined;
}, {
    windowSizeDays: 7 | 30 | 90;
    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
    stability: "HIGH" | "MEDIUM" | "LOW";
    sampleCount: number;
    averageMeasured?: number | undefined;
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
        value: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        value: number;
        offset: number;
    }, {
        value: number;
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
        value: number;
        offset: number;
    }[];
    direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
    contrast: "LOW" | "MODERATE" | "STRONG";
    salience: "HIGH" | "MEDIUM" | "LOW";
}, {
    days: {
        value: number;
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
            /** Average measured value across the window */
            averageMeasured: z.ZodOptional<z.ZodNumber>;
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
            averageMeasured?: number | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        }>;
        medium: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            /** Average measured value across the window */
            averageMeasured: z.ZodOptional<z.ZodNumber>;
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
            averageMeasured?: number | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        }>;
        long: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            /** Average measured value across the window */
            averageMeasured: z.ZodOptional<z.ZodNumber>;
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
            averageMeasured?: number | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
    }, {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
    }>;
    recentSlice: z.ZodOptional<z.ZodObject<{
        /** Most-recent entries, newest first. offset=0 is today, offset=1 is yesterday, … */
        days: z.ZodArray<z.ZodObject<{
            offset: z.ZodNumber;
            value: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            value: number;
            offset: number;
        }, {
            value: number;
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
            value: number;
            offset: number;
        }[];
        direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
        contrast: "LOW" | "MODERATE" | "STRONG";
        salience: "HIGH" | "MEDIUM" | "LOW";
    }, {
        days: {
            value: number;
            offset: number;
        }[];
        direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
        contrast: "LOW" | "MODERATE" | "STRONG";
        salience: "HIGH" | "MEDIUM" | "LOW";
    }>>;
    /**
     * A pre-generated natural-language summary for the AI, e.g.
     * "The user has been scoring low energy lately (avg 3.4/10), and this has been declining."
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
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
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
            value: number;
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
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
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
            value: number;
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
 * Metrics are lightweight self-report scales (1-10) that users track
 * during experiments to measure how a behavior change affects them.
 */
export declare const metricSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    /** Display name, e.g. "Mental clarity" */
    name: z.ZodString;
    /** Prompt shown when tracking, e.g. "How clear is your thinking?" */
    description: z.ZodOptional<z.ZodString>;
    /** Label for the low end of the 1-10 scale, e.g. "Very foggy" */
    minLabel: z.ZodOptional<z.ZodString>;
    /** Label for the high end of the 1-10 scale, e.g. "Very clear" */
    maxLabel: z.ZodOptional<z.ZodString>;
    /** If created from METRIC_REGISTRY, stores the registry id for dedup */
    metricRegistryId: z.ZodOptional<z.ZodString>;
    /** Circumplex quadrant — present only on pre-seeded feeling metrics */
    quadrant: z.ZodOptional<z.ZodEnum<["activated", "stressed", "calm", "low"]>>;
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
                /** Average measured value across the window */
                averageMeasured: z.ZodOptional<z.ZodNumber>;
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
                averageMeasured?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            }>;
            medium: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                /** Average measured value across the window */
                averageMeasured: z.ZodOptional<z.ZodNumber>;
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
                averageMeasured?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            }>;
            long: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                /** Average measured value across the window */
                averageMeasured: z.ZodOptional<z.ZodNumber>;
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
                averageMeasured?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
        }, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
        }>;
        recentSlice: z.ZodOptional<z.ZodObject<{
            /** Most-recent entries, newest first. offset=0 is today, offset=1 is yesterday, … */
            days: z.ZodArray<z.ZodObject<{
                offset: z.ZodNumber;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                offset: number;
            }, {
                value: number;
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
                value: number;
                offset: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        }, {
            days: {
                value: number;
                offset: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        }>>;
        /**
         * A pre-generated natural-language summary for the AI, e.g.
         * "The user has been scoring low energy lately (avg 3.4/10), and this has been declining."
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
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
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
                value: number;
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
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
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
                value: number;
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
    description?: string | undefined;
    state?: {
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
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
                value: number;
                offset: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        } | undefined;
    } | undefined;
    minLabel?: string | undefined;
    maxLabel?: string | undefined;
    quadrant?: "low" | "activated" | "stressed" | "calm" | undefined;
    startedDeletingAt?: import("../types").Timestamp | undefined;
    metricRegistryId?: string | undefined;
}, {
    name: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    description?: string | undefined;
    state?: {
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
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
                value: number;
                offset: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        } | undefined;
    } | undefined;
    minLabel?: string | undefined;
    maxLabel?: string | undefined;
    quadrant?: "low" | "activated" | "stressed" | "calm" | undefined;
    startedDeletingAt?: import("../types").Timestamp | undefined;
    metricRegistryId?: string | undefined;
}>;
export type Metric = z.infer<typeof metricSchema>;
export declare const isMetric: (value: unknown) => value is Metric;
