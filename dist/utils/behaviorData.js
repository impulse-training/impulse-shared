"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scaleLevels = void 0;
exports.getScaleLabel = getScaleLabel;
exports.getFormattedValue = getFormattedValue;
const pluralize = require("pluralize");
exports.scaleLevels = [
    { value: 0, label: "Zero" },
    { value: 1, label: "Low" },
    { value: 2, label: "Medium" },
    { value: 3, label: "High" },
];
function getScaleLabel(value) {
    var _a, _b;
    return (_b = (_a = exports.scaleLevels.find((l) => l.value === value)) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : "Unknown";
}
function getFormattedValue({ trackingType, value, behaviorTrackingUnit, }) {
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
    if (trackingType === "scale") {
        return getScaleLabel(value);
    }
    return pluralize(behaviorTrackingUnit || "times", value, true);
}
