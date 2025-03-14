import {
  ChatCompletionAssistantMessageParam,
  ChatCompletionToolMessageParam,
} from "openai/resources/chat";
import * as yup from "yup";
import { logBaseSchema } from ".";

/**
 * Agent Log Schema
 * Represents an agent message in a conversation thread
 * Can include tool calls and tool results
 */
export const agentLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["agent"]).required(),
  data: yup.mixed<ChatCompletionAssistantMessageParam>().required(),
  toolCallResults: yup
    .array()
    .of(yup.mixed<ChatCompletionToolMessageParam>().required())
    .optional(),
});
