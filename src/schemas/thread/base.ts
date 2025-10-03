import { z } from "zod";
import { documentReferenceSchema } from "../../utils";
import { timestampSchema } from "../../utils/timestampSchema";
import { emojiIdSchema } from "../emojiId";
import { planWithIdSchema } from "../plan";

const threadTypeSchema = z.enum([
  "impulse",
  "general",
  "onboarding",
  "recap",
  "behavior",
  "dayRecap",
  "timePlan",
  "locationPlan",
]);

export const threadSummarySchema = z.object({
  type: threadTypeSchema,
  tacticsByTitle: z.record(z.string(), z.array(z.any())),
  behaviorsByName: z.record(z.string(), z.array(z.any())),
  outcomeLogs: z.array(z.any()),
  daySummaryLog: z.any().optional(),
  questionLogs: z.array(z.any()),
  firstMessageLog: z.any().optional(),
  firstCallLog: z.any().optional(),
  hasContent: z.boolean(),
});

// Thread schema
export const threadBaseSchema = z.object({
  id: z.string().optional(),
  // Any thread may have an optional plan
  plan: planWithIdSchema.optional(),
  type: threadTypeSchema.default("general"),
  date: timestampSchema,
  dateString: z.string(),

  mode: z.enum(["text", "voice"]).default("text"),

  // Whether this thread is a draft (created before any logs exist)
  // Draft threads should be hidden in UI until a log is added
  isDraft: z.boolean().optional().default(false),

  // For now, don't type this
  tacticsByPath: z.record(z.string(), z.any()).optional(),
  suggestedTacticsStartedRefreshingAt: timestampSchema.optional(),

  emojiId: emojiIdSchema.nullable(),

  // Log summary data - written in after log write functions. We store tactic and behavior tracking
  // logs here (loosely typed until log schemas are migrated)
  trackingLogsById: z.record(z.string(), z.any()),

  // Pre-computed summary data for thread cards - updated when trackingLogsById changes
  summaryData: threadSummarySchema.optional(),
  defaultSystemPrompt: z.string().optional(),
  debriefSystemPrompt: z.string().optional(),
  summary: z.string().optional(),
  summaryRequestedAt: timestampSchema.optional(),
  summarizedAt: timestampSchema.optional(),
  strategyDoc: documentReferenceSchema.optional(),

  agentConnectedAt: timestampSchema.optional(),
  allQuestionsAnsweredAt: timestampSchema.optional(),

  archiveAfter: timestampSchema,

  sharingLevels: z
    .object({
      impulseMoment: z.boolean(),
      plansUsed: z.boolean(),
      outcome: z.boolean(),
    })
    .optional(),

  // Allow for sharing with users
  sharedWithUserIds: z.array(z.string()),
  sharedWithSupportGroups: z.array(documentReferenceSchema),

  openAfter: timestampSchema.optional(),
  firstOpenedAt: timestampSchema.optional(),
  responseStartedProcessingAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
  createdAt: timestampSchema.optional(),

  // Current call status for global voice UI
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
