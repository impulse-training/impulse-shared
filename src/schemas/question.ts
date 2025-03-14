import * as yup from "yup";
import { Question } from "../types/question";

// Response types for questions
export const responseTypes = ["text", "slider"] as const;

// Base Question Schema
export const questionSchema = yup.object({
  content: yup.string().required(),
  responseType: yup.mixed<"text" | "slider">().oneOf(responseTypes).required(),
  suggestedResponses: yup
    .array()
    .of(yup.string())
    .when("responseType", {
      is: "text",
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
});

export const isQuestion = (value: unknown): value is Question => {
  try {
    questionSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
