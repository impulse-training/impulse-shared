"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daySummaryLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const daySummary_1 = require("../daySummary");
exports.daySummaryLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("day_summary"),
    isDisplayable: zod_1.z.literal(true),
    // Store the entire DaySummary object in the log for single-source-of-truth
    data: daySummary_1.daySummarySchema,
});
