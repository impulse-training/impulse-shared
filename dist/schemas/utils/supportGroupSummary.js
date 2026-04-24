"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportGroupSummarySchema = void 0;
const outcomes_1 = require("../../utils/outcomes");
const zod_1 = require("zod");
// This is shared with support groups (and can vary by group)
exports.supportGroupSummarySchema = zod_1.z.object({
    summary: zod_1.z.string(),
    outcome: outcomes_1.outcomeSchema.optional(),
});
