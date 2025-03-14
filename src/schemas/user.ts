/**
 * User Schema
 *
 * Yup schema for user data validation
 */
import * as yup from "yup";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Schema for user data
 */
export const userSchema = yup.object({
  id: yup.string(),
  email: yup.string().email(),
  displayName: yup.string(),
  photoURL: yup.string(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  
  // Notification settings
  notificationsEnabled: yup.boolean().default(true),
  
  // Daily recap settings
  dayRecapEnabled: yup.boolean().default(true),
  dayRecapTime: timestampSchema,
  lastDayRecapDate: timestampSchema,
  
  // User preferences
  theme: yup.string().oneOf(['light', 'dark', 'system']).default('system'),
  
  // Admin and role settings
  isAdmin: yup.boolean().default(false),
  role: yup.string().oneOf(['user', 'admin', 'coach']).default('user'),
});
