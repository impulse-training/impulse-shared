import * as yup from "yup";
import { planBaseSchema } from "./base";

export const impulsePlanSchema = planBaseSchema("impulse").shape({
  triggerKeywords: yup.array().of(yup.string().required()).optional(),
});

export type ImpulsePlan = yup.InferType<typeof impulsePlanSchema>;
