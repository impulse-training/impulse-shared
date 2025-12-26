"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportGroupDaySummaryLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const utils_1 = require("../../utils");
const supportGroupSummary_1 = require("../utils/supportGroupSummary");
exports.supportGroupDaySummaryLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("support_group_day_summary"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        // Map of userId to their summary + outcome
        summariesByUserId: (0, utils_1.objectOf)(supportGroupSummary_1.supportGroupSummarySchema),
        // Date string for the day this summary represents
        dateString: zod_1.z.string(),
    }),
});
