import { z } from "zod";
import { logBaseSchema } from "./base";

/**
 * Tool Call Log Schema
 * Represents a log of a tool call in a conversation thread
 * Must include tool calls and tool results
 */
export const toolCallLogSchema = logBaseSchema.extend({
  // Tool call logs are never displayed in the UI
  isDisplayable: z.literal(false),
  type: z.literal("tool_call"),
  data: z.object({
    message: z.any(),
    toolCallResults: z.array(z.any()),
  }),
});

export type ToolCallLog = z.infer<typeof toolCallLogSchema>;
export type ToolCallResult = any;
