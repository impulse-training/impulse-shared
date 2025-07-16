import * as yup from "yup";
import { documentReferenceSchema } from "../../utils";
import { experimentBaseSchema } from "./base";

export const behaviorInsightExperiment = experimentBaseSchema(
  "behaviorInsight"
).shape({
  behavior: documentReferenceSchema.required(),
  question: documentReferenceSchema.required(),
});

export type BehaviorInsightExperiment = yup.InferType<
  typeof behaviorInsightExperiment
>;
