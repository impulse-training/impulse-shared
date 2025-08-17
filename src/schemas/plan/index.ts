import { z } from "zod";
import { ImpulsePlan, impulsePlanSchema } from "./impulsePlan";
import { LocationPlan, locationPlanSchema } from "./locationPlan";
import { RecapPlan, recapPlanSchema } from "./recapPlan";
import { TimePlan, timePlanSchema } from "./timePlan";
import { withIdSchema } from "../../utils/withId";

export * from "./impulsePlan";
export * from "./locationPlan";
export * from "./recapPlan";
export * from "./timePlan";

export const planSchema = z.discriminatedUnion("type", [
  timePlanSchema,
  locationPlanSchema,
  recapPlanSchema,
  impulsePlanSchema,
]);

export type Plan = z.infer<typeof planSchema>;

// WithId variant for plans
export const planWithIdSchema = z.union([
  withIdSchema(timePlanSchema),
  withIdSchema(locationPlanSchema),
  withIdSchema(recapPlanSchema),
  withIdSchema(impulsePlanSchema),
]);

export const planIsTimePlan = (value: Plan): value is TimePlan =>
  value.type === "time";
export const isValidTimePlan = (value: unknown): value is TimePlan =>
  timePlanSchema.safeParse(value).success;

export const planIsRecapPlan = (value: Plan): value is RecapPlan =>
  value.type === "recap";
export const isValidRecapPlan = (value: unknown): value is RecapPlan =>
  recapPlanSchema.safeParse(value).success;

export const planIsLocationPlan = (value: Plan): value is LocationPlan =>
  value.type === "location";
export const isValidLocationPlan = (value: unknown): value is LocationPlan =>
  locationPlanSchema.safeParse(value).success;

export const planIsImpulsePlan = (value: Plan): value is ImpulsePlan =>
  value.type === "impulse";
export const isValidImpulsePlan = (value: unknown): value is ImpulsePlan =>
  impulsePlanSchema.safeParse(value).success;
