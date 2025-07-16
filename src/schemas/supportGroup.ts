import * as yup from "yup";
import { documentReferenceSchema, objectOf, timestampSchema } from "../utils";
import { attachmentSchema } from "./attachment";
import { userMessageLogSchema } from "./log";
import { userProfileSchema } from "./userProfile";

export const supportGroupPermissionsSchema = yup.object({
  dayOutcomes: yup.boolean().default(false),
  threads: yup.boolean().default(false),
  summary: yup.boolean().default(false),
});
export type SupportGroupPermissions = yup.InferType<
  typeof supportGroupPermissionsSchema
>;

export const supportGroupNotificationPreferencesSchema = yup.object({
  messages: yup.boolean().default(false),
  plan: yup.boolean().default(false),
});
export type SupportGroupNotificationPreferences = yup.InferType<
  typeof supportGroupNotificationPreferencesSchema
>;

// Support Group Member Schema
export const supportGroupMemberSchema = yup.object({
  userId: yup.string().required(),
  userProfile: userProfileSchema,
  permissions: supportGroupPermissionsSchema.optional().default(undefined),
  notificationPreferences: supportGroupNotificationPreferencesSchema
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
  coverPhoto: attachmentSchema.optional(), // Optional cover photo for the group
  membersById: objectOf(supportGroupMemberSchema),
  unreadMessageCountsById: objectOf(yup.number().required()),
  hiddenTacticIdsByUserId: objectOf(yup.array().of(yup.string().required())),
  memberCount: yup.number().default(0), // Count of members for easier querying
  image: attachmentSchema,
  tacticCollections: yup
    .array()
    .of(documentReferenceSchema.required())
    .required(),
  isPublic: yup.boolean().optional(),
  inviteCode: yup.string().optional(),
  lastMessage: userMessageLogSchema.optional(),
  tacticCount: yup.number().default(0),
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
