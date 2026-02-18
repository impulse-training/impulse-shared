import { MetricState } from "../schemas/metricState";
import { Trend } from "../schemas/behavior";

/**
 * Derives a short human-readable trend summary from MetricState window data.
 * Returns e.g. "Avg 7.2 · Improving" or "Not enough data".
 */
export function getMetricTrendSummary(
  state: MetricState,
  windowKey: "short" | "medium" | "long" = "short"
): string {
  const window = state.windows[windowKey];

  if (
    window.sampleCount === 0 ||
    window.trend === "INSUFFICIENT_DATA"
  ) {
    return "Not enough data";
  }

  const parts: string[] = [];

  if (window.averageValue !== undefined) {
    parts.push(`Avg ${window.averageValue.toFixed(1)}`);
  }

  parts.push(formatTrend(window.trend));

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
      return "Volatile";
    case "INSUFFICIENT_DATA":
      return "Not enough data";
  }
}
