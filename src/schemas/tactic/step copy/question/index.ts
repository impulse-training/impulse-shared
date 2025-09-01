import { z } from "zod";
import { Slider1To10QuestionStep, slider1To10QuestionStepSchema } from "./slider1To10";
import { TextQuestionStep, textQuestionStepSchema } from "./text";

export * from "./slider1To10";
export * from "./text";

// Re-export the individual schemas for use in the main discriminated union
export { slider1To10QuestionStepSchema, textQuestionStepSchema };

// Union type for all question step types
export type QuestionStep = TextQuestionStep | Slider1To10QuestionStep;

// Helper function to check if a step is any type of question step
export const isQuestionStepMode = (mode: string): boolean => {
  return mode === "question-text" || mode === "question-slider1To10";
};

// Schema for discriminated union based on mode
export const questionStepSchema = z.discriminatedUnion("mode", [
  textQuestionStepSchema,
  slider1To10QuestionStepSchema,
]);

// Type guards for question steps
export const questionStepIsTextQuestion = (
  value: Omit<QuestionStep, "id">
): value is TextQuestionStep => value.mode === "question-text";

export const isValidTextQuestionStep = (value: unknown): value is TextQuestionStep =>
  textQuestionStepSchema.safeParse(value).success;

export const questionStepIsSlider1To10Question = (
  value: Omit<QuestionStep, "id">
): value is Slider1To10QuestionStep => value.mode === "question-slider1To10";

export const isValidSlider1To10QuestionStep = (
  value: unknown
): value is Slider1To10QuestionStep =>
  slider1To10QuestionStepSchema.safeParse(value).success;

// This type represents the union of all possible validated QuestionStep objects
export type QuestionStepTypes = {
  [K in QuestionStep["mode"]]: z.infer<(typeof QuestionStepSchemas)[K]>;
};

// Utility to dynamically select the correct schema based on the QuestionStep type
export const QuestionStepSchemas = {
  "question-text": textQuestionStepSchema,
  "question-slider1To10": slider1To10QuestionStepSchema,
} as const;

export const isQuestionStep = (value: unknown): value is QuestionStep =>
  questionStepSchema.safeParse(value).success;
