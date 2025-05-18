import * as yup from "yup";
import { BEHAVIOR_CATEGORIES, BehaviorCategoryKey } from "../constants";
import { timestampSchema } from "../utils";

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

// These are foundational attributes, and correspond to documents in a top-level behaviorTemplates
// collection. We then extend that schema to be the full behavior schema.
export const behaviorTemplateSchema = yup.object({
  name: yup.string().required(),
  category: categorySchema,
  trackingType: yup.string().oneOf(trackingTypes).required(),
  trackingUnit: yup.string().when("trackingType", {
    is: "counter",
    then: (schema) =>
      schema.required(
        "Tracking unit is required when tracking type is 'counter'"
      ),
    otherwise: (schema) => schema.notRequired(),
  }),
});
export type BehaviorTemplate = yup.InferType<typeof behaviorTemplateSchema>;

// These are stored at the user-level, as in, users/$userId/behaviors/$behaviorId
export const behaviorSchema = behaviorTemplateSchema.shape({
  id: yup.string(),
  description: yup.string().required(),
  ordinal: yup.number().default(0),
  benefits: yup.array().of(yup.string().required()),
  drawbacks: yup.array().of(yup.string().required()),
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
