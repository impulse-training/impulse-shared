import { ChatCompletionAssistantMessageParam } from "openai/resources/chat";
import * as yup from "yup";
export declare const assistantMessageLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../../../types").Timestamp | undefined;
    updatedAt: import("../../../types").Timestamp | undefined;
    userId: string;
    timestamp: import("../../../types").Timestamp;
    dateString: string;
    callLogDocPath: string | undefined;
    type: "assistant_message";
    isDisplayable: true;
    data: {
        message: ChatCompletionAssistantMessageParam;
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
        message: undefined;
    } & {
        message: undefined;
    };
}, "">;
export type AssistantMessageLog = yup.InferType<typeof assistantMessageLogSchema>;
