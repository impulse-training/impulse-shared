import * as yup from "yup";
import { objectOf, optionalObjectOf } from "../../utils";
import { timestampSchema } from "../../utils/timestampSchema";
import { logSchema } from "../log";
import { tacticSchema } from "../tactic";

// Thread schema
export const threadBaseSchema = yup.object({
  id: yup.string(),
  title: yup.string().required(),
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

  // Log summary data - written in after log write functions. We store tactic and behavior tracking
  // logs here
  trackingLogsById: objectOf(logSchema),
  systemPrompt: yup.string(),
  summary: yup.string().optional(),

  firstOpenedAt: timestampSchema,
  updatedAt: timestampSchema,
  createdAt: timestampSchema,
});
