import * as yup from "yup";

export const userProfileSchema = yup.object({
  emojiId: yup
    .object({
      color: yup.string().required(),
      emoji: yup.string().required(),
    })
    .optional()
    .default(undefined),
});
export type UserProfile = yup.InferType<typeof userProfileSchema>;
