"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportGroupDaySummaryLogSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
const objectOf_1 = require("../../utils/objectOf");
const supportGroupSummary_1 = require("../utils/supportGroupSummary");
const timestampSchema_1 = require("../../utils/timestampSchema");
exports.supportGroupDaySummaryLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.default.literal("support_group_day_summary"),
    isDisplayable: zod_1.default.literal(true),
    text: zod_1.default.string().optional(),
    data: zod_1.default.object({
        // Map of userId to their summary + outcome
        summariesByUserId: (0, objectOf_1.objectOf)(supportGroupSummary_1.supportGroupSummarySchema),
        // Map of userId to color used in support group day header
        colorByUserId: (0, objectOf_1.objectOf)(zod_1.default.string()).optional(),
        // Date string for the day this summary represents
        dateString: zod_1.default.string(),
        summarizationCompletedAt: timestampSchema_1.timestampSchema.optional(),
        summarizationError: timestampSchema_1.timestampSchema.optional(),
        summarizationFailedAt: timestampSchema_1.timestampSchema.optional(),
    }),
});
