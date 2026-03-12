import { z } from "zod";
import { sessionBaseSchema } from "./base";

const planSessionBaseSchema = sessionBaseSchema.extend({
  planId: z.string(),
});

export const timePlanSessionSchema = planSessionBaseSchema.extend({
  type: z.literal("timePlan"),
});

export const locationPlanSessionSchema = planSessionBaseSchema.extend({
  type: z.literal("locationPlan"),
});

export type TimePlanSession = z.infer<typeof timePlanSessionSchema>;
export type LocationPlanSession = z.infer<typeof locationPlanSessionSchema>;
