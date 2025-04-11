"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATE_FORMAT = void 0;
exports.getDateString = getDateString;
exports.DATE_FORMAT = "yyyy-MM-dd";
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
// Get a date string that can be used for SQL queries
function getDateString(date, timezone) {
    return (0, date_fns_1.format)((0, date_fns_tz_1.toZonedTime)(date, timezone), exports.DATE_FORMAT);
}
