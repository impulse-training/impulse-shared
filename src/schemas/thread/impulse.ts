import * as yup from "yup";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.shape({
  type: yup.mixed<"impulse">().oneOf(["impulse"]).required(),
  behaviorId: yup.string().defined().nullable(),
});

export type ImpulseThread = yup.InferType<typeof impulseThreadSchema>;
