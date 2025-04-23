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
