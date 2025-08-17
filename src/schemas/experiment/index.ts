import { z } from "zod";
import {
  BehaviorInsightExperiment,
  behaviorInsightExperiment,
} from "./behaviorInsightExperiment";
import { GameplanExperiment, gameplanExperiment } from "./gameplanExperiment";

export * from "./behaviorInsightExperiment";
export * from "./gameplanExperiment";

export const experimentSchema = z.discriminatedUnion("type", [
  behaviorInsightExperiment,
  gameplanExperiment,
]);

export type ExperimentValue = BehaviorInsightExperiment | GameplanExperiment;
