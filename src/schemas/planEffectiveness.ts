import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";

/**
 * Represents the outcome data for a single thread where a plan was used.
 */
export const planEffectivenessThreadOutcomeSchema = z.object({
  behaviorDocs: z.array(documentReferenceSchema),
  started: z.boolean(),
  completed: z.boolean(),
  actedOnUrge: z.boolean().nullable().optional(),
});

export type PlanEffectivenessThreadOutcome = z.infer<
  typeof planEffectivenessThreadOutcomeSchema
>;

/**
 * PlanEffectiveness document schema.
 * Collection: users/{userId}/planEffectiveness/{planId}
 *
 * Tracks how effective a plan has been across multiple threads/impulse moments.
 */
export const planEffectivenessSchema = z.object({
  planId: z.string(),
  outcomesByThread: z.record(z.string(), planEffectivenessThreadOutcomeSchema),
});

export type PlanEffectiveness = z.infer<typeof planEffectivenessSchema>;

/**
 * UserPlanEffectiveness document schema.
 * Document: users/{userId}/userPlanEffectiveness/aggregate
 *
 * Aggregates all planEffectiveness data for a user, keyed by planId.
 * This allows efficient subscription to all plan effectiveness data in one document.
 */
export const userPlanEffectivenessSchema = z.object({
  byPlanId: z.record(z.string(), planEffectivenessSchema),
});

export type UserPlanEffectiveness = z.infer<typeof userPlanEffectivenessSchema>;
