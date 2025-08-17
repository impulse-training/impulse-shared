import { z } from "zod";
import { planBaseSchema } from "./base";
import { timeTriggerSchema } from "./trigger/timeTrigger";

export const timePlanSchema = planBaseSchema("time").extend({
  trigger: timeTriggerSchema,
});

export type TimePlan = z.infer<typeof timePlanSchema>;
