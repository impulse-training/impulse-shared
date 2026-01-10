"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidNotification = exports.notificationSchema = void 0;
const zod_1 = require("zod");
/**
 * Schema for notification data to be sent to devices
 */
exports.notificationSchema = zod_1.z.object({
    // Basic notification content
    title: zod_1.z.string(),
    body: zod_1.z.string(),
    // Additional data
    data: zod_1.z.any().default({}),
    // Notification sound and badge
    sound: zod_1.z.string().default("default"),
    badge: zod_1.z.number().nullable().default(null),
    // Category for iOS (used for actionable notifications)
    categoryId: zod_1.z.string().nullable().default(null),
    // Channel ID for Android
    channelId: zod_1.z.string().default("default"),
    // Priority
    priority: zod_1.z.enum(["default", "normal", "high"]).default("default"),
    // Time to live in seconds
    ttl: zod_1.z.number().default(3600),
    // Expo Push Receipt Tracking
    // Array of Expo receipt IDs (used to track delivery status)
    expoReceiptIds: zod_1.z.array(zod_1.z.string()).nullable().default(null),
    // Status of receipt tracking (pending, complete)
    receiptStatus: zod_1.z.enum(["pending", "complete"]).default("pending"),
    // Object mapping receipt IDs to their status objects returned from Expo
    pushReceipts: zod_1.z.record(zod_1.z.any()).nullable().default(null),
    // Error that occurred during receipt fetching, if any
    pushReceiptFetchError: zod_1.z.string().nullable().default(null),
    // When all receipts were processed
    completedAt: zod_1.z.any().nullable().default(null),
    // Timestamps
    createdAt: zod_1.z.any().nullable().default(null),
    updatedAt: zod_1.z.any().nullable().default(null),
});
// Helper to validate a notification object
const isValidNotification = (value) => exports.notificationSchema.safeParse(value).success;
exports.isValidNotification = isValidNotification;
