import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";

// Inline recap trigger schema (time-based)
const recapTriggerSchema = z.object({
  hour: z.number().min(0).max(23),
  minute: z.number().min(0).max(59),
  weekdays: z.array(z.number().min(0).max(6)).min(1),
});

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
  notificationSettings: z
    .object({
      debriefReminders: z.boolean().default(true),
    })
    .default({
      debriefReminders: true,
    }),

  appVersion: z.string().optional(),
  device: z
    .object({
      osName: z.string().optional(),
      osVersion: z.string().optional(),
      brand: z.string().optional(),
      manufacturer: z.string().optional(),
      modelName: z.string().optional(),
      modelId: z.string().optional(),
      deviceName: z.string().optional(),
      isDevice: z.boolean().optional(),
    })
    .optional(),
  isAppEnabled: z.boolean().optional(),

  tacticsEnabled: z.boolean().default(false),

  // This points to the user's active strategy. It can be updated to rollback.
  activeStrategyDoc: documentReferenceSchema.optional(),

  // User preferences
  theme: z.enum(["light", "dark", "system"]).default("system"),

  // Calendar preferences
  weekStartsOn: z.union([z.literal(0), z.literal(1)]).default(1), // 0 = Sunday, 1 = Monday

  // Recap configuration
  recap: z
    .object({
      trigger: recapTriggerSchema,
    })
    .optional(),

  // If true, this user will be added to the tech support group for all new signups
  addToTechSupportGroup: z.boolean().optional(),

  // Tracks whether user has previously set up an experiment (to skip intro screen)
  hasSetupExperiment: z.boolean().optional(),

  // Support group signup wizard completion
  supportGroupSignupCompletedAt: timestampSchema.optional(),

  // Coach approved user as eligible to join the experiment
  markedAsEligibleAt: timestampSchema.optional(),

  // Coach flag - set when user is approved as a coach
  isCoach: z.boolean().optional(),
});

// Export User type inferred from schema
export type UserData = z.infer<typeof userDataSchema>;

// Type guard for User
export const isUserData = (value: unknown): value is UserData =>
  userDataSchema.safeParse(value).success;
