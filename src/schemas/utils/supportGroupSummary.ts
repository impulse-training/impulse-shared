import { outcomeSchema } from "../../utils/outcomes";
import z from "zod";

// This is shared with support groups (and can vary by group)
export const supportGroupSummarySchema = z.object({
  summary: z.string(),
  outcome: outcomeSchema.optional(),
});

export type SupportGroupSummary = z.infer<typeof supportGroupSummarySchema>;
