import { z } from "zod";
import { logBaseSchema } from "./base";
import { objectOf } from "../../utils/objectOf";
import { supportGroupSummarySchema } from "../utils/supportGroupSummary";
import { timestampSchema } from "../../utils/timestampSchema";

export const supportGroupDaySummaryLogSchema = logBaseSchema.extend({
  type: z.literal("support_group_day_summary"),
  isDisplayable: z.literal(true),
  text: z.string().optional(),
  data: z.object({
    // Map of userId to their summary + outcome
    summariesByUserId: objectOf(supportGroupSummarySchema),
    // Map of userId to color used in support group day header
    colorByUserId: objectOf(z.string()).optional(),
    // Date string for the day this summary represents
    dateString: z.string(),
    summarizationCompletedAt: timestampSchema.optional(),
    summarizationError: timestampSchema.optional(),
    summarizationFailedAt: timestampSchema.optional(),
  }),
});

export type SupportGroupDaySummaryLog = z.infer<
  typeof supportGroupDaySummaryLogSchema
>;
