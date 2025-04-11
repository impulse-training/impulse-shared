import { ChatCompletionUserMessageParam } from "openai/resources";
import * as yup from "yup";
export declare const userMessageLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../../../types").Timestamp | undefined;
    updatedAt: import("../../../types").Timestamp | undefined;
    userId: string;
    timestamp: import("../../../types").Timestamp;
    dateString: string;
    callLogDocPath: string | undefined;
    type: "user_message";
    isDisplayable: true;
    data: {
        message: ChatCompletionUserMessageParam;
    };
    audioAttachment: {
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
        } | undefined;
        type: NonNullable<"audio" | "image" | "video" | "document" | undefined>;
        uri: string;
        storagePath: string;
        contentType: string;
    } | undefined;
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
    audioAttachment: {
        uri: undefined;
        storagePath: undefined;
        contentType: undefined;
        sizeBytes: undefined;
        type: undefined;
        metadata: {
            width: undefined;
            height: undefined;
            durationMs: undefined;
            transcript: undefined;
        };
    };
}, "">;
export type UserMessageLog = yup.InferType<typeof userMessageLogSchema>;
