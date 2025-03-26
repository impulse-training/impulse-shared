import * as yup from "yup";
import { tacticSchema } from "../tactic";
import { logBaseSchema } from "./base";
import { behaviorTrackingDataSchema } from "./behaviorTrackedLog";

// Impulse Log Schema
export const dayRecapLogSchema = logBaseSchema.shape({
  type: yup.string().oneOf(["day_recap"]).required(),
  data: yup.object({
    impulseMoments: yup.number().required(),
    tactics: yup.array().of(tacticSchema),
    behaviorsTracked: behaviorTrackingDataSchema,
    outcomes: yup.object({
      successes: yup.number().required(),
      partial: yup.number().required(),
      setbacks: yup.number().required(),
    }),
  }),
});

export type DayRecapLog = yup.InferType<typeof dayRecapLogSchema>;
