import { z } from "zod";
import { planBaseSchema } from "./base";

export const impulsePlanSchema = planBaseSchema("impulse").extend({
  triggerKeywords: z.array(z.string()).optional(),
});

export type ImpulsePlan = z.infer<typeof impulsePlanSchema>;
