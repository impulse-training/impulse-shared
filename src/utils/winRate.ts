import { GoalComparisonEntry } from "../schemas/daySummary";

/**
 * Counts MET vs MET+NOT_MET_FAIL days from a set of persisted goal-comparison
 * statuses. NO_GOAL/UNSPECIFIED_FOR_DAY days are excluded from the
 * denominator — they're not evidence either way.
 */
export function summarizeWinRate(
  statuses: Array<GoalComparisonEntry["status"]>,
): { metDays: number; totalDays: number } {
  let metDays = 0;
  let totalDays = 0;
  for (const status of statuses) {
    if (status === "MET") {
      metDays++;
      totalDays++;
    } else if (status === "NOT_MET_FAIL") {
      totalDays++;
    }
  }
  return { metDays, totalDays };
}
