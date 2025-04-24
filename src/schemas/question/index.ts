import * as yup from "yup";
import { TextQuestion, textQuestionSchema } from "./text";
import { SliderQuestion, sliderQuestionSchema } from "./slider";
import { MultipleChoiceQuestion, multipleChoiceQuestionSchema } from "./multiple_choice";

export * from "./text";
export * from "./slider";
export * from "./multiple_choice";

// Response types for questions
export const responseTypes = ["text", "slider", "multiple_choice"] as const;
export type ResponseType = (typeof responseTypes)[number];

// Union type for all question types
export type Question = TextQuestion | SliderQuestion | MultipleChoiceQuestion;

// Utility to dynamically select the correct schema based on the Question type
export const QuestionSchemas: Record<
  Question["responseType"],
  yup.ObjectSchema<Question>
> = {
  text: textQuestionSchema,
  slider: sliderQuestionSchema,
  multiple_choice: multipleChoiceQuestionSchema,
} as any;

export const questionSchema = yup.lazy((value) => {
  if (typeof value.responseType === "string" && value.responseType in QuestionSchemas) {
    return QuestionSchemas[value.responseType as Question["responseType"]];
  }

  return yup.object({
    responseType: yup
      .mixed<Question["responseType"]>()
      .oneOf(responseTypes)
      .required(),
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

export const isValidTextQuestion = (
  value: unknown
): value is TextQuestion => {
  try {
    textQuestionSchema.validateSync(value);
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

export const isMultipleChoiceQuestion = (
  value: Omit<Question, "id">
): value is MultipleChoiceQuestion => value.responseType === "multiple_choice";

export const isValidMultipleChoiceQuestion = (
  value: unknown
): value is MultipleChoiceQuestion => {
  try {
    multipleChoiceQuestionSchema.validateSync(value);
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
