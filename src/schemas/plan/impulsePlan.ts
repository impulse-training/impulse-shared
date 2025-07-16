import * as yup from "yup";
import { planBaseSchema } from "./base";

export const impulsePlanSchema = planBaseSchema("impulse");

export type ImpulsePlan = yup.InferType<typeof impulsePlanSchema>;
