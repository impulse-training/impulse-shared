import * as yup from "yup";
import { gameplanBaseSchema } from "./base";

export const feelingGameplanSchema = gameplanBaseSchema("feeling").shape({
  data: yup.object({
    name: yup.string().required(),
  }),
});

export type FeelingGameplan = yup.InferType<typeof feelingGameplanSchema>;
