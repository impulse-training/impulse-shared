import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";
import { supportGroupTypeSchema } from "./supportGroup";
import { firstsSchema } from "./first";

// Inline recap trigger schema (time-based). Recaps are daily — they fire
// every day at this time (Sunday additionally runs the weekly review). There
// is no per-weekday cadence; any legacy `weekdays` on old docs is ignored.
const recapTriggerSchema = z.object({
  hour: z.number().min(0).max(23),
  minute: z.number().min(0).max(59),
});

const recapReminderTimeSchema = z.object({
  hour: z.number().min(0).max(23),
  minute: z.number().min(0).max(59),
});

/**
 * An optional user-authored reflection that closes the recap, asked AFTER the
 * night's behavior-anchored recap question has run its course.
 *
 * The recap is deliberately focused on the behavior the user is trying to
 * break, which makes it a fairly unsparing ritual by design. This is the one
 * place the user gets to point it somewhere of their own choosing — gratitude,
 * what went well, anything. It is a REFLECTION, not a tracked behavior: there
 * is no streak, goal, or adherence attached to it, which is what keeps it on
 * the right side of "Impulse only tracks behaviors you want to do less of".
 *
 * `prompt` is the user's own words and is handed to the assistant verbatim as
 * the beat's frame — the AI runs the conversation but never authors the
 * question.
 */
const recapClosingReflectionSchema = z.object({
  enabled: z.boolean().default(false),
  prompt: z.string().max(300).optional(),
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

  // Last-activity signals. `lastActive` is refreshed on app open + hourly by
  // scheduled_updateLastActive; `lastLogin` is the legacy fallback. These drive
  // the derived engagement level (see getEngagementLevel in impulse-shared).
  lastActive: timestampSchema.optional(),
  lastLogin: timestampSchema.optional(),
  // The true "opened the app" signal: written client-side (deferred) on every
  // app foreground. Unlike `lastActive` (recomputed from genuine logs), this
  // moves even on a pure browse-and-close with no logging.
  lastVisit: timestampSchema.optional(),

  // Set true the first time we respond to one of the user's messages. Marks a
  // user as having genuinely engaged (had a conversation) even if they never
  // created a behavior — gates markInactiveUsersForDeletion so such accounts
  // are never treated as dead signups.
  hasEverEngaged: z.boolean().optional(),

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
  // Device-specific tokens for native incoming-call pushes (coach "call now").
  // Distinct from expoPushToken because VoIP/CallKit and Android full-screen
  // call notifications cannot be delivered through Expo's push service.
  // voipPushToken: iOS PushKit token (sent direct to APNs, .voip topic).
  // fcmCallToken: Android raw FCM token (high-priority data message).
  voipPushToken: z.string().nullable().default(null),
  fcmCallToken: z.string().nullable().default(null),
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
      // Marketing version of the binary this real device last booted.
      // Written only from real hardware (useUserMetadataSync's isDevice
      // guard); the OTA release gate reads it to decide a binary is live.
      nativeVersion: z.string().optional(),
      // How that binary was installed (InstallSource native module; absent on
      // binaries that predate it). The OTA gate only counts "appstore" boots.
      installSource: z
        .enum(["appstore", "testflight", "development", "simulator"])
        .optional(),
    })
    .optional(),
  isAppEnabled: z.boolean().optional(),

  // Account deletion metadata
  deletionRequestedAt: timestampSchema.optional(),
  // "system" = auto-flagged by a scheduled job (e.g. inactive signups with no
  // behaviors), as opposed to a user- or admin-initiated request.
  deletionRequestedBy: z.enum(["user", "admin", "system"]).optional(),

  // User preferences
  theme: z.enum(["light", "dark", "system"]).default("system"),

  // Calendar preferences
  weekStartsOn: z.union([z.literal(0), z.literal(1)]).default(1), // 0 = Sunday, 1 = Monday

  // Recap configuration
  recap: z
    .object({
      trigger: recapTriggerSchema,
      reminderTime: recapReminderTimeSchema.optional(),
      // Pauses all scheduled recap notifications (prompt, follow-up,
      // reminder) without touching the trigger config. Silent journal
      // drafts and on-demand recaps still work. Cleared by the
      // resume_recap_reminders card (or manually).
      paused: z.boolean().optional(),
      // Optional user-authored beat that closes the recap on a note of their
      // choosing. See recapClosingReflectionSchema.
      closingReflection: recapClosingReflectionSchema.optional(),
    })
    .optional(),

  /**
   * protect_next_window — resisted-path containment (see
   * protectNextWindowTaskSchema): once a resisted urge is debriefed and
   * settled, the session turns to protecting the next vulnerable window
   * instead of just closing. The acted path's containment is contain_lapse;
   * this flag governs only the resisted path. Opt-in (default off) while it's
   * dogfooded.
   *
   * `lastOfferedDateString` is the once-per-local-day cap: stamped when the
   * protect_next_window task is actually injected, checked before injecting
   * another. Cap on OFFERS, not completions — a user who said "not now" this
   * morning shouldn't be re-asked tonight.
   */
  protectNextWindow: z
    .object({
      enabled: z.boolean().default(false),
      lastOfferedDateString: z.string().optional(),
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

  // Coach "notify me when they come back" one-shot. When armed, the next
  // lastActive bump on this (client) user doc pushes the coach and then the
  // whole object is deleted (one-shot; re-arming is a deliberate coach action).
  // A silent app open counts, since auth alone bumps lastActive.
  coachWatch: z
    .object({
      notifyOnReturn: z.boolean(),
      // The coach uid to notify (denormalized so the trigger doesn't have to
      // resolve coachId, and so it keeps working if the assignment changes).
      coachId: z.string(),
      armedAt: timestampSchema,
    })
    .optional(),

  latestSupportGroupMessages: z
    .record(supportGroupTypeSchema, latestSupportGroupMessageSchema)
    .optional(),

  // User location (ISO 3166-1 alpha-2 country code)
  country: z.string().optional(),

  // Recovery key saved status
  recoveryKeySaved: z.boolean().optional(),

  // Disclaimer acceptance
  disclaimerAcceptedAt: timestampSchema.optional(),

  // Consent to send session content to the third-party AI provider (OpenAI).
  // Absent means never asked or declined; either way the AI coach is gated off
  // both in the app and on the server. `version` is AI_DATA_CONSENT_VERSION at
  // the time of acceptance, so a material change to what we send can re-ask.
  aiDataConsent: z
    .object({
      acceptedAt: timestampSchema,
      version: z.number(),
    })
    .optional(),

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

  // Voice preference for coach check-in calls
  zaraVoiceId: z.enum(["alloy", "shimmer", "echo"]).optional(),

  // Coaching opt-in, toggled by a coach from the dashboard. Gates the
  // client-facing coaching surfaces (e.g. the Home "Coaching" card that shows
  // upcoming coach sessions). Absent/false = the user sees no coaching UI.
  coachingEnabled: z.boolean().optional(),

  // Coach check-in configuration — which coach and which weekly slot the user has claimed
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

  // Coach-authored guidance shown to the user between calls
  coachInstructions: z.string().optional(),

  // Ongoing support request — the user asks (from the native app, after their
  // first coach check-in) to be taken on for ongoing coaching. A coach reviews
  // and approves/declines it from the coach dashboard. Placeholder for the
  // premium coaching upgrade.
  ongoingSupport: z
    .object({
      status: z.enum(["requested", "approved", "declined"]).default("requested"),
      requestedAt: timestampSchema,
      resolvedAt: timestampSchema.optional(),
      resolvedByCoachId: z.string().optional(),
    })
    .optional(),
});

// Export User type inferred from schema
export type UserData = z.infer<typeof userDataSchema>;

export type RecapClosingReflection = z.infer<
  typeof recapClosingReflectionSchema
>;

/**
 * The closing reflection is live only when the user turned it on AND wrote a
 * prompt — an enabled-but-blank config has nothing to ask, so every caller
 * (task writer, close guard, prompt builder) must agree it is off. Returns the
 * trimmed prompt so callers don't each re-trim.
 */
export const getActiveClosingReflectionPrompt = (
  userData: { recap?: { closingReflection?: RecapClosingReflection } } | undefined,
): string | null => {
  const config = userData?.recap?.closingReflection;
  if (!config?.enabled) return null;
  const prompt = config.prompt?.trim();
  return prompt ? prompt : null;
};

// Type guard for User
export const isUserData = (value: unknown): value is UserData =>
  userDataSchema.safeParse(value).success;
