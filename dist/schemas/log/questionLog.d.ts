import * as yup from "yup";
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
        response: {} | null;
        question: {
            id?: string | undefined;
            lastAskedAt?: import("../../types").Timestamp | undefined;
            lastAnsweredAt?: import("../../types").Timestamp | undefined;
            gameplans?: import("../..").DocumentReferenceLike<unknown>[] | undefined;
            isPinned?: boolean | undefined;
            scope?: "impulse" | "checkIn" | undefined;
            content: string;
            numberOfAnswers: number;
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
            scope?: "impulse" | "checkIn" | undefined;
            suggestedResponses?: string[] | undefined;
            content: string;
            numberOfAnswers: number;
            responseType: "text";
        };
        questionId: string;
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
        response: null;
    };
}, "">;
export type QuestionLog = yup.InferType<typeof questionLogSchema>;
