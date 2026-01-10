import { z } from "zod";

// Import all step schemas
export * from "./affirmation";
export * from "./base";
export * from "./breathing";
export * from "./default";
export * from "./media";
export * from "./notifySupport";
export * from "./question";

import { AffirmationStep, affirmationStepSchema } from "./affirmation";
import { BreathingStep, breathingStepSchema } from "./breathing";
import { DefaultStep, defaultStepSchema } from "./default";
import { MediaStep, mediaStepSchema } from "./media";
import { NotifySupportStep, notifySupportStepSchema } from "./notifySupport";
import {
  QuestionStep,
  slider1To10QuestionStepSchema,
  textQuestionStepSchema,
} from "./question";

export const tacticStepSchema = z.discriminatedUnion("mode", [
  defaultStepSchema,
  breathingStepSchema,
  notifySupportStepSchema,
  textQuestionStepSchema,
  slider1To10QuestionStepSchema,
  mediaStepSchema,
  affirmationStepSchema,
]);

export type TacticStep = z.infer<typeof tacticStepSchema>;

export const stepIsMediaStep = (step: TacticStep): step is MediaStep =>
  step.mode === "media";

export const stepIsQuestionStep = (step: TacticStep): step is QuestionStep =>
  step.mode === "question-text" || step.mode === "question-slider1To10";

export const stepIsBreathingStep = (step: TacticStep): step is BreathingStep =>
  step.mode === "breathing";

export const stepIsNotifySupportStep = (
  step: TacticStep
): step is NotifySupportStep => step.mode === "notifySupport";

export const stepIsDefaultStep = (step: TacticStep): step is DefaultStep =>
  step.mode === "default";

export const stepIsAffirmationStep = (
  step: TacticStep
): step is AffirmationStep => step.mode === "affirmation";

// Re-export concrete step types for precise narrowing
export type {
  BreathingStep,
  DefaultStep,
  MediaStep,
  NotifySupportStep,
  QuestionStep,
};
