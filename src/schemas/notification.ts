import { z } from "zod";

/**
 * Schema for notification data to be sent to devices
 */
export const notificationSchema = z.object({
  // Basic notification content
  title: z.string(),
  body: z.string(),

  // Additional data
  data: z.any().default({}),

  // Notification sound and badge
  sound: z.string().default("default"),
  badge: z.number().nullable().default(null),

  // Category for iOS (used for actionable notifications)
  categoryId: z.string().nullable().default(null),

  // Channel ID for Android
  channelId: z.string().default("default"),

  // Priority
  priority: z.enum(["default", "normal", "high"]).default("default"),

  // Time to live in seconds
  ttl: z.number().default(3600),

  // Expo Push Receipt Tracking
  // Array of Expo receipt IDs (used to track delivery status)
  expoReceiptIds: z.array(z.string()).nullable().default(null),

  // Status of receipt tracking (pending, complete)
  receiptStatus: z.enum(["pending", "complete"]).default("pending"),

  // Object mapping receipt IDs to their status objects returned from Expo
  pushReceipts: z.record(z.any()).nullable().default(null),

  // Error that occurred during receipt fetching, if any
  pushReceiptFetchError: z.string().nullable().default(null),

  // When all receipts were processed
  completedAt: z.any().nullable().default(null),

  // Timestamps
  createdAt: z.any().nullable().default(null),
  updatedAt: z.any().nullable().default(null),
});

export type Notification = z.infer<typeof notificationSchema>;

// Helper to validate a notification object
export const isValidNotification = (value: unknown): value is Notification =>
  notificationSchema.safeParse(value).success;
