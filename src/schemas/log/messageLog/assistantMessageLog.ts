import { z } from "zod";
import { messageBaseLogSchema } from "./base";

export const assistantMessageLogSchema = messageBaseLogSchema.extend({
  type: z.literal("assistant_message"),
  // True on every paragraph of a multi-bubble response except the last. A
  // response that reads as multiple paragraphs is posted as one log per
  // paragraph with a reading-time pause between them (see
  // generateAndProcessAIResponse.ts) — this lets readers (e.g. the recap
  // close judge) tell an interim bubble from the true final one.
  isPartial: z.boolean().optional(),
});

export type AssistantMessageLog = z.infer<typeof assistantMessageLogSchema>;
