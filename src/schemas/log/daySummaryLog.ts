import { z } from "zod";
import { logBaseSchema } from "./base";
import { behaviorSchema } from "../behavior";

export const daySummaryLogSchema = logBaseSchema.extend({
  type: z.literal("day_summary"),
  isDisplayable: z.literal(true),
  data: z.object({
    targetDayDateString: z.string(),
    behaviorDataTotalByBehaviorId: z.record(z.string(), z.any()).optional(),
    behaviorsById: z.record(z.string(), behaviorSchema).optional(),
    trackingLogsById: z.record(z.string(), z.any()).optional(),
  }),
});

export type DaySummaryLog = z.infer<typeof daySummaryLogSchema>;
