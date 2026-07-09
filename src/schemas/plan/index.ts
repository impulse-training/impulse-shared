import { z } from "zod";
import { withIdSchema } from "../../utils/withId";
import { TriggerPlan, triggerPlanSchema } from "./triggerPlan";
import { ScheduledPlan, scheduledPlanSchema } from "./scheduledPlan";
import { DefaultPlan, defaultPlanSchema } from "./defaultPlan";
import { BehaviorPlan, behaviorPlanSchema } from "./behaviorPlan";

export * from "./triggerPlan";
export * from "./scheduledPlan";
export * from "./defaultPlan";
export * from "./behaviorPlan";
export * from "./planStep";

export const planSchema = z.discriminatedUnion("type", [
  triggerPlanSchema,
  scheduledPlanSchema,
  defaultPlanSchema,
  behaviorPlanSchema,
]);

export type Plan = z.infer<typeof planSchema>;

// WithId variant for plans
export const planWithIdSchema = z.union([
  withIdSchema(triggerPlanSchema),
  withIdSchema(scheduledPlanSchema),
  withIdSchema(defaultPlanSchema),
  withIdSchema(behaviorPlanSchema),
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

export const planIsBehaviorPlan = (value: Plan): value is BehaviorPlan =>
  value.type === "behavior";
export const isValidBehaviorPlan = (value: unknown): value is BehaviorPlan =>
  behaviorPlanSchema.safeParse(value).success;

/**
 * A plan is "actionable" when it has something to present when it fires:
 * at least one tactic, question, or plan step, and it hasn't been soft-deleted.
 * An empty placeholder plan (created but never filled in) would otherwise
 * produce a blank session, so callers treat it as if the plan weren't there.
 */
export const planHasActionableContent = (plan: {
  tactics?: unknown[];
  questions?: unknown[];
  planSteps?: unknown[];
  deletedAt?: unknown;
}): boolean => {
  if (plan.deletedAt) return false;
  const tacticCount = Array.isArray(plan.tactics) ? plan.tactics.length : 0;
  const questionCount = Array.isArray(plan.questions)
    ? plan.questions.length
    : 0;
  const stepCount = Array.isArray(plan.planSteps) ? plan.planSteps.length : 0;
  return tacticCount + questionCount + stepCount > 0;
};
