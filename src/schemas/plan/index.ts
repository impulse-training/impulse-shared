import * as yup from "yup";
import { ImpulsePlan, impulsePlanSchema } from "./impulsePlan";
import { LocationPlan, locationPlanSchema } from "./locationPlan";
import { RecapPlan, recapPlanSchema } from "./recapPlan";
import { TimePlan, timePlanSchema } from "./timePlan";

export * from "./impulsePlan";
export * from "./locationPlan";
export * from "./recapPlan";
export * from "./timePlan";

export type Plan = TimePlan | LocationPlan | RecapPlan | ImpulsePlan;

// Utility to dynamically select the correct schema based on the Plan type
export const PlanSchemas: Record<Plan["type"], yup.ObjectSchema<Plan>> = {
  time: timePlanSchema,
  location: locationPlanSchema,
  recap: recapPlanSchema,
} as any;

export const planSchema = yup.lazy((value) => {
  if (typeof value.type === "string" && value.type in PlanSchemas) {
    return PlanSchemas[value.type as Plan["type"]];
  }

  return yup.object({
    type: yup
      .mixed<Plan["type"]>()
      .oneOf(Object.keys(PlanSchemas) as Plan["type"][])
      .required(),
  });
}) as yup.Lazy<PlanTypes[Plan["type"]]>;

// / This type represents the union of all possible validated Plan objects
export type PlanTypes = {
  [K in Plan["type"]]: yup.InferType<(typeof PlanSchemas)[K]>;
};

export const planIsTimePlan = (value: Omit<Plan, "id">): value is TimePlan =>
  value.type === "time";
export const isValidTimePlan = (value: unknown): value is TimePlan => {
  try {
    timePlanSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const planIsRecapPlan = (value: Omit<Plan, "id">): value is RecapPlan =>
  value.type === "recap";
export const isValidRecapPlan = (value: unknown): value is RecapPlan => {
  try {
    recapPlanSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const planIsLocationPlan = (
  value: Omit<Plan, "id">
): value is LocationPlan => value.type === "location";
export const isValidLocationPlan = (value: unknown): value is LocationPlan => {
  try {
    locationPlanSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const planIsImpulsePlan = (
  value: Omit<Plan, "id">
): value is ImpulsePlan => value.type === "impulse";
export const isValidImpulsePlan = (value: unknown): value is ImpulsePlan => {
  try {
    impulsePlanSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
