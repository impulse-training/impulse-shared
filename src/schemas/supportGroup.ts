import { z } from "zod";
import { objectOf } from "../utils/objectOf";
import { timestampSchema } from "../utils/timestampSchema";
import { attachmentSchema } from "./attachment";
import { behaviorTopicIdSchema } from "./behaviorTopic";
import { userMessageLogSchema } from "./log/messageLog/userMessageLog";
import { userProfileSchema } from "./userProfile";
import {
  supportGroupPermissionsSchema,
  supportGroupNotificationPreferencesSchema,
} from "./supportGroupPermissions";

// Matching criteria schemas
export const matchingModeSchema = z.enum(["focused", "mixed"]);
export type MatchingMode = z.infer<typeof matchingModeSchema>;

// Re-export for backward compatibility
export type {
  SupportGroupPermissions,
  SupportGroupNotificationPreferences,
} from "./supportGroupPermissions";
export {
  supportGroupPermissionsSchema,
  supportGroupNotificationPreferencesSchema,
};

// Support Group Member Schema
export const supportGroupMemberSchema = z.object({
  userId: z.string(),
  userProfile: userProfileSchema,
  permissions: supportGroupPermissionsSchema.optional(),
  notificationPreferences: supportGroupNotificationPreferencesSchema.optional(),
  // TODO: add timezone
  // timezone: z.string().optional(),
  currentStreak: z
    .object({
      streakStart: timestampSchema.optional(),
      color: z.string(),
    })
    .optional(),
  joinedAt: timestampSchema.optional(),
});

// Support Group Type
export const supportGroupTypeSchema = z.enum(["system", "social"]);
export type SupportGroupType = z.infer<typeof supportGroupTypeSchema>;

// Support Group Schema
export const supportGroupSchema = z.object({
  id: z.string().optional(), // IDS are never passed when creating
  type: supportGroupTypeSchema.default("social"),
  name: z.string(),
  description: z.string().optional(),
  ownerId: z.string(),
  coverPhoto: attachmentSchema.optional(), // Optional cover photo for the group
  membersById: objectOf(supportGroupMemberSchema),
  memberIds: z.array(z.string()).default([]), // For efficient array-contains queries
  unreadMessageCountsById: objectOf(z.number()),
  image: attachmentSchema,
  isPublic: z.boolean().optional(),
  isTemplate: z.boolean().optional().default(false),
  inviteCode: z.string().optional(),
  lastMessage: userMessageLogSchema.optional(),
  tacticCount: z.number().default(0),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),

  // Matching criteria for automatic group assignment
  // References to behavior topics this group focuses on
  behaviorTopicIds: z.array(behaviorTopicIdSchema).optional(),
  timezoneOffsets: z.array(z.number()).optional(),
  matchingMode: matchingModeSchema.optional(),
  // Whether this group accepts new members via matching
  acceptsMatching: z.boolean().optional(),
  // Maximum number of members for this group (for small group matching)
  maxMembers: z.number().optional(),
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
