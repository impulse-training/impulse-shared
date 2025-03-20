import { BehaviorTrackingData } from "../schemas";

const pluralize = require("pluralize");

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
  // When tracking type is timer, value is in seconds. Return it as `${hours}h ${minutes}m`
  if (trackingType === "timer") {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    return `${hours}h ${minutes}m`;
  }

  return pluralize(behaviorTrackingUnit || "times", value, true);
}
