"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportGroupDaySummaryLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const daySummary_1 = require("../daySummary");
exports.supportGroupDaySummaryLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("support_group_day_summary"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        // Map of userId to their daySummary data
        daySummariesByUserId: zod_1.z.record(zod_1.z.string(), daySummary_1.daySummarySchema),
        // Date string for the day this summary represents
        dateString: zod_1.z.string(),
        // Precomputed colors for each user based on recap status and goal achievement
        colorByUserId: zod_1.z.record(zod_1.z.string(), zod_1.z.string()),
    }),
});
