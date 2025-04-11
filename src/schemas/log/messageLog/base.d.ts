import { ChatCompletionAssistantMessageParam, ChatCompletionUserMessageParam } from "openai/resources";
import * as yup from "yup";
export declare const messageBaseLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../../../types").Timestamp | undefined;
    updatedAt: import("../../../types").Timestamp | undefined;
    userId: string;
    timestamp: import("../../../types").Timestamp;
    dateString: string;
    callLogDocPath: string | undefined;
    type: NonNullable<"user_message" | "assistant_message" | undefined>;
    isDisplayable: true;
    data: {
        message: NonNullable<ChatCompletionUserMessageParam | ChatCompletionAssistantMessageParam | undefined>;
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
    };
}, "">;
