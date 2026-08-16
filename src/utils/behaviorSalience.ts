/**
 * How much a behavior matters to THIS user's struggle, 0..1 — the one number
 * every surface that orders or weighs behaviors should read.
 *
 * Two sources, one precedence:
 * - `behavior.importance` (1..5): the user's or coach's explicit statement.
 *   When present it wins outright — a person saying "this is why I'm here"
 *   outranks any inference.
 * - `state.struggle.weight` (0..1): derived by updateBehaviorState from
 *   impulse-session mass (recency-weighted, lapses doubled). What the logs
 *   prove, for the common case where nobody has set anything.
 *
 * Computed at READ time, never stored: storing an "effective" value would go
 * stale the moment the override is edited (see the protectNextWindow lesson —
 * derived state that nothing recomputes is a trap).
 *
 * Motivating case (2026-08-15): a recap opener led with "a full week without
 * coffee" — a behavior with ZERO impulse sessions in 90 days — while day one
 * off Social media & videos (21 sessions, 7 lapses) went unmentioned.
 * Structural significance (a milestone rung) is not personal significance.
 */

interface SalienceReadableBehavior {
  importance?: number;
  state?: {
    struggle?: {
      weight?: number;
    };
  };
}

/** Floor applied when neither source exists: a behavior we know nothing about
 * is not zero — it competes at a low baseline rather than being erased. */
export const DEFAULT_BEHAVIOR_SALIENCE = 0.15;

export function effectiveBehaviorSalience(
  behavior: SalienceReadableBehavior,
): number {
  const importance = behavior.importance;
  if (
    typeof importance === "number" &&
    Number.isFinite(importance) &&
    importance >= 1
  ) {
    return Math.min(importance, 5) / 5;
  }
  const weight = behavior.state?.struggle?.weight;
  if (typeof weight === "number" && Number.isFinite(weight)) {
    return Math.min(Math.max(weight, 0), 1);
  }
  return DEFAULT_BEHAVIOR_SALIENCE;
}
