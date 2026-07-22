import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";
import { behaviorTrackingDataSchema } from "../behaviorTrackingData";
import { tacticSchema } from "../tactic/tactic";
import { sessionSummarySchema } from "../sessionSummary";

const sessionTypeSchema = z.enum([
  "impulse",
  "general",
  "onboarding",
  "recap",
  "behavior",
  "dayRecap",
  "timePlan",
  "locationPlan",
  "adjustment",
  "alignment", // TODO: Remove after 2026-05-26 — legacy value, replaced by "onboarding"
  "welcome",
  "tactic",
  "recoveryKey", // TODO: Remove after 2026-07-05 — replaced by "tasks" session type
  "tasks",
  "demo",
  "milestone",
  "toolkitPlanning",
  "zaraCheckIn", // Weekly voice check-in with a coach — excluded from the journal
]);

// Session schema
export const sessionBaseSchema = z.object({
  id: z.string().optional(),
  type: sessionTypeSchema.default("general"),
  title: z.string(),
  behaviorIds: z.array(z.string()).optional(),
  date: timestampSchema,
  dateString: z.string(),
  userId: z.string(),

  mode: z.enum(["text", "voice"]).default("text"),
  voiceEnabled: z.boolean().optional(),

  currentTactic: tacticSchema.optional(),
  currentTacticStepIndex: z.number().optional(),

  // Whether this session is a draft (created before any logs exist)
  // Draft sessions should be hidden in UI until a log is added
  isDraft: z.boolean().optional().default(false),

  // Whether to show the tactics sheet in this session (defaults to true for impulse/general)
  showTactics: z.boolean().optional(),

  // Pre-computed summary data for session cards - updated when session is closed
  summaryData: sessionSummarySchema.optional(),
  behaviorDataTotals: z.array(behaviorTrackingDataSchema).optional(),
  defaultSystemPrompt: z.string().optional(),
  summary: z.string().optional(),
  aiSummary: z.string().optional(),
  summaryRequestedAt: timestampSchema.optional(),
  summarizedAt: timestampSchema.nullable(),
  reflectRequestedAt: timestampSchema.optional(),

  // Where the session was created from
  origin: z.enum(["native", "mac"]).optional(),

  // Which app feature/flow created this session (as opposed to `origin`,
  // which is about the client device). Currently only set on "behavior"
  // sessions created by the recap "adjust totals" flow.
  source: z.enum(["adjustment"]).optional(),

  // True when this session represents a behavior total that wasn't tied to a
  // specific time of day (e.g. a recap adjustment with no time picked).
  // `date` still holds a real end-of-day timestamp so the session sorts last
  // among the day's journal entries and range queries still match it — the
  // UI uses this flag to hide the (meaningless) clock-time label.
  timeUnspecified: z.boolean().optional(),

  triggerId: z.string().nullable().optional(),

  agentConnectedAt: timestampSchema.optional(),

  // Allow for sharing with users
  sharingMessage: z.string().optional(),
  sharedWithUserIds: z.array(z.string()),
  sharedWithSupportGroups: z.array(documentReferenceSchema),

  openAfter: timestampSchema.optional(),
  firstOpenedAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
  createdAt: timestampSchema.optional(),
  lastReadAt: timestampSchema.optional(),
  unreadSince: timestampSchema.optional(),

  responseStartedProcessingAt: timestampSchema.optional(),
  responseRequestId: z.string().optional(),
  responseError: z.string().nullable().optional(),
  planStartedProcessingAt: timestampSchema.optional(),

  startedPlanIds: z.array(z.string()).optional(),
  completedPlanIds: z.array(z.string()).optional(),

  // ID of the active call log document (in users/{userId}/logs)
  activeCallLogId: z.string().optional(),

  // Coach guidance injected in real-time into a live voice session
  coachGuidanceItems: z
    .array(z.object({ id: z.string(), text: z.string(), sentAt: timestampSchema }))
    .optional(),

  // Multi-select tags: tagGroupId → array of selected optionIds
  tags: z.record(z.string(), z.array(z.string())).optional(),

  // Set when the AI calls showCloseButton — indicates the conversation has reached a natural end.
  // Cleared again if the assistant's next turn asks a question, so the close stays an offer.
  aiFinalizedAt: timestampSchema.optional(),

  // Which stage decided the close. Recaps withhold showCloseButton from the session
  // AI and route the decision through judgeRecapClose ("reviewer"); every other
  // session type has the AI call the tool itself ("ai"). Recorded so the agreement
  // rate between the cheap prefilter and the reviewer stays auditable in Firestore
  // rather than only for as long as logs are retained.
  closeDecidedBy: z.enum(["ai", "reviewer"]).optional(),

  // Deletion state - set when the user initiates deletion from the UI
  startedDeletingAt: timestampSchema.optional(),
  deletingError: z.string().optional(),
});
