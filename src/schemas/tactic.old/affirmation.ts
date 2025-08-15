import * as yup from "yup";
import { tacticBaseSchema } from "./base";

export const affirmationTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["affirmation"]).required(),
  repeatCount: yup.number().required(),
  affirmationText: yup.string().required(),
});

export type AffirmationTactic = yup.InferType<typeof affirmationTacticSchema>;
