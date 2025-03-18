import {
  ChatCompletionAssistantMessageParam,
  ChatCompletionToolMessageParam,
} from "openai/resources/chat";
import * as yup from "yup";
import { logBaseSchema } from "./base";

/**
 * Tool Call Log Schema
 * Represents a log of a tool call in a conversation thread
 * Must include tool calls and tool results
 */
export const toolCallLogSchema = logBaseSchema.shape({
  // Tool call logs are never displayed in the UI
  isDisplayable: yup.mixed<false>().oneOf([false]).required(),
  type: yup.string().oneOf(["tool_call"]).required(),
  data: yup
    .object({
      message: yup.mixed<ChatCompletionAssistantMessageParam>().required(),
      toolCallResults: yup
        .array()
        .of(yup.mixed<ToolCallResult>().required())
        .required(),
    })
    .required(),
});

export type ToolCallLog = yup.InferType<typeof toolCallLogSchema>;
export type ToolCallResult = ChatCompletionToolMessageParam;
