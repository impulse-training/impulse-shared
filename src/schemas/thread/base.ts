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

  dateString: yup.string().required(),

  emojiId: emojiIdSchema,

  // Log summary data - written in after log write functions. We store tactic and behavior tracking
  // logs here
  trackingLogsById: objectOf(logSchema),
  systemPrompt: yup.string(),
  summary: yup.string().optional(),
  strategyDoc: documentReferenceSchema,

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
