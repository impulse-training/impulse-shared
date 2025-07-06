import * as yup from "yup";
import { tacticBaseSchema } from "./base";

export const recapTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["recap"]).required(),
});
export type RecapTactic = yup.InferType<typeof recapTacticSchema>;
