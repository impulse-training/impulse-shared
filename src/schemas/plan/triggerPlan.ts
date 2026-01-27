import { z } from "zod";
import { planBaseSchema } from "./base";

export const triggerPlanSchema = planBaseSchema("trigger").extend({
  isActive: z.boolean().optional(),
});

export type TriggerPlan = z.infer<typeof triggerPlanSchema>;
