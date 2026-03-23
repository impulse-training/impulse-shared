import { z } from "zod";
import { logBaseSchema } from "./base";

export const dayTotalsPromptLogSchema = logBaseSchema.extend({
  type: z.literal("day_totals_prompt"),
  isDisplayable: z.literal(true),
  data: z.object({
    /** The dateString this prompt is for (typically the current day) */
    targetDateString: z.string(),
  }),
});

export type DayTotalsPromptLog = z.infer<typeof dayTotalsPromptLogSchema>;
