import * as yup from "yup";
import { gameplanBaseSchema } from "./base";

export const cravingGameplanSchema = gameplanBaseSchema("craving").shape({
  data: yup.object({
    behaviorIds: yup.array().of(yup.string().required()).required(),
  }),
});

export type CravingGameplan = yup.InferType<typeof cravingGameplanSchema>;
