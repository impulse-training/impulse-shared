"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserData = exports.userDataSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.userDataSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    // Authentication
    recoveryKeyHash: zod_1.z.string().optional(),
    defaultThreadMode: zod_1.z.enum(["text", "voice"]).default("text"),
    // User role
    role: zod_1.z.enum(["user", "coach", "support"]).default("user"),
    // Notification settings
    notificationsEnabled: zod_1.z.boolean().default(true),
    expoPushToken: zod_1.z.string().nullable().default(null),
    notificationSettings: zod_1.z
        .object({
        debriefReminders: zod_1.z.boolean().default(true),
    })
        .default({
        debriefReminders: true,
    }),
    appVersion: zod_1.z.string().optional(),
    tacticsEnabled: zod_1.z.boolean().default(false),
    // This points to the user's active strategy. It can be updated to rollback.
    activeStrategyDoc: documentReferenceSchema_1.documentReferenceSchema.optional(),
    // User preferences
    theme: zod_1.z.enum(["light", "dark", "system"]).default("system"),
    // Calendar preferences
    weekStartsOn: zod_1.z.union([zod_1.z.literal(0), zod_1.z.literal(1)]).default(1), // 0 = Sunday, 1 = Monday
});
// Type guard for User
const isUserData = (value) => exports.userDataSchema.safeParse(value).success;
exports.isUserData = isUserData;
