import { z } from "zod";
import { emojiIdSchema } from "./emojiId";

export const userProfileSchema = z.object({
  id: z.string().optional(),
  invitationCode: z.string(),
  emojiId: emojiIdSchema.optional(),
});

export type UserProfile = z.infer<typeof userProfileSchema>;
