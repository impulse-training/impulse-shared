import * as yup from "yup";
import { objectOf, timestampSchema } from "../utils";
import { attachmentSchema } from "./attachment";

// Support Group Member Schema
export const supportGroupMemberSchema = yup.object({
  userId: yup.string().required(),
  emojiId: yup
    .object({
      color: yup.string().required(),
      emoji: yup.string().required(),
    })
    .optional()
    .default(undefined),
  currentStreak: yup
    .object({
      streakStart: timestampSchema,
      color: yup.string().required(),
    })
    .optional()
    .default(undefined),
  joinedAt: timestampSchema,
});

// Support Group Schema
export const supportGroupSchema = yup.object({
  id: yup.string(), // IDS are never passed when creating
  name: yup.string().required(),
  description: yup.string().optional(),
  ownerId: yup.string().required(),
  backgroundImage: attachmentSchema,
  membersById: objectOf(supportGroupMemberSchema),
  isPublic: yup.boolean().optional(),
  inviteCode: yup.string().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

// Export types inferred from schemas
export type SupportGroupMember = yup.InferType<typeof supportGroupMemberSchema>;
export type SupportGroup = yup.InferType<typeof supportGroupSchema>;

// Type guard functions
export const isValidSupportGroupMember = (
  value: unknown
): value is SupportGroupMember => {
  try {
    supportGroupMemberSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isValidSupportGroup = (value: unknown): value is SupportGroup => {
  try {
    supportGroupSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
