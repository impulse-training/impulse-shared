import { ChatCompletionMessage, ChatCompletionTool } from "openai/resources";
import * as yup from "yup";
export declare const llmAuditEntrySchema: yup.ObjectSchema<{
    userId: string;
    logId: string;
    timestamp: import("../types").Timestamp | undefined;
    messages: (import("openai/resources").ChatCompletionUserMessageParam | import("openai/resources").ChatCompletionAssistantMessageParam | import("openai/resources").ChatCompletionToolMessageParam | import("openai/resources").ChatCompletionDeveloperMessageParam | import("openai/resources").ChatCompletionSystemMessageParam | import("openai/resources").ChatCompletionFunctionMessageParam | undefined)[];
    response: ChatCompletionMessage;
    toolDefinitions: (ChatCompletionTool | undefined)[];
}, yup.AnyObject, {
    userId: undefined;
    logId: undefined;
    timestamp: undefined;
    messages: "";
    response: undefined;
    toolDefinitions: "";
}, "">;
export type LLMAuditEntry = yup.InferType<typeof llmAuditEntrySchema>;
