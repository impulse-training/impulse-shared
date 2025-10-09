import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { objectOf } from "../utils/objectOf";
import { timestampSchema } from "../utils/timestampSchema";
import { attachmentSchema } from "./attachment";
import { userMessageLogSchema } from "./log";
import { userProfileSchema } from "./userProfile";

export const supportGroupPermissionsSchema = z.object({
  dayOutcomes: z.boolean().default(false),
  impulseMoments: z.boolean().default(false),
  summary: z.boolean().default(false),
});
export type SupportGroupPermissions = z.infer<
  typeof supportGroupPermissionsSchema
>;

export const supportGroupNotificationPreferencesSchema = z.object({
  messages: z.boolean().default(false),
  plan: z.boolean().default(false),
});
export type SupportGroupNotificationPreferences = z.infer<
  typeof supportGroupNotificationPreferencesSchema
>;

// Support Group Member Schema
export const supportGroupMemberSchema = z.object({
  userId: z.string(),
  userProfile: userProfileSchema,
  permissions: supportGroupPermissionsSchema.optional(),
  notificationPreferences: supportGroupNotificationPreferencesSchema.optional(),
  currentStreak: z
    .object({
      streakStart: timestampSchema.optional(),
      color: z.string(),
    })
    .optional(),
  joinedAt: timestampSchema.optional(),
});

// Support Group Schema
export const supportGroupSchema = z.object({
  id: z.string().optional(), // IDS are never passed when creating
  name: z.string(),
  description: z.string().optional(),
  ownerId: z.string(),
  coverPhoto: attachmentSchema.optional(), // Optional cover photo for the group
  membersById: objectOf(supportGroupMemberSchema),
  unreadMessageCountsById: objectOf(z.number()),
  memberCount: z.number().default(0), // Count of members for easier querying
  image: attachmentSchema,
  tacticCollections: z.array(documentReferenceSchema),
  isPublic: z.boolean().optional(),
  isTemplate: z.boolean().optional().default(false),
  inviteCode: z.string().optional(),
  lastMessage: userMessageLogSchema.optional(),
  tacticCount: z.number().default(0),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

// Export types inferred from schemas
export type SupportGroupMember = z.infer<typeof supportGroupMemberSchema>;
export type SupportGroup = z.infer<typeof supportGroupSchema>;

// Type guard functions
export const isValidSupportGroupMember = (
  value: unknown
): value is SupportGroupMember => {
  return supportGroupMemberSchema.safeParse(value).success;
};

export const isValidSupportGroup = (value: unknown): value is SupportGroup => {
  return supportGroupSchema.safeParse(value).success;
};
