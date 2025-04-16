import * as yup from "yup";
import { gameplanBaseSchema } from "./base";

export const impulseGameplanSchema = gameplanBaseSchema("impulse").shape({
  data: yup.object({
    behaviorIds: yup.array().of(yup.string()).required(),
  }),
});

export type ImpulseGameplan = yup.InferType<typeof impulseGameplanSchema>;
