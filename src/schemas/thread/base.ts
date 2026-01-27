import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";
import { emojiIdSchema } from "../emojiId";
import { planWithIdSchema } from "../plan";
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
]);

// Thread schema
export const threadBaseSchema = z.object({
  id: z.string().optional(),
  type: threadTypeSchema.default("general"),
  // Optional title for the thread (e.g., plan name)
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

  emojiId: emojiIdSchema.nullable(),

  // Pre-computed summary data for thread cards - updated when thread is closed
  summaryData: threadSummarySchema.optional(),
  defaultSystemPrompt: z.string().optional(),
  debriefSystemPrompt: z.string().optional(),
  summary: z.string().optional(),
  summaryRequestedAt: timestampSchema.optional(),
  summarizedAt: timestampSchema.optional(),
  strategyDoc: documentReferenceSchema.optional(),

  triggerId: z.string().nullable().optional(),

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
  sharingMessage: z.string().optional(),
  sharedWithUserIds: z.array(z.string()),
  sharedWithSupportGroups: z.array(documentReferenceSchema),

  openAfter: timestampSchema.optional(),
  firstOpenedAt: timestampSchema.optional(),
  responseStartedProcessingAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
  createdAt: timestampSchema.optional(),

  startedPlanIds: z.array(z.string()).optional(),
  completedPlanIds: z.array(z.string()).optional(),

  // OpenAI Assistants API integration
  assistantId: z.string().optional(),
  assistantThreadId: z.string().optional(),

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
