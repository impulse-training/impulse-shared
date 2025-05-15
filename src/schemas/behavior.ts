import * as yup from "yup";
import { timestampSchema } from "../utils";
import { BEHAVIOR_CATEGORIES, BehaviorCategoryKey } from "../constants";

export const trackingTypes = ["counter", "timer"] as const;

// Use the category keys from our constants
const categoryKeys = Object.keys(BEHAVIOR_CATEGORIES) as BehaviorCategoryKey[];

export const categorySchema = yup
  .mixed<BehaviorCategoryKey>()
  .oneOf(categoryKeys)
  .required();

// We're using simple string arrays for benefits and drawbacks
const goalSchema = yup.object({
  type: yup
    .mixed<"greaterThan" | "lessThanOrEqualTo">()
    .oneOf(["greaterThan", "lessThanOrEqualTo"])
    .required(),
  target: yup.number().required(),
});

export const behaviorSchema = yup.object({
  id: yup.string(),
  name: yup.string().required(),
  description: yup.string().required(),
  ordinal: yup.number().default(0),
  benefits: yup.array().of(yup.string().required()),
  drawbacks: yup.array().of(yup.string().required()),
  trackingType: yup.string().oneOf(trackingTypes).required(),
  trackingUnit: yup.string().when("trackingType", {
    is: "counter",
    then: (schema) =>
      schema.required(
        "Tracking unit is required when tracking type is 'counter'"
      ),
    otherwise: (schema) => schema.notRequired(),
  }),
  category: categorySchema,
  goal: goalSchema,
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
