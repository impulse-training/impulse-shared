import * as yup from "yup";
import { Outcome, outcomes } from "../utils/outcomes";

// Response types for questions
export const responseTypes = ["text", "slider", "multiple_choice"] as const;

// Base Question Schema
export const questionSchema = yup.object({
  id: yup.string(),
  content: yup.string().required(),
  responseType: yup
    .mixed<"text" | "slider" | "multiple_choice">()
    .oneOf(responseTypes)
    .required(),
  suggestedResponses: yup
    .array()
    .of(yup.string())
    .when("responseType", {
      is: (val: "text" | "slider" | "multiple_choice") =>
        val === "text" || val === "multiple_choice",
      then: (schema) => schema.required().min(1),
      otherwise: (schema) => schema.default([]),
    }),
  sliderConfig: yup
    .object({
      min: yup.number().required(),
      max: yup.number().required(),
      step: yup.number().default(1),
      minLabel: yup.string(),
      maxLabel: yup.string(),
      defaultValue: yup.number(),
    })
    .optional()
    .default(undefined)
    .when("responseType", {
      is: "slider",
      then: (schema) => schema.required(),
    }),
  scope: yup.string().oneOf(["debrief"]).optional(),
  order: yup.number().optional(),
  visibleForOutcomes: yup
    .array()
    .of(yup.mixed<Outcome>().oneOf(outcomes))
    .optional(),
});

// Export response type
export type ResponseType = (typeof responseTypes)[number];

// Export types inferred from schemas
export type Question = yup.InferType<typeof questionSchema>;

export const isQuestion = (value: unknown): value is Question => {
  try {
    questionSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
