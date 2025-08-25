import { z } from "zod";
import { emojiIdSchema } from "./emojiId";

export const emojiIdDocSchema = z.object({
  emojiId: emojiIdSchema,
  isAvailable: z.boolean(),
});

export type EmojiIdDoc = z.infer<typeof emojiIdDocSchema>;
