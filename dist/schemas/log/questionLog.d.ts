import * as yup from "yup";
declare const responseSchema: yup.ObjectSchema<{
    responseType: NonNullable<"text" | "recap" | "slider" | undefined>;
    value: any;
    color: string | undefined;
    iconName: string | undefined;
}, yup.AnyObject, {
    responseType: undefined;
    value: undefined;
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
        questionId?: string | undefined;
        response: {
            color?: string | undefined;
            value?: any;
            iconName?: string | undefined;
            responseType: NonNullable<"text" | "recap" | "slider" | undefined>;
        };
        question: {
            id?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            gameplans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "recapRoutine" | undefined;
            content: string;
            numberOfAnswers: number;
            isTemplate: boolean;
            responseType: "recap";
        } | {
            id?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            gameplans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "recapRoutine" | undefined;
            content: string;
            numberOfAnswers: number;
            isTemplate: boolean;
            responseType: "slider";
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
            gameplans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "recapRoutine" | undefined;
            suggestedResponses?: string[] | undefined;
            content: string;
            numberOfAnswers: number;
            isTemplate: boolean;
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
        response: {
            responseType: undefined;
            value: undefined;
            color: undefined;
            iconName: undefined;
        };
    };
}, "">;
export type QuestionLog = yup.InferType<typeof questionLogSchema>;
export {};
