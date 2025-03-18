import * as yup from "yup";
import { tacticBaseSchema } from "./base";

export const linkTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["link"]).required(),
  canBeManuallyMarkedAsCompleted: yup.mixed<true>().oneOf([true]),
  data: yup
    .object({
      url: yup.string().required(),
    })
    .required(),
});

export type LinkTactic = yup.InferType<typeof linkTacticSchema>;
