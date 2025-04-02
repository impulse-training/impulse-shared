import * as yup from "yup";
import { timestampSchema } from "../../utils";
import { tacticSchema } from "../tactic";
import { logBaseSchema } from "./base";

// A gameplan is a set of tactics
export const gameplanSchema = yup.array().of(
  // We always provide the tactic with an id, but the document may or may not exist
  yup.object({
    tactic: tacticSchema,
    exists: yup.boolean().required(),
  })
);

// Gameplan Log Schema
export const gameplanLogSchema = logBaseSchema.shape({
  type: yup.mixed<"gameplan">().oneOf(["gameplan"]).required(),
  // Gameplan logs are always displayed in the UI
  isDisplayable: yup.mixed<true>().oneOf([true]).required(),
  data: yup.object({
    gameplan: gameplanSchema.required(),
    pastGameplans: yup.array().of(gameplanSchema.required()),
    introduction: yup.string(),
    acceptedAt: timestampSchema,
    shufflePressedAt: timestampSchema,
  }),
});

export type Gameplan = yup.InferType<typeof gameplanSchema>;
export type GameplanLog = yup.InferType<typeof gameplanLogSchema>;
