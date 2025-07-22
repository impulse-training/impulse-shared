import * as yup from "yup";
import { logBaseSchema } from "./base";

export const daySummaryLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["day_summary"]).required(),
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup.object({
    targetDayDateString: yup.string().required(),
    behaviorDataTotalByBehaviorId: yup.object().optional(),
    trackingLogsById: yup.object().optional(),
  }),
});

export type DaySummaryLog = yup.InferType<typeof daySummaryLogSchema>;
