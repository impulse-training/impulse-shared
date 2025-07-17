import * as yup from "yup";
import { documentReferenceSchema } from "../utils";
import { timestampSchema } from "../utils/timestampSchema";

export const userDataSchema = yup.object({
  id: yup.string(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,

  // Authentication
  recoveryKeyHash: yup.string(),

  defaultThreadMode: yup.string().oneOf(["text", "voice"]).default("text"),

  // User role
  role: yup
    .string()
    .oneOf(["user", "coach", "support"])
    .default("user")
    .required(),

  // Notification settings
  notificationsEnabled: yup.boolean().default(true),
  expoPushToken: yup.string().nullable().default(null),

  appVersion: yup.string(),

  // This points to the user's active strategy. It can be updated to rollback.
  activeStrategyDoc: documentReferenceSchema,

  // User preferences
  theme: yup
    .string()
    .oneOf(["light", "dark", "system"])
    .default("system")
    .required(),
});

// Export User type inferred from schema
export type UserData = yup.InferType<typeof userDataSchema>;

// Type guard for User
export const isUserData = (value: unknown): value is UserData => {
  try {
    userDataSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
