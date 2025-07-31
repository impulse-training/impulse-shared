import * as yup from "yup";
declare const responseSchema: yup.ObjectSchema<{
    responseType: NonNullable<"recap" | "text" | "slider1To10" | undefined>;
    value: any;
    formattedValue: string;
    color: string | undefined;
}, yup.AnyObject, {
    responseType: undefined;
    value: undefined;
    formattedValue: undefined;
    color: undefined;
}, "">;
export type Response = yup.InferType<typeof responseSchema>;
export declare const questionLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    callLogDocPath: string | undefined;
    type: "question";
    isDisplayable: true;
    data: {
        questionId?: string | undefined;
        response?: {
            value?: any;
            color?: string | undefined;
            formattedValue: string;
            responseType: NonNullable<"recap" | "text" | "slider1To10" | undefined>;
        } | undefined;
        question: {
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "plan" | undefined;
            isTemplate: boolean;
            question: string;
            responseType: "recap";
        } | {
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "plan" | undefined;
            isTemplate: boolean;
            question: string;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
        } | {
            id?: string | undefined;
            createdAt?: import("../../types").Timestamp | undefined;
            updatedAt?: import("../../types").Timestamp | undefined;
            text?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "plan" | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate: boolean;
            question: string;
            responseType: "text";
        };
    };
}, yup.AnyObject, {
    id: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    userId: undefined;
    timestamp: undefined;
    dateString: undefined;
    callLogDocPath: undefined;
    type: undefined;
    isDisplayable: undefined;
    data: {
        questionId: undefined;
        question: undefined;
        response: undefined;
    };
}, "">;
export type QuestionLog = yup.InferType<typeof questionLogSchema>;
export {};
