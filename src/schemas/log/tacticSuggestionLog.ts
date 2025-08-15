import * as yup from "yup";
import { tacticSchema } from "../tactic.old";
import { logBaseSchema } from "./base";

// Single Tactic Suggestion Log Schema
// Represents the assistant suggesting exactly one tactic for the user to try now
export const tacticSuggestionLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["tactic_suggestion"]).required(),
  // Suggestion logs are displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      tactic: tacticSchema,
      tacticPath: yup.string().required(),
      reason: yup.string().optional(),
      source: yup
        .string()
        .oneOf(["userPlan", "library", "improvised"]) // provenance of the suggestion
        .optional(),
      collectionRefPath: yup.string().optional(),
    })
    .required(),
});

export type TacticSuggestionLog = yup.InferType<typeof tacticSuggestionLogSchema>;
