import { z } from "zod";

// Import all step schemas
export * from "./affirmation";
export * from "./aiConversation";
export * from "./base";
export * from "./breathing";
export * from "./default";
export * from "./media";
export * from "./notifySupport";
export * from "./question";
export * from "./timer";

import { AffirmationStep, affirmationStepSchema } from "./affirmation";
import { AIConversationStep, aiConversationStepSchema } from "./aiConversation";
import { BreathingStep, breathingStepSchema } from "./breathing";
import { DefaultStep, defaultStepSchema } from "./default";
import { MediaStep, mediaStepSchema } from "./media";
import { NotifySupportStep, notifySupportStepSchema } from "./notifySupport";
import { textQuestionStepSchema, slider1To10QuestionStepSchema, QuestionStep } from "./question";
import { TimerStep, timerStepSchema } from "./timer";

export const tacticStepSchema = z.discriminatedUnion("mode", [
  defaultStepSchema,
  breathingStepSchema,
  timerStepSchema,
  notifySupportStepSchema,
  textQuestionStepSchema,
  slider1To10QuestionStepSchema,
  aiConversationStepSchema,
  mediaStepSchema,
  affirmationStepSchema,
]);

export type TacticStep = z.infer<typeof tacticStepSchema>;

// Re-export concrete step types for precise narrowing
export type {
  AffirmationStep,
  AIConversationStep,
  BreathingStep,
  DefaultStep,
  MediaStep,
  NotifySupportStep,
  QuestionStep,
  TimerStep,
};
