import * as yup from "yup";
import { objectOf, withId } from "../../utils";
import { Gameplan, gameplanSchema } from "../gameplan";
import { questionSchema } from "../question";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.shape({
  type: yup.mixed<"impulse">().oneOf(["impulse"]).required(),
  gameplan: withId<Gameplan>(gameplanSchema),
  behaviorId: yup.string().defined().nullable(),
  questionsCompleted: yup.boolean().optional().default(undefined),
  questionsById: objectOf(questionSchema),
});

export type ImpulseThread = yup.InferType<typeof impulseThreadSchema>;
