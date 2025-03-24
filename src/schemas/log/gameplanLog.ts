import * as yup from "yup";
import { tacticSchema } from "../tactic";
import { logBaseSchema } from "./base";

// Gameplan Log Schema
export const gameplanLogSchema = logBaseSchema.shape({
  type: yup.mixed<"gameplan">().oneOf(["gameplan"]).required(),
  // Gameplan logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  tactics: yup.array().of(tacticSchema),
});

export type GameplanLog = yup.InferType<typeof gameplanLogSchema>;
