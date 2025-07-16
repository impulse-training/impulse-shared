import * as yup from "yup";
import {
  BehaviorInsightExperiment,
  behaviorInsightExperiment,
} from "./behaviorInsightExperiment";
import {
  GameplanExperiment,
  gameplanExperiment,
} from "./gameplanExperiment";

export * from "./behaviorInsightExperiment";
export * from "./gameplanExperiment";

export const experimentSchemas: Record<
  ExperimentValue["type"],
  yup.ObjectSchema<ExperimentValue>
> = {
  behaviorInsight: behaviorInsightExperiment,
  gameplan: gameplanExperiment,
} as any;

export const experimentSchema = yup.lazy((value: any) => {
  if (!value) return yup.mixed().required();

  if (typeof value.type === "string" && value.type in experimentSchemas) {
    return experimentSchemas[value.type as ExperimentValue["type"]];
  }

  return yup.object({
    type: yup
      .mixed<ExperimentValue["type"]>()
      .oneOf(
        Object.keys(experimentSchemas) as ExperimentValue["type"][]
      )
      .required(),
  });
}) as yup.Lazy<ValidatedExperimentValue>;

// This type represents the union of all possible validated experiment objects
type ValidatedExperimentValue = {
  [K in ExperimentValue["type"]]: yup.InferType<
    (typeof experimentSchemas)[K]
  >;
}[ExperimentValue["type"]];

export type ExperimentValue = BehaviorInsightExperiment | GameplanExperiment;
