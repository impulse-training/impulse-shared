import * as yup from "yup";
import { RecapQuestion, recapQuestionSchema } from "./recap";
import { SliderQuestion, sliderQuestionSchema } from "./slider";
import { TextQuestion, textQuestionSchema } from "./text";

export * from "./recap";
export * from "./slider";
export * from "./text";

// Response types for questions
export const responseTypes = ["text", "slider", "recap"] as const;
export type ResponseType = (typeof responseTypes)[number];

export const responseTypeSchema = yup
  .mixed<Question["responseType"]>()
  .oneOf(responseTypes)
  .required();

// Union type for all question types
export type Question = TextQuestion | SliderQuestion | RecapQuestion;

// Utility to dynamically select the correct schema based on the Question type
export const QuestionSchemas: Record<
  Question["responseType"],
  yup.ObjectSchema<Question>
> = {
  text: textQuestionSchema,
  slider: sliderQuestionSchema,
  recap: recapQuestionSchema,
} as any;

export const questionSchema = yup.lazy((value) => {
  if (
    typeof value.responseType === "string" &&
    value.responseType in QuestionSchemas
  ) {
    return QuestionSchemas[value.responseType as Question["responseType"]];
  }

  return yup.object({
    responseType: responseTypeSchema,
  });
}) as yup.Lazy<QuestionTypes[Question["responseType"]]>;

// This type represents the union of all possible validated Question objects
export type QuestionTypes = {
  [K in Question["responseType"]]: yup.InferType<(typeof QuestionSchemas)[K]>;
};

// Type guards for each question type
export const isTextQuestion = (
  value: Omit<Question, "id">
): value is TextQuestion => value.responseType === "text";

export const isValidTextQuestion = (value: unknown): value is TextQuestion => {
  try {
    textQuestionSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isRecapQuestion = (
  value: Omit<Question, "id">
): value is RecapQuestion => value.responseType === "recap";

export const isValidRecapQuestion = (
  value: unknown
): value is RecapQuestion => {
  try {
    recapQuestionSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isSliderQuestion = (
  value: Omit<Question, "id">
): value is SliderQuestion => value.responseType === "slider";

export const isValidSliderQuestion = (
  value: unknown
): value is SliderQuestion => {
  try {
    sliderQuestionSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isQuestion = (value: unknown): value is Question => {
  try {
    questionSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
