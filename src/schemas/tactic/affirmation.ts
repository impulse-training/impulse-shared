import * as yup from "yup";
import { tacticBaseSchema } from "./base";

export const affirmationTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["affirmation"]).required(),
});
