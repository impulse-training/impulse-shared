import { z } from "zod";
declare const responseSchema: z.ZodObject<{
    responseType: z.ZodEnum<["text", "slider1To10", "recap"]>;
    value: z.ZodAny;
    formattedValue: z.ZodString;
    color: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    formattedValue: string;
    responseType: "recap" | "text" | "slider1To10";
    value?: any;
    color?: string | undefined;
}, {
    formattedValue: string;
    responseType: "recap" | "text" | "slider1To10";
    value?: any;
    color?: string | undefined;
}>;
export type Response = z.infer<typeof responseSchema>;
export declare const questionLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
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
            behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"text">;
            scope: z.ZodOptional<z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        }, {
            text: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
            behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"shortText">;
            scope: z.ZodOptional<z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>>;
        } & {
            suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        }, {
            text: string;
            responseType: "shortText";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodString;
            behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"slider1To10">;
            scope: z.ZodOptional<z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>>;
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
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        }, {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            responseType: "slider1To10";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        }>]>;
        response: z.ZodOptional<z.ZodObject<{
            responseType: z.ZodEnum<["text", "slider1To10", "recap"]>;
            value: z.ZodAny;
            formattedValue: z.ZodString;
            color: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            formattedValue: string;
            responseType: "recap" | "text" | "slider1To10";
            value?: any;
            color?: string | undefined;
        }, {
            formattedValue: string;
            responseType: "recap" | "text" | "slider1To10";
            value?: any;
            color?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        question: {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        } | {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            isTemplate: boolean;
            responseType: "slider1To10";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "recap" | "text" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    }, {
        question: {
            text: string;
            responseType: "shortText";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        } | {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            responseType: "slider1To10";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        } | {
            text: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "recap" | "text" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "question";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        question: {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        } | {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            isTemplate: boolean;
            responseType: "slider1To10";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "recap" | "text" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}, {
    type: "question";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        question: {
            text: string;
            responseType: "shortText";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        } | {
            text: string;
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            responseType: "slider1To10";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        } | {
            text: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            isTemplate?: boolean | undefined;
            behaviorIds?: string[] | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "setback" | "success" | "recap" | undefined;
        };
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "recap" | "text" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    };
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    id?: string | undefined;
    callLogDocPath?: string | undefined;
    replyTactic?: {
        currentStepIndex: number;
        tactic?: any;
    } | undefined;
}>;
export type QuestionLog = z.infer<typeof questionLogSchema>;
export {};
