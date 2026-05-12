import { z } from "zod";
import { logBaseSchema } from "./base";
import { timestampSchema } from "../../utils/timestampSchema";

const tacticSuggestionItemSchema = z.object({
  theme: z.string().min(1),
  guidance: z.string().optional(),
  tacticId: z.string().optional(),
  tactic: z.record(z.string(), z.any()).optional(),
  selectedAt: timestampSchema.optional(),
});

export const tacticSuggestionsLogSchema = logBaseSchema.extend({
  type: z.literal("tactic_suggestions"),
  isDisplayable: z.literal(true),
  data: z.object({
    taskId: z.string().min(1),
    suggestions: z.array(tacticSuggestionItemSchema).min(1),
  }),
});

export type TacticSuggestionsLog = z.infer<typeof tacticSuggestionsLogSchema>;
