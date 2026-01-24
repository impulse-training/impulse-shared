import { z } from "zod";
import { withIdSchema } from "../../utils/withId";
import { SimpleTrigger, simpleTriggerSchema } from "./simpleTrigger";
import { TimeTrigger, timeTriggerSchema } from "./timeTrigger";
import { LocationTrigger, locationTriggerSchema } from "./locationTrigger";

export * from "./simpleTrigger";
export * from "./timeTrigger";
export * from "./locationTrigger";

export const triggerSchema = z.discriminatedUnion("type", [
  simpleTriggerSchema,
  timeTriggerSchema,
  locationTriggerSchema,
]);

export type Trigger = z.infer<typeof triggerSchema>;

export const triggerWithIdSchema = z.union([
  withIdSchema(simpleTriggerSchema),
  withIdSchema(timeTriggerSchema),
  withIdSchema(locationTriggerSchema),
]);

export type TriggerWithId = z.infer<typeof triggerWithIdSchema>;

export const triggerIsSimpleTrigger = (
  value: Trigger,
): value is SimpleTrigger => value.type === "simple";
export const isValidSimpleTrigger = (value: unknown): value is SimpleTrigger =>
  simpleTriggerSchema.safeParse(value).success;

export const triggerIsTimeTrigger = (value: Trigger): value is TimeTrigger =>
  value.type === "time";
export const isValidTimeTrigger = (value: unknown): value is TimeTrigger =>
  timeTriggerSchema.safeParse(value).success;

export const triggerIsLocationTrigger = (
  value: Trigger,
): value is LocationTrigger => value.type === "location";
export const isValidLocationTrigger = (
  value: unknown,
): value is LocationTrigger => locationTriggerSchema.safeParse(value).success;
