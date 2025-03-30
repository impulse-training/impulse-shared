import * as yup from "yup";
export declare const questionLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
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
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    type: "question";
    isDisplayable: true;
}, yup.AnyObject, {
    id: undefined;
    userId: undefined;
    timestamp: undefined;
    dateString: undefined;
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
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    isDisplayable: undefined;
}, "">;
export type QuestionLog = yup.InferType<typeof questionLogSchema>;
