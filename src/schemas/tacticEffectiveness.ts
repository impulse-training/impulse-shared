import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * The outcome of one session in which a tactic was engaged, with the context
 * (session tags / behaviors) captured at time of use.
 */
export const tacticEffectivenessSessionOutcomeSchema = z.object({
  started: z.boolean(),
  completed: z.boolean(),
  actedOnUrge: z.boolean().nullable().optional(),
  // The session's `date` — lets clients/prompts render a dated history
  // without fetching each session.
  sessionDate: timestampSchema.optional(),
  // Session tags at time of use: tagGroupId -> selected optionIds. This is
  // what makes the doc an association record ("helped while bored"), not
  // just a counter.
  tags: z.record(z.string(), z.array(z.string())).optional(),
  behaviorIds: z.array(z.string()).optional(),
  // The plan/routine the use belonged to, if any (tactic log's planId).
  planId: z.string().optional(),
  rating: z.enum(["helpful", "not_helpful"]).optional(),
});

export type TacticEffectivenessSessionOutcome = z.infer<
  typeof tacticEffectivenessSessionOutcomeSchema
>;

/**
 * TacticEffectiveness document schema.
 * Collection: users/{userId}/tacticEffectiveness/{tacticId}
 *
 * The learned-association layer for tactics: how a tactic has performed for
 * this user across the sessions it was engaged in, and in what contexts. The
 * AI reads this as evidence when deciding what to suggest; nothing selects
 * deterministically off it.
 */
export const tacticEffectivenessSchema = z.object({
  tacticId: z.string(),
  // Doc path of the tactic engaged most recently ("users/{uid}/tactics/{id}"
  // or "tactics/{id}") — library copies keep the catalog id, so the doc id
  // alone doesn't say which copy was used.
  tacticRefPath: z.string().optional(),
  outcomesBySession: z.record(
    z.string(),
    tacticEffectivenessSessionOutcomeSchema,
  ),
});

export type TacticEffectiveness = z.infer<typeof tacticEffectivenessSchema>;
