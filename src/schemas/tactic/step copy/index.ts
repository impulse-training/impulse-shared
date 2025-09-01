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

// Re-export concrete step types for precise narrowing
export type {
  AffirmationStep,
  BreathingStep,
  DefaultStep,
  MediaStep,
  NotifySupportStep,
  QuestionStep,
};
