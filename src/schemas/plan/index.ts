import { z } from "zod";
import { withIdSchema } from "../../utils/withId";
import { TriggerPlan, triggerPlanSchema } from "./triggerPlan";
import { ScheduledPlan, scheduledPlanSchema } from "./scheduledPlan";
import { DefaultPlan, defaultPlanSchema } from "./defaultPlan";

export * from "./triggerPlan";
export * from "./scheduledPlan";
export * from "./defaultPlan";

export const planSchema = z.discriminatedUnion("type", [
  triggerPlanSchema,
  scheduledPlanSchema,
  defaultPlanSchema,
]);

export type Plan = z.infer<typeof planSchema>;

// WithId variant for plans
export const planWithIdSchema = z.union([
  withIdSchema(triggerPlanSchema),
  withIdSchema(scheduledPlanSchema),
  withIdSchema(defaultPlanSchema),
]);

export const planIsTriggerPlan = (value: Plan): value is TriggerPlan =>
  value.type === "trigger";
export const isValidTriggerPlan = (value: unknown): value is TriggerPlan =>
  triggerPlanSchema.safeParse(value).success;

export const planIsDefaultPlan = (value: Plan): value is DefaultPlan =>
  value.type === "default";
export const isValidDefaultPlan = (value: unknown): value is DefaultPlan =>
  defaultPlanSchema.safeParse(value).success;

export const planIsScheduledPlan = (value: Plan): value is ScheduledPlan =>
  value.type === "scheduled";
export const isValidScheduledPlan = (value: unknown): value is ScheduledPlan =>
  scheduledPlanSchema.safeParse(value).success;
