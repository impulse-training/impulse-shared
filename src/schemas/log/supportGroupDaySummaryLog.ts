import { z } from "zod";
import { logBaseSchema } from "./base";
import { objectOf } from "../../utils/objectOf";
import { supportGroupSummarySchema } from "../utils/supportGroupSummary";

export const supportGroupDaySummaryLogSchema = logBaseSchema.extend({
  type: z.literal("support_group_day_summary"),
  isDisplayable: z.literal(true),
  data: z.object({
    // Map of userId to their summary + outcome
    summariesByUserId: objectOf(supportGroupSummarySchema),
    // Date string for the day this summary represents
    dateString: z.string(),
  }),
});

export type SupportGroupDaySummaryLog = z.infer<
  typeof supportGroupDaySummaryLogSchema
>;
