import { BehaviorTrackingData } from "../schemas";

const pluralize = require("pluralize");

export const scaleLevels = [
  { value: 1, label: "Low" },
  { value: 2, label: "Medium" },
  { value: 3, label: "High" },
] as const;

export type ScaleLevel = (typeof scaleLevels)[number];

export function getScaleLabel(value: number): string {
  return scaleLevels.find((l) => l.value === value)?.label ?? "Unknown";
}

type Args = {
  trackingType: BehaviorTrackingData["trackingType"];
  value: number;
  behaviorTrackingUnit?: BehaviorTrackingData["behaviorTrackingUnit"];
  // Abbreviate long time units for tight spaces (e.g. "3 minutes" -> "3 mins").
  // Only affects counter units; timer/scale are already compact.
  compact?: boolean;
};

// Short forms for the common (pluralized) time units, applied in compact mode.
const COMPACT_UNITS: Record<string, string> = {
  minute: "min",
  minutes: "mins",
  second: "sec",
  seconds: "secs",
  hour: "hr",
  hours: "hrs",
};

export function getFormattedValue({
  trackingType,
  value,
  behaviorTrackingUnit,
  compact,
}: Args) {
  if (trackingType === "timer") {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);

    if (hours === 0) {
      return `${minutes}m`;
    } else if (minutes === 0) {
      return `${hours}h`;
    } else {
      return `${hours}h ${minutes}m`;
    }
  }

  if (trackingType === "scale") {
    return getScaleLabel(value);
  }

  const unit = pluralize(behaviorTrackingUnit || "times", value);
  const displayUnit = compact ? (COMPACT_UNITS[unit.toLowerCase()] ?? unit) : unit;
  return `${value} ${displayUnit}`;
}
