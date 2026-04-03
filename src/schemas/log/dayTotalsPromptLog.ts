import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

export const dayTotalsPromptLogSchema = logBaseSchema.extend({
  type: z.literal("day_totals_prompt"),
  isDisplayable: z.literal(true),
  data: z.object({
    /** The dateString this prompt is for (typically the current day) */
    targetDateString: z.string(),
    /** Set when the user confirms their day totals */
    confirmedAt: timestampSchema.optional(),
    /** Set when the user requests a late-recap discussion with the AI */
    discussRequestedAt: timestampSchema.optional(),
  }),
});

export type DayTotalsPromptLog = z.infer<typeof dayTotalsPromptLogSchema>;
