import * as yup from "yup";

export const emojiIdSchema = yup
  .object({
    color: yup.string().required(),
    emoji: yup.string().required(),
  })
  .optional()
  .default(undefined);

export const userProfileSchema = yup.object({
  emojiId: emojiIdSchema,
});

export type UserProfile = yup.InferType<typeof userProfileSchema>;
