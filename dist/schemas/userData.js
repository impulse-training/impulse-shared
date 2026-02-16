"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserData = exports.userDataSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
const supportGroup_1 = require("./supportGroup");
// Inline recap trigger schema (time-based)
const recapTriggerSchema = zod_1.z.object({
    hour: zod_1.z.number().min(0).max(23),
    minute: zod_1.z.number().min(0).max(59),
    weekdays: zod_1.z.array(zod_1.z.number().min(0).max(6)).min(1),
});
const latestSupportGroupMessageSchema = zod_1.z.object({
    senderId: zod_1.z.string(),
    message: zod_1.z.string(),
    sentAt: timestampSchema_1.timestampSchema,
});
exports.userDataSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    // Authentication
    recoveryKeyHash: zod_1.z.string().optional(),
    defaultThreadMode: zod_1.z.enum(["text", "voice"]).default("text"),
    // Account creation metadata
    createdViaEmulator: zod_1.z.boolean().optional(),
    // User role
    role: zod_1.z.enum(["user", "coach", "support"]).default("user"),
    // Notification settings
    notificationsEnabled: zod_1.z.boolean().default(true),
    notifyOnSignUp: zod_1.z.boolean().optional(),
    expoPushToken: zod_1.z.string().nullable().default(null),
    notificationSettings: zod_1.z
        .object({
        debriefReminders: zod_1.z.boolean().default(true),
    })
        .default({
        debriefReminders: true,
    }),
    appVersion: zod_1.z.string().optional(),
    device: zod_1.z
        .object({
        osName: zod_1.z.string().optional(),
        osVersion: zod_1.z.string().optional(),
        brand: zod_1.z.string().optional(),
        manufacturer: zod_1.z.string().optional(),
        modelName: zod_1.z.string().optional(),
        modelId: zod_1.z.string().optional(),
        deviceName: zod_1.z.string().optional(),
        isDevice: zod_1.z.boolean().optional(),
    })
        .optional(),
    isAppEnabled: zod_1.z.boolean().optional(),
    // Account deletion metadata
    deletionRequestedAt: timestampSchema_1.timestampSchema.optional(),
    deletionRequestedBy: zod_1.z.enum(["user", "admin"]).optional(),
    tacticsEnabled: zod_1.z.boolean().default(false),
    // User preferences
    theme: zod_1.z.enum(["light", "dark", "system"]).default("system"),
    // Calendar preferences
    weekStartsOn: zod_1.z.union([zod_1.z.literal(0), zod_1.z.literal(1)]).default(1), // 0 = Sunday, 1 = Monday
    // Recap configuration
    recap: zod_1.z
        .object({
        trigger: recapTriggerSchema,
    })
        .optional(),
    // If true, this user will be added to the tech support group for all new signups
    isImpulseTeam: zod_1.z.boolean().optional(),
    // Tracks whether user has previously set up an experiment (to skip intro screen)
    hasSetupExperiment: zod_1.z.boolean().optional(),
    // Support group signup wizard completion
    supportGroupSignupCompletedAt: timestampSchema_1.timestampSchema.optional(),
    // Coach approved user as eligible to join the experiment
    markedAsEligibleAt: timestampSchema_1.timestampSchema.optional(),
    calendarBehaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
    // Coach flag - set when user is approved as a coach
    isCoach: zod_1.z.boolean().optional(),
    latestSupportGroupMessages: zod_1.z
        .record(supportGroup_1.supportGroupTypeSchema, latestSupportGroupMessageSchema)
        .optional(),
});
// Type guard for User
const isUserData = (value) => exports.userDataSchema.safeParse(value).success;
exports.isUserData = isUserData;
