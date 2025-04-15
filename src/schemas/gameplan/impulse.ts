import * as yup from "yup";
import { behaviorSchema } from "../behavior";
import { gameplanBaseSchema } from "./base";

export const impulseGameplanSchema = gameplanBaseSchema("impulse").shape({
  data: yup.object({
    behaviorIds: yup.array().of(yup.string()).required(),
    behaviors: yup.array().of(behaviorSchema.required()).required(),
  }),
});

export type ImpulseGameplan = yup.InferType<typeof impulseGameplanSchema>;
