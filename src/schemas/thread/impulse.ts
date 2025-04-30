import * as yup from "yup";
import { timestampSchema } from "../../utils";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.shape({
  type: yup.mixed<"impulse">().oneOf(["impulse"]).required(),
  behaviorId: yup.string().defined().nullable(),
  debriefedAt: timestampSchema,
});

export type ImpulseThread = yup.InferType<typeof impulseThreadSchema>;
