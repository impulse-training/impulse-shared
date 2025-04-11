import * as yup from "yup";
import { LocationRoutine } from "./location";
import { ScheduledRoutine } from "./scheduled";
export * from "./location";
export * from "./scheduled";
export type Routine = ScheduledRoutine | LocationRoutine;
export declare const RoutineSchemas: Record<Routine["type"], yup.ObjectSchema<Routine>>;
export declare const routineSchema: yup.Lazy<RoutineTypes[Routine["type"]]>;
export type RoutineTypes = {
    [K in Routine["type"]]: yup.InferType<(typeof RoutineSchemas)[K]>;
};
