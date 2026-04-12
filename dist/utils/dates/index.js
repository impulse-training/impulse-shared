"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATE_FORMAT = void 0;
exports.getDateString = getDateString;
exports.getRecapDeadline = getRecapDeadline;
__exportStar(require("./getUnrecappedDays"), exports);
exports.DATE_FORMAT = "yyyy-MM-dd";
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
// Get a date string that can be used for SQL queries
function getDateString(date, timezone) {
    return (0, date_fns_1.format)((0, date_fns_tz_1.toZonedTime)(date, timezone), exports.DATE_FORMAT);
}
/**
 * Get the recap deadline for a given target date string.
 * The deadline is midnight at the start of (targetDate + 2 days) in the user's timezone —
 * i.e. the end of the day after the target date.
 *
 * @param targetDateString - The date being recapped (e.g. "2026-04-03")
 * @param timezone - The user's IANA timezone (e.g. "America/Mexico_City").
 *                   Omit on the client — JS local time is used instead.
 */
function getRecapDeadline(targetDateString, timezone) {
    const [year, month, day] = targetDateString.split("-").map(Number);
    // +2 days: JS Date handles month/year rollover automatically
    const deadlineLocalDate = new Date(year, month - 1, day + 2);
    const deadlineDateStr = (0, date_fns_1.format)(deadlineLocalDate, exports.DATE_FORMAT);
    if (timezone) {
        // Midnight in the user's timezone → UTC Date
        return (0, date_fns_tz_1.fromZonedTime)(`${deadlineDateStr}T00:00:00`, timezone);
    }
    // Client-side: midnight in device local time
    deadlineLocalDate.setHours(0, 0, 0, 0);
    return deadlineLocalDate;
}
