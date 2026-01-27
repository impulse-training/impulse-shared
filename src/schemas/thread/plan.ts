import { z } from "zod";
import { threadBaseSchema } from "./base";

const planThreadBaseSchema = threadBaseSchema.extend({
  planId: z.string(),
});

export const timePlanThreadSchema = planThreadBaseSchema.extend({
  type: z.literal("timePlan"),
});

export const locationPlanThreadSchema = planThreadBaseSchema.extend({
  type: z.literal("locationPlan"),
});

export type TimePlanThread = z.infer<typeof timePlanThreadSchema>;
export type LocationPlanThread = z.infer<typeof locationPlanThreadSchema>;
