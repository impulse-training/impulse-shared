import * as yup from "yup";
import { tacticBaseSchema } from "./base";

export const actionTacticSchema = tacticBaseSchema.shape({
  type: yup.string().oneOf(["action"]).required(),
  durationSeconds: yup.number().optional(), // Target duration in seconds
  canBeManuallyMarkedAsCompleted: yup.mixed<true>().oneOf([true]),
});

export type ActionTactic = yup.InferType<typeof actionTacticSchema>;
