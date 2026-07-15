import { Behavior } from "../schemas";

/**
 * The noun phrase that follows a streak count, e.g. "3 days {label}".
 *
 * `behavior.streakLabel` ("clean" / "free" / "sober") only describes ABSTINENCE,
 * so it's only truthful for an eliminate goal. A streak day on a contain goal
 * means the usage stayed inside the allowed window, and on a reduce goal it means
 * the day landed at or under target — calling either of those "free" tells the
 * user they abstained on a day they didn't.
 *
 * Wording tracks the copy the rest of the contain flow already uses ("Within
 * allowed window" in computeGoalComparison, "Kept within {window}?" at recap).
 *
 * Reads `behavior.goal` (the real goal) rather than `state.goal.goalType`, which
 * has no contain member — behaviorStateGoalTypeSchema is MAX_PER_DAY / MIN_PER_DAY
 * / ELIMINATE / CUSTOM, so a contain goal is indistinguishable there.
 */
export function getBehaviorStreakLabel(
  behavior: Pick<Behavior, "goal" | "streakLabel">,
): string {
  switch (behavior.goal?.type) {
    case "contain":
      return "within window";
    case "reduceEveryDay":
    case "reduceIndividualDays":
      return "on target";
    default:
      // eliminate, or no goal set yet.
      return behavior.streakLabel ?? "free";
  }
}

/** "1 day within window" / "3 days on target" — the full streak phrase. */
export function formatStreakDays(
  behavior: Pick<Behavior, "goal" | "streakLabel">,
  days: number,
): string {
  const label = getBehaviorStreakLabel(behavior);
  return `${days} ${days === 1 ? "day" : "days"} ${label}`;
}
