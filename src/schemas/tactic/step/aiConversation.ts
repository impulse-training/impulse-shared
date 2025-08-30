import { z } from "zod";
import { baseStepSchema } from "./base";

export const aiConversationStepSchema = baseStepSchema.extend({
  mode: z.literal("aiConversation"),
  // High-level objective for the conversation
  goal: z.string().min(1),
  // Initial system/user prompt to start the AI conversation
  prompt: z.string().optional(),
});

export type AIConversationStep = z.infer<typeof aiConversationStepSchema>;
