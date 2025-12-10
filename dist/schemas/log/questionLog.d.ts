import { z } from "zod";
/** Schema for recap response value - includes behavior totals, goals, and behaviors snapshot */
export declare const recapResponseValueSchema: z.ZodObject<{
    behaviorTotals: z.ZodRecord<z.ZodString, z.ZodObject<{
        value: z.ZodNumber;
        formattedValue: z.ZodString;
        behaviorName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: number;
        behaviorName: string;
        formattedValue: string;
    }, {
        value: number;
        behaviorName: string;
        formattedValue: string;
    }>>;
    summaryText: z.ZodString;
    /** Goal comparison data keyed by behaviorId */
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
    /** Snapshot of behaviors at the time of recap, keyed by behaviorId */
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
}, "strip", z.ZodTypeAny, {
    summaryText: string;
    behaviorTotals: Record<string, {
        value: number;
        behaviorName: string;
        formattedValue: string;
    }>;
    goalComparisonByBehaviorId?: Record<string, {
        status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
        goalLabel: string;
        unit: string;
        measured: number;
        targetValue?: number | undefined;
    }> | undefined;
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
}, {
    summaryText: string;
    behaviorTotals: Record<string, {
        value: number;
        behaviorName: string;
        formattedValue: string;
    }>;
    goalComparisonByBehaviorId?: Record<string, {
        status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY" | "NO_GOAL";
        goalLabel: string;
        unit: string;
        measured: number;
        targetValue?: number | undefined;
    }> | undefined;
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
}>;
export type RecapResponseValue = z.infer<typeof recapResponseValueSchema>;
declare const responseSchema: z.ZodObject<{
    responseType: z.ZodEnum<["text", "shortText", "emotion", "slider1To10", "behaviorSelection", "recap"]>;
    value: z.ZodUnion<[z.ZodAny, z.ZodArray<z.ZodAny, "many">]>;
    formattedValue: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    formattedValue: string;
    responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
    value?: any;
    color?: string | undefined;
}, {
    formattedValue: string;
    responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
    value?: any;
    color?: string | undefined;
}>;
export type Response = z.infer<typeof responseSchema>;
/** Single question with its response */
declare const questionEntrySchema: z.ZodObject<{
    questionId: z.ZodOptional<z.ZodString>;
    question: z.ZodDiscriminatedUnion<"responseType", [z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        text: z.ZodString;
        textAfterResponse: z.ZodOptional<z.ZodString>;
        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isPinned: z.ZodOptional<z.ZodBoolean>;
        responseType: z.ZodLiteral<"text">;
        scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        debriefBehaviors: z.ZodOptional<z.ZodObject<{
            success: z.ZodArray<z.ZodString, "many">;
            setback: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            setback: string[];
            success: string[];
        }, {
            setback: string[];
            success: string[];
        }>>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        isTemplate: boolean;
        responseType: "text";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    }, {
        text: string;
        responseType: "text";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        text: z.ZodString;
        textAfterResponse: z.ZodOptional<z.ZodString>;
        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isPinned: z.ZodOptional<z.ZodBoolean>;
        responseType: z.ZodLiteral<"emotion">;
        scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        debriefBehaviors: z.ZodOptional<z.ZodObject<{
            success: z.ZodArray<z.ZodString, "many">;
            setback: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            setback: string[];
            success: string[];
        }, {
            setback: string[];
            success: string[];
        }>>;
    } & {
        suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        isTemplate: boolean;
        responseType: "emotion";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        suggestedResponses?: string[] | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    }, {
        text: string;
        responseType: "emotion";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        suggestedResponses?: string[] | undefined;
        isTemplate?: boolean | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        text: z.ZodString;
        textAfterResponse: z.ZodOptional<z.ZodString>;
        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isPinned: z.ZodOptional<z.ZodBoolean>;
        responseType: z.ZodLiteral<"shortText">;
        scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        debriefBehaviors: z.ZodOptional<z.ZodObject<{
            success: z.ZodArray<z.ZodString, "many">;
            setback: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            setback: string[];
            success: string[];
        }, {
            setback: string[];
            success: string[];
        }>>;
    } & {
        suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        isTemplate: boolean;
        responseType: "shortText";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        suggestedResponses?: string[] | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    }, {
        text: string;
        responseType: "shortText";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        suggestedResponses?: string[] | undefined;
        isTemplate?: boolean | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        text: z.ZodString;
        textAfterResponse: z.ZodOptional<z.ZodString>;
        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isPinned: z.ZodOptional<z.ZodBoolean>;
        responseType: z.ZodLiteral<"slider1To10">;
        scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        debriefBehaviors: z.ZodOptional<z.ZodObject<{
            success: z.ZodArray<z.ZodString, "many">;
            setback: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            setback: string[];
            success: string[];
        }, {
            setback: string[];
            success: string[];
        }>>;
    } & {
        sliderConfig: z.ZodObject<{
            minLabel: z.ZodOptional<z.ZodString>;
            maxLabel: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        }, {
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        sliderConfig: {
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        };
        isTemplate: boolean;
        responseType: "slider1To10";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    }, {
        text: string;
        sliderConfig: {
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        };
        responseType: "slider1To10";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        text: z.ZodString;
        textAfterResponse: z.ZodOptional<z.ZodString>;
        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isPinned: z.ZodOptional<z.ZodBoolean>;
        responseType: z.ZodLiteral<"behaviorSelection">;
        scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        debriefBehaviors: z.ZodOptional<z.ZodObject<{
            success: z.ZodArray<z.ZodString, "many">;
            setback: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            setback: string[];
            success: string[];
        }, {
            setback: string[];
            success: string[];
        }>>;
    } & {
        allowMultiple: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        isTemplate: boolean;
        responseType: "behaviorSelection";
        scope: "impulse" | "setback" | "success" | "recap";
        allowMultiple: boolean;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    }, {
        text: string;
        responseType: "behaviorSelection";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
        allowMultiple?: boolean | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        text: z.ZodString;
        textAfterResponse: z.ZodOptional<z.ZodString>;
        lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        numberOfAnswers: z.ZodOptional<z.ZodNumber>;
        isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        isPinned: z.ZodOptional<z.ZodBoolean>;
        responseType: z.ZodLiteral<"recap">;
        scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        debriefBehaviors: z.ZodOptional<z.ZodObject<{
            success: z.ZodArray<z.ZodString, "many">;
            setback: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            setback: string[];
            success: string[];
        }, {
            setback: string[];
            success: string[];
        }>>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        isTemplate: boolean;
        responseType: "recap";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    }, {
        text: string;
        responseType: "recap";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    }>]>;
    response: z.ZodOptional<z.ZodObject<{
        responseType: z.ZodEnum<["text", "shortText", "emotion", "slider1To10", "behaviorSelection", "recap"]>;
        value: z.ZodUnion<[z.ZodAny, z.ZodArray<z.ZodAny, "many">]>;
        formattedValue: z.ZodString;
        color: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        formattedValue: string;
        responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
        value?: any;
        color?: string | undefined;
    }, {
        formattedValue: string;
        responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
        value?: any;
        color?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    question: {
        text: string;
        isTemplate: boolean;
        responseType: "behaviorSelection";
        scope: "impulse" | "setback" | "success" | "recap";
        allowMultiple: boolean;
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    } | {
        text: string;
        isTemplate: boolean;
        responseType: "emotion";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        suggestedResponses?: string[] | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    } | {
        text: string;
        isTemplate: boolean;
        responseType: "recap";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    } | {
        text: string;
        isTemplate: boolean;
        responseType: "shortText";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        suggestedResponses?: string[] | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    } | {
        text: string;
        sliderConfig: {
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        };
        isTemplate: boolean;
        responseType: "slider1To10";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    } | {
        text: string;
        isTemplate: boolean;
        responseType: "text";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    };
    questionId?: string | undefined;
    response?: {
        formattedValue: string;
        responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
        value?: any;
        color?: string | undefined;
    } | undefined;
}, {
    question: {
        text: string;
        responseType: "behaviorSelection";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
        allowMultiple?: boolean | undefined;
    } | {
        text: string;
        responseType: "emotion";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        suggestedResponses?: string[] | undefined;
        isTemplate?: boolean | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    } | {
        text: string;
        responseType: "recap";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    } | {
        text: string;
        responseType: "shortText";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        suggestedResponses?: string[] | undefined;
        isTemplate?: boolean | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    } | {
        text: string;
        sliderConfig: {
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
        };
        responseType: "slider1To10";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    } | {
        text: string;
        responseType: "text";
        scope: "impulse" | "setback" | "success" | "recap";
        id?: string | undefined;
        createdAt?: import("../../types").Timestamp | undefined;
        updatedAt?: import("../../types").Timestamp | undefined;
        isTemplate?: boolean | undefined;
        textAfterResponse?: string | undefined;
        lastAskedAt?: import("../../types").Timestamp | undefined;
        lastAnsweredAt?: import("../../types").Timestamp | undefined;
        numberOfAnswers?: number | undefined;
        isPinned?: boolean | undefined;
        debriefBehaviors?: {
            setback: string[];
            success: string[];
        } | undefined;
    };
    questionId?: string | undefined;
    response?: {
        formattedValue: string;
        responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
        value?: any;
        color?: string | undefined;
    } | undefined;
}>;
export type QuestionEntry = z.infer<typeof questionEntrySchema>;
/**
 * Multi-question log - supports multiple questions and their responses.
 * Used for experiment metrics and other multi-question scenarios.
 */
export declare const questionsLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"questions">;
    isDisplayable: z.ZodLiteral<true>;
    /** Display text shown above the questions */
    text: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        /** Array of questions with their responses */
        questions: z.ZodArray<z.ZodObject<{
            questionId: z.ZodOptional<z.ZodString>;
            question: z.ZodDiscriminatedUnion<"responseType", [z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodString;
                textAfterResponse: z.ZodOptional<z.ZodString>;
                lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isPinned: z.ZodOptional<z.ZodBoolean>;
                responseType: z.ZodLiteral<"text">;
                scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
                debriefBehaviors: z.ZodOptional<z.ZodObject<{
                    success: z.ZodArray<z.ZodString, "many">;
                    setback: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    setback: string[];
                    success: string[];
                }, {
                    setback: string[];
                    success: string[];
                }>>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                isTemplate: boolean;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            }, {
                text: string;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodString;
                textAfterResponse: z.ZodOptional<z.ZodString>;
                lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isPinned: z.ZodOptional<z.ZodBoolean>;
                responseType: z.ZodLiteral<"emotion">;
                scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
                debriefBehaviors: z.ZodOptional<z.ZodObject<{
                    success: z.ZodArray<z.ZodString, "many">;
                    setback: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    setback: string[];
                    success: string[];
                }, {
                    setback: string[];
                    success: string[];
                }>>;
            } & {
                suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                isTemplate: boolean;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            }, {
                text: string;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodString;
                textAfterResponse: z.ZodOptional<z.ZodString>;
                lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isPinned: z.ZodOptional<z.ZodBoolean>;
                responseType: z.ZodLiteral<"shortText">;
                scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
                debriefBehaviors: z.ZodOptional<z.ZodObject<{
                    success: z.ZodArray<z.ZodString, "many">;
                    setback: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    setback: string[];
                    success: string[];
                }, {
                    setback: string[];
                    success: string[];
                }>>;
            } & {
                suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                isTemplate: boolean;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            }, {
                text: string;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodString;
                textAfterResponse: z.ZodOptional<z.ZodString>;
                lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isPinned: z.ZodOptional<z.ZodBoolean>;
                responseType: z.ZodLiteral<"slider1To10">;
                scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
                debriefBehaviors: z.ZodOptional<z.ZodObject<{
                    success: z.ZodArray<z.ZodString, "many">;
                    setback: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    setback: string[];
                    success: string[];
                }, {
                    setback: string[];
                    success: string[];
                }>>;
            } & {
                sliderConfig: z.ZodObject<{
                    minLabel: z.ZodOptional<z.ZodString>;
                    maxLabel: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                }, {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                isTemplate: boolean;
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            }, {
                text: string;
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodString;
                textAfterResponse: z.ZodOptional<z.ZodString>;
                lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isPinned: z.ZodOptional<z.ZodBoolean>;
                responseType: z.ZodLiteral<"behaviorSelection">;
                scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
                debriefBehaviors: z.ZodOptional<z.ZodObject<{
                    success: z.ZodArray<z.ZodString, "many">;
                    setback: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    setback: string[];
                    success: string[];
                }, {
                    setback: string[];
                    success: string[];
                }>>;
            } & {
                allowMultiple: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                isTemplate: boolean;
                responseType: "behaviorSelection";
                scope: "impulse" | "setback" | "success" | "recap";
                allowMultiple: boolean;
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            }, {
                text: string;
                responseType: "behaviorSelection";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
                allowMultiple?: boolean | undefined;
            }>, z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                text: z.ZodString;
                textAfterResponse: z.ZodOptional<z.ZodString>;
                lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
                numberOfAnswers: z.ZodOptional<z.ZodNumber>;
                isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                isPinned: z.ZodOptional<z.ZodBoolean>;
                responseType: z.ZodLiteral<"recap">;
                scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
                debriefBehaviors: z.ZodOptional<z.ZodObject<{
                    success: z.ZodArray<z.ZodString, "many">;
                    setback: z.ZodArray<z.ZodString, "many">;
                }, "strip", z.ZodTypeAny, {
                    setback: string[];
                    success: string[];
                }, {
                    setback: string[];
                    success: string[];
                }>>;
            }, "strip", z.ZodTypeAny, {
                text: string;
                isTemplate: boolean;
                responseType: "recap";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            }, {
                text: string;
                responseType: "recap";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            }>]>;
            response: z.ZodOptional<z.ZodObject<{
                responseType: z.ZodEnum<["text", "shortText", "emotion", "slider1To10", "behaviorSelection", "recap"]>;
                value: z.ZodUnion<[z.ZodAny, z.ZodArray<z.ZodAny, "many">]>;
                formattedValue: z.ZodString;
                color: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            }, {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            question: {
                text: string;
                isTemplate: boolean;
                responseType: "behaviorSelection";
                scope: "impulse" | "setback" | "success" | "recap";
                allowMultiple: boolean;
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "recap";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                isTemplate: boolean;
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
        }, {
            question: {
                text: string;
                responseType: "behaviorSelection";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
                allowMultiple?: boolean | undefined;
            } | {
                text: string;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                responseType: "recap";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        questions: {
            question: {
                text: string;
                isTemplate: boolean;
                responseType: "behaviorSelection";
                scope: "impulse" | "setback" | "success" | "recap";
                allowMultiple: boolean;
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "recap";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                isTemplate: boolean;
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
        }[];
    }, {
        questions: {
            question: {
                text: string;
                responseType: "behaviorSelection";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
                allowMultiple?: boolean | undefined;
            } | {
                text: string;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                responseType: "recap";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "questions";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        questions: {
            question: {
                text: string;
                isTemplate: boolean;
                responseType: "behaviorSelection";
                scope: "impulse" | "setback" | "success" | "recap";
                allowMultiple: boolean;
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "recap";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                isTemplate: boolean;
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                isTemplate: boolean;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
        }[];
    };
    id?: string | undefined;
    text?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "questions";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        questions: {
            question: {
                text: string;
                responseType: "behaviorSelection";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
                allowMultiple?: boolean | undefined;
            } | {
                text: string;
                responseType: "emotion";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                responseType: "recap";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                responseType: "shortText";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                suggestedResponses?: string[] | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                sliderConfig: {
                    minLabel?: string | undefined;
                    maxLabel?: string | undefined;
                };
                responseType: "slider1To10";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            } | {
                text: string;
                responseType: "text";
                scope: "impulse" | "setback" | "success" | "recap";
                id?: string | undefined;
                createdAt?: import("../../types").Timestamp | undefined;
                updatedAt?: import("../../types").Timestamp | undefined;
                isTemplate?: boolean | undefined;
                textAfterResponse?: string | undefined;
                lastAskedAt?: import("../../types").Timestamp | undefined;
                lastAnsweredAt?: import("../../types").Timestamp | undefined;
                numberOfAnswers?: number | undefined;
                isPinned?: boolean | undefined;
                debriefBehaviors?: {
                    setback: string[];
                    success: string[];
                } | undefined;
            };
            questionId?: string | undefined;
            response?: {
                formattedValue: string;
                responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
                value?: any;
                color?: string | undefined;
            } | undefined;
        }[];
    };
    id?: string | undefined;
    text?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
}>;
export type QuestionsLog = z.infer<typeof questionsLogSchema>;
/**
 * Single question log - legacy format for backward compatibility.
 * New code should use QuestionsLog instead.
 */
export declare const questionLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"question">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        questionId: z.ZodOptional<z.ZodString>;
        question: z.ZodDiscriminatedUnion<"responseType", [z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"text">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
            debriefBehaviors: z.ZodOptional<z.ZodObject<{
                success: z.ZodArray<z.ZodString, "many">;
                setback: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                setback: string[];
                success: string[];
            }, {
                setback: string[];
                success: string[];
            }>>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        }, {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"emotion">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
            debriefBehaviors: z.ZodOptional<z.ZodObject<{
                success: z.ZodArray<z.ZodString, "many">;
                setback: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                setback: string[];
                success: string[];
            }, {
                setback: string[];
                success: string[];
            }>>;
        } & {
            suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            suggestedResponses?: string[] | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        }, {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"shortText">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
            debriefBehaviors: z.ZodOptional<z.ZodObject<{
                success: z.ZodArray<z.ZodString, "many">;
                setback: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                setback: string[];
                success: string[];
            }, {
                setback: string[];
                success: string[];
            }>>;
        } & {
            suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            suggestedResponses?: string[] | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        }, {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"slider1To10">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
            debriefBehaviors: z.ZodOptional<z.ZodObject<{
                success: z.ZodArray<z.ZodString, "many">;
                setback: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                setback: string[];
                success: string[];
            }, {
                setback: string[];
                success: string[];
            }>>;
        } & {
            sliderConfig: z.ZodObject<{
                minLabel: z.ZodOptional<z.ZodString>;
                maxLabel: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            }, {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            isTemplate: boolean;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        }, {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"behaviorSelection">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
            debriefBehaviors: z.ZodOptional<z.ZodObject<{
                success: z.ZodArray<z.ZodString, "many">;
                setback: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                setback: string[];
                success: string[];
            }, {
                setback: string[];
                success: string[];
            }>>;
        } & {
            allowMultiple: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            allowMultiple: boolean;
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        }, {
            text: string;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
            allowMultiple?: boolean | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"recap">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
            debriefBehaviors: z.ZodOptional<z.ZodObject<{
                success: z.ZodArray<z.ZodString, "many">;
                setback: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                setback: string[];
                success: string[];
            }, {
                setback: string[];
                success: string[];
            }>>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        }, {
            text: string;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        }>]>;
        response: z.ZodOptional<z.ZodObject<{
            responseType: z.ZodEnum<["text", "shortText", "emotion", "slider1To10", "behaviorSelection", "recap"]>;
            value: z.ZodUnion<[z.ZodAny, z.ZodArray<z.ZodAny, "many">]>;
            formattedValue: z.ZodString;
            color: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            formattedValue: string;
            responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        }, {
            formattedValue: string;
            responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        question: {
            text: string;
            isTemplate: boolean;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            allowMultiple: boolean;
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            suggestedResponses?: string[] | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            suggestedResponses?: string[] | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            isTemplate: boolean;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    }, {
        question: {
            text: string;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
            allowMultiple?: boolean | undefined;
        } | {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "question";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        question: {
            text: string;
            isTemplate: boolean;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            allowMultiple: boolean;
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            suggestedResponses?: string[] | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            suggestedResponses?: string[] | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            isTemplate: boolean;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "question";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        question: {
            text: string;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
            allowMultiple?: boolean | undefined;
        } | {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        } | {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            isTemplate?: boolean | undefined;
            textAfterResponse?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "text" | "recap" | "emotion" | "behaviorSelection" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
}>;
export type QuestionLog = z.infer<typeof questionLogSchema>;
export declare const logIsQuestionLog: (value: {
    type: string;
}) => value is QuestionLog;
export {};
