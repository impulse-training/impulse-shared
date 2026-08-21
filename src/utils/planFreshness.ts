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
