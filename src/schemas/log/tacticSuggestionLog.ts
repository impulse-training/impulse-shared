import { z } from "zod";
import { logBaseSchema } from "./base";

// Single Tactic Suggestion Log Schema
// Represents the assistant suggesting exactly one tactic for the user to try now
export const tacticSuggestionLogSchema = logBaseSchema.extend({
  type: z.literal("tactic_suggestion"),
  // Suggestion logs are displayed in the UI
  isDisplayable: z.literal(true),
  data: z.object({
    // TODO: tighten once ../tactic.old is migrated
    tactic: z.any(),
    tacticPath: z.string(),
    reason: z.string().optional(),
    source: z.enum(["userPlan", "library", "improvised"]).optional(),
    collectionRefPath: z.string().optional(),
  }),
});

export type TacticSuggestionLog = z.infer<typeof tacticSuggestionLogSchema>;
