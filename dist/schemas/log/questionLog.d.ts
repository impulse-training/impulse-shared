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
            scope?: "impulse" | "recap" | undefined;
            suggestedResponses?: string[] | undefined;
            content: string;
            responseType: "text";
        } | {
            id?: string | undefined;
            scope?: "impulse" | "recap" | undefined;
            content: string;
            responseType: "slider";
            suggestedResponses: (string | undefined)[];
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
                defaultValue?: number | undefined;
                min: number;
                max: number;
                step: number;
            };
        } | {
            id?: string | undefined;
            scope?: "impulse" | "recap" | undefined;
            content: string;
            responseType: "multiple_choice";
            suggestedResponses: (string | undefined)[];
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
        question: undefined;
        response: null;
    };
}, "">;
export type QuestionLog = yup.InferType<typeof questionLogSchema>;
