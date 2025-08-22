import { z } from "zod";
import { documentReferenceSchema } from "../../utils";
import { timestampSchema } from "../../utils/timestampSchema";
import { planWithIdSchema } from "../plan";
import { tacticStepSchema } from "../tactic";
import { emojiIdSchema } from "../userProfile";

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
  conversationStartedAt: timestampSchema.optional(),
  // For now, don't type this
  tacticsByPath: z.record(z.string(), z.any()).optional(),

  // Inferred trigger hypothesis for this thread (computed asynchronously)
  triggerHypothesis: z
    .object({
      text: z.string(),
      category: z.string().optional(),
      confidence: z.enum(["low", "med", "high"]).optional(),
      inferredAt: timestampSchema.optional(),
    })
    .optional(),

  // Background-prepared suggested plan snapshot for quick access by UI/agent
  suggestedPlan: z
    .object({
      planRefPath: z.string().optional(),
      name: z.string().optional(),
      // Array of tactic or collection document paths in order
      items: z.array(z.string()),
      // Resolved tactic previews keyed by doc path (mirrors PlanLogView optimization) - loosely typed for now
      tacticsByPath: z.record(z.string(), z.any()).optional(),
      preparedAt: timestampSchema.optional(),
      source: z.enum(["userPlan", "library", "improvised"]),
    })
    .optional(),

  // Ranked candidate tactics the agent can pick from
  candidateTactics: z
    .array(
      z.object({
        tacticPath: z.string(),
        title: z.string().optional(),
        type: z.string().optional(),
        reason: z.string().optional(),
        source: z.enum(["userPlan", "library", "improvised"]).optional(),
        collectionRefPath: z.string().optional(),
      })
    )
    .optional(),

  dateString: z.string(),

  emojiId: emojiIdSchema,

  // Log summary data - written in after log write functions. We store tactic and behavior tracking
  // logs here (loosely typed until log schemas are migrated)
  trackingLogsById: z.record(z.string(), z.any()),
  activeSystemPrompt: z.string().optional(),
  chatSystemPrompt: z.string().optional(),
  summary: z.string().optional(),
  summaryRequestedAt: timestampSchema.optional(),
  summarizedAt: timestampSchema.optional(),
  strategyDoc: documentReferenceSchema.optional(),

  // Current tactic step context (set by clients when user is viewing a tactic step)
  currentConverationMode: z.enum(["active", "debrief"]).optional(),
  currentTacticStep: tacticStepSchema.optional().nullable(),
  agentConnectedAt: timestampSchema.optional(),

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
