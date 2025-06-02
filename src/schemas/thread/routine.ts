import * as yup from "yup";
import { routineSchema } from "../routine";
import { threadBaseSchema } from "./base";

export const timeRoutineThreadSchema = threadBaseSchema.shape({
  type: yup.mixed<"timeRoutine">().oneOf(["timeRoutine"]).required(),
  routineId: yup.string().required(),
  routine: routineSchema,
});

export type TimeRoutineThread = yup.InferType<typeof timeRoutineThreadSchema>;

export const locationRoutineThreadSchema = threadBaseSchema.shape({
  type: yup.mixed<"locationRoutine">().oneOf(["locationRoutine"]).required(),
  routineId: yup.string().required(),
  routine: routineSchema,
});

export type LocationRoutineThread = yup.InferType<
  typeof locationRoutineThreadSchema
>;
