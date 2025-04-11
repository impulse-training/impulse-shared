import { ChatCompletionAssistantMessageParam, ChatCompletionToolMessageParam } from "openai/resources/chat";
import * as yup from "yup";
/**
 * Tool Call Log Schema
 * Represents a log of a tool call in a conversation thread
 * Must include tool calls and tool results
 */
export declare const toolCallLogSchema: yup.ObjectSchema<{
    id: string | undefined;
    createdAt: import("../../types").Timestamp | undefined;
    updatedAt: import("../../types").Timestamp | undefined;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    callLogDocPath: string | undefined;
    isDisplayable: false;
    type: "tool_call";
    data: {
        message: ChatCompletionAssistantMessageParam;
        toolCallResults: ChatCompletionToolMessageParam[];
    };
}, yup.AnyObject, {
    id: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    userId: undefined;
    timestamp: undefined;
    dateString: undefined;
    callLogDocPath: undefined;
    isDisplayable: undefined;
    type: undefined;
    data: {
        message: undefined;
        toolCallResults: "";
    };
}, "">;
export type ToolCallLog = yup.InferType<typeof toolCallLogSchema>;
export type ToolCallResult = ChatCompletionToolMessageParam;
