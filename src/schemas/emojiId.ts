import { z } from "zod";

export const emojiIdSchema = z.object({
  color: z.string(),
  emoji: z.string(),
  name: z.string().optional(),
});

export type EmojiId = z.infer<typeof emojiIdSchema>;
