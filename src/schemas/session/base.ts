import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";
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

  // "full" = normal session with title, rail, summary
  // "minimal" = invisible session, logs render bare with a reflect CTA
  displayMode: z.enum(["full", "minimal"]).optional().default("full"),

  // TODO: review if necessary
  emojiId: emojiIdSchema.nullable(),

  // Pre-computed summary data for session cards - updated when session is closed
  summaryData: sessionSummarySchema.optional(),
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
  unreadSince: timestampSchema.optional(),

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
