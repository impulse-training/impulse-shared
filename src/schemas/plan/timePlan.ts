import * as yup from "yup";
import { planBaseSchema } from "./base";
import { timeTriggerSchema } from "./trigger/timeTrigger";

export const timePlanSchema = planBaseSchema("time").shape({
  trigger: timeTriggerSchema,
});

export type TimePlan = yup.InferType<typeof timePlanSchema>;
