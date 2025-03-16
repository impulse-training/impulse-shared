/**
 * Support Group Schemas
 *
 * Defines Yup schemas for support group data
 */
import * as yup from "yup";
import {
  SupportGroup,
  SupportGroupMember,
  SupportGroupMessage,
} from "../types";
import { timestampSchema } from "../utils";

// Support Group Member Schema
export const supportGroupMemberSchema = yup.object({
  userId: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  photoURL: yup.string().optional(),
  role: yup.string().oneOf(["owner", "member"]).required(),
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
  id: yup.string().required(),
  name: yup.string().required(),
  description: yup.string().optional(),
  ownerId: yup.string().required(),
  members: yup.array().of(supportGroupMemberSchema).required(),
  isPublic: yup.boolean().optional(),
  inviteCode: yup.string().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

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
