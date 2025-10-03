import { z } from "zod";
import { withIdSchema } from "../../utils/withId";
import { LocationPlan, locationPlanSchema } from "./locationPlan";
import { RecapPlan, recapPlanSchema } from "./recapPlan";
import { TimePlan, timePlanSchema } from "./timePlan";

export * from "./locationPlan";
export * from "./recapPlan";
export * from "./timePlan";

export const planSchema = z.discriminatedUnion("type", [
  timePlanSchema,
  locationPlanSchema,
  recapPlanSchema,
]);

export type Plan = z.infer<typeof planSchema>;

// WithId variant for plans
export const planWithIdSchema = z.union([
  withIdSchema(timePlanSchema),
  withIdSchema(locationPlanSchema),
  withIdSchema(recapPlanSchema),
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
