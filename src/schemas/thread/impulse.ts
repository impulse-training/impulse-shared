import * as yup from "yup";
import { withId } from "../../utils";
import { Gameplan, gameplanSchema } from "../gameplan";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.shape({
  type: yup.mixed<"impulse">().oneOf(["impulse"]).required(),
  gameplan: withId<Gameplan>(gameplanSchema),
  behaviorId: yup.string().defined().nullable(),
});

export type ImpulseThread = yup.InferType<typeof impulseThreadSchema>;
