import { z } from "zod";
import { planBaseSchema } from "./base";
import { locationTriggerSchema } from "./trigger/locationTrigger";

export const locationPlanSchema = planBaseSchema("location").extend({
  trigger: locationTriggerSchema,
});

export type LocationPlan = z.infer<typeof locationPlanSchema>;
