/**
 * Support Group Schemas
 * 
 * Defines Yup schemas for support group data
 */
import * as yup from 'yup';

// Support Group Member Schema
export const supportGroupMemberSchema = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  photoURL: yup.string().optional(),
  role: yup.string().oneOf(['owner', 'member']).required(),
  joinedAt: yup.date().required()
});

// Support Group Message Types
export const messageTypes = ['text', 'impulse_alert', 'system'] as const;

// Support Group Message Schema
export const supportGroupMessageSchema = yup.object({
  id: yup.string().required(),
  senderId: yup.string().required(),
  senderName: yup.string().required(),
  content: yup.string().required(),
  timestamp: yup.date().required(),
  type: yup.string().oneOf(messageTypes).required(),
  threadId: yup.string().optional() // Reference to an impulse thread if this is an impulse alert
});

// Support Group Schema
export const supportGroupSchema = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
  description: yup.string().optional(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
  ownerId: yup.string().required(),
  members: yup.array().of(supportGroupMemberSchema).required(),
  isPublic: yup.boolean().optional(),
  inviteCode: yup.string().optional()
});

// Helper functions for validation
export const validateSupportGroupMember = (data: unknown) => {
  return supportGroupMemberSchema.validate(data);
};

export const validateSupportGroupMessage = (data: unknown) => {
  return supportGroupMessageSchema.validate(data);
};

export const validateSupportGroup = (data: unknown) => {
  return supportGroupSchema.validate(data);
};
