import * as yup from "yup";
import { logBaseSchema } from ".";
import { BehaviorTrackedLog } from "../../types";

// Behavior Tracked Log Schema
export const behaviorTrackedLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["behavior_tracked"]).required(),
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

export const isBehaviorTrackedLog = (
  value: unknown
): value is BehaviorTrackedLog => {
  try {
    behaviorTrackedLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
