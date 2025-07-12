import * as yup from "yup";
import { categorySchema } from "../behavior";
import { logBaseSchema } from "./base";

export const behaviorTrackingDataSchema = yup.object({
  behaviorId: yup.string().required(),
  behaviorName: yup.string().required(),
  behaviorTrackingUnit: yup.string(),
  trackingType: yup.string().oneOf(["counter", "timer"]).required(),
  category: categorySchema,
  value: yup.number().required(), // Count or time in seconds
  formattedValue: yup.string().required(),
  notes: yup.string(), // Optional notes for the behavior tracking
});
export type BehaviorTrackingData = yup.InferType<
  typeof behaviorTrackingDataSchema
>;

// TODO: rename to behaviorLog
export const behaviorTrackedLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["behavior_tracked"]).required(),
  // Behavior tracked logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: behaviorTrackingDataSchema.required(),
});

export type BehaviorTrackedLog = yup.InferType<typeof behaviorTrackedLogSchema>;
