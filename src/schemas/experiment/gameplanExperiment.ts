import * as yup from "yup";
import { documentReferenceSchema } from "../../utils";
import { experimentBaseSchema } from "./base";

export const gameplanExperiment = experimentBaseSchema("plan").shape({
  plan: documentReferenceSchema.required(),
  behavior: documentReferenceSchema.required(),
});

export type GameplanExperiment = yup.InferType<typeof gameplanExperiment>;
