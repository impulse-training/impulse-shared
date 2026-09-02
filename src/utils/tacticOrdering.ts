/**
 * Ordering rule for tactic sequences (plan.tactics, plan.planSteps,
 * behavior.tactics, trigger.tactics, ranked eligibleTacticPaths).
 *
 * A tactic whose completion is detected on the NEXT cold start
 * (`completionTrigger: "device-restart"`, e.g. "Turn Off Your Phone") ends the
 * guided session: the app is the thing walking the user through the plan, so
 * nothing placed after it can be delivered. Such a tactic is *terminal* and
 * must sit last. Every writer of an ordered tactic list normalizes through
 * `orderTerminalTacticsLast` so the invariant holds regardless of who picked
 * the order (user drag, AI proposal, phase-ordered improvisation, score
 * ranking).
 *
 * The sort is stable: non-terminal tactics keep their relative order, terminal
 * ones keep theirs and move to the end.
 */

export type TerminalTacticLike = {
  completionTrigger?: string | null;
} | null | undefined;

export function tacticIsTerminal(tactic: TerminalTacticLike): boolean {
  return tactic?.completionTrigger === "device-restart";
}

export function orderTerminalTacticsLast<T>(
  items: readonly T[],
  isTerminal: (item: T) => boolean,
): T[] {
  const leading: T[] = [];
  const trailing: T[] = [];
  for (const item of items) {
    (isTerminal(item) ? trailing : leading).push(item);
  }
  return trailing.length === 0 ? [...items] : [...leading, ...trailing];
}

/** True when no terminal tactic precedes a non-terminal one. */
export function terminalTacticsAreLast<T>(
  items: readonly T[],
  isTerminal: (item: T) => boolean,
): boolean {
  let seenTerminal = false;
  for (const item of items) {
    if (isTerminal(item)) seenTerminal = true;
    else if (seenTerminal) return false;
  }
  return true;
}

/**
 * Plan-shaped convenience: order tactic refs using the plan's denormalized
 * `tacticsByPath` cache. A ref whose tactic isn't in the cache is treated as
 * non-terminal (unknown never demotes).
 */
export function orderPlanTacticRefsLast<
  R extends { path?: string } | string,
>(
  refs: readonly R[],
  tacticsByPath: Record<string, TerminalTacticLike> | undefined,
): R[] {
  if (!tacticsByPath) return [...refs];
  return orderTerminalTacticsLast(refs, (ref) => {
    const path = typeof ref === "string" ? ref : ref?.path;
    return path ? tacticIsTerminal(tacticsByPath[path]) : false;
  });
}
