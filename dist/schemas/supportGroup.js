"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSupportGroup = exports.isValidSupportGroupMember = exports.supportGroupSchema = exports.supportGroupMemberSchema = exports.supportGroupNotificationPreferencesSchema = exports.supportGroupPermissionsSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const objectOf_1 = require("../utils/objectOf");
const timestampSchema_1 = require("../utils/timestampSchema");
const attachment_1 = require("./attachment");
const log_1 = require("./log");
const userProfile_1 = require("./userProfile");
const supportGroupPermissions_1 = require("./supportGroupPermissions");
Object.defineProperty(exports, "supportGroupPermissionsSchema", { enumerable: true, get: function () { return supportGroupPermissions_1.supportGroupPermissionsSchema; } });
Object.defineProperty(exports, "supportGroupNotificationPreferencesSchema", { enumerable: true, get: function () { return supportGroupPermissions_1.supportGroupNotificationPreferencesSchema; } });
// Support Group Member Schema
exports.supportGroupMemberSchema = zod_1.z.object({
    userId: zod_1.z.string(),
    userProfile: userProfile_1.userProfileSchema,
    permissions: supportGroupPermissions_1.supportGroupPermissionsSchema.optional(),
    notificationPreferences: supportGroupPermissions_1.supportGroupNotificationPreferencesSchema.optional(),
    currentStreak: zod_1.z
        .object({
        streakStart: timestampSchema_1.timestampSchema.optional(),
        color: zod_1.z.string(),
    })
        .optional(),
    joinedAt: timestampSchema_1.timestampSchema.optional(),
});
// Support Group Schema
exports.supportGroupSchema = zod_1.z.object({
    id: zod_1.z.string().optional(), // IDS are never passed when creating
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    ownerId: zod_1.z.string(),
    coverPhoto: attachment_1.attachmentSchema.optional(), // Optional cover photo for the group
    membersById: (0, objectOf_1.objectOf)(exports.supportGroupMemberSchema),
    unreadMessageCountsById: (0, objectOf_1.objectOf)(zod_1.z.number()),
    memberCount: zod_1.z.number().default(0), // Count of members for easier querying
    image: attachment_1.attachmentSchema,
    tacticCollections: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema),
    isPublic: zod_1.z.boolean().optional(),
    isTemplate: zod_1.z.boolean().optional().default(false),
    inviteCode: zod_1.z.string().optional(),
    lastMessage: log_1.userMessageLogSchema.optional(),
    tacticCount: zod_1.z.number().default(0),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
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
