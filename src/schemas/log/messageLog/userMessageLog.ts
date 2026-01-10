import z from "zod";
import { attachmentSchema } from "../../attachment";
import { messageBaseLogSchema } from "./base";

export const userMessageLogSchema = messageBaseLogSchema.extend({
  type: z.literal("user_message"),
  audioAttachment: attachmentSchema.optional(),
  replyTactic: z
    .object({
      tactic: z.any(),
      currentStepIndex: z.number(),
    })
    .optional(),
});

export type UserMessageLog = z.infer<typeof userMessageLogSchema>;
