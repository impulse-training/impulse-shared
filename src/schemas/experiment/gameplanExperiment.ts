import { z } from "zod";
import { documentReferenceSchema } from "../../utils";
import { experimentBaseSchema } from "./base";

export const gameplanExperiment = experimentBaseSchema("gameplan").extend({
  plan: documentReferenceSchema,
  behavior: documentReferenceSchema,
});

export type GameplanExperiment = z.infer<typeof gameplanExperiment>;
