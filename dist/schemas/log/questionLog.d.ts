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
        question: {
            id?: string | undefined;
            suggestedResponses?: (string | undefined)[] | undefined;
            sliderConfig?: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
                defaultValue?: number | undefined;
                min: number;
                max: number;
                step: number;
            } | undefined;
            scope?: "debrief" | undefined;
            order?: number | undefined;
            visibleForOutcomes?: (import("../../utils/outcomes").Outcome | undefined)[] | undefined;
            content: string;
            responseType: NonNullable<"text" | "slider" | "multiple_choice" | undefined>;
        };
        response: {} | null;
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
        question: {
            id: undefined;
            content: undefined;
            responseType: undefined;
            suggestedResponses: "";
            sliderConfig: undefined;
            scope: undefined;
            order: undefined;
            visibleForOutcomes: "";
        };
        response: null;
    };
}, "">;
export type QuestionLog = yup.InferType<typeof questionLogSchema>;
