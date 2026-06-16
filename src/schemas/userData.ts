import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";
import { supportGroupTypeSchema } from "./supportGroup";
import { firstsSchema } from "./first";

// Inline recap trigger schema (time-based)
const recapTriggerSchema = z.object({
  hour: z.number().min(0).max(23),
  minute: z.number().min(0).max(59),
  weekdays: z.array(z.number().min(0).max(6)).min(1),
});

const recapReminderTimeSchema = z.object({
  hour: z.number().min(0).max(23),
  minute: z.number().min(0).max(59),
});

const latestSupportGroupMessageSchema = z.object({
  senderId: z.string(),
  message: z.string(),
  sentAt: timestampSchema,
});

export const userDataSchema = z.object({
  id: z.string().optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),

  // Authentication
  recoveryKeyHash: z.string().optional(),

  defaultSessionMode: z.enum(["text", "voice"]).default("text"),
  llmProvider: z.enum(["openai", "anthropic"]).optional(),

  // Account creation metadata
  createdViaSimulator: z.boolean().optional(),

  // User role
  role: z.enum(["user", "coach", "support"]).default("user"),

  // Notification settings
  notificationsEnabled: z.boolean().default(true),
  notifyOnSignUp: z.boolean().optional(),
  notifyOnCoachingApplication: z.boolean().optional(),
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

  // Account deletion metadata
  deletionRequestedAt: timestampSchema.optional(),
  deletionRequestedBy: z.enum(["user", "admin"]).optional(),

  // User preferences
  theme: z.enum(["light", "dark", "system"]).default("system"),

  // Calendar preferences
  weekStartsOn: z.union([z.literal(0), z.literal(1)]).default(1), // 0 = Sunday, 1 = Monday

  // Recap configuration
  recap: z
    .object({
      trigger: recapTriggerSchema,
      reminderTime: recapReminderTimeSchema.optional(),
      pausedAt: timestampSchema.optional(),
    })
    .optional(),

  // If true, this user will be added to the tech support group for all new signups
  isImpulseTeam: z.boolean().optional(),

  // If true, this user will be auto-added as a default member of new accountability support groups
  addToAccountabilitySupportGroups: z.boolean().optional(),

  // Tracks whether user has previously set up an experiment (to skip intro screen)
  hasSetupExperiment: z.boolean().optional(),

  // Support group signup wizard completion
  supportGroupSignupCompletedAt: timestampSchema.optional(),

  // Coach approved user as eligible to join the experiment
  markedAsEligibleAt: timestampSchema.optional(),

  calendarBehaviorIds: z.array(z.string()).optional(),

  // Coach flag - set when user is approved as a coach
  isCoach: z.boolean().optional(),

  latestSupportGroupMessages: z
    .record(supportGroupTypeSchema, latestSupportGroupMessageSchema)
    .optional(),

  // User location (ISO 3166-1 alpha-2 country code)
  country: z.string().optional(),

  // Recovery key saved status
  recoveryKeySaved: z.boolean().optional(),

  // Disclaimer acceptance
  disclaimerAcceptedAt: timestampSchema.optional(),

  // One-time migration flags
  migrations: z
    .object({
      recommendedLibraryDone: z.boolean().optional(),
      // Pre-seeds the curated starter tactics + their collections into the
      // user's library (replaces the old in-library "Suggested" sections).
      starterLibraryDone: z.boolean().optional(),
    })
    .optional(),

  // "Firsts" — one-time achievements (e.g. first impulse button press)
  firsts: firstsSchema.optional(),

  // Roadmap / "What we're building" seen tracker
  seenRoadmapItemIds: z.array(z.string()).optional(),
  roadmapNotificationsEnabled: z.boolean().optional(),

  // Voice preference for Zara check-in calls
  zaraVoiceId: z.enum(["alloy", "shimmer", "echo"]).optional(),

  // Zara configuration — which coach and which weekly slot the user has claimed
  zaraCoachId: z.string().optional(),
  zaraSlot: z
    .object({
      dayOfWeek: z.number().int().min(0).max(6),
      hour: z.number().int().min(0).max(23),
      minute: z.number().int().min(0).max(59),
    })
    .nullable()
    .optional(),

  // Slots this user offers as a coach (HH:MM string format matches existing Firestore data)
  coachAvailability: z
    .array(
      z.object({
        dayOfWeek: z.number().int().min(0).max(6),
        startTime: z.string(), // "HH:MM"
        endTime: z.string(),   // "HH:MM"
      }),
    )
    .optional(),

  concurrentUserAccountIds: z.array(z.string()).optional(),

  // Generated fake name for admin display
  pseudonym: z.string().optional(),

  // Emoji avatar chosen by user (synced from userProfile)
  emojiId: z.object({ emoji: z.string() }).optional(),

  // Denormalized from auth custom claims so admin can query without auth lookup
  onboardingCompleted: z.boolean().optional(),

  // Denormalized behavior names for admin list display
  behaviorNames: z.array(z.string()).optional(),

  engagement: z
    .enum(["engaged", "distant", "churned", "abandoned"])
    .nullable()
    .optional(),

  // Coach-authored guidance shown to the user between calls
  coachInstructions: z.string().optional(),
});

// Export User type inferred from schema
export type UserData = z.infer<typeof userDataSchema>;

// Type guard for User
export const isUserData = (value: unknown): value is UserData =>
  userDataSchema.safeParse(value).success;
