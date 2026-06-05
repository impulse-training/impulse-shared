import { z } from "zod";
export declare const behaviorContextSchema: z.ZodObject<{
    behaviorId: z.ZodString;
    behaviorName: z.ZodString;
    trackingType: z.ZodEnum<["counter", "timer", "boolean", "scale"]>;
    description: z.ZodOptional<z.ZodString>;
    benefits: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    drawbacks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    trackingUnit: z.ZodOptional<z.ZodString>;
    goalLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    behaviorId: string;
    behaviorName: string;
    trackingType: "boolean" | "counter" | "timer" | "scale";
    trackingUnit?: string | undefined;
    goalLabel?: string | undefined;
    description?: string | undefined;
    benefits?: string[] | undefined;
    drawbacks?: string[] | undefined;
}, {
    behaviorId: string;
    behaviorName: string;
    trackingType: "boolean" | "counter" | "timer" | "scale";
    trackingUnit?: string | undefined;
    goalLabel?: string | undefined;
    description?: string | undefined;
    benefits?: string[] | undefined;
    drawbacks?: string[] | undefined;
}>;
export declare const tacticContextSchema: z.ZodObject<{
    tacticId: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    tacticId: string;
    description?: string | undefined;
    instructions?: string | undefined;
}, {
    title: string;
    tacticId: string;
    description?: string | undefined;
    instructions?: string | undefined;
}>;
export declare const activeExperimentContextSchema: z.ZodObject<{
    behaviorIds: z.ZodArray<z.ZodString, "many">;
    behaviorNames: z.ZodArray<z.ZodString, "many">;
    experimentQuestion: z.ZodString;
    observations: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    behaviorIds: string[];
    behaviorNames: string[];
    experimentQuestion: string;
    observations: string[];
}, {
    behaviorIds: string[];
    behaviorNames: string[];
    experimentQuestion: string;
    observations: string[];
}>;
/**
 * One time-window of Impulse Mode catch-rate data. Mirrors the behavior-state
 * windowing (short/medium/long = 7/30/90 days) so the two trend systems read
 * consistently. `trend` compares this window's catch rate to its longer-window
 * baseline; `dataCompleteness` reflects how many events fell in the window
 * (impulse events are far sparser than daily behavior samples, so absolute
 * event-count thresholds are used rather than a per-day ratio).
 */
export declare const catchRateWindowSchema: z.ZodObject<{
    windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
    /** Impulse Mode sessions in the window (caught moments). */
    activations: z.ZodNumber;
    /** Direct behavior logs in the window (missed moments). */
    misses: z.ZodNumber;
    /** activations / (activations + misses); null when no events in the window. */
    catchRate: z.ZodNullable<z.ZodNumber>;
    /** activations + misses. */
    sampleCount: z.ZodNumber;
    trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
    dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
}, "strip", z.ZodTypeAny, {
    windowSizeDays: 7 | 30 | 90;
    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
    sampleCount: number;
    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
    activations: number;
    misses: number;
    catchRate: number | null;
}, {
    windowSizeDays: 7 | 30 | 90;
    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
    sampleCount: number;
    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
    activations: number;
    misses: number;
    catchRate: number | null;
}>;
export type CatchRateWindow = z.infer<typeof catchRateWindowSchema>;
/**
 * Denormalized Impulse Mode usage stats, refreshed daily at recap-build (and by
 * the backfill script). Lets the recap AI calibrate framing to the user's real
 * engagement — critically, the catch rate: how often they reach for Impulse Mode
 * when an urge hits (activations) vs. logging the behavior directly (misses).
 */
export declare const impulseUsageStatsSchema: z.ZodObject<{
    /** Lifetime count of Impulse Mode sessions (caught moments). */
    impulseActivations: z.ZodNumber;
    /** Lifetime count of behavior occurrence logs NOT tied to an impulse session (misses). */
    directLogs: z.ZodNumber;
    catchRateLifetime: z.ZodNullable<z.ZodNumber>;
    /** Catch-rate windows mirroring behavior-state windowing (7/30/90 days). */
    windows: z.ZodObject<{
        short: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            /** Impulse Mode sessions in the window (caught moments). */
            activations: z.ZodNumber;
            /** Direct behavior logs in the window (missed moments). */
            misses: z.ZodNumber;
            /** activations / (activations + misses); null when no events in the window. */
            catchRate: z.ZodNullable<z.ZodNumber>;
            /** activations + misses. */
            sampleCount: z.ZodNumber;
            trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
            dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
        }, "strip", z.ZodTypeAny, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        }>;
        medium: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            /** Impulse Mode sessions in the window (caught moments). */
            activations: z.ZodNumber;
            /** Direct behavior logs in the window (missed moments). */
            misses: z.ZodNumber;
            /** activations / (activations + misses); null when no events in the window. */
            catchRate: z.ZodNullable<z.ZodNumber>;
            /** activations + misses. */
            sampleCount: z.ZodNumber;
            trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
            dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
        }, "strip", z.ZodTypeAny, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        }>;
        long: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            /** Impulse Mode sessions in the window (caught moments). */
            activations: z.ZodNumber;
            /** Direct behavior logs in the window (missed moments). */
            misses: z.ZodNumber;
            /** activations / (activations + misses); null when no events in the window. */
            catchRate: z.ZodNullable<z.ZodNumber>;
            /** activations + misses. */
            sampleCount: z.ZodNumber;
            trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
            dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
        }, "strip", z.ZodTypeAny, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        };
    }, {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        };
    }>;
    firstImpulseAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
    lastImpulseAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
    /** Local date the stats were last computed for; used to skip same-day recompute. */
    computedDateString: z.ZodOptional<z.ZodString>;
    computedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    windows: {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        };
    };
    impulseActivations: number;
    directLogs: number;
    catchRateLifetime: number | null;
    firstImpulseAt?: import("../types").Timestamp | null | undefined;
    lastImpulseAt?: import("../types").Timestamp | null | undefined;
    computedDateString?: string | undefined;
    computedAt?: import("../types").Timestamp | undefined;
}, {
    windows: {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            sampleCount: number;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            activations: number;
            misses: number;
            catchRate: number | null;
        };
    };
    impulseActivations: number;
    directLogs: number;
    catchRateLifetime: number | null;
    firstImpulseAt?: import("../types").Timestamp | null | undefined;
    lastImpulseAt?: import("../types").Timestamp | null | undefined;
    computedDateString?: string | undefined;
    computedAt?: import("../types").Timestamp | undefined;
}>;
export type ImpulseUsageStats = z.infer<typeof impulseUsageStatsSchema>;
export declare const userContextSchema: z.ZodObject<{
    behaviors: z.ZodRecord<z.ZodString, z.ZodObject<{
        behaviorId: z.ZodString;
        behaviorName: z.ZodString;
        trackingType: z.ZodEnum<["counter", "timer", "boolean", "scale"]>;
        description: z.ZodOptional<z.ZodString>;
        benefits: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        drawbacks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        trackingUnit: z.ZodOptional<z.ZodString>;
        goalLabel: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer" | "scale";
        trackingUnit?: string | undefined;
        goalLabel?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer" | "scale";
        trackingUnit?: string | undefined;
        goalLabel?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }>>;
    tactics: z.ZodRecord<z.ZodString, z.ZodObject<{
        tacticId: z.ZodString;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        instructions: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        tacticId: string;
        description?: string | undefined;
        instructions?: string | undefined;
    }, {
        title: string;
        tacticId: string;
        description?: string | undefined;
        instructions?: string | undefined;
    }>>;
    activeExperiment: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        behaviorIds: z.ZodArray<z.ZodString, "many">;
        behaviorNames: z.ZodArray<z.ZodString, "many">;
        experimentQuestion: z.ZodString;
        observations: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        behaviorIds: string[];
        behaviorNames: string[];
        experimentQuestion: string;
        observations: string[];
    }, {
        behaviorIds: string[];
        behaviorNames: string[];
        experimentQuestion: string;
        observations: string[];
    }>>>;
    communicationProfile: z.ZodOptional<z.ZodString>;
    communicationProfileVersion: z.ZodOptional<z.ZodNumber>;
    usage: z.ZodOptional<z.ZodObject<{
        /** Lifetime count of Impulse Mode sessions (caught moments). */
        impulseActivations: z.ZodNumber;
        /** Lifetime count of behavior occurrence logs NOT tied to an impulse session (misses). */
        directLogs: z.ZodNumber;
        catchRateLifetime: z.ZodNullable<z.ZodNumber>;
        /** Catch-rate windows mirroring behavior-state windowing (7/30/90 days). */
        windows: z.ZodObject<{
            short: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                /** Impulse Mode sessions in the window (caught moments). */
                activations: z.ZodNumber;
                /** Direct behavior logs in the window (missed moments). */
                misses: z.ZodNumber;
                /** activations / (activations + misses); null when no events in the window. */
                catchRate: z.ZodNullable<z.ZodNumber>;
                /** activations + misses. */
                sampleCount: z.ZodNumber;
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            }>;
            medium: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                /** Impulse Mode sessions in the window (caught moments). */
                activations: z.ZodNumber;
                /** Direct behavior logs in the window (missed moments). */
                misses: z.ZodNumber;
                /** activations / (activations + misses); null when no events in the window. */
                catchRate: z.ZodNullable<z.ZodNumber>;
                /** activations + misses. */
                sampleCount: z.ZodNumber;
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            }>;
            long: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                /** Impulse Mode sessions in the window (caught moments). */
                activations: z.ZodNumber;
                /** Direct behavior logs in the window (missed moments). */
                misses: z.ZodNumber;
                /** activations / (activations + misses); null when no events in the window. */
                catchRate: z.ZodNullable<z.ZodNumber>;
                /** activations + misses. */
                sampleCount: z.ZodNumber;
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            }>;
        }, "strip", z.ZodTypeAny, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
        }, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
        }>;
        firstImpulseAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
        lastImpulseAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
        /** Local date the stats were last computed for; used to skip same-day recompute. */
        computedDateString: z.ZodOptional<z.ZodString>;
        computedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
        };
        impulseActivations: number;
        directLogs: number;
        catchRateLifetime: number | null;
        firstImpulseAt?: import("../types").Timestamp | null | undefined;
        lastImpulseAt?: import("../types").Timestamp | null | undefined;
        computedDateString?: string | undefined;
        computedAt?: import("../types").Timestamp | undefined;
    }, {
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
        };
        impulseActivations: number;
        directLogs: number;
        catchRateLifetime: number | null;
        firstImpulseAt?: import("../types").Timestamp | null | undefined;
        lastImpulseAt?: import("../types").Timestamp | null | undefined;
        computedDateString?: string | undefined;
        computedAt?: import("../types").Timestamp | undefined;
    }>>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    tactics: Record<string, {
        title: string;
        tacticId: string;
        description?: string | undefined;
        instructions?: string | undefined;
    }>;
    behaviors: Record<string, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer" | "scale";
        trackingUnit?: string | undefined;
        goalLabel?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }>;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    activeExperiment?: {
        behaviorIds: string[];
        behaviorNames: string[];
        experimentQuestion: string;
        observations: string[];
    } | null | undefined;
    communicationProfile?: string | undefined;
    communicationProfileVersion?: number | undefined;
    usage?: {
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
        };
        impulseActivations: number;
        directLogs: number;
        catchRateLifetime: number | null;
        firstImpulseAt?: import("../types").Timestamp | null | undefined;
        lastImpulseAt?: import("../types").Timestamp | null | undefined;
        computedDateString?: string | undefined;
        computedAt?: import("../types").Timestamp | undefined;
    } | undefined;
}, {
    tactics: Record<string, {
        title: string;
        tacticId: string;
        description?: string | undefined;
        instructions?: string | undefined;
    }>;
    behaviors: Record<string, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer" | "scale";
        trackingUnit?: string | undefined;
        goalLabel?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }>;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    activeExperiment?: {
        behaviorIds: string[];
        behaviorNames: string[];
        experimentQuestion: string;
        observations: string[];
    } | null | undefined;
    communicationProfile?: string | undefined;
    communicationProfileVersion?: number | undefined;
    usage?: {
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                sampleCount: number;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                activations: number;
                misses: number;
                catchRate: number | null;
            };
        };
        impulseActivations: number;
        directLogs: number;
        catchRateLifetime: number | null;
        firstImpulseAt?: import("../types").Timestamp | null | undefined;
        lastImpulseAt?: import("../types").Timestamp | null | undefined;
        computedDateString?: string | undefined;
        computedAt?: import("../types").Timestamp | undefined;
    } | undefined;
}>;
export type BehaviorContext = z.infer<typeof behaviorContextSchema>;
export type TacticContext = z.infer<typeof tacticContextSchema>;
export type ActiveExperimentContext = z.infer<typeof activeExperimentContextSchema>;
export type UserContext = z.infer<typeof userContextSchema>;
export declare const isBehaviorContext: (value: unknown) => value is BehaviorContext;
export declare const isTacticContext: (value: unknown) => value is TacticContext;
export declare const isUserContext: (value: unknown) => value is UserContext;
