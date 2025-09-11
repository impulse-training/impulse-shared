import { z } from "zod";
import { documentReferenceSchema } from "../utils";
import { timestampSchema } from "../utils/timestampSchema";

export const userDataSchema = z.object({
  id: z.string().optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),

  // Authentication
  recoveryKeyHash: z.string().optional(),

  defaultThreadMode: z.enum(["text", "voice"]).default("text"),

  // User role
  role: z.enum(["user", "coach", "support"]).default("user"),

  // Notification settings
  notificationsEnabled: z.boolean().default(true),
  expoPushToken: z.string().nullable().default(null),

  appVersion: z.string().optional(),

  // This points to the user's active strategy. It can be updated to rollback.
  activeStrategyDoc: documentReferenceSchema.optional(),

  // User preferences
  theme: z.enum(["light", "dark", "system"]).default("system"),
});

// Export User type inferred from schema
export type UserData = z.infer<typeof userDataSchema>;

// Type guard for User
export const isUserData = (value: unknown): value is UserData =>
  userDataSchema.safeParse(value).success;
