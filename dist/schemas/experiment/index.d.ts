import { z } from "zod";
export declare const experimentPhaseEnum: z.ZodEnum<["baseline", "test", "results"]>;
export declare const experimentSchema: z.ZodObject<{
    startedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    name: z.ZodString;
    subtitle: z.ZodString;
    behaviorId: z.ZodString;
    questionIds: z.ZodArray<z.ZodString, "many">;
    config: z.ZodObject<{
        baseline: z.ZodObject<{
            requiredDays: z.ZodDefault<z.ZodNumber>;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            description: string;
            requiredDays: number;
        }, {
            description: string;
            requiredDays?: number | undefined;
        }>;
        test: z.ZodOptional<z.ZodObject<{
            requiredGoal: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
            }>]>;
            requiredDays: z.ZodDefault<z.ZodNumber>;
            requireContiguousDays: z.ZodDefault<z.ZodBoolean>;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            description: string;
            requiredDays: number;
            requiredGoal: {
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
            };
            requireContiguousDays: boolean;
        }, {
            description: string;
            requiredGoal: {
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
            };
            requiredDays?: number | undefined;
            requireContiguousDays?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        baseline: {
            description: string;
            requiredDays: number;
        };
        test?: {
            description: string;
            requiredDays: number;
            requiredGoal: {
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
            };
            requireContiguousDays: boolean;
        } | undefined;
    }, {
        baseline: {
            description: string;
            requiredDays?: number | undefined;
        };
        test?: {
            description: string;
            requiredGoal: {
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
            };
            requiredDays?: number | undefined;
            requireContiguousDays?: boolean | undefined;
        } | undefined;
    }>;
    daySummaries: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        userId: z.ZodString;
        impulseThreadOutcomesById: z.ZodRecord<z.ZodString, z.ZodEnum<["success", "partial", "setback"]>>;
        outcome: z.ZodOptional<z.ZodEnum<["success", "partial", "setback"]>>;
        behaviorDataTotalByBehaviorId: z.ZodRecord<z.ZodString, z.ZodObject<{
            behaviorId: z.ZodString;
            behaviorName: z.ZodString;
            behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
            trackingType: z.ZodEnum<["counter", "timer"]>;
            category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
            value: z.ZodNumber;
            formattedValue: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }>>;
        behaviorsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodEffects<z.ZodObject<{
            name: z.ZodString;
            category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
            hasQuestions: z.ZodOptional<z.ZodBoolean>;
            trackingType: z.ZodEnum<["counter", "timer"]>;
            trackingUnit: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
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
            lastTrackedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            tactics: z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>;
            initialUsage: z.ZodOptional<z.ZodObject<{
                behaviorId: z.ZodString;
                behaviorName: z.ZodString;
                behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
                trackingType: z.ZodEnum<["counter", "timer"]>;
                category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
                value: z.ZodNumber;
                formattedValue: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            }, {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            }>>;
            hidden: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            impulseQuestions: z.ZodOptional<z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">>;
            debriefQuestions: z.ZodOptional<z.ZodObject<{
                success: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
                setback: z.ZodArray<z.ZodType<import("../..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../..").DocumentReferenceLike<unknown>>, "many">;
            }, "strip", z.ZodTypeAny, {
                setback: import("../..").DocumentReferenceLike<unknown>[];
                success: import("../..").DocumentReferenceLike<unknown>[];
            }, {
                setback: import("../..").DocumentReferenceLike<unknown>[];
                success: import("../..").DocumentReferenceLike<unknown>[];
            }>>;
            activePlanId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            ordinal: number;
            benefits: string[];
            drawbacks: string[];
            hidden: boolean;
            activePlanId: string;
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
            impulseQuestions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            debriefQuestions?: {
                setback: import("../..").DocumentReferenceLike<unknown>[];
                success: import("../..").DocumentReferenceLike<unknown>[];
            } | undefined;
        }, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            benefits: string[];
            drawbacks: string[];
            activePlanId: string;
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            hasQuestions?: boolean | undefined;
            trackingUnit?: string | undefined;
            ordinal?: number | undefined;
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
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
            hidden?: boolean | undefined;
            impulseQuestions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            debriefQuestions?: {
                setback: import("../..").DocumentReferenceLike<unknown>[];
                success: import("../..").DocumentReferenceLike<unknown>[];
            } | undefined;
        }>, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            ordinal: number;
            benefits: string[];
            drawbacks: string[];
            hidden: boolean;
            activePlanId: string;
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
            impulseQuestions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            debriefQuestions?: {
                setback: import("../..").DocumentReferenceLike<unknown>[];
                success: import("../..").DocumentReferenceLike<unknown>[];
            } | undefined;
        }, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            benefits: string[];
            drawbacks: string[];
            activePlanId: string;
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            hasQuestions?: boolean | undefined;
            trackingUnit?: string | undefined;
            ordinal?: number | undefined;
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
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
            hidden?: boolean | undefined;
            impulseQuestions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            debriefQuestions?: {
                setback: import("../..").DocumentReferenceLike<unknown>[];
                success: import("../..").DocumentReferenceLike<unknown>[];
            } | undefined;
        }>>>;
        trackingLogsById: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        tacticsUsed: z.ZodDefault<z.ZodArray<z.ZodAny, "many">>;
        summaryText: z.ZodDefault<z.ZodString>;
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
        recapCompletedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        recapStartedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        impulseThreadOutcomesById: Record<string, "setback" | "success" | "partial">;
        behaviorDataTotalByBehaviorId: Record<string, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }>;
        tacticsUsed: any[];
        summaryText: string;
        sharedWithUserIds: string[];
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        outcome?: "setback" | "success" | "partial" | undefined;
        behaviorsById?: Record<string, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            ordinal: number;
            benefits: string[];
            drawbacks: string[];
            hidden: boolean;
            activePlanId: string;
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
            impulseQuestions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            debriefQuestions?: {
                setback: import("../..").DocumentReferenceLike<unknown>[];
                success: import("../..").DocumentReferenceLike<unknown>[];
            } | undefined;
        }> | undefined;
        trackingLogsById?: Record<string, any> | undefined;
        supportGroupPermissionsById?: Record<string, {
            summary: boolean;
            dayOutcomes: boolean;
            impulseMoments: boolean;
            threads: boolean;
        }> | undefined;
        goalComparisonByBehaviorId?: Record<string, {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
            goalLabel: string;
            unit: string;
            measured: number;
            targetValue?: number | undefined;
        }> | undefined;
        recapCompletedAt?: import("../../types").Timestamp | undefined;
        recapStartedAt?: import("../../types").Timestamp | undefined;
    }, {
        userId: string;
        impulseThreadOutcomesById: Record<string, "setback" | "success" | "partial">;
        behaviorDataTotalByBehaviorId: Record<string, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }>;
        sharedWithUserIds: string[];
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        outcome?: "setback" | "success" | "partial" | undefined;
        behaviorsById?: Record<string, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            benefits: string[];
            drawbacks: string[];
            activePlanId: string;
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            hasQuestions?: boolean | undefined;
            trackingUnit?: string | undefined;
            ordinal?: number | undefined;
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
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
            hidden?: boolean | undefined;
            impulseQuestions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            debriefQuestions?: {
                setback: import("../..").DocumentReferenceLike<unknown>[];
                success: import("../..").DocumentReferenceLike<unknown>[];
            } | undefined;
        }> | undefined;
        trackingLogsById?: Record<string, any> | undefined;
        tacticsUsed?: any[] | undefined;
        summaryText?: string | undefined;
        supportGroupPermissionsById?: Record<string, {
            summary?: boolean | undefined;
            dayOutcomes?: boolean | undefined;
            impulseMoments?: boolean | undefined;
            threads?: boolean | undefined;
        }> | undefined;
        goalComparisonByBehaviorId?: Record<string, {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
            goalLabel: string;
            unit: string;
            measured: number;
            targetValue?: number | undefined;
        }> | undefined;
        recapCompletedAt?: import("../../types").Timestamp | undefined;
        recapStartedAt?: import("../../types").Timestamp | undefined;
    }>>>;
    requirementsMet: z.ZodObject<{
        baseline: z.ZodRecord<z.ZodString, z.ZodBoolean>;
        test: z.ZodRecord<z.ZodString, z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        baseline: Record<string, boolean>;
        test: Record<string, boolean>;
    }, {
        baseline: Record<string, boolean>;
        test: Record<string, boolean>;
    }>;
    completion: z.ZodObject<{
        baseline: z.ZodObject<{
            startDateString: z.ZodString;
            days: z.ZodArray<z.ZodObject<{
                date: z.ZodString;
                requirementsMet: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                date: string;
                requirementsMet: boolean;
            }, {
                date: string;
                requirementsMet: boolean;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            startDateString: string;
            days: {
                date: string;
                requirementsMet: boolean;
            }[];
        }, {
            startDateString: string;
            days: {
                date: string;
                requirementsMet: boolean;
            }[];
        }>;
        test: z.ZodObject<{
            startDateString: z.ZodString;
            days: z.ZodArray<z.ZodObject<{
                date: z.ZodString;
                requirementsMet: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                date: string;
                requirementsMet: boolean;
            }, {
                date: string;
                requirementsMet: boolean;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            startDateString: string;
            days: {
                date: string;
                requirementsMet: boolean;
            }[];
        }, {
            startDateString: string;
            days: {
                date: string;
                requirementsMet: boolean;
            }[];
        }>;
    }, "strip", z.ZodTypeAny, {
        baseline: {
            startDateString: string;
            days: {
                date: string;
                requirementsMet: boolean;
            }[];
        };
        test: {
            startDateString: string;
            days: {
                date: string;
                requirementsMet: boolean;
            }[];
        };
    }, {
        baseline: {
            startDateString: string;
            days: {
                date: string;
                requirementsMet: boolean;
            }[];
        };
        test: {
            startDateString: string;
            days: {
                date: string;
                requirementsMet: boolean;
            }[];
        };
    }>;
    currentPhase: z.ZodDefault<z.ZodEnum<["baseline", "test", "results"]>>;
}, "strip", z.ZodTypeAny, {
    behaviorId: string;
    name: string;
    questionIds: string[];
    subtitle: string;
    config: {
        baseline: {
            description: string;
            requiredDays: number;
        };
        test?: {
            description: string;
            requiredDays: number;
            requiredGoal: {
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
            };
            requireContiguousDays: boolean;
        } | undefined;
    };
    daySummaries: Record<string, {
        userId: string;
        impulseThreadOutcomesById: Record<string, "setback" | "success" | "partial">;
        behaviorDataTotalByBehaviorId: Record<string, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }>;
        tacticsUsed: any[];
        summaryText: string;
        sharedWithUserIds: string[];
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        outcome?: "setback" | "success" | "partial" | undefined;
        behaviorsById?: Record<string, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            ordinal: number;
            benefits: string[];
            drawbacks: string[];
            hidden: boolean;
            activePlanId: string;
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
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
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
            impulseQuestions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            debriefQuestions?: {
                setback: import("../..").DocumentReferenceLike<unknown>[];
                success: import("../..").DocumentReferenceLike<unknown>[];
            } | undefined;
        }> | undefined;
        trackingLogsById?: Record<string, any> | undefined;
        supportGroupPermissionsById?: Record<string, {
            summary: boolean;
            dayOutcomes: boolean;
            impulseMoments: boolean;
            threads: boolean;
        }> | undefined;
        goalComparisonByBehaviorId?: Record<string, {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
            goalLabel: string;
            unit: string;
            measured: number;
            targetValue?: number | undefined;
        }> | undefined;
        recapCompletedAt?: import("../../types").Timestamp | undefined;
        recapStartedAt?: import("../../types").Timestamp | undefined;
    }>;
    requirementsMet: {
        baseline: Record<string, boolean>;
        test: Record<string, boolean>;
    };
    completion: {
        baseline: {
            startDateString: string;
            days: {
                date: string;
                requirementsMet: boolean;
            }[];
        };
        test: {
            startDateString: string;
            days: {
                date: string;
                requirementsMet: boolean;
            }[];
        };
    };
    currentPhase: "results" | "baseline" | "test";
    startedAt?: import("../../types").Timestamp | undefined;
}, {
    behaviorId: string;
    name: string;
    questionIds: string[];
    subtitle: string;
    config: {
        baseline: {
            description: string;
            requiredDays?: number | undefined;
        };
        test?: {
            description: string;
            requiredGoal: {
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
            };
            requiredDays?: number | undefined;
            requireContiguousDays?: boolean | undefined;
        } | undefined;
    };
    requirementsMet: {
        baseline: Record<string, boolean>;
        test: Record<string, boolean>;
    };
    completion: {
        baseline: {
            startDateString: string;
            days: {
                date: string;
                requirementsMet: boolean;
            }[];
        };
        test: {
            startDateString: string;
            days: {
                date: string;
                requirementsMet: boolean;
            }[];
        };
    };
    startedAt?: import("../../types").Timestamp | undefined;
    daySummaries?: Record<string, {
        userId: string;
        impulseThreadOutcomesById: Record<string, "setback" | "success" | "partial">;
        behaviorDataTotalByBehaviorId: Record<string, {
            value: number;
            behaviorId: string;
            behaviorName: string;
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            formattedValue: string;
            behaviorTrackingUnit?: string | undefined;
        }>;
        sharedWithUserIds: string[];
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        outcome?: "setback" | "success" | "partial" | undefined;
        behaviorsById?: Record<string, {
            trackingType: "counter" | "timer";
            category: "helpful" | "mixed" | "unhelpful" | "unsure";
            name: string;
            description: string;
            benefits: string[];
            drawbacks: string[];
            activePlanId: string;
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            hasQuestions?: boolean | undefined;
            trackingUnit?: string | undefined;
            ordinal?: number | undefined;
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
            lastTrackedAt?: import("../../types").Timestamp | undefined;
            tactics?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            initialUsage?: {
                value: number;
                behaviorId: string;
                behaviorName: string;
                trackingType: "counter" | "timer";
                category: "helpful" | "mixed" | "unhelpful" | "unsure";
                formattedValue: string;
                behaviorTrackingUnit?: string | undefined;
            } | undefined;
            hidden?: boolean | undefined;
            impulseQuestions?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            debriefQuestions?: {
                setback: import("../..").DocumentReferenceLike<unknown>[];
                success: import("../..").DocumentReferenceLike<unknown>[];
            } | undefined;
        }> | undefined;
        trackingLogsById?: Record<string, any> | undefined;
        tacticsUsed?: any[] | undefined;
        summaryText?: string | undefined;
        supportGroupPermissionsById?: Record<string, {
            summary?: boolean | undefined;
            dayOutcomes?: boolean | undefined;
            impulseMoments?: boolean | undefined;
            threads?: boolean | undefined;
        }> | undefined;
        goalComparisonByBehaviorId?: Record<string, {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
            goalLabel: string;
            unit: string;
            measured: number;
            targetValue?: number | undefined;
        }> | undefined;
        recapCompletedAt?: import("../../types").Timestamp | undefined;
        recapStartedAt?: import("../../types").Timestamp | undefined;
    }> | undefined;
    currentPhase?: "results" | "baseline" | "test" | undefined;
}>;
export type ExperimentPhase = z.infer<typeof experimentPhaseEnum>;
export type Experiment = z.infer<typeof experimentSchema>;
