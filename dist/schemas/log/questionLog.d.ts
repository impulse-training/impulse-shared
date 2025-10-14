import { z } from "zod";
declare const responseSchema: z.ZodObject<{
    responseType: z.ZodEnum<["text", "shortText", "emotion", "slider1To10", "behaviorSelection", "recap"]>;
    value: z.ZodUnion<[z.ZodAny, z.ZodArray<z.ZodAny, "many">]>;
    formattedValue: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    formattedValue: string;
    responseType: "text" | "recap" | "behaviorSelection" | "emotion" | "shortText" | "slider1To10";
    value?: any;
    color?: string | undefined;
}, {
    formattedValue: string;
    responseType: "text" | "recap" | "behaviorSelection" | "emotion" | "shortText" | "slider1To10";
    value?: any;
    color?: string | undefined;
}>;
export type Response = z.infer<typeof responseSchema>;
export declare const questionLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    callLogDocPath: z.ZodOptional<z.ZodString>;
    replyTactic: z.ZodOptional<z.ZodObject<{
        tactic: z.ZodAny;
        currentStepIndex: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currentStepIndex: number;
        tactic?: any;
    }, {
        currentStepIndex: number;
        tactic?: any;
    }>>;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            debriefBehaviors?: {
                setback: string[];
                success: string[];
            } | undefined;
            allowMultiple?: boolean | undefined;
        }>]>;
        response: z.ZodOptional<z.ZodObject<{
            responseType: z.ZodEnum<["text", "shortText", "emotion", "slider1To10", "behaviorSelection", "recap"]>;
            value: z.ZodUnion<[z.ZodAny, z.ZodArray<z.ZodAny, "many">]>;
            formattedValue: z.ZodString;
            color: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            formattedValue: string;
            responseType: "text" | "recap" | "behaviorSelection" | "emotion" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        }, {
            formattedValue: string;
            responseType: "text" | "recap" | "behaviorSelection" | "emotion" | "shortText" | "slider1To10";
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
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
            responseType: "text" | "recap" | "behaviorSelection" | "emotion" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    }, {
        question: {
            text: string;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
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
            responseType: "text" | "recap" | "behaviorSelection" | "emotion" | "shortText" | "slider1To10";
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
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
            responseType: "text" | "recap" | "behaviorSelection" | "emotion" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
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
            responseType: "text" | "recap" | "behaviorSelection" | "emotion" | "shortText" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>;
export type QuestionLog = z.infer<typeof questionLogSchema>;
export {};
