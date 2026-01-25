import { z } from "zod";
import { withIdSchema } from "../../utils/withId";
import { TriggerPlan, triggerPlanSchema } from "./triggerPlan";
import { ScheduledPlan, scheduledPlanSchema } from "./scheduledPlan";

export * from "./triggerPlan";
export * from "./scheduledPlan";

export const planSchema = z.discriminatedUnion("type", [
  triggerPlanSchema,
  scheduledPlanSchema,
]);

export type Plan = z.infer<typeof planSchema>;

// WithId variant for plans
export const planWithIdSchema = z.union([
  withIdSchema(triggerPlanSchema),
  withIdSchema(scheduledPlanSchema),
]);

export const planIsTriggerPlan = (value: Plan): value is TriggerPlan =>
  value.type === "trigger";
export const isValidTriggerPlan = (value: unknown): value is TriggerPlan =>
  triggerPlanSchema.safeParse(value).success;

export const planIsScheduledPlan = (value: Plan): value is ScheduledPlan =>
  value.type === "scheduled";
export const isValidScheduledPlan = (value: unknown): value is ScheduledPlan =>
  scheduledPlanSchema.safeParse(value).success;
