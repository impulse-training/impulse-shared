import { z } from "zod";
import { attachmentSchema } from "../../attachment";
import { messageBaseLogSchema } from "./base";

/**
 * A message the app sends on the user's behalf to ask for a strategy, from a
 * screen that already knows which behaviors it is about (a starter strategy's
 * "Build a strategy"). The text says it in words; this says it exactly, so the
 * coach builds for these behaviors rather than guessing from the rest of the
 * conversation (2026-10-07: a Coffee request was read as social media).
 */
export const strategyForSchema = z.object({
  behaviorIds: z.array(z.string()).min(1),
  behaviorNames: z.array(z.string()),
});

export const userMessageLogSchema = messageBaseLogSchema.extend({
  type: z.literal("user_message"),
  audioAttachment: attachmentSchema.optional(),
  strategyFor: strategyForSchema.optional(),
});

export type StrategyFor = z.infer<typeof strategyForSchema>;

export type UserMessageLog = z.infer<typeof userMessageLogSchema>;
