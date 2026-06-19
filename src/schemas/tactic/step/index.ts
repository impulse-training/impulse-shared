import { z } from "zod";

// Import all step schemas
export * from "./affirmation";
export * from "./audio";
export * from "./base";
export * from "./breathing";
export * from "./default";
export * from "./media";
export * from "./pedometer";
export * from "./notifySupport";
export * from "./phoneCall";
export * from "./question";
export * from "./zara";

import { AffirmationStep, affirmationStepSchema } from "./affirmation";
import { AudioStep, audioStepSchema } from "./audio";
import { BreathingStep, breathingStepSchema } from "./breathing";
import { DefaultStep, defaultStepSchema } from "./default";
import { MediaStep, mediaStepSchema } from "./media";
import { PedometerStep, pedometerStepSchema } from "./pedometer";
import { NotifySupportStep, notifySupportStepSchema } from "./notifySupport";
import { PhoneCallStep, phoneCallStepSchema } from "./phoneCall";
import { QuestionStep, questionStepSchema } from "./question";
import { ZaraStep, zaraStepSchema } from "./zara";

const tacticStepUnionSchema = z.discriminatedUnion("mode", [
  defaultStepSchema,
  breathingStepSchema,
  notifySupportStepSchema,
  questionStepSchema,
  mediaStepSchema,
  audioStepSchema,
  affirmationStepSchema,
  pedometerStepSchema,
  phoneCallStepSchema,
  zaraStepSchema,
]);

/**
 * Lift the legacy question step modes into the unified `question` mode + shared
 * `answerSpec` on read, so existing tactic docs (which stored
 * `question-text` / `question-slider1To10`) keep parsing without a migration.
 */
function liftLegacyQuestionStep(val: unknown): unknown {
  if (!val || typeof val !== "object" || Array.isArray(val)) return val;
  const v = val as Record<string, unknown>;
  if (v.mode === "question-text") {
    const { suggestedResponses, mode, ...rest } = v;
    return {
      ...rest,
      mode: "question",
      answerSpec: {
        type: "text",
        ...(Array.isArray(suggestedResponses) ? { suggestedResponses } : {}),
      },
    };
  }
  if (v.mode === "question-slider1To10") {
    const { sliderConfig, mode, ...rest } = v;
    return {
      ...rest,
      mode: "question",
      answerSpec: {
        type: "slider1To10",
        sliderConfig: sliderConfig ?? {},
      },
    };
  }
  return val;
}

export const tacticStepSchema = z.preprocess(
  liftLegacyQuestionStep,
  tacticStepUnionSchema,
);

export type TacticStep = z.infer<typeof tacticStepSchema>;

export const stepIsMediaStep = (step: TacticStep): step is MediaStep =>
  step.mode === "media";

export const stepIsAudioStep = (step: TacticStep): step is AudioStep =>
  step.mode === "audio";

export const stepIsQuestionStep = (step: TacticStep): step is QuestionStep =>
  step.mode === "question";

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

export const stepIsPedometerStep = (step: TacticStep): step is PedometerStep =>
  step.mode === "pedometer";

export const stepIsPhoneCallStep = (
  step: TacticStep
): step is PhoneCallStep => step.mode === "phoneCall";

export const stepIsZaraStep = (step: TacticStep): step is ZaraStep =>
  step.mode === "zara";

// Re-export concrete step types for precise narrowing
export type {
  AudioStep,
  BreathingStep,
  DefaultStep,
  MediaStep,
  PedometerStep,
  NotifySupportStep,
  PhoneCallStep,
  QuestionStep,
  ZaraStep,
};
