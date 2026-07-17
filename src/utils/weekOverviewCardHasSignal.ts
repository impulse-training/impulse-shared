import { WeekOverviewBehaviorCard } from "../schemas/log/weekOverviewLog";

/**
 * Whether a week-overview card has anything meaningful to say about the week.
 *
 * The card's job is a week's shape plus a week-over-week change. With neither a
 * usable trend nor a prior week to compare against, all that's left is a bare
 * total dressed as a week summary — "peak 3" sitting above "No data last week",
 * off a single tracked entry. That reads as a pattern the user doesn't have,
 * which is worse than showing nothing.
 *
 * `INSUFFICIENT_DATA` is already treated as "nothing meaningful to say" for the
 * trend label; this extends the same judgement to the card as a whole.
 *
 * Note a genuine tracked zero still has signal: it carries a real trend once
 * there are enough samples, or a comparison once there's a prior week.
 */
export function weekOverviewCardHasSignal(
  card: Pick<WeekOverviewBehaviorCard, "trend" | "pctChangeFromLastWeek">,
): boolean {
  const hasTrend = !!card.trend && card.trend !== "INSUFFICIENT_DATA";
  const hasComparison = card.pctChangeFromLastWeek != null;
  return hasTrend || hasComparison;
}
