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
        question: z.ZodAny;
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
        question?: any;
        questionId?: string | undefined;
        response?: {
            formattedValue: string;
            responseType: "recap" | "text" | "slider1To10";
            value?: any;
            color?: string | undefined;
        } | undefined;
    }, {
        question?: any;
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
        question?: any;
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
        question?: any;
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
