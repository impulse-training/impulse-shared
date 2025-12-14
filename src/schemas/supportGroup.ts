import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { objectOf } from "../utils/objectOf";
import { timestampSchema } from "../utils/timestampSchema";
import { attachmentSchema } from "./attachment";
import { userMessageLogSchema } from "./log";
import { userProfileSchema } from "./userProfile";
import {
  supportGroupPermissionsSchema,
  supportGroupNotificationPreferencesSchema,
} from "./supportGroupPermissions";

// Matching criteria schemas
export const workingOnOptionSchema = z.enum([
  "urges",
  "habits",
  "mood",
  "sleep",
  "focus",
  "substances",
  "anxiety",
  "motivation",
]);
export type WorkingOnOption = z.infer<typeof workingOnOptionSchema>;

export const supportStyleOptionSchema = z.enum([
  "presence",
  "encouragement",
  "accountability",
  "suggestions",
]);
export type SupportStyleOption = z.infer<typeof supportStyleOptionSchema>;

export const socialLevelOptionSchema = z.enum(["quiet", "balanced", "active"]);
export type SocialLevelOption = z.infer<typeof socialLevelOptionSchema>;

export const supportGroupMatchingCriteriaSchema = z.object({
  topics: z.array(workingOnOptionSchema).default([]),
  supportStyles: z.array(supportStyleOptionSchema).default([]),
  socialLevel: socialLevelOptionSchema.optional(),
});

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
  matchingCriteria: supportGroupMatchingCriteriaSchema.optional(),
  // Whether this group accepts new members via matching
  acceptsMatching: z.boolean().optional(),
  // Maximum number of members for this group (for small group matching)
  maxMembers: z.number().optional(),
});

// Export types inferred from schemas
export type SupportGroupMember = z.infer<typeof supportGroupMemberSchema>;
export type SupportGroup = z.infer<typeof supportGroupSchema>;
export type SupportGroupMatchingCriteria = z.infer<
  typeof supportGroupMatchingCriteriaSchema
>;

// Type guard functions
export const isValidSupportGroupMember = (
  value: unknown
): value is SupportGroupMember => {
  return supportGroupMemberSchema.safeParse(value).success;
};

export const isValidSupportGroup = (value: unknown): value is SupportGroup => {
  return supportGroupSchema.safeParse(value).success;
};
