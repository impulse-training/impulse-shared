import { z } from "zod";
import { RecapQuestion, recapQuestionSchema } from "./recap";
import { Slider1To10Question, slider1To10QuestionSchema } from "./slider1To10";
import { TextQuestion, textQuestionSchema } from "./text";

export * from "./recap";
export * from "./slider1To10";
export * from "./text";

// Response types for questions
export const responseTypes = ["text", "slider1To10", "recap"] as const;
export type ResponseType = (typeof responseTypes)[number];

export const responseTypeSchema = z.enum(responseTypes);

// Union type for all question types
export type Question = TextQuestion | Slider1To10Question | RecapQuestion;

// Utility to dynamically select the correct schema based on the Question type
export const QuestionSchemas = {
  text: textQuestionSchema,
  slider1To10: slider1To10QuestionSchema,
  recap: recapQuestionSchema,
} as const;

export const questionSchema = z.discriminatedUnion("responseType", [
  QuestionSchemas.text,
  QuestionSchemas.slider1To10,
  QuestionSchemas.recap,
]);

// This type represents the union of all possible validated Question objects
export type QuestionTypes = {
  [K in Question["responseType"]]: z.infer<(typeof QuestionSchemas)[K]>;
};

// Type guards for each question type
export const questionIsTextQuestion = (
  value: Omit<Question, "id">
): value is TextQuestion => value.responseType === "text";

export const isValidTextQuestion = (value: unknown): value is TextQuestion =>
  textQuestionSchema.safeParse(value).success;

export const questionIsRecapQuestion = (
  value: Omit<Question, "id">
): value is RecapQuestion => value.responseType === "recap";

export const isValidRecapQuestion = (value: unknown): value is RecapQuestion =>
  recapQuestionSchema.safeParse(value).success;

export const questionIsSlider1To10Question = (
  value: Omit<Question, "id">
): value is Slider1To10Question => value.responseType === "slider1To10";

export const isValidSlider1To10Question = (
  value: unknown
): value is Slider1To10Question =>
  slider1To10QuestionSchema.safeParse(value).success;

export const isQuestion = (value: unknown): value is Question =>
  questionSchema.safeParse(value).success;
