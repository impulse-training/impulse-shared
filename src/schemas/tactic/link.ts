import * as yup from "yup";
import { tacticBaseSchema } from "./base";

export const linkTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["link"]).required(),
  data: yup
    .object({
      url: yup.string().required(),
    })
    .required(),
});
