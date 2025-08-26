import { z } from "zod";
import { documentReferenceSchema } from "../../utils";
import { timestampSchema } from "../../utils/timestampSchema";
import { emojiIdSchema } from "../emojiId";
import { planWithIdSchema } from "../plan";
import { tacticSchema } from "../tactic";

// Thread schema
export const threadBaseSchema = z.object({
  id: z.string().optional(),
  // Any thread may have an optional plan
  plan: planWithIdSchema.optional(),
  type: z
    .enum([
      "impulse",
      "general",
      "onboarding",
      "recap",
      "dayRecap",
      "timePlan",
      "locationPlan",
    ])
    .default("general"),
  date: timestampSchema,
  dateString: z.string(),

  // Whether this thread is a draft (created before any logs exist)
  // Draft threads should be hidden in UI until a log is added
  isDraft: z.boolean().optional().default(false),

  // For now, don't type this
  tacticsByPath: z.record(z.string(), z.any()).optional(),

  emojiId: emojiIdSchema,

  // Log summary data - written in after log write functions. We store tactic and behavior tracking
  // logs here (loosely typed until log schemas are migrated)
  trackingLogsById: z.record(z.string(), z.any()),
  defaultSystemPrompt: z.string().optional(),
  debriefSystemPrompt: z.string().optional(),
  summary: z.string().optional(),
  summaryRequestedAt: timestampSchema.optional(),
  summarizedAt: timestampSchema.optional(),
  strategyDoc: documentReferenceSchema.optional(),

  currentConservationMode: z.enum(["default"]).optional(),
  currentScreen: z.enum(["tactics", "chat"]).optional(),

  currentTactic: z
    .object({
      tactic: tacticSchema,
      stepIndex: z.number().optional(),
    })
    .optional()
    .nullable(),

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
});
