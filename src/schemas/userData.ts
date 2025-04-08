import * as yup from "yup";
import { timestampSchema } from "../utils/timestampSchema";

export const userDataSchema = yup.object({
  id: yup.string(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,

  // Authentication
  recoveryKeyHash: yup.string(),

  // User role
  role: yup.string().oneOf(["user", "coach"]).default("user").required(),

  // Notification settings
  notificationsEnabled: yup.boolean().default(true),

  // Daily recap settings
  dayRecapEnabled: yup.boolean().default(true),
  dayRecapTime: timestampSchema,
  lastDayRecapDate: timestampSchema,

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
