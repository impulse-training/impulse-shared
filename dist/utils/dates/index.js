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
__exportStar(require("./getUnrecappedDays"), exports);
exports.DATE_FORMAT = "yyyy-MM-dd";
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
// Get a date string that can be used for SQL queries
function getDateString(date, timezone) {
    return (0, date_fns_1.format)((0, date_fns_tz_1.toZonedTime)(date, timezone), exports.DATE_FORMAT);
}
