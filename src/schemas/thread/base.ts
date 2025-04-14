import * as yup from "yup";
import { objectOf } from "../../utils";
import { outcomeSchema } from "../../utils/outcomes";
import { timestampSchema } from "../../utils/timestampSchema";
import { gameplanSchema, logSchema } from "../log";

// Thread schema
export const threadBaseSchema = yup.object({
  id: yup.string(),
  title: yup.string().required(),
  type: yup
    .mixed<"impulse" | "general" | "onboarding" | "dayRecap">()
    .oneOf(["impulse", "general", "onboarding", "dayRecap"])
    .default("general"),
  date: timestampSchema.required(),
  gameplan: gameplanSchema, // The gameplan is a list of tactics that the user has agreed to use
  dateString: yup.string().required(),

  // Log summary data - written in after log write functions. We store tactic and behavior tracking
  // logs here
  trackingLogsById: objectOf(logSchema),

  outcome: outcomeSchema,
  systemPrompt: yup.string(),
  summary: yup.string().optional(),
  debriefedAt: timestampSchema,
  updatedAt: timestampSchema,
  createdAt: timestampSchema,
});
