import * as yup from "yup";

// Response types for questions
export const responseTypes = ["text", "slider", "multiple_choice"] as const;

// Define outcome types for questions
export const questionOutcomes = ["setback", "partial", "success"] as const;

// Define condition types for next question rules
export const questionConditions = ["equals", "contains", "greater_than", "less_than"] as const;

// Base Question Schema
export const questionSchema = yup.object({
  id: yup.string(),
  content: yup.string().required(),
  responseType: yup.mixed<"text" | "slider" | "multiple_choice">().oneOf(responseTypes).required(),
  suggestedResponses: yup
    .array()
    .of(yup.string())
    .when("responseType", {
      is: (val: "text" | "slider" | "multiple_choice") => val === "text" || val === "multiple_choice",
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
    .when("responseType", {
      is: "slider",
      then: (schema) => schema.required(),
      otherwise: (schema) => schema.optional().default(undefined),
    }),
  scope: yup.string().oneOf(["debrief"]).optional(),
  order: yup.number().optional(),
  requiresOutcome: yup.boolean().optional().default(false),
  visibleForOutcomes: yup
    .array()
    .of(yup.string().oneOf(questionOutcomes))
    .optional(),
  nextQuestionRule: yup
    .object({
      condition: yup.mixed<QuestionCondition>().oneOf(questionConditions).required(),
      value: yup.mixed<string | number>().required(),
      nextQuestionId: yup.string().required(),
    })
    .optional(),
});

// Export response type
export type ResponseType = (typeof responseTypes)[number];
export type QuestionOutcome = (typeof questionOutcomes)[number];
export type QuestionCondition = (typeof questionConditions)[number];

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
