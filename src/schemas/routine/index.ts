import * as yup from "yup";
import { LocationRoutine, locationRoutineSchema } from "./location";
import { ScheduledRoutine, scheduledRoutineSchema } from "./scheduled";

export * from "./location";
export * from "./scheduled";

export type Routine = ScheduledRoutine | LocationRoutine;

// Utility to dynamically select the correct schema based on the Routine type
export const RoutineSchemas: Record<
  Routine["type"],
  yup.ObjectSchema<Routine>
> = {
  scheduled: scheduledRoutineSchema,
  location: locationRoutineSchema,
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

export const routineIsScheduledRoutine = (
  value: Omit<Routine, "id">
): value is ScheduledRoutine => value.type === "scheduled";
export const isValidScheduledRoutine = (
  value: unknown
): value is ScheduledRoutine => {
  try {
    scheduledRoutineSchema.validateSync(value);
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
