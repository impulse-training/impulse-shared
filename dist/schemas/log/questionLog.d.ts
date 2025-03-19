import * as yup from "yup";
export declare const questionLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    type: "question";
    userId: string;
    timestamp: import("../../types").Timestamp;
    data: {
        suggestedResponses?: (string | undefined)[] | undefined;
        content: string;
        responseType: NonNullable<"text" | "slider" | undefined>;
        sliderConfig: {
            minLabel?: string | undefined;
            maxLabel?: string | undefined;
            defaultValue?: number | undefined;
            min: number;
            max: number;
            step: number;
        };
        response: {} | null;
    };
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    isDisplayable: true;
}, yup.AnyObject, {
    id: undefined;
    type: undefined;
    userId: undefined;
    timestamp: undefined;
    data: {
        content: undefined;
        responseType: undefined;
        suggestedResponses: "";
        sliderConfig: {
            min: undefined;
            max: undefined;
            step: 1;
            minLabel: undefined;
            maxLabel: undefined;
            defaultValue: undefined;
        };
        response: null;
    };
    createdAt: undefined;
    updatedAt: undefined;
    isDisplayable: undefined;
}, "">;
export type QuestionLog = yup.InferType<typeof questionLogSchema>;
