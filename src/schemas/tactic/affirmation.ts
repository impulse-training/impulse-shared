import * as yup from "yup";
import { tacticBaseSchema } from "./base";

export const affirmationTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["affirmation"]).required(),
  canBeManuallyMarkedAsCompleted: yup.mixed<false>().oneOf([false]),
});

export type AffirmationTactic = yup.InferType<typeof affirmationTacticSchema>;
