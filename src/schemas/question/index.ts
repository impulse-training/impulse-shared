import { z } from "zod";
import { ShortTextQuestion, shortTextQuestionSchema } from "./shortText";
import { EmotionQuestion, emotionQuestionSchema } from "./emotion";
import { Slider1To10Question, slider1To10QuestionSchema } from "./slider1To10";
import { TextQuestion, textQuestionSchema } from "./text";

export * from "./shortText";
export * from "./emotion";
export * from "./slider1To10";
export * from "./text";

// Response types for questions
export const responseTypes = [
  "text",
  "shortText",
  "emotion",
  "slider1To10",
  "recap",
] as const;
export type ResponseType = (typeof responseTypes)[number];

export const responseTypeSchema = z.enum(responseTypes);

// Union type for all question types
export type Question =
  | TextQuestion
  | Slider1To10Question
  | ShortTextQuestion
  | EmotionQuestion;

// Utility to dynamically select the correct schema based on the Question type
export const QuestionSchemas = {
  text: textQuestionSchema,
  emotion: emotionQuestionSchema,
  shortText: shortTextQuestionSchema,
  slider1To10: slider1To10QuestionSchema,
} as const;

export const questionSchema = z.discriminatedUnion("responseType", [
  QuestionSchemas.text,
  QuestionSchemas.emotion,
  QuestionSchemas.shortText,
  QuestionSchemas.slider1To10,
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

export const questionIsEmotionQuestion = (
  value: Omit<Question, "id">
): value is EmotionQuestion => value.responseType === "emotion";

export const isValidEmotionQuestion = (
  value: unknown
): value is EmotionQuestion => emotionQuestionSchema.safeParse(value).success;
export const questionIsShortTextQuestion = (
  value: Omit<Question, "id">
): value is ShortTextQuestion => value.responseType === "shortText";

export const isValidShortTextQuestion = (
  value: unknown
): value is ShortTextQuestion =>
  shortTextQuestionSchema.safeParse(value).success;

export const questionIsSlider1To10Question = (
  value: Omit<Question, "id">
): value is Slider1To10Question => value.responseType === "slider1To10";

export const isValidSlider1To10Question = (
  value: unknown
): value is Slider1To10Question =>
  slider1To10QuestionSchema.safeParse(value).success;

export const isQuestion = (value: unknown): value is Question =>
  questionSchema.safeParse(value).success;
