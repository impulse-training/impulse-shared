import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

export const dayTotalsConfirmedLogSchema = logBaseSchema.extend({
  type: z.literal("day_totals_confirmed"),
  isDisplayable: z.literal(false),
  data: z.object({
    dateString: z.string(),
    /** Set when the user requests a late-recap discussion with the AI */
    discussRequestedAt: timestampSchema.optional(),
  }),
});

export type DayTotalsConfirmedLog = z.infer<
  typeof dayTotalsConfirmedLogSchema
>;
