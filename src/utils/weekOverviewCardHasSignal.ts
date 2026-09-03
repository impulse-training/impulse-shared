import { WeekOverviewBehaviorCard } from "../schemas/log/weekOverviewLog";

/**
 * Whether a week-overview card has anything meaningful to say about the week.
 *
 * The card's job is a week's shape plus a week-over-week change. With neither a
 * shape to draw (fewer than two tracked days) nor a prior week to compare
 * against, all that's left is a bare total dressed as a week summary — "peak 3"
 * sitting above "No data last week", off a single tracked entry. That reads as
 * a pattern the user doesn't have, which is worse than showing nothing.
 *
 * Cards logged before `dailyValues` existed carried a trend label instead; a
 * usable trend still counts for those (INSUFFICIENT_DATA never did).
 *
 * Note a genuine tracked zero still has signal: it is a point on the sparkline,
 * and a comparison once there's a prior week.
 */
export function weekOverviewCardHasSignal(
  card: Pick<WeekOverviewBehaviorCard, "trend" | "pctChangeFromLastWeek" | "dailyValues">,
): boolean {
  const hasComparison = card.pctChangeFromLastWeek != null;
  const trackedDays = (card.dailyValues ?? []).filter((v) => v != null).length;
  const hasShape = trackedDays >= 2;
  const hasLegacyTrend =
    card.dailyValues === undefined && !!card.trend && card.trend !== "INSUFFICIENT_DATA";
  return hasComparison || hasShape || hasLegacyTrend;
}
