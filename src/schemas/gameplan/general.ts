import * as yup from "yup";
import { gameplanBaseSchema } from "./base";

export const generalGameplanSchema = gameplanBaseSchema("general").shape({
  data: yup.object({
    text: yup.string().required(),
  }),
});

export type GeneralGameplan = yup.InferType<typeof generalGameplanSchema>;
