/**
 * Setup tasks a running experiment makes moot.
 *
 * Onboarding leaves a few "let's get set up" beats behind, and some only make
 * sense before the user's strategy has moved past its baseline. collect_baseline
 * asks "on a typical day, how much...?" and sets a goal: a self-reported
 * stand-in for the baseline window. Once a strategy covering that behavior is
 * running a trial (or has kept one), the baseline window is closed and measured
 * from real tracking, and asking for it on day 5 reads as the app having
 * forgotten the first conversation.
 *
 * Deliberately narrow. understand_behavior (what the behavior gives and costs
 * them) is not about the baseline, so a trial doesn't answer it; setup_shortcut,
 * merges and masks are independent of the strategy.
 *
 * The server dismisses mooted tasks (dismissedReason "superseded"), so the Home
 * card's count drops without the app reading strategies. The rule lives here
 * so anything that does read them agrees.
 */

export const TRIAL_MOOT_TASK_TYPES: ReadonlySet<string> = new Set([
  "collect_baseline",
]);

/** Raw strategy doc data, as the claim paths see it (untyped snapshots). */
export interface StrategyPhaseCandidate {
  status?: unknown;
  phase?: unknown;
  behaviorIds?: unknown;
}

/** An active strategy whose baseline window has closed: a trial running, or one kept. */
export const isStrategyPastBaseline = (strategy: StrategyPhaseCandidate): boolean =>
  strategy.status === "active" &&
  (strategy.phase === "trial" || strategy.phase === "kept");

/**
 * True when one of the user's strategies has made this task moot: it is a
 * TRIAL_MOOT_TASK_TYPES task about a behavior an active strategy past its
 * baseline covers.
 */
export const isTaskMootedByStrategies = (
  task: { type?: unknown; behaviorId?: unknown },
  strategies: readonly StrategyPhaseCandidate[],
): boolean => {
  if (typeof task.type !== "string" || !TRIAL_MOOT_TASK_TYPES.has(task.type)) return false;
  if (typeof task.behaviorId !== "string" || task.behaviorId.length === 0) return false;
  const behaviorId = task.behaviorId;
  return strategies.some(
    (s) =>
      isStrategyPastBaseline(s) &&
      Array.isArray(s.behaviorIds) &&
      s.behaviorIds.includes(behaviorId),
  );
};
