import * as yup from "yup";
import { tacticBaseSchema } from "./base";

export const affirmationTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["affirmation"]).required(),
});

export type AffirmationTactic = yup.InferType<typeof affirmationTacticSchema>;
