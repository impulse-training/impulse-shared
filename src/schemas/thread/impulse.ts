import * as yup from "yup";
import { objectOf } from "../../utils";
import { questionSchema } from "../question";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.shape({
  type: yup.mixed<"impulse">().oneOf(["impulse"]).required(),
  behaviorId: yup.string().defined().nullable(),
  questionsCompleted: yup.boolean().optional().default(undefined),
  questionsById: objectOf(questionSchema),
});

export type ImpulseThread = yup.InferType<typeof impulseThreadSchema>;
