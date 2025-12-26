"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportGroupDaySummaryLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const objectOf_1 = require("../../utils/objectOf");
const supportGroupSummary_1 = require("../utils/supportGroupSummary");
const utils_1 = require("../../utils");
exports.supportGroupDaySummaryLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("support_group_day_summary"),
    isDisplayable: zod_1.z.literal(true),
    text: zod_1.z.string().optional(),
    data: zod_1.z.object({
        // Map of userId to their summary + outcome
        summariesByUserId: (0, objectOf_1.objectOf)(supportGroupSummary_1.supportGroupSummarySchema),
        // Map of userId to color used in support group day header
        colorByUserId: (0, objectOf_1.objectOf)(zod_1.z.string()).optional(),
        // Date string for the day this summary represents
        dateString: zod_1.z.string(),
        summarizationCompletedAt: utils_1.timestampSchema.optional(),
        summarizationError: utils_1.timestampSchema.optional(),
        summarizationFailedAt: utils_1.timestampSchema.optional(),
    }),
});
