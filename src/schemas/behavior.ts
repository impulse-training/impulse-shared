import * as yup from "yup";
import { timestampSchema } from "../utils";

export const trackingTypes = ["counter", "timer"] as const;

export const behaviorSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  trackingType: yup.string().oneOf(trackingTypes).required(),
  gameplanTacticIds: yup.array().of(yup.string()).default([]),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
