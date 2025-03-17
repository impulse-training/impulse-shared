import { ChatCompletionAssistantMessageParam } from "openai/resources/chat";
import * as yup from "yup";
import { logBaseSchema } from ".";

/**
 * Agent Log Schema
 * Represents an agent message in a conversation thread
 * Can include tool calls and tool results
 */
export const aiAgentLogSchema = logBaseSchema.shape({
  // AI agent logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  type: yup.string().oneOf(["ai_agent"]).required(),
  data: yup
    .object({
      message: yup.mixed<ChatCompletionAssistantMessageParam>().required(),
    })
    .required(),
});
