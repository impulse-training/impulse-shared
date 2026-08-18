import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";
import { goalComparisonEntrySchema } from "./daySummary";

/**
 * One day of a behavior's history, as the streak / window / struggle engines
 * consume it. Every field is a projection of the same-dated daySummary:
 *
 *   goalComparison  ← daySummary.goalComparisonByBehaviorId[behaviorId]
 *   tracked         ← daySummary.behaviorDataTotalByBehaviorId[behaviorId].value
 *   confirmed       ← daySummary.dayTotalsConfirmedAt != null
 *   bounds          ← daySummary.behaviorDayBoundsByBehaviorId[behaviorId]
 *   impulses        ← daySummary.impulsesBySessionId (sessions naming behaviorId)
 *
 * A day is present only when the summary says something about the behavior.
 */
export const behaviorDayHistoryEntrySchema = z.object({
  goalComparison: goalComparisonEntrySchema.optional(),
  // Canonical units of behaviorDataTotalByBehaviorId: minutes / count / level.
  tracked: z.number().optional(),
  confirmed: z.boolean().optional(),
  bounds: z
    .object({
      firstAt: timestampSchema.nullable().optional(),
      lastAt: timestampSchema.nullable().optional(),
    })
    .optional(),
  impulses: z
    .object({
      count: z.number(),
      lapses: z.number(),
    })
    .optional(),
});
export type BehaviorDayHistoryEntry = z.infer<
  typeof behaviorDayHistoryEntrySchema
>;

/**
 * Per-behavior day history — the compact projection the behavior-state
 * recompute and recap day facts read INSTEAD of scanning every daySummary
 * document. Document: users/{userId}/behaviors/{behaviorId}/cache/dayHistory
 *
 * Derived, never authoritative: daySummaries remain the source of truth and
 * this doc is rebuilt from them (see rebuildBehaviorDayHistories in
 * impulse-functions). Kept in sync by the daySummary write trigger.
 *
 * ~100 bytes per day per behavior, so a doc stays far below the 1 MiB limit
 * for many years of daily history.
 */
export const behaviorDayHistorySchema = z.object({
  behaviorId: z.string(),
  // Keyed by yyyy-MM-dd date string.
  days: z.record(z.string(), behaviorDayHistoryEntrySchema),
  updatedAt: timestampSchema,
});
export type BehaviorDayHistory = z.infer<typeof behaviorDayHistorySchema>;

export const BEHAVIOR_DAY_HISTORY_DOC_ID = "dayHistory";
export const BEHAVIOR_CACHE_COLLECTION = "cache";

export function behaviorDayHistoryPath(
  userId: string,
  behaviorId: string,
): string {
  return `users/${userId}/behaviors/${behaviorId}/${BEHAVIOR_CACHE_COLLECTION}/${BEHAVIOR_DAY_HISTORY_DOC_ID}`;
}
