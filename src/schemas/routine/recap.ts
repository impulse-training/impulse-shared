import * as yup from "yup";
import { timeRoutineSchema } from "./time";

export const recapRoutineSchema = timeRoutineSchema.shape({
  type: yup.mixed<"recap">().oneOf(["recap"]).required(),
});

export type RecapRoutine = yup.InferType<typeof recapRoutineSchema>;

// Type guard for RecapRoutine
export const isRecapRoutine = (value: any): value is RecapRoutine => {
  return value?.type === "recap";
};
