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
});
export type BehaviorTrackingData = yup.InferType<
  typeof behaviorTrackingDataSchema
>;

export const behaviorLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["behavior"]).required(),
  // Behavior tracked logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: behaviorTrackingDataSchema.required(),
});

export type BehaviorLog = yup.InferType<typeof behaviorLogSchema>;
