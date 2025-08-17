import { z } from "zod";

export const emojiIdSchema = z
  .object({
    color: z.string(),
    emoji: z.string(),
    name: z.string().optional(),
  })
  .optional();

export const userProfileSchema = z.object({
  id: z.string().optional(),
  invitationCode: z.string(),
  emojiId: emojiIdSchema,
});

export type UserProfile = z.infer<typeof userProfileSchema>;
