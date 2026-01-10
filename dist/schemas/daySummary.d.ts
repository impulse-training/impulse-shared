import { z } from "zod";
/** Schema for a single goal comparison entry */
export declare const goalComparisonEntrySchema: z.ZodObject<{
    goalLabel: z.ZodString;
    unit: z.ZodString;
    measured: z.ZodNumber;
    targetValue: z.ZodOptional<z.ZodNumber>;
    status: z.ZodEnum<["MET", "NOT_MET_FAIL", "UNSPECIFIED_FOR_DAY", "NO_GOAL"]>;
}, "strip", z.ZodTypeAny, {
    status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
    goalLabel: string;
    unit: string;
    measured: number;
    targetValue?: number | undefined;
}, {
    status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
    goalLabel: string;
    unit: string;
    measured: number;
    targetValue?: number | undefined;
}>;
export type GoalComparisonEntry = z.infer<typeof goalComparisonEntrySchema>;
export declare const daySummarySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    impulseThreadOutcomesById: z.ZodRecord<z.ZodString, z.ZodEnum<["success", "partial", "setback"]>>;
    outcome: z.ZodOptional<z.ZodEnum<["success", "partial", "setback"]>>;
    behaviorDataTotalByBehaviorId: z.ZodRecord<z.ZodString, z.ZodObject<{
        behaviorId: z.ZodString;
        behaviorName: z.ZodString;
        behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
        trackingType: z.ZodEnum<["counter", "timer"]>;
        value: z.ZodNumber;
        formattedValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }, {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }>>;
    behaviorsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodObject<{
        name: z.ZodString;
        hasQuestions: z.ZodOptional<z.ZodBoolean>;
        trackingType: z.ZodEnum<["counter", "timer"]>;
        trackingUnit: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    } & {
        id: z.ZodOptional<z.ZodString>;
        description: z.ZodString;
        ordinal: z.ZodDefault<z.ZodNumber>;
        benefits: z.ZodArray<z.ZodString, "many">;
        drawbacks: z.ZodArray<z.ZodString, "many">;
        goal: z.ZodOptional<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"eliminate">;
        }, "strip", z.ZodTypeAny, {
            type: "eliminate";
        }, {
            type: "eliminate";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"reduceEveryDay">;
            target: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "reduceEveryDay";
            target: number;
        }, {
            type: "reduceEveryDay";
            target: number;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"reduceIndividualDays">;
            dailyTargets: z.ZodObject<{
                0: z.ZodNumber;
                1: z.ZodNumber;
                2: z.ZodNumber;
                3: z.ZodNumber;
                4: z.ZodNumber;
                5: z.ZodNumber;
                6: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                0: number;
                5: number;
                1: number;
                2: number;
                4: number;
                3: number;
                6: number;
            }, {
                0: number;
                5: number;
                1: number;
                2: number;
                4: number;
                3: number;
                6: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                5: number;
                1: number;
                2: number;
                4: number;
                3: number;
                6: number;
            };
        }, {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                5: number;
                1: number;
                2: number;
                4: number;
                3: number;
                6: number;
            };
        }>]>>;
        lastTrackedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
        tactics: z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>;
        initialUsage: z.ZodOptional<z.ZodObject<{
            behaviorId: z.ZodString;
            behaviorName: z.ZodString;
            behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
            trackingType: z.ZodEnum<["counter", "timer"]>;
            value: z.ZodNumber;
            formattedValue: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }>>;
        hidden: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        behaviorTopicId: z.ZodOptional<z.ZodEnum<[string, ...string[]]>>;
        impulseQuestions: z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>;
        debriefQuestions: z.ZodOptional<z.ZodObject<{
            success: z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>;
            setback: z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>;
        }, "strip", z.ZodTypeAny, {
            success?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            setback?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        }, {
            success?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            setback?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        }>>;
        state: z.ZodOptional<z.ZodObject<{
            behaviorId: z.ZodString;
            goal: z.ZodOptional<z.ZodObject<{
                goalLabel: z.ZodString;
                unit: z.ZodString;
                targetValue: z.ZodOptional<z.ZodNumber>;
                goalType: z.ZodEnum<["MAX_PER_DAY", "MIN_PER_DAY", "ELIMINATE", "CUSTOM"]>;
            }, "strip", z.ZodTypeAny, {
                goalLabel: string;
                unit: string;
                goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
                targetValue?: number | undefined;
            }, {
                goalLabel: string;
                unit: string;
                goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
                targetValue?: number | undefined;
            }>>;
            meaning: z.ZodOptional<z.ZodObject<{
                importance: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CORE"]>;
                emotionalTone: z.ZodObject<{
                    primary: z.ZodEnum<["NEUTRAL", "FRUSTRATED", "ASHAMED", "CONFLICTED", "MOTIVATED", "RESIGNED"]>;
                    confidence: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
                }, "strip", z.ZodTypeAny, {
                    primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                    confidence: "HIGH" | "MEDIUM" | "LOW";
                }, {
                    primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                    confidence: "HIGH" | "MEDIUM" | "LOW";
                }>;
                motivation: z.ZodObject<{
                    reasons: z.ZodArray<z.ZodString, "many">;
                    valuesLinked: z.ZodArray<z.ZodString, "many">;
                    avoidanceDriven: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    reasons: string[];
                    valuesLinked: string[];
                    avoidanceDriven: boolean;
                }, {
                    reasons: string[];
                    valuesLinked: string[];
                    avoidanceDriven: boolean;
                }>;
                selfNarrative: z.ZodObject<{
                    identityStatement: z.ZodOptional<z.ZodString>;
                    perceivedControl: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
                }, "strip", z.ZodTypeAny, {
                    perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                    identityStatement?: string | undefined;
                }, {
                    perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                    identityStatement?: string | undefined;
                }>;
                friction: z.ZodObject<{
                    commonTriggers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    highRiskContexts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    commonTriggers?: string[] | undefined;
                    highRiskContexts?: string[] | undefined;
                }, {
                    commonTriggers?: string[] | undefined;
                    highRiskContexts?: string[] | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
                emotionalTone: {
                    primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                    confidence: "HIGH" | "MEDIUM" | "LOW";
                };
                motivation: {
                    reasons: string[];
                    valuesLinked: string[];
                    avoidanceDriven: boolean;
                };
                selfNarrative: {
                    perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                    identityStatement?: string | undefined;
                };
                friction: {
                    commonTriggers?: string[] | undefined;
                    highRiskContexts?: string[] | undefined;
                };
            }, {
                importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
                emotionalTone: {
                    primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                    confidence: "HIGH" | "MEDIUM" | "LOW";
                };
                motivation: {
                    reasons: string[];
                    valuesLinked: string[];
                    avoidanceDriven: boolean;
                };
                selfNarrative: {
                    perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                    identityStatement?: string | undefined;
                };
                friction: {
                    commonTriggers?: string[] | undefined;
                    highRiskContexts?: string[] | undefined;
                };
            }>>;
            windows: z.ZodObject<{
                short: z.ZodObject<{
                    windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                    adherenceRate: z.ZodNumber;
                    averageMeasured: z.ZodOptional<z.ZodNumber>;
                    trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                    stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                    streaks: z.ZodObject<{
                        longestMet: z.ZodNumber;
                        currentMet: z.ZodNumber;
                        currentFail: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    }, {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    }>;
                    recencyWeightedScore: z.ZodNumber;
                    sampleCount: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                }, {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                }>;
                medium: z.ZodObject<{
                    windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                    adherenceRate: z.ZodNumber;
                    averageMeasured: z.ZodOptional<z.ZodNumber>;
                    trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                    stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                    streaks: z.ZodObject<{
                        longestMet: z.ZodNumber;
                        currentMet: z.ZodNumber;
                        currentFail: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    }, {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    }>;
                    recencyWeightedScore: z.ZodNumber;
                    sampleCount: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                }, {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                }>;
                long: z.ZodObject<{
                    windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                    adherenceRate: z.ZodNumber;
                    averageMeasured: z.ZodOptional<z.ZodNumber>;
                    trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                    stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                    streaks: z.ZodObject<{
                        longestMet: z.ZodNumber;
                        currentMet: z.ZodNumber;
                        currentFail: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    }, {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    }>;
                    recencyWeightedScore: z.ZodNumber;
                    sampleCount: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                }, {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                short: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                medium: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                long: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
            }, {
                short: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                medium: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                long: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
            }>;
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
            behaviorId: string;
            windows: {
                short: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                medium: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                long: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
            };
            meta: {
                lastUpdatedAt: import("../types").Timestamp;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            };
            goal?: {
                goalLabel: string;
                unit: string;
                goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
                targetValue?: number | undefined;
            } | undefined;
            meaning?: {
                importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
                emotionalTone: {
                    primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                    confidence: "HIGH" | "MEDIUM" | "LOW";
                };
                motivation: {
                    reasons: string[];
                    valuesLinked: string[];
                    avoidanceDriven: boolean;
                };
                selfNarrative: {
                    perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                    identityStatement?: string | undefined;
                };
                friction: {
                    commonTriggers?: string[] | undefined;
                    highRiskContexts?: string[] | undefined;
                };
            } | undefined;
        }, {
            behaviorId: string;
            windows: {
                short: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                medium: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                long: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
            };
            meta: {
                lastUpdatedAt: import("../types").Timestamp;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            };
            goal?: {
                goalLabel: string;
                unit: string;
                goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
                targetValue?: number | undefined;
            } | undefined;
            meaning?: {
                importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
                emotionalTone: {
                    primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                    confidence: "HIGH" | "MEDIUM" | "LOW";
                };
                motivation: {
                    reasons: string[];
                    valuesLinked: string[];
                    avoidanceDriven: boolean;
                };
                selfNarrative: {
                    perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                    identityStatement?: string | undefined;
                };
                friction: {
                    commonTriggers?: string[] | undefined;
                    highRiskContexts?: string[] | undefined;
                };
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        trackingType: "counter" | "timer";
        name: string;
        description: string;
        ordinal: number;
        benefits: string[];
        drawbacks: string[];
        hidden: boolean;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        hasQuestions?: boolean | undefined;
        trackingUnit?: string | undefined;
        goal?: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                5: number;
                1: number;
                2: number;
                4: number;
                3: number;
                6: number;
            };
        } | undefined;
        lastTrackedAt?: import("../types").Timestamp | undefined;
        tactics?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        initialUsage?: {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        } | undefined;
        behaviorTopicId?: string | undefined;
        impulseQuestions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        debriefQuestions?: {
            success?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            setback?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        } | undefined;
        state?: {
            behaviorId: string;
            windows: {
                short: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                medium: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                long: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
            };
            meta: {
                lastUpdatedAt: import("../types").Timestamp;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            };
            goal?: {
                goalLabel: string;
                unit: string;
                goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
                targetValue?: number | undefined;
            } | undefined;
            meaning?: {
                importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
                emotionalTone: {
                    primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                    confidence: "HIGH" | "MEDIUM" | "LOW";
                };
                motivation: {
                    reasons: string[];
                    valuesLinked: string[];
                    avoidanceDriven: boolean;
                };
                selfNarrative: {
                    perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                    identityStatement?: string | undefined;
                };
                friction: {
                    commonTriggers?: string[] | undefined;
                    highRiskContexts?: string[] | undefined;
                };
            } | undefined;
        } | undefined;
    }, {
        trackingType: "counter" | "timer";
        name: string;
        description: string;
        benefits: string[];
        drawbacks: string[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        hasQuestions?: boolean | undefined;
        trackingUnit?: string | undefined;
        goal?: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                5: number;
                1: number;
                2: number;
                4: number;
                3: number;
                6: number;
            };
        } | undefined;
        ordinal?: number | undefined;
        lastTrackedAt?: import("../types").Timestamp | undefined;
        tactics?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        initialUsage?: {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        } | undefined;
        hidden?: boolean | undefined;
        behaviorTopicId?: string | undefined;
        impulseQuestions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        debriefQuestions?: {
            success?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            setback?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        } | undefined;
        state?: {
            behaviorId: string;
            windows: {
                short: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                medium: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                long: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
            };
            meta: {
                lastUpdatedAt: import("../types").Timestamp;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            };
            goal?: {
                goalLabel: string;
                unit: string;
                goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
                targetValue?: number | undefined;
            } | undefined;
            meaning?: {
                importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
                emotionalTone: {
                    primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                    confidence: "HIGH" | "MEDIUM" | "LOW";
                };
                motivation: {
                    reasons: string[];
                    valuesLinked: string[];
                    avoidanceDriven: boolean;
                };
                selfNarrative: {
                    perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                    identityStatement?: string | undefined;
                };
                friction: {
                    commonTriggers?: string[] | undefined;
                    highRiskContexts?: string[] | undefined;
                };
            } | undefined;
        } | undefined;
    }>, {
        trackingType: "counter" | "timer";
        name: string;
        description: string;
        ordinal: number;
        benefits: string[];
        drawbacks: string[];
        hidden: boolean;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        hasQuestions?: boolean | undefined;
        trackingUnit?: string | undefined;
        goal?: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                5: number;
                1: number;
                2: number;
                4: number;
                3: number;
                6: number;
            };
        } | undefined;
        lastTrackedAt?: import("../types").Timestamp | undefined;
        tactics?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        initialUsage?: {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        } | undefined;
        behaviorTopicId?: string | undefined;
        impulseQuestions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        debriefQuestions?: {
            success?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            setback?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        } | undefined;
        state?: {
            behaviorId: string;
            windows: {
                short: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                medium: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                long: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
            };
            meta: {
                lastUpdatedAt: import("../types").Timestamp;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            };
            goal?: {
                goalLabel: string;
                unit: string;
                goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
                targetValue?: number | undefined;
            } | undefined;
            meaning?: {
                importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
                emotionalTone: {
                    primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                    confidence: "HIGH" | "MEDIUM" | "LOW";
                };
                motivation: {
                    reasons: string[];
                    valuesLinked: string[];
                    avoidanceDriven: boolean;
                };
                selfNarrative: {
                    perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                    identityStatement?: string | undefined;
                };
                friction: {
                    commonTriggers?: string[] | undefined;
                    highRiskContexts?: string[] | undefined;
                };
            } | undefined;
        } | undefined;
    }, {
        trackingType: "counter" | "timer";
        name: string;
        description: string;
        benefits: string[];
        drawbacks: string[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        hasQuestions?: boolean | undefined;
        trackingUnit?: string | undefined;
        goal?: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                5: number;
                1: number;
                2: number;
                4: number;
                3: number;
                6: number;
            };
        } | undefined;
        ordinal?: number | undefined;
        lastTrackedAt?: import("../types").Timestamp | undefined;
        tactics?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        initialUsage?: {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        } | undefined;
        hidden?: boolean | undefined;
        behaviorTopicId?: string | undefined;
        impulseQuestions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        debriefQuestions?: {
            success?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            setback?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        } | undefined;
        state?: {
            behaviorId: string;
            windows: {
                short: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                medium: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                long: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
            };
            meta: {
                lastUpdatedAt: import("../types").Timestamp;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            };
            goal?: {
                goalLabel: string;
                unit: string;
                goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
                targetValue?: number | undefined;
            } | undefined;
            meaning?: {
                importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
                emotionalTone: {
                    primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                    confidence: "HIGH" | "MEDIUM" | "LOW";
                };
                motivation: {
                    reasons: string[];
                    valuesLinked: string[];
                    avoidanceDriven: boolean;
                };
                selfNarrative: {
                    perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                    identityStatement?: string | undefined;
                };
                friction: {
                    commonTriggers?: string[] | undefined;
                    highRiskContexts?: string[] | undefined;
                };
            } | undefined;
        } | undefined;
    }>>>;
    tacticsUsed: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
    summaryText: z.ZodNullable<z.ZodString>;
    supportGroupSummariesById: z.ZodRecord<z.ZodString, z.ZodObject<{
        summary: z.ZodString;
        outcome: z.ZodOptional<z.ZodEnum<["success", "partial", "setback"]>>;
    }, "strip", z.ZodTypeAny, {
        summary: string;
        outcome?: "success" | "setback" | "partial" | undefined;
    }, {
        summary: string;
        outcome?: "success" | "setback" | "partial" | undefined;
    }>>;
    supportGroupPermissionsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        dayOutcomes: z.ZodDefault<z.ZodBoolean>;
        impulseMoments: z.ZodDefault<z.ZodBoolean>;
        summary: z.ZodDefault<z.ZodBoolean>;
        threads: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        summary: boolean;
        dayOutcomes: boolean;
        impulseMoments: boolean;
        threads: boolean;
    }, {
        summary?: boolean | undefined;
        dayOutcomes?: boolean | undefined;
        impulseMoments?: boolean | undefined;
        threads?: boolean | undefined;
    }>>>;
    sharedWithUserIds: z.ZodArray<z.ZodString, "many">;
    goalComparisonByBehaviorId: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        goalLabel: z.ZodString;
        unit: z.ZodString;
        measured: z.ZodNumber;
        targetValue: z.ZodOptional<z.ZodNumber>;
        status: z.ZodEnum<["MET", "NOT_MET_FAIL", "UNSPECIFIED_FOR_DAY", "NO_GOAL"]>;
    }, "strip", z.ZodTypeAny, {
        status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
        goalLabel: string;
        unit: string;
        measured: number;
        targetValue?: number | undefined;
    }, {
        status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
        goalLabel: string;
        unit: string;
        measured: number;
        targetValue?: number | undefined;
    }>>>;
    recapRequirementsMetAt: z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    recapStartedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    recapCutoffTime: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    supportGroupNotificationSentAtById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    summaryText: string | null;
    impulseThreadOutcomesById: Record<string, "success" | "setback" | "partial">;
    behaviorDataTotalByBehaviorId: Record<string, {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }>;
    tacticsUsed: any[];
    supportGroupSummariesById: Record<string, {
        summary: string;
        outcome?: "success" | "setback" | "partial" | undefined;
    }>;
    sharedWithUserIds: string[];
    recapRequirementsMetAt: import("../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    goalComparisonByBehaviorId?: Record<string, {
        status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
        goalLabel: string;
        unit: string;
        measured: number;
        targetValue?: number | undefined;
    }> | undefined;
    behaviorsById?: Record<string, {
        trackingType: "counter" | "timer";
        name: string;
        description: string;
        ordinal: number;
        benefits: string[];
        drawbacks: string[];
        hidden: boolean;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        hasQuestions?: boolean | undefined;
        trackingUnit?: string | undefined;
        goal?: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                5: number;
                1: number;
                2: number;
                4: number;
                3: number;
                6: number;
            };
        } | undefined;
        lastTrackedAt?: import("../types").Timestamp | undefined;
        tactics?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        initialUsage?: {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        } | undefined;
        behaviorTopicId?: string | undefined;
        impulseQuestions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        debriefQuestions?: {
            success?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            setback?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        } | undefined;
        state?: {
            behaviorId: string;
            windows: {
                short: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                medium: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                long: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
            };
            meta: {
                lastUpdatedAt: import("../types").Timestamp;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            };
            goal?: {
                goalLabel: string;
                unit: string;
                goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
                targetValue?: number | undefined;
            } | undefined;
            meaning?: {
                importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
                emotionalTone: {
                    primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                    confidence: "HIGH" | "MEDIUM" | "LOW";
                };
                motivation: {
                    reasons: string[];
                    valuesLinked: string[];
                    avoidanceDriven: boolean;
                };
                selfNarrative: {
                    perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                    identityStatement?: string | undefined;
                };
                friction: {
                    commonTriggers?: string[] | undefined;
                    highRiskContexts?: string[] | undefined;
                };
            } | undefined;
        } | undefined;
    }> | undefined;
    outcome?: "success" | "setback" | "partial" | undefined;
    supportGroupPermissionsById?: Record<string, {
        summary: boolean;
        dayOutcomes: boolean;
        impulseMoments: boolean;
        threads: boolean;
    }> | undefined;
    recapStartedAt?: import("../types").Timestamp | undefined;
    recapCutoffTime?: import("../types").Timestamp | undefined;
    supportGroupNotificationSentAtById?: Record<string, import("../types").Timestamp> | undefined;
}, {
    userId: string;
    summaryText: string | null;
    impulseThreadOutcomesById: Record<string, "success" | "setback" | "partial">;
    behaviorDataTotalByBehaviorId: Record<string, {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }>;
    supportGroupSummariesById: Record<string, {
        summary: string;
        outcome?: "success" | "setback" | "partial" | undefined;
    }>;
    sharedWithUserIds: string[];
    recapRequirementsMetAt: import("../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    goalComparisonByBehaviorId?: Record<string, {
        status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
        goalLabel: string;
        unit: string;
        measured: number;
        targetValue?: number | undefined;
    }> | undefined;
    behaviorsById?: Record<string, {
        trackingType: "counter" | "timer";
        name: string;
        description: string;
        benefits: string[];
        drawbacks: string[];
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
        hasQuestions?: boolean | undefined;
        trackingUnit?: string | undefined;
        goal?: {
            type: "eliminate";
        } | {
            type: "reduceEveryDay";
            target: number;
        } | {
            type: "reduceIndividualDays";
            dailyTargets: {
                0: number;
                5: number;
                1: number;
                2: number;
                4: number;
                3: number;
                6: number;
            };
        } | undefined;
        ordinal?: number | undefined;
        lastTrackedAt?: import("../types").Timestamp | undefined;
        tactics?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        initialUsage?: {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        } | undefined;
        hidden?: boolean | undefined;
        behaviorTopicId?: string | undefined;
        impulseQuestions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        debriefQuestions?: {
            success?: import("..").DocumentReferenceLike<unknown>[] | undefined;
            setback?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        } | undefined;
        state?: {
            behaviorId: string;
            windows: {
                short: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                medium: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
                long: {
                    windowSizeDays: 7 | 30 | 90;
                    adherenceRate: number;
                    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                    stability: "HIGH" | "MEDIUM" | "LOW";
                    streaks: {
                        longestMet: number;
                        currentMet: number;
                        currentFail: number;
                    };
                    recencyWeightedScore: number;
                    sampleCount: number;
                    averageMeasured?: number | undefined;
                };
            };
            meta: {
                lastUpdatedAt: import("../types").Timestamp;
                dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
            };
            goal?: {
                goalLabel: string;
                unit: string;
                goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
                targetValue?: number | undefined;
            } | undefined;
            meaning?: {
                importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
                emotionalTone: {
                    primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                    confidence: "HIGH" | "MEDIUM" | "LOW";
                };
                motivation: {
                    reasons: string[];
                    valuesLinked: string[];
                    avoidanceDriven: boolean;
                };
                selfNarrative: {
                    perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                    identityStatement?: string | undefined;
                };
                friction: {
                    commonTriggers?: string[] | undefined;
                    highRiskContexts?: string[] | undefined;
                };
            } | undefined;
        } | undefined;
    }> | undefined;
    outcome?: "success" | "setback" | "partial" | undefined;
    tacticsUsed?: any[] | undefined;
    supportGroupPermissionsById?: Record<string, {
        summary?: boolean | undefined;
        dayOutcomes?: boolean | undefined;
        impulseMoments?: boolean | undefined;
        threads?: boolean | undefined;
    }> | undefined;
    recapStartedAt?: import("../types").Timestamp | undefined;
    recapCutoffTime?: import("../types").Timestamp | undefined;
    supportGroupNotificationSentAtById?: Record<string, import("../types").Timestamp> | undefined;
}>;
export type DaySummary = z.infer<typeof daySummarySchema>;
export declare function isValidDaySummary(value: unknown): value is DaySummary;
