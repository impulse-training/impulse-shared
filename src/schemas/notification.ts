import * as yup from "yup";

/**
 * Schema for notification data to be sent to devices
 */
export const notificationSchema = yup.object({
  // Basic notification content
  title: yup.string().required(),
  body: yup.string().required(),

  // Additional data
  data: yup.mixed().required().default({}),

  // Notification sound and badge
  sound: yup.string().default("default"),
  badge: yup.number().nullable().default(null),

  // Category for iOS (used for actionable notifications)
  categoryId: yup.string().nullable().default(null),

  // Channel ID for Android
  channelId: yup.string().default("default"),

  // Priority
  priority: yup
    .string()
    .oneOf(["default", "normal", "high"])
    .default("default"),

  // Time to live in seconds
  ttl: yup.number().default(3600),

  // Expo Push Receipt Tracking
  // Array of Expo receipt IDs (used to track delivery status)
  expoReceiptIds: yup.array().of(yup.string()).nullable().default(null),

  // Status of receipt tracking (pending, complete)
  receiptStatus: yup.string().oneOf(["pending", "complete"]).default("pending"),

  // Object mapping receipt IDs to their status objects returned from Expo
  pushReceipts: yup.object().nullable().default(null),

  // Error that occurred during receipt fetching, if any
  pushReceiptFetchError: yup.string().nullable().default(null),

  // When all receipts were processed
  completedAt: yup.mixed().nullable().default(null),

  // Timestamps
  createdAt: yup.mixed().nullable().default(null),
  updatedAt: yup.mixed().nullable().default(null),
});

export type Notification = yup.InferType<typeof notificationSchema>;

// Helper to validate a notification object
export const isValidNotification = (value: unknown): value is Notification => {
  try {
    notificationSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
