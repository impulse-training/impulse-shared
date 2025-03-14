import * as yup from "yup";
import { timestampSchema } from "../../utils/timestampSchema";

// Activity Types
export const activityTypes = [
  "message",
  "tactic_completed",
  "tactic_uncompleted",
  "impulse_button_pressed",
  "behavior_tracked",
  "question",
] as const;

// Base Log Schema
export const logBaseSchema = yup.object({
  type: yup.string().oneOf(activityTypes).required(),
  userId: yup.string().required(), // This is required for collection group queries security rules
  timestamp: timestampSchema.required(),
  data: yup.object().default({}),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export * from "./behaviorTrackedLog";
export * from "./impulseLog";
export * from "./messageLog";
export * from "./questionLog";
export * from "./tacticLog";
