import { z } from "zod";
import { AdjustmentThread, adjustmentThreadSchema } from "./adjustment";
import { BehaviorThread, behaviorThreadSchema } from "./behavior";
import { GeneralThread, generalThreadSchema } from "./general";
import { ImpulseThread, impulseThreadSchema } from "./impulse";
import {
  LocationPlanThread,
  locationPlanThreadSchema,
  TimePlanThread,
  timePlanThreadSchema,
} from "./plan";
import { RecapThread, recapThreadSchema } from "./recap";

export * from "../threadSummary";
export * from "./adjustment";
export * from "./behavior";
export * from "./general";
export * from "./impulse";
export * from "./plan";
export * from "./recap";

// Map of thread types to their schemas
export const threadSchemas = {
  general: generalThreadSchema,
  impulse: impulseThreadSchema,
  timePlan: timePlanThreadSchema,
  behavior: behaviorThreadSchema,
  recap: recapThreadSchema,
  locationPlan: locationPlanThreadSchema,
  adjustment: adjustmentThreadSchema,
};

// Discriminated union over type
export const threadSchema = z.discriminatedUnion("type", [
  generalThreadSchema,
  impulseThreadSchema,
  behaviorThreadSchema,
  timePlanThreadSchema,
  recapThreadSchema,
  locationPlanThreadSchema,
  adjustmentThreadSchema,
]);

export const threadIsGeneralThread = (value: Thread): value is GeneralThread =>
  value.type === "general";
export const isValidGeneralThread = (value: unknown): value is GeneralThread =>
  generalThreadSchema.safeParse(value).success;

export const threadIsImpulseThread = (value: Thread): value is ImpulseThread =>
  value.type === "impulse";
export const isValidImpulseThread = (value: unknown): value is ImpulseThread =>
  impulseThreadSchema.safeParse(value).success;

export const threadIsTimePlanThread = (
  value: Thread
): value is TimePlanThread => value.type === "timePlan";
export const isValidTimePlanThread = (
  value: unknown
): value is TimePlanThread => timePlanThreadSchema.safeParse(value).success;

export const threadIsRecapThread = (value: Thread): value is RecapThread =>
  value.type === "recap";
export const isValidRecapThread = (value: unknown): value is RecapThread =>
  recapThreadSchema.safeParse(value).success;

export const threadIsLocationPlanThread = (
  value: Thread
): value is LocationPlanThread => value.type === "locationPlan";
export const isValidLocationPlanThread = (
  value: unknown
): value is LocationPlanThread =>
  locationPlanThreadSchema.safeParse(value).success;

export const threadIsBehaviorThread = (
  value: Thread
): value is BehaviorThread => value.type === "behavior";
export const isValidBehaviorThread = (
  value: unknown
): value is BehaviorThread => behaviorThreadSchema.safeParse(value).success;

export const threadIsAdjustmentThread = (
  value: Thread
): value is AdjustmentThread => value.type === "adjustment";
export const isValidAdjustmentThread = (
  value: unknown
): value is AdjustmentThread => adjustmentThreadSchema.safeParse(value).success;

export type Thread = z.infer<typeof threadSchema>;
