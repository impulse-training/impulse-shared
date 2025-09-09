import { z } from "zod";
import { logBaseSchema } from "./base";
import { daySummarySchema } from "../daySummary";

export const daySummaryLogSchema = logBaseSchema.extend({
  type: z.literal("day_summary"),
  isDisplayable: z.literal(true),
  // Store the entire DaySummary object in the log for single-source-of-truth
  data: daySummarySchema,
});

export type DaySummaryLog = z.infer<typeof daySummaryLogSchema>;
