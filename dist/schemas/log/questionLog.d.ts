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
} & {
    type: z.ZodLiteral<"question">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        questionId: z.ZodOptional<z.ZodString>;
        question: z.ZodDiscriminatedUnion<"responseType", [z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodOptional<z.ZodString>;
            question: z.ZodString;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"text">;
            scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
        } & {
            suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            isTemplate: boolean;
            question: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
            suggestedResponses?: string[] | undefined;
        }, {
            question: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
            suggestedResponses?: string[] | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodOptional<z.ZodString>;
            question: z.ZodString;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"slider1To10">;
            scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
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
            isTemplate: boolean;
            question: string;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        }, {
            question: string;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            text: z.ZodOptional<z.ZodString>;
            question: z.ZodString;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"recap">;
            scope: z.ZodOptional<z.ZodEnum<["impulse" | "debrief" | "recap", ...("impulse" | "debrief" | "recap")[]]>>;
        }, "strip", z.ZodTypeAny, {
            isTemplate: boolean;
            question: string;
            responseType: "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        }, {
            question: string;
            responseType: "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
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
            isTemplate: boolean;
            question: string;
            responseType: "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            isTemplate: boolean;
            question: string;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            isTemplate: boolean;
            question: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
            suggestedResponses?: string[] | undefined;
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
            question: string;
            responseType: "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            question: string;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            question: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
            suggestedResponses?: string[] | undefined;
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
            isTemplate: boolean;
            question: string;
            responseType: "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            isTemplate: boolean;
            question: string;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            isTemplate: boolean;
            question: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
            suggestedResponses?: string[] | undefined;
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
}, {
    type: "question";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        question: {
            question: string;
            responseType: "recap";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            question: string;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
        } | {
            question: string;
            responseType: "text";
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            id?: string | undefined;
            text?: string | undefined;
            isTemplate?: boolean | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "debrief" | "recap" | undefined;
            suggestedResponses?: string[] | undefined;
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
}>;
export type QuestionLog = z.infer<typeof questionLogSchema>;
export {};
