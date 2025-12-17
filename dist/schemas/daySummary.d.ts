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
        impulseQuestions: z.ZodOptional<z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">>;
        debriefQuestions: z.ZodOptional<z.ZodObject<{
            success: z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">;
            setback: z.ZodArray<z.ZodType<import("..").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("..").DocumentReferenceLike<unknown>>, "many">;
        }, "strip", z.ZodTypeAny, {
            success: import("..").DocumentReferenceLike<unknown>[];
            setback: import("..").DocumentReferenceLike<unknown>[];
        }, {
            success: import("..").DocumentReferenceLike<unknown>[];
            setback: import("..").DocumentReferenceLike<unknown>[];
        }>>;
        activePlanId: z.ZodString;
        behaviorTopicId: z.ZodOptional<z.ZodEnum<[string, ...string[]]>>;
    }, "strip", z.ZodTypeAny, {
        trackingType: "counter" | "timer";
        name: string;
        description: string;
        ordinal: number;
        benefits: string[];
        drawbacks: string[];
        hidden: boolean;
        activePlanId: string;
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
        impulseQuestions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        debriefQuestions?: {
            success: import("..").DocumentReferenceLike<unknown>[];
            setback: import("..").DocumentReferenceLike<unknown>[];
        } | undefined;
        behaviorTopicId?: string | undefined;
    }, {
        trackingType: "counter" | "timer";
        name: string;
        description: string;
        benefits: string[];
        drawbacks: string[];
        activePlanId: string;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
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
        impulseQuestions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        debriefQuestions?: {
            success: import("..").DocumentReferenceLike<unknown>[];
            setback: import("..").DocumentReferenceLike<unknown>[];
        } | undefined;
        behaviorTopicId?: string | undefined;
    }>, {
        trackingType: "counter" | "timer";
        name: string;
        description: string;
        ordinal: number;
        benefits: string[];
        drawbacks: string[];
        hidden: boolean;
        activePlanId: string;
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
        impulseQuestions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        debriefQuestions?: {
            success: import("..").DocumentReferenceLike<unknown>[];
            setback: import("..").DocumentReferenceLike<unknown>[];
        } | undefined;
        behaviorTopicId?: string | undefined;
    }, {
        trackingType: "counter" | "timer";
        name: string;
        description: string;
        benefits: string[];
        drawbacks: string[];
        activePlanId: string;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
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
        impulseQuestions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        debriefQuestions?: {
            success: import("..").DocumentReferenceLike<unknown>[];
            setback: import("..").DocumentReferenceLike<unknown>[];
        } | undefined;
        behaviorTopicId?: string | undefined;
    }>>>;
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
    recapCompletedAt: z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    recapMarkedAsCompletedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    recapStartedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    summaryText: string;
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
    sharedWithUserIds: string[];
    recapCompletedAt: import("../types").Timestamp | null;
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
        activePlanId: string;
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
        impulseQuestions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        debriefQuestions?: {
            success: import("..").DocumentReferenceLike<unknown>[];
            setback: import("..").DocumentReferenceLike<unknown>[];
        } | undefined;
        behaviorTopicId?: string | undefined;
    }> | undefined;
    outcome?: "success" | "setback" | "partial" | undefined;
    supportGroupPermissionsById?: Record<string, {
        summary: boolean;
        dayOutcomes: boolean;
        impulseMoments: boolean;
        threads: boolean;
    }> | undefined;
    recapMarkedAsCompletedAt?: import("../types").Timestamp | undefined;
    recapStartedAt?: import("../types").Timestamp | undefined;
}, {
    userId: string;
    impulseThreadOutcomesById: Record<string, "success" | "setback" | "partial">;
    behaviorDataTotalByBehaviorId: Record<string, {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }>;
    sharedWithUserIds: string[];
    recapCompletedAt: import("../types").Timestamp | null;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    summaryText?: string | undefined;
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
        activePlanId: string;
        id?: string | undefined;
        createdAt?: import("../types").Timestamp | undefined;
        updatedAt?: import("../types").Timestamp | undefined;
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
        impulseQuestions?: import("..").DocumentReferenceLike<unknown>[] | undefined;
        debriefQuestions?: {
            success: import("..").DocumentReferenceLike<unknown>[];
            setback: import("..").DocumentReferenceLike<unknown>[];
        } | undefined;
        behaviorTopicId?: string | undefined;
    }> | undefined;
    outcome?: "success" | "setback" | "partial" | undefined;
    tacticsUsed?: any[] | undefined;
    supportGroupPermissionsById?: Record<string, {
        summary?: boolean | undefined;
        dayOutcomes?: boolean | undefined;
        impulseMoments?: boolean | undefined;
        threads?: boolean | undefined;
    }> | undefined;
    recapMarkedAsCompletedAt?: import("../types").Timestamp | undefined;
    recapStartedAt?: import("../types").Timestamp | undefined;
}>;
export type DaySummary = z.infer<typeof daySummarySchema>;
export declare function isValidDaySummary(value: unknown): value is DaySummary;
