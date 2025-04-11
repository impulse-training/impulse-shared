"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedValue = getFormattedValue;
const pluralize = require("pluralize");
function getFormattedValue({ trackingType, value, behaviorTrackingUnit, }) {
    // When tracking type is timer, value is in seconds. Return it as `${hours}h ${minutes}m`
    if (trackingType === "timer") {
        const hours = Math.floor(value / 3600);
        const minutes = Math.floor((value % 3600) / 60);
        if (hours === 0) {
            return `${minutes}m`;
        }
        else if (minutes === 0) {
            return `${hours}h`;
        }
        else {
            return `${hours}h ${minutes}m`;
        }
    }
    return pluralize(behaviorTrackingUnit || "times", value, true);
}
