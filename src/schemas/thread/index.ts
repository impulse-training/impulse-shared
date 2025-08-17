import { z } from "zod";
import { GeneralThread, generalThreadSchema } from "./general";
import { ImpulseThread, impulseThreadSchema } from "./impulse";
import { OnboardingThread, onboardingThreadSchema } from "./onboarding";
import {
  LocationPlanThread,
  locationPlanThreadSchema,
  RecapPlanThread,
  recapPlanThreadSchema,
  TimePlanThread,
  timePlanThreadSchema,
} from "./plan";

export * from "./general";
export * from "./impulse";
export * from "./onboarding";
export * from "./plan";

// Map of thread types to their schemas
export const threadSchemas = {
  general: generalThreadSchema,
  impulse: impulseThreadSchema,
  onboarding: onboardingThreadSchema,
  timePlan: timePlanThreadSchema,
  dayRecap: recapPlanThreadSchema,
  locationPlan: locationPlanThreadSchema,
};

// Discriminated union over type
export const threadSchema = z.discriminatedUnion("type", [
  generalThreadSchema,
  impulseThreadSchema,
  onboardingThreadSchema,
  timePlanThreadSchema,
  recapPlanThreadSchema,
  locationPlanThreadSchema,
]);

export const threadIsGeneralThread = (value: Thread): value is GeneralThread =>
  value.type === "general";
export const isValidGeneralThread = (
  value: unknown
): value is GeneralThread => generalThreadSchema.safeParse(value).success;

export const threadIsOnboardingThread = (
  value: Thread
): value is OnboardingThread => value.type === "onboarding";
export const isValidOnboardingThread = (
  value: unknown
): value is OnboardingThread => onboardingThreadSchema.safeParse(value).success;

export const threadIsImpulseThread = (value: Thread): value is ImpulseThread =>
  value.type === "impulse";
export const isValidImpulseThread = (
  value: unknown
): value is ImpulseThread => impulseThreadSchema.safeParse(value).success;

export const threadIsTimePlanThread = (
  value: Thread
): value is TimePlanThread => value.type === "timePlan";
export const isValidTimePlanThread = (
  value: unknown
): value is TimePlanThread => timePlanThreadSchema.safeParse(value).success;

export const threadIsRecapPlanThread = (
  value: Thread
): value is RecapPlanThread => value.type === "dayRecap";
export const isValidRecapPlanThread = (
  value: unknown
): value is RecapPlanThread => recapPlanThreadSchema.safeParse(value).success;

export const threadIsLocationPlanThread = (
  value: Thread
): value is LocationPlanThread => value.type === "locationPlan";
export const isValidLocationPlanThread = (
  value: unknown
): value is LocationPlanThread =>
  locationPlanThreadSchema.safeParse(value).success;

export type Thread = z.infer<typeof threadSchema>;
