import * as yup from "yup";
import { routineSchema } from "../routine";
import { threadBaseSchema } from "./base";

export const routineThreadSchema = threadBaseSchema.shape({
  type: yup.mixed<"routine">().oneOf(["routine"]).required(),
  routineId: yup.string().required(),
  routine: routineSchema,
});

export type RoutineThread = yup.InferType<typeof routineThreadSchema>;
