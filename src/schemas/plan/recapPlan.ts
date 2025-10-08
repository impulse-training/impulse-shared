import { z } from "zod";
import { planBaseSchema } from "./base";
import { timeTriggerSchema } from "./trigger/timeTrigger";

export const recapPlanSchema = planBaseSchema("recap").extend({
  trigger: timeTriggerSchema,
  questionIds: z.array(z.string()).optional().default([]),
});

export type RecapPlan = z.infer<typeof recapPlanSchema>;
