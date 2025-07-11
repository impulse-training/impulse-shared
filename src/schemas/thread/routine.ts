import * as yup from "yup";
import { routineSchema } from "../routine";
import { threadBaseSchema } from "./base";

const routineThreadBaseSchema = threadBaseSchema.shape({
  routineId: yup.string().required(),
  routine: routineSchema,
});

export const timeRoutineThreadSchema = routineThreadBaseSchema.shape({
  type: yup.mixed<"timeRoutine">().oneOf(["timeRoutine"]).required(),
});

// Recap routines are hidden by default
export const recapRoutineThreadSchema = routineThreadBaseSchema.shape({
  type: yup.mixed<"recapRoutine">().oneOf(["recapRoutine"]).required(),
});

export const locationRoutineThreadSchema = routineThreadBaseSchema.shape({
  type: yup.mixed<"locationRoutine">().oneOf(["locationRoutine"]).required(),
});

export type TimeRoutineThread = yup.InferType<typeof timeRoutineThreadSchema>;
export type RecapRoutineThread = yup.InferType<typeof recapRoutineThreadSchema>;
export type LocationRoutineThread = yup.InferType<
  typeof locationRoutineThreadSchema
>;
