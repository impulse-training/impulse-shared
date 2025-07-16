import * as yup from "yup";
import { planBaseSchema } from "./base";
import { locationTriggerSchema } from "./trigger/locationTrigger";

export const locationPlanSchema = planBaseSchema("location").shape({
  trigger: locationTriggerSchema,
});

export type LocationPlan = yup.InferType<typeof locationPlanSchema>;
