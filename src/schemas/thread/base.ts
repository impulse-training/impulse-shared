import * as yup from "yup";
import {
  documentReferenceSchema,
  objectOf,
  optionalObjectOf,
  withIdSchema,
} from "../../utils";
import { timestampSchema } from "../../utils/timestampSchema";
import { logSchema } from "../log";
import { Plan, planSchema } from "../plan";
import { tacticSchema } from "../tactic";
import { emojiIdSchema } from "../userProfile";

// Thread schema
export const threadBaseSchema = yup.object({
  id: yup.string(),
  // Any thread may have an optional plan
  plan: withIdSchema<Plan>(planSchema).optional(),
  type: yup
    .mixed<
      | "impulse"
      | "general"
      | "onboarding"
      | "dayRecap"
      | "timePlan"
      | "locationPlan"
    >()
    .oneOf([
      "impulse",
      "general",
      "onboarding",
      "dayRecap",
      "timePlan",
      "locationPlan",
    ])
    .default("general"),
  date: timestampSchema.required(),
  tacticsByPath: optionalObjectOf(tacticSchema),

  // Inferred trigger hypothesis for this thread (computed asynchronously)
  triggerHypothesis: yup
    .object({
      text: yup.string().required(),
      category: yup.string().optional(),
      confidence: yup.mixed<"low" | "med" | "high">().oneOf(["low", "med", "high"]).optional(),
      inferredAt: timestampSchema.required(),
    })
    .optional(),

  // Background-prepared suggested plan snapshot for quick access by UI/agent
  suggestedPlan: yup
    .object({
      planRefPath: yup.string().optional(),
      name: yup.string().optional(),
      // Array of tactic or collection document paths in order
      items: yup.array().of(yup.string().required()).required(),
      // Resolved tactic previews keyed by doc path (mirrors PlanLogView optimization)
      tacticsByPath: optionalObjectOf(tacticSchema),
      preparedAt: timestampSchema.required(),
      source: yup.mixed<"userPlan" | "library" | "improvised">().oneOf(["userPlan", "library", "improvised"]).required(),
    })
    .optional(),

  // Ranked candidate tactics the agent can pick from
  candidateTactics: yup
    .array()
    .of(
      yup
        .object({
          tacticPath: yup.string().required(),
          title: yup.string().optional(),
          type: yup.string().optional(),
          reason: yup.string().optional(),
          source: yup.mixed<"userPlan" | "library" | "improvised">().oneOf(["userPlan", "library", "improvised"]).optional(),
          collectionRefPath: yup.string().optional(),
        })
        .required()
    )
    .optional(),

  dateString: yup.string().required(),

  emojiId: emojiIdSchema,

  // Log summary data - written in after log write functions. We store tactic and behavior tracking
  // logs here
  trackingLogsById: objectOf(logSchema),
  systemPrompt: yup.string(),
  summary: yup.string().optional(),
  summaryRequestedAt: timestampSchema.optional(),
  summarizedAt: timestampSchema.optional(),
  strategyDoc: documentReferenceSchema,

  agentConnectedAt: timestampSchema,

  sharingLevels: yup
    .object({
      impulseMoment: yup.boolean().required(),
      plansUsed: yup.boolean().required(),
      outcome: yup.boolean().required(),
    })
    .optional()
    .default(undefined),

  // Allow for sharing with users
  sharedWithUserIds: yup.array().of(yup.string().required()),
  sharedWithSupportGroups: yup.array().of(documentReferenceSchema.required()),

  openAfter: timestampSchema,
  firstOpenedAt: timestampSchema,
  responseStartedProcessingAt: timestampSchema,
  updatedAt: timestampSchema,
  createdAt: timestampSchema,
});
