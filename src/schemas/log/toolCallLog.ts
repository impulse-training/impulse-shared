import { z } from "zod";
import { logBaseSchema } from "./base";

/**
 * Tool Call Log Schema
 * Represents a log of a tool call in a conversation thread
 * Must include tool calls and tool results
 */
// Approximate OpenAI ChatCompletionMessage schema used in our tool call logging
// Supports assistant messages that include tool_calls, and tool messages that reference tool_call_id
const functionCallSchema = z.object({
  name: z.string(),
  arguments: z.string(), // OpenAI sends arguments as a JSON string
});

const toolCallSchema = z.object({
  id: z.string(),
  type: z.literal("function"),
  function: functionCallSchema,
});

export const chatCompletionMessageSchema = z.object({
  role: z.enum(["assistant", "user", "system", "tool"]),
  // OpenAI content can be string, null, or array of content parts. We keep it permissive.
  content: z.union([z.string(), z.null(), z.array(z.any())]).optional(),
  // For tool role messages
  tool_call_id: z.string().optional(),
  // For assistant role with tool calls
  tool_calls: z.array(toolCallSchema).optional(),
  // Optional name (system/user tool) — rarely used
  name: z.string().optional(),
});

export const toolCallLogSchema = logBaseSchema.extend({
  // Tool call logs are never displayed in the UI
  isDisplayable: z.literal(false),
  type: z.literal("tool_call"),
  data: z.object({
    // Must be a valid ChatCompletionMessage-like object
    message: chatCompletionMessageSchema,
    // Array of tool result messages (we keep permissive typing; they follow role: "tool")
    toolCallResults: z.array(z.any()),
  }),
});

export type ToolCallLog = z.infer<typeof toolCallLogSchema>;
export type ToolCallResult = any;
export type ChatCompletionMessageLike = z.infer<
  typeof chatCompletionMessageSchema
>;
