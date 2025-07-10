import * as yup from "yup";
import { LocationRoutine, locationRoutineSchema } from "./location";
import { RecapRoutine, recapRoutineSchema } from "./recap";
import { TimeRoutine, timeRoutineSchema } from "./time";

export * from "./location";
export * from "./time";

export type Routine = TimeRoutine | LocationRoutine | RecapRoutine;

// Utility to dynamically select the correct schema based on the Routine type
export const RoutineSchemas: Record<
  Routine["type"],
  yup.ObjectSchema<Routine>
> = {
  time: timeRoutineSchema,
  location: locationRoutineSchema,
  recap: recapRoutineSchema,
} as any;

export const routineSchema = yup.lazy((value) => {
  if (typeof value.type === "string" && value.type in RoutineSchemas) {
    return RoutineSchemas[value.type as Routine["type"]];
  }

  return yup.object({
    type: yup
      .mixed<Routine["type"]>()
      .oneOf(Object.keys(RoutineSchemas) as Routine["type"][])
      .required(),
  });
}) as yup.Lazy<RoutineTypes[Routine["type"]]>;

// / This type represents the union of all possible validated Routine objects
export type RoutineTypes = {
  [K in Routine["type"]]: yup.InferType<(typeof RoutineSchemas)[K]>;
};

export const routineIsTimeRoutine = (
  value: Omit<Routine, "id">
): value is TimeRoutine => value.type === "time";
export const isValidTimeRoutine = (value: unknown): value is TimeRoutine => {
  try {
    timeRoutineSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const routineIsRecapRoutine = (
  value: Omit<Routine, "id">
): value is RecapRoutine => value.type === "recap";
export const isValidRecapRoutine = (value: unknown): value is RecapRoutine => {
  try {
    recapRoutineSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const routineIsLocationRoutine = (
  value: Omit<Routine, "id">
): value is LocationRoutine => value.type === "location";
export const isValidLocationRoutine = (
  value: unknown
): value is LocationRoutine => {
  try {
    locationRoutineSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
