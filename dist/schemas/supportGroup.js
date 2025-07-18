"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSupportGroup = exports.isValidSupportGroupMember = exports.supportGroupSchema = exports.supportGroupMemberSchema = exports.supportGroupNotificationPreferencesSchema = exports.supportGroupPermissionsSchema = void 0;
const yup = __importStar(require("yup"));
const utils_1 = require("../utils");
const attachment_1 = require("./attachment");
const log_1 = require("./log");
const userProfile_1 = require("./userProfile");
exports.supportGroupPermissionsSchema = yup.object({
    dayOutcomes: yup.boolean().default(false),
    threads: yup.boolean().default(false),
    summary: yup.boolean().default(false),
});
exports.supportGroupNotificationPreferencesSchema = yup.object({
    messages: yup.boolean().default(false),
    plan: yup.boolean().default(false),
});
// Support Group Member Schema
exports.supportGroupMemberSchema = yup.object({
    userId: yup.string().required(),
    userProfile: userProfile_1.userProfileSchema,
    permissions: exports.supportGroupPermissionsSchema.optional().default(undefined),
    notificationPreferences: exports.supportGroupNotificationPreferencesSchema
        .optional()
        .default(undefined),
    currentStreak: yup
        .object({
        streakStart: utils_1.timestampSchema,
        color: yup.string().required(),
    })
        .optional()
        .default(undefined),
    joinedAt: utils_1.timestampSchema,
});
// Support Group Schema
exports.supportGroupSchema = yup.object({
    id: yup.string(), // IDS are never passed when creating
    name: yup.string().required(),
    description: yup.string().optional(),
    ownerId: yup.string().required(),
    coverPhoto: attachment_1.attachmentSchema.optional(), // Optional cover photo for the group
    membersById: (0, utils_1.objectOf)(exports.supportGroupMemberSchema),
    unreadMessageCountsById: (0, utils_1.objectOf)(yup.number().required()),
    memberCount: yup.number().default(0), // Count of members for easier querying
    image: attachment_1.attachmentSchema,
    tacticCollections: yup
        .array()
        .of(utils_1.documentReferenceSchema.required())
        .required(),
    isPublic: yup.boolean().optional(),
    isTemplate: yup.boolean().optional().default(false),
    inviteCode: yup.string().optional(),
    lastMessage: log_1.userMessageLogSchema.optional(),
    tacticCount: yup.number().default(0),
    createdAt: utils_1.timestampSchema,
    updatedAt: utils_1.timestampSchema,
});
// Type guard functions
const isValidSupportGroupMember = (value) => {
    try {
        exports.supportGroupMemberSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidSupportGroupMember = isValidSupportGroupMember;
const isValidSupportGroup = (value) => {
    try {
        exports.supportGroupSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidSupportGroup = isValidSupportGroup;
