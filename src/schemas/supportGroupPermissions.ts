import { z } from "zod";

export const supportGroupPermissionsSchema = z.object({
  dayOutcomes: z.boolean().default(false),
  impulseMoments: z.boolean().default(false),
  summary: z.boolean().default(false),
  threads: z.boolean().default(false),
});

export type SupportGroupPermissions = z.infer<
  typeof supportGroupPermissionsSchema
>;

export const supportGroupNotificationPreferencesSchema = z.object({
  messages: z.boolean().default(false),
  plan: z.boolean().default(false),
});

export type SupportGroupNotificationPreferences = z.infer<
  typeof supportGroupNotificationPreferencesSchema
>;
