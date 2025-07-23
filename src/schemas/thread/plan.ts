import * as yup from "yup";
import { withIdSchema } from "../../utils";
import { Plan, planSchema } from "../plan";
import { threadBaseSchema } from "./base";

const planThreadBaseSchema = threadBaseSchema.shape({
  plan: withIdSchema<Plan>(planSchema),
});

export const timePlanThreadSchema = planThreadBaseSchema.shape({
  type: yup.mixed<"time">().oneOf(["time"]).required(),
});

// Recap plans are hidden by default
export const recapPlanThreadSchema = planThreadBaseSchema.shape({
  type: yup.mixed<"recap">().oneOf(["recap"]).required(),
});

export const locationPlanThreadSchema = planThreadBaseSchema.shape({
  type: yup.mixed<"location">().oneOf(["location"]).required(),
});

export type TimePlanThread = yup.InferType<typeof timePlanThreadSchema>;
export type RecapPlanThread = yup.InferType<typeof recapPlanThreadSchema>;
export type LocationPlanThread = yup.InferType<typeof locationPlanThreadSchema>;
