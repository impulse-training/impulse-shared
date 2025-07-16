import * as yup from "yup";
import { objectOf, withIdSchema } from "../../utils";
import { Plan, planSchema } from "../plan";
import { questionSchema } from "../question";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.shape({
  type: yup.mixed<"impulse">().oneOf(["impulse"]).required(),
  plan: withIdSchema<Plan>(planSchema),
  behaviorId: yup.string().defined().nullable(),
  questionsCompleted: yup.boolean().optional().default(undefined),
  questionsById: objectOf(questionSchema),
});

export type ImpulseThread = yup.InferType<typeof impulseThreadSchema>;
