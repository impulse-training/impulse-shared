import * as yup from "yup";
import { timestampSchema } from "../utils";

export const trackingTypes = ["counter", "timer"] as const;

export const behaviorSchema = yup.object({
  id: yup.string(),
  name: yup.string().required(),
  description: yup.string().required(),
  trackingType: yup.string().oneOf(trackingTypes).required(),
  gameplanTacticIds: yup.array().of(yup.string()).default([]),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  lastTrackedAt: timestampSchema,
});

export type TrackingType = (typeof trackingTypes)[number];

// Export types inferred from schemas
export type Behavior = yup.InferType<typeof behaviorSchema>;

export const isBehavior = (value: unknown): value is Behavior => {
  try {
    behaviorSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
