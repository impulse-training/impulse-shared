import { z } from "zod";
import { planBaseSchema } from "./base";
import { timeTriggerSchema } from "./trigger/timeTrigger";

export const recapPlanSchema = planBaseSchema("recap").extend({
  trigger: timeTriggerSchema,
});

export type RecapPlan = z.infer<typeof recapPlanSchema>;
