import { MetricState } from "../schemas/metricState";
import { Trend } from "../schemas/behavior";

/**
 * Derives a single human-readable trend summary from MetricState window data.
 *
 * Picks the best available window intelligently:
 * - Uses the weekly (short) window if it has a real trend (≥5 samples).
 * - Falls back to monthly (medium), then 90-day (long) if shorter windows
 *   don't have enough data.
 *
 * Returns e.g. "Avg 7.2 · Improving" or "Just getting started".
 */
export function getMetricTrendSummary(state: MetricState): string {
  const keys: Array<"short" | "medium" | "long"> = ["short", "medium", "long"];

  // Pick the first window that has a real trend
  const chosen = keys.find(
    (k) =>
      state.windows[k].sampleCount > 0 &&
      state.windows[k].trend !== "INSUFFICIENT_DATA",
  );

  if (!chosen) {
    return "Just getting started";
  }

  const w = state.windows[chosen];
  const parts: string[] = [];

  if (w.averageValue !== undefined) {
    parts.push(`Avg ${w.averageValue.toFixed(1)}`);
  }

  parts.push(formatTrend(w.trend));

  return parts.join(" · ");
}

/**
 * Returns just the trend label for compact display.
 */
export function getMetricTrendLabel(trend: Trend): string {
  return formatTrend(trend);
}

function formatTrend(trend: Trend): string {
  switch (trend) {
    case "IMPROVING":
      return "Improving";
    case "DECLINING":
      return "Declining";
    case "STABLE":
      return "Stable";
    case "VOLATILE":
      return "Up and down";
    case "INSUFFICIENT_DATA":
      return "Just getting started";
  }
}
