"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserData = exports.userDataSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
const supportGroup_1 = require("./supportGroup");
const first_1 = require("./first");
// Inline recap trigger schema (time-based). Recaps are daily — they fire
// every day at this time (Sunday additionally runs the weekly review). There
// is no per-weekday cadence; any legacy `weekdays` on old docs is ignored.
const recapTriggerSchema = zod_1.z.object({
    hour: zod_1.z.number().min(0).max(23),
    minute: zod_1.z.number().min(0).max(59),
});
const recapReminderTimeSchema = zod_1.z.object({
    hour: zod_1.z.number().min(0).max(23),
    minute: zod_1.z.number().min(0).max(59),
});
const latestSupportGroupMessageSchema = zod_1.z.object({
    senderId: zod_1.z.string(),
    message: zod_1.z.string(),
    sentAt: timestampSchema_1.timestampSchema,
});
exports.userDataSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    // Last-activity signals. `lastActive` is refreshed on app open + hourly by
    // scheduled_updateLastActive; `lastLogin` is the legacy fallback. These drive
    // the derived engagement level (see getEngagementLevel in impulse-shared).
    lastActive: timestampSchema_1.timestampSchema.optional(),
    lastLogin: timestampSchema_1.timestampSchema.optional(),
    // The true "opened the app" signal: written client-side (deferred) on every
    // app foreground. Unlike `lastActive` (recomputed from genuine logs), this
    // moves even on a pure browse-and-close with no logging.
    lastVisit: timestampSchema_1.timestampSchema.optional(),
    // Set true the first time we respond to one of the user's messages. Marks a
    // user as having genuinely engaged (had a conversation) even if they never
    // created a behavior — gates markInactiveUsersForDeletion so such accounts
    // are never treated as dead signups.
    hasEverEngaged: zod_1.z.boolean().optional(),
    // Authentication
    recoveryKeyHash: zod_1.z.string().optional(),
    defaultSessionMode: zod_1.z.enum(["text", "voice"]).default("text"),
    llmProvider: zod_1.z.enum(["openai", "anthropic"]).optional(),
    // Account creation metadata
    createdViaSimulator: zod_1.z.boolean().optional(),
    // User role
    role: zod_1.z.enum(["user", "coach", "support"]).default("user"),
    // Notification settings
    notificationsEnabled: zod_1.z.boolean().default(true),
    notifyOnSignUp: zod_1.z.boolean().optional(),
    notifyOnCoachingApplication: zod_1.z.boolean().optional(),
    expoPushToken: zod_1.z.string().nullable().default(null),
    // Device-specific tokens for native incoming-call pushes (coach "call now").
    // Distinct from expoPushToken because VoIP/CallKit and Android full-screen
    // call notifications cannot be delivered through Expo's push service.
    // voipPushToken: iOS PushKit token (sent direct to APNs, .voip topic).
    // fcmCallToken: Android raw FCM token (high-priority data message).
    voipPushToken: zod_1.z.string().nullable().default(null),
    fcmCallToken: zod_1.z.string().nullable().default(null),
    notificationSettings: zod_1.z
        .object({
        debriefReminders: zod_1.z.boolean().default(true),
    })
        .default({
        debriefReminders: true,
    }),
    appVersion: zod_1.z.string().optional(),
    device: zod_1.z
        .object({
        osName: zod_1.z.string().optional(),
        osVersion: zod_1.z.string().optional(),
        brand: zod_1.z.string().optional(),
        manufacturer: zod_1.z.string().optional(),
        modelName: zod_1.z.string().optional(),
        modelId: zod_1.z.string().optional(),
        deviceName: zod_1.z.string().optional(),
        isDevice: zod_1.z.boolean().optional(),
    })
        .optional(),
    isAppEnabled: zod_1.z.boolean().optional(),
    // Account deletion metadata
    deletionRequestedAt: timestampSchema_1.timestampSchema.optional(),
    // "system" = auto-flagged by a scheduled job (e.g. inactive signups with no
    // behaviors), as opposed to a user- or admin-initiated request.
    deletionRequestedBy: zod_1.z.enum(["user", "admin", "system"]).optional(),
    // User preferences
    theme: zod_1.z.enum(["light", "dark", "system"]).default("system"),
    // Calendar preferences
    weekStartsOn: zod_1.z.union([zod_1.z.literal(0), zod_1.z.literal(1)]).default(1), // 0 = Sunday, 1 = Monday
    // Recap configuration
    recap: zod_1.z
        .object({
        trigger: recapTriggerSchema,
        reminderTime: recapReminderTimeSchema.optional(),
        // Pauses all scheduled recap notifications (prompt, follow-up,
        // reminder) without touching the trigger config. Silent journal
        // drafts and on-demand recaps still work. Cleared by the
        // resume_recap_reminders card (or manually).
        paused: zod_1.z.boolean().optional(),
    })
        .optional(),
    // If true, this user will be added to the tech support group for all new signups
    isImpulseTeam: zod_1.z.boolean().optional(),
    // If true, this user will be auto-added as a default member of new accountability support groups
    addToAccountabilitySupportGroups: zod_1.z.boolean().optional(),
    // Tracks whether user has previously set up an experiment (to skip intro screen)
    hasSetupExperiment: zod_1.z.boolean().optional(),
    // Support group signup wizard completion
    supportGroupSignupCompletedAt: timestampSchema_1.timestampSchema.optional(),
    // Coach approved user as eligible to join the experiment
    markedAsEligibleAt: timestampSchema_1.timestampSchema.optional(),
    calendarBehaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
    // Coach flag - set when user is approved as a coach
    isCoach: zod_1.z.boolean().optional(),
    latestSupportGroupMessages: zod_1.z
        .record(supportGroup_1.supportGroupTypeSchema, latestSupportGroupMessageSchema)
        .optional(),
    // User location (ISO 3166-1 alpha-2 country code)
    country: zod_1.z.string().optional(),
    // Recovery key saved status
    recoveryKeySaved: zod_1.z.boolean().optional(),
    // Disclaimer acceptance
    disclaimerAcceptedAt: timestampSchema_1.timestampSchema.optional(),
    // One-time migration flags
    migrations: zod_1.z
        .object({
        recommendedLibraryDone: zod_1.z.boolean().optional(),
        // Pre-seeds the curated starter tactics + their collections into the
        // user's library (replaces the old in-library "Suggested" sections).
        starterLibraryDone: zod_1.z.boolean().optional(),
    })
        .optional(),
    // "Firsts" — one-time achievements (e.g. first impulse button press)
    firsts: first_1.firstsSchema.optional(),
    // Roadmap / "What we're building" seen tracker
    seenRoadmapItemIds: zod_1.z.array(zod_1.z.string()).optional(),
    roadmapNotificationsEnabled: zod_1.z.boolean().optional(),
    // Voice preference for coach check-in calls
    zaraVoiceId: zod_1.z.enum(["alloy", "shimmer", "echo"]).optional(),
    // Coaching opt-in, toggled by a coach from the dashboard. Gates the
    // client-facing coaching surfaces (e.g. the Home "Coaching" card that shows
    // upcoming coach sessions). Absent/false = the user sees no coaching UI.
    coachingEnabled: zod_1.z.boolean().optional(),
    // Coach check-in configuration — which coach and which weekly slot the user has claimed
    zaraCoachId: zod_1.z.string().optional(),
    zaraSlot: zod_1.z
        .object({
        dayOfWeek: zod_1.z.number().int().min(0).max(6),
        hour: zod_1.z.number().int().min(0).max(23),
        minute: zod_1.z.number().int().min(0).max(59),
    })
        .nullable()
        .optional(),
    // Slots this user offers as a coach (HH:MM string format matches existing Firestore data)
    coachAvailability: zod_1.z
        .array(zod_1.z.object({
        dayOfWeek: zod_1.z.number().int().min(0).max(6),
        startTime: zod_1.z.string(), // "HH:MM"
        endTime: zod_1.z.string(), // "HH:MM"
    }))
        .optional(),
    concurrentUserAccountIds: zod_1.z.array(zod_1.z.string()).optional(),
    // Generated fake name for admin display
    pseudonym: zod_1.z.string().optional(),
    // Emoji avatar chosen by user (synced from userProfile)
    emojiId: zod_1.z.object({ emoji: zod_1.z.string() }).optional(),
    // Denormalized from auth custom claims so admin can query without auth lookup
    onboardingCompleted: zod_1.z.boolean().optional(),
    // Denormalized behavior names for admin list display
    behaviorNames: zod_1.z.array(zod_1.z.string()).optional(),
    // Coach-authored guidance shown to the user between calls
    coachInstructions: zod_1.z.string().optional(),
    // Ongoing support request — the user asks (from the native app, after their
    // first coach check-in) to be taken on for ongoing coaching. A coach reviews
    // and approves/declines it from the coach dashboard. Placeholder for the
    // premium coaching upgrade.
    ongoingSupport: zod_1.z
        .object({
        status: zod_1.z.enum(["requested", "approved", "declined"]).default("requested"),
        requestedAt: timestampSchema_1.timestampSchema,
        resolvedAt: timestampSchema_1.timestampSchema.optional(),
        resolvedByCoachId: zod_1.z.string().optional(),
    })
        .optional(),
});
// Type guard for User
const isUserData = (value) => exports.userDataSchema.safeParse(value).success;
exports.isUserData = isUserData;
