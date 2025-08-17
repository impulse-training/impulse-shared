import { z } from "zod";
import { documentReferenceSchema } from "../../utils";
import { experimentBaseSchema } from "./base";

export const behaviorInsightExperiment = experimentBaseSchema(
  "behaviorInsight"
).extend({
  behavior: documentReferenceSchema,
  question: documentReferenceSchema,
});

export type BehaviorInsightExperiment = z.infer<
  typeof behaviorInsightExperiment
>;
