import * as yup from "yup";
import { logBaseSchema } from ".";

// Behavior Tracked Log Schema
export const behaviorTrackedLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["behavior_tracked"]).required(),
  // Behavior tracked logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup
    .object({
      behaviorId: yup.string().required(),
      behaviorName: yup.string().required(),
      trackingType: yup.string().oneOf(["counter", "timer"]).required(),
      value: yup.number().required(), // Count or time in seconds
      notes: yup.string().nullable(),
    })
    .required(),
});

export type BehaviorTrackedLog = yup.InferType<typeof behaviorTrackedLogSchema>;
