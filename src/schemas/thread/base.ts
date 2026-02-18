import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";
import { emojiIdSchema } from "../emojiId";
import { tacticSchema } from "../tactic/tactic";
import { threadSummarySchema } from "../threadSummary";

const threadTypeSchema = z.enum([
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
]);

// Thread schema
export const threadBaseSchema = z.object({
  id: z.string().optional(),
  type: threadTypeSchema.default("general"),
  title: z.string().optional(),
  behaviorIds: z.array(z.string()).optional(),
  date: timestampSchema,
  dateString: z.string(),
  userId: z.string(),

  mode: z.enum(["text", "voice"]).default("text"),

  currentTactic: tacticSchema.optional(),
  currentTacticStepIndex: z.number().optional(),

  // Whether this thread is a draft (created before any logs exist)
  // Draft threads should be hidden in UI until a log is added
  isDraft: z.boolean().optional().default(false),

  // TODO: review if necessary
  emojiId: emojiIdSchema.nullable(),

  // Pre-computed summary data for thread cards - updated when thread is closed
  summaryData: threadSummarySchema.optional(),
  defaultSystemPrompt: z.string().optional(),
  summary: z.string().optional(),
  summaryRequestedAt: timestampSchema.optional(),
  summarizedAt: timestampSchema.nullable(),

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
  unreadSince: z.record(z.string(), timestampSchema).optional(),

  responseStartedProcessingAt: timestampSchema.optional(),

  startedPlanIds: z.array(z.string()).optional(),
  completedPlanIds: z.array(z.string()).optional(),

  // Current call status for global voice UI
  // TODO - review if necessary
  currentCall: z
    .object({
      logId: z.string(),
      token: z.string(),
      livekitRoomName: z.string(),
      livekitSessionId: z.string(),
      startedAt: timestampSchema,
      agentConnectedAt: timestampSchema.optional(),
      endedAt: timestampSchema.optional(),
      status: z.enum(["connecting", "connected", "ended"]),
    })
    .optional(),
});
