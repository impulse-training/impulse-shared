import { BehaviorTrackingData } from "../schemas";

const pluralize = require("pluralize");

export const scaleLevels = [
  { value: 0, label: "Zero" },
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
};

export function getFormattedValue({
  trackingType,
  value,
  behaviorTrackingUnit,
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

  return pluralize(behaviorTrackingUnit || "times", value, true);
}
