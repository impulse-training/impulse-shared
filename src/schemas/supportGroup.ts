import * as yup from "yup";
import { objectOf, timestampSchema } from "../utils";

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
  joinedAt: timestampSchema,
});

// Support Group Message Types
export const messageTypes = ["text", "impulse_alert", "system"] as const;

// Support Group Message Schema
export const supportGroupMessageSchema = yup.object({
  senderId: yup.string().required(),
  senderName: yup.string().required(),
  content: yup.string().required(),
  timestamp: timestampSchema.required(),
  type: yup.string().oneOf(messageTypes).required(),
  threadId: yup.string().optional(), // Reference to an impulse thread if this is an impulse alert
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

// Support Group Schema
export const supportGroupSchema = yup.object({
  id: yup.string(), // IDS are never passed when creating
  name: yup.string().required(),
  description: yup.string().optional(),
  ownerId: yup.string().required(),
  members: yup.array().of(supportGroupMemberSchema).required(),
  isPublic: yup.boolean().optional(),
  inviteCode: yup.string().optional(),
  streaksByUserId: objectOf(
    yup.object({
      streakStart: timestampSchema,
      color: yup.string().required(),
    })
  ),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

// Export message type
export type MessageType = (typeof messageTypes)[number];

// Export types inferred from schemas
export type SupportGroupMember = yup.InferType<typeof supportGroupMemberSchema>;
export type SupportGroupMessage = yup.InferType<
  typeof supportGroupMessageSchema
>;
export type SupportGroup = yup.InferType<typeof supportGroupSchema>;

// Type guard functions
export const isSupportGroupMember = (
  value: unknown
): value is SupportGroupMember => {
  try {
    supportGroupMemberSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isSupportGroupMessage = (
  value: unknown
): value is SupportGroupMessage => {
  try {
    supportGroupMessageSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isSupportGroup = (value: unknown): value is SupportGroup => {
  try {
    supportGroupSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
