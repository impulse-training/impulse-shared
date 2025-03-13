/**
 * Log Schemas
 *
 * Defines Yup schemas for thread log data
 */
import * as yup from "yup";
import { timestampSchema } from "../utils/timestampSchema";

// Activity Types
export const activityTypes = [
  "message",
  "tactic_completed",
  "tactic_uncompleted",
  "impulse_button_pressed",
  "behavior_tracked",
] as const;

// Base Activity Log Schema
export const activityLogSchema = yup.object({
  type: yup.string().oneOf(activityTypes).required(),
  timestamp: timestampSchema.required(),
  data: yup.object().default({}),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

// Message Log Schema
export const messageLogSchema = activityLogSchema.shape({
  type: yup.string().oneOf(["message"]).required(),
  data: yup
    .object({
      role: yup.string().oneOf(["user", "assistant"]).required(),
      content: yup.string().required(),
    })
    .required(),
});

// Tactic Activity Log Schema
export const tacticActivityLogSchema = activityLogSchema.shape({
  type: yup
    .string()
    .oneOf(["tactic_completed", "tactic_uncompleted", "tactic_viewed"])
    .required(),
  data: yup
    .object({
      tacticId: yup.string().required(),
      tacticTitle: yup.string().required(),
      tacticType: yup.string().required(),
    })
    .required(),
});

// Impulse Log Schema
export const impulseLogSchema = activityLogSchema.shape({
  type: yup.string().oneOf(["impulse_button_pressed"]).required(),
  data: yup.object({}).required(),
});

// Behavior Tracked Log Schema
export const behaviorTrackedLogSchema = activityLogSchema.shape({
  type: yup.string().oneOf(["behavior_tracked"]).required(),
  data: yup
    .object({
      id: yup.string(),
      behaviorId: yup.string().required(),
      behaviorName: yup.string().required(),
      trackingType: yup.string().oneOf(["counter", "timer"]).required(),
      value: yup.number().required(), // Count or time in seconds
      notes: yup.string().nullable(),
    })
    .required(),
});
