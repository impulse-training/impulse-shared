import * as yup from "yup";
import { withIdSchema } from "../../utils";
import { Plan, planSchema } from "../plan";
import { threadBaseSchema } from "./base";

const planThreadBaseSchema = threadBaseSchema.shape({
  plan: withIdSchema<Plan>(planSchema),
});

export const timePlanThreadSchema = planThreadBaseSchema.shape({
  type: yup.mixed<"timePlan">().oneOf(["timePlan"]).required(),
});

// Recap plans are hidden by default
export const recapPlanThreadSchema = planThreadBaseSchema.shape({
  type: yup.mixed<"recapPlan">().oneOf(["recapPlan"]).required(),
});

export const locationPlanThreadSchema = planThreadBaseSchema.shape({
  type: yup.mixed<"locationPlan">().oneOf(["locationPlan"]).required(),
});

export type TimePlanThread = yup.InferType<typeof timePlanThreadSchema>;
export type RecapPlanThread = yup.InferType<typeof recapPlanThreadSchema>;
export type LocationPlanThread = yup.InferType<typeof locationPlanThreadSchema>;
