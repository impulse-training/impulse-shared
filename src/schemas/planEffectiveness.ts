import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Represents the outcome data for a single session where a plan was used.
 */
export const planEffectivenessSessionOutcomeSchema = z.object({
  behaviorDocs: z.array(documentReferenceSchema),
  started: z.boolean(),
  // The plan was RESOLVED for the session (on the sheet / in context) even if
  // never started - lets fatigue count "offered but ignored" sessions.
  offered: z.boolean().optional(),
  completed: z.boolean(),
  actedOnUrge: z.boolean().nullable().optional(),
  // When the impulse moment happened (the session's `date`). Lets the client
  // render a dated usage history straight from the aggregate doc without
  // fetching each session. Optional: docs written before this field existed
  // lack it until backfilled.
  sessionDate: timestampSchema.optional(),
});

export type PlanEffectivenessSessionOutcome = z.infer<
  typeof planEffectivenessSessionOutcomeSchema
>;

/**
 * PlanEffectiveness document schema.
 * Collection: users/{userId}/planEffectiveness/{planId}
 *
 * Tracks how effective a plan has been across multiple sessions/impulse moments.
 */
export const planEffectivenessSchema = z.object({
  planId: z.string(),
  outcomesBySession: z.record(
    z.string(),
    planEffectivenessSessionOutcomeSchema,
  ),
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
