import * as yup from "yup";
import { planBaseSchema } from "./base";
import { timeTriggerSchema } from "./trigger/timeTrigger";

export const recapPlanSchema = planBaseSchema("recap").shape({
  trigger: timeTriggerSchema,
});

export type RecapPlan = yup.InferType<typeof recapPlanSchema>;
