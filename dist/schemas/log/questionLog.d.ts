import * as yup from "yup";
declare const responseSchema: yup.ObjectSchema<{
    responseType: NonNullable<"text" | "recap" | "slider1To10" | undefined>;
    value: any;
    formattedValue: string;
    color: string | undefined;
    iconName: string | undefined;
}, yup.AnyObject, {
    responseType: undefined;
    value: undefined;
    formattedValue: undefined;
    color: undefined;
    iconName: undefined;
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
        response?: {
            color?: string | undefined;
            value?: any;
            iconName?: string | undefined;
            formattedValue: string;
            responseType: NonNullable<"text" | "recap" | "slider1To10" | undefined>;
        } | undefined;
        questionId?: string | undefined;
        question: {
            id?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "recapPlan" | undefined;
            isTemplate: boolean;
            content: string;
            numberOfAnswers: number;
            responseType: "recap";
        } | {
            id?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "recapPlan" | undefined;
            isTemplate: boolean;
            content: string;
            numberOfAnswers: number;
            responseType: "slider1To10";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
                defaultValue?: number | undefined;
                min: number;
                max: number;
                step: number;
            };
            suggestedResponses: (string | undefined)[];
        } | {
            id?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            plans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "recapPlan" | undefined;
            suggestedResponses?: string[] | undefined;
            isTemplate: boolean;
            content: string;
            numberOfAnswers: number;
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
