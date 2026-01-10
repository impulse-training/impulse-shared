import z from "zod";
import { messageBaseLogSchema } from "./base";

export const assistantMessageLogSchema = messageBaseLogSchema.extend({
  type: z.literal("assistant_message"),
});

export type AssistantMessageLog = z.infer<typeof assistantMessageLogSchema>;
