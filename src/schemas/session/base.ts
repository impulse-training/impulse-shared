import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";
import { behaviorTrackingDataSchema } from "../behaviorTrackingData";
import { emojiIdSchema } from "../emojiId";
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
  "alignment",
  "commitment",
  "setup",
  "welcome",
  "tactic",
  "recoveryKey",
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

  currentTactic: tacticSchema.optional(),
  currentTacticStepIndex: z.number().optional(),

  // Whether this session is a draft (created before any logs exist)
  // Draft sessions should be hidden in UI until a log is added
  isDraft: z.boolean().optional().default(false),

  // Whether to show the tactics sheet in this session (defaults to true for impulse/general)
  showTactics: z.boolean().optional(),

  // TODO: review if necessary
  emojiId: emojiIdSchema.nullable(),

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
  planStartedProcessingAt: timestampSchema.optional(),

  startedPlanIds: z.array(z.string()).optional(),
  completedPlanIds: z.array(z.string()).optional(),

  // ID of the active call log document (in users/{userId}/logs)
  activeCallLogId: z.string().optional(),

  // Captured GPS location at session start
  location: z
    .object({
      latitude: z.number(),
      longitude: z.number(),
      accuracy: z.number().optional(),
    })
    .optional(),

  // Multi-select tags: tagGroupId → array of selected optionIds
  tags: z.record(z.string(), z.array(z.string())).optional(),

  // Deletion state - set when the user initiates deletion from the UI
  startedDeletingAt: timestampSchema.optional(),
  deletingError: z.string().optional(),
});
