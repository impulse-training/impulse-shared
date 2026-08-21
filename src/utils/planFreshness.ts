import { nowMs } from "./clock";

/**
 * Plan decay: a plan is only "the user's plan" while they have recently stood
 * behind it. A plan they can predict starts reading as a script to resist, so
 * after this many days without an affirmation (content edit, activation, or a
 * successful use — all stamped server-side onto `affirmedAt`) it reads as
 * STALE and is delivered as one option among many instead of the default.
 *
 * Staleness changes FRAMING only: nothing is deleted, deactivated, or hidden,
 * and the plan sheet keeps working.
 */
export const PLAN_AFFIRMATION_DECAY_DAYS = 7;

const DECAY_MS = PLAN_AFFIRMATION_DECAY_DAYS * 24 * 60 * 60 * 1000;

type TimestampLike = { toMillis: () => number };

/**
 * `affirmedAt` falls back to `createdAt` (creating a plan is standing behind
 * it). A plan with neither timestamp is treated as fresh — unknown age is not
 * evidence of staleness, and real documents always carry createdAt.
 */
export function planIsStale(
  plan: {
    affirmedAt?: TimestampLike | null;
    createdAt?: TimestampLike | null;
  },
  atMs: number = nowMs(),
): boolean {
  const anchor = plan.affirmedAt ?? plan.createdAt;
  if (!anchor || typeof anchor.toMillis !== "function") return false;
  return atMs - anchor.toMillis() > DECAY_MS;
}

/**
 * Decay by outcome: a plan whose recent record is bad is delivered as an
 * option among many NOW, without waiting out the time window. Fatigued when,
 * walking the resolved outcomes newest-first, the run since the last success
 * holds at least PLAN_FATIGUE_THRESHOLD non-successes — a use that did not
 * hold (actedOnUrge true while started) or an offer the user ignored in a
 * session that ended acted. Unresolved sessions count neither way, and any
 * success ends the run.
 */
export const PLAN_FATIGUE_THRESHOLD = 2;

export interface PlanFatigueOutcome {
  started: boolean;
  offered?: boolean;
  actedOnUrge?: boolean | null;
  sessionDate?: TimestampLike | null;
}

export function planIsFatigued(
  outcomes: PlanFatigueOutcome[],
  threshold: number = PLAN_FATIGUE_THRESHOLD,
): boolean {
  const relevant = outcomes
    .filter((o) => (o.started || o.offered) && o.actedOnUrge != null)
    .sort(
      (a, b) => (b.sessionDate?.toMillis?.() ?? 0) - (a.sessionDate?.toMillis?.() ?? 0),
    );

  let streak = 0;
  for (const outcome of relevant) {
    if (outcome.actedOnUrge === false) return false; // success ends the run
    streak++;
    if (streak >= threshold) return true;
  }
  return false;
}
