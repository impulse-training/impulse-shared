import * as yup from "yup";
import { tacticBaseSchema } from "./base";

export const breathingExerciseTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["breathingExercise"]).required(),
  durationSeconds: yup.number().required(), // Target duration in seconds
});
