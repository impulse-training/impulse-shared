import * as yup from "yup";
import { documentReferenceSchema } from "../../utils";
import { experimentBaseSchema } from "./base";

export const gameplanExperiment = experimentBaseSchema(
  "gameplan"
).shape({
  gameplan: documentReferenceSchema.required(),
  behavior: documentReferenceSchema.required(),
});

export type GameplanExperiment = yup.InferType<
  typeof gameplanExperiment
>;
