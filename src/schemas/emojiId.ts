import { z } from "zod";

export const emojiIdSchema = z.object({
  emoji: z.string(),
});
export type EmojiId = z.infer<typeof emojiIdSchema>;

export const emojiIdDocSchema = z.object({
  emojiId: emojiIdSchema,
  isAvailable: z.boolean(),
  // Used to establish a stable randomized ordering for sampling
  ordinal: z.number().optional(),
});
export type EmojiIdDoc = z.infer<typeof emojiIdDocSchema>;
