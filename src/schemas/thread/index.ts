import * as yup from "yup";
import { GeneralThread, generalThreadSchema } from "./general";
import { ImpulseThread, impulseThreadSchema } from "./impulse";
import { OnboardingThread, onboardingThreadSchema } from "./onboarding";
import {
  LocationRoutineThread,
  locationRoutineThreadSchema,
  RecapRoutineThread,
  recapRoutineThreadSchema,
  TimeRoutineThread,
  timeRoutineThreadSchema,
} from "./routine";

export * from "./general";
export * from "./impulse";
export * from "./onboarding";
export * from "./routine";

// Map of thread types to their schemas
export const threadSchemas = {
  general: generalThreadSchema,
  impulse: impulseThreadSchema,
  onboarding: onboardingThreadSchema,
  timeRoutine: timeRoutineThreadSchema,
  recapRoutine: recapRoutineThreadSchema,
  locationRoutine: locationRoutineThreadSchema,
};

// Dynamic schema that selects the appropriate schema based on the thread type
export const threadSchema = yup.lazy((value) => {
  if (typeof value?.type === "string" && value.type in threadSchemas) {
    return threadSchemas[value.type as keyof typeof threadSchemas];
  }

  // Fallback schema for validation when type is missing or invalid
  return yup.object({
    type: yup
      .string()
      .oneOf(Object.keys(threadSchemas))
      .required("Tactic type is required"),
  });
});

export const threadIsGeneralThread = (value: Thread): value is GeneralThread =>
  value.type === "general";
export const isValidGeneralThread = (
  value: unknown
): value is GeneralThread => {
  try {
    generalThreadSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const threadIsOnboardingThread = (
  value: Thread
): value is OnboardingThread => value.type === "onboarding";
export const isValidOnboardingThread = (
  value: unknown
): value is OnboardingThread => {
  try {
    onboardingThreadSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const threadIsImpulseThread = (value: Thread): value is ImpulseThread =>
  value.type === "impulse";
export const isValidImpulseThread = (
  value: unknown
): value is ImpulseThread => {
  try {
    impulseThreadSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const threadIsTimeRoutineThread = (
  value: Thread
): value is TimeRoutineThread => value.type === "timeRoutine";
export const isValidTimeRoutineThread = (
  value: unknown
): value is TimeRoutineThread => {
  try {
    timeRoutineThreadSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const threadIsRecapRoutineThread = (
  value: Thread
): value is RecapRoutineThread => value.type === "recapRoutine";
export const isValidRecapRoutineThread = (
  value: unknown
): value is RecapRoutineThread => {
  try {
    timeRoutineThreadSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const threadIsLocationRoutineThread = (
  value: Thread
): value is LocationRoutineThread => value.type === "locationRoutine";
export const isValidLocationRoutineThread = (
  value: unknown
): value is LocationRoutineThread => {
  try {
    locationRoutineThreadSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export type Thread =
  | ImpulseThread
  | GeneralThread
  | OnboardingThread
  | TimeRoutineThread
  | LocationRoutineThread
  | RecapRoutineThread;
