import { z } from "zod";
import { logBaseSchema } from "./base";

export const dayTotalsConfirmedLogSchema = logBaseSchema.extend({
  type: z.literal("day_totals_confirmed"),
  isDisplayable: z.literal(false),
  data: z.object({
    dateString: z.string(),
  }),
});

export type DayTotalsConfirmedLog = z.infer<
  typeof dayTotalsConfirmedLogSchema
>;
