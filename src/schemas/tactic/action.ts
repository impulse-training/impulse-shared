import * as yup from "yup";
import { tacticBaseSchema } from "./base";

export const actionTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["action"]).required(),
});

export type ActionTactic = yup.InferType<typeof actionTacticSchema>;
