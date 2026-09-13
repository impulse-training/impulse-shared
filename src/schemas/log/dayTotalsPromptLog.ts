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
    /**
     * What was confirmed, snapshotted at the moment of confirming.
     *
     * The card could say THAT the day was locked in but never WHAT was locked
     * in, so a recap read back later — or a voice call where the user never
     * saw a screen — leaves no record of the numbers they actually agreed to.
     * Re-deriving them from the day summary is not the same fact: behaviour
     * logs keep changing afterwards, and the question this answers is what
     * the user said yes to.
     *
     * Absent on logs confirmed before this existed.
     */
    confirmedTotals: z
      .array(
        z.object({
          behaviorId: z.string(),
          /** Masked behaviours are stored by id; the name is for display. */
          behaviorName: z.string().optional(),
          value: z.number(),
          formattedValue: z.string().optional(),
        }),
      )
      .optional(),
    /** Set when the user requests a late-recap discussion with the AI */
    discussRequestedAt: timestampSchema.optional(),
  }),
});

export type DayTotalsPromptLog = z.infer<typeof dayTotalsPromptLogSchema>;
