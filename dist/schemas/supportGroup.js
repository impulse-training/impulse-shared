"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSupportGroup = exports.isValidSupportGroupMember = exports.supportGroupSchema = exports.supportGroupMemberSchema = exports.supportGroupNotificationPreferencesSchema = exports.supportGroupPermissionsSchema = void 0;
const zod_1 = require("zod");
const utils_1 = require("../utils");
const attachment_1 = require("./attachment");
const log_1 = require("./log");
const userProfile_1 = require("./userProfile");
exports.supportGroupPermissionsSchema = zod_1.z.object({
    dayOutcomes: zod_1.z.boolean().default(false),
    threads: zod_1.z.boolean().default(false),
    summary: zod_1.z.boolean().default(false),
});
exports.supportGroupNotificationPreferencesSchema = zod_1.z.object({
    messages: zod_1.z.boolean().default(false),
    plan: zod_1.z.boolean().default(false),
});
// Support Group Member Schema
exports.supportGroupMemberSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    userProfile: userProfile_1.userProfileSchema,
    permissions: exports.supportGroupPermissionsSchema.optional(),
    notificationPreferences: exports.supportGroupNotificationPreferencesSchema.optional(),
    currentStreak: zod_1.z
        .object({
        streakStart: utils_1.timestampSchema.optional(),
        color: zod_1.z.string(),
    })
        .optional(),
    joinedAt: utils_1.timestampSchema.optional(),
});
// Support Group Schema
exports.supportGroupSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), // IDS are never passed when creating
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    ownerId: zod_1.z.string(),
    coverPhoto: attachment_1.attachmentSchema.optional(), // Optional cover photo for the group
    membersById: (0, utils_1.objectOf)(exports.supportGroupMemberSchema),
    unreadMessageCountsById: (0, utils_1.objectOf)(zod_1.z.number()),
    memberCount: zod_1.z.number().default(0), // Count of members for easier querying
    image: attachment_1.attachmentSchema,
    tacticCollections: zod_1.z.array(utils_1.documentReferenceSchema),
    isPublic: zod_1.z.boolean().optional(),
    isTemplate: zod_1.z.boolean().optional().default(false),
    inviteCode: zod_1.z.string().optional(),
    lastMessage: log_1.userMessageLogSchema.optional(),
    tacticCount: zod_1.z.number().default(0),
    createdAt: utils_1.timestampSchema.optional(),
    updatedAt: utils_1.timestampSchema.optional(),
});
// Type guard functions
const isValidSupportGroupMember = (value) => {
    return exports.supportGroupMemberSchema.safeParse(value).success;
};
exports.isValidSupportGroupMember = isValidSupportGroupMember;
const isValidSupportGroup = (value) => {
    return exports.supportGroupSchema.safeParse(value).success;
};
exports.isValidSupportGroup = isValidSupportGroup;
