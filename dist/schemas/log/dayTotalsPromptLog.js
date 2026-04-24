"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayTotalsPromptLogSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.dayTotalsPromptLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("day_totals_prompt"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        /** The dateString this prompt is for (typically the current day) */
        targetDateString: zod_1.z.string(),
        /** Set when the user confirms their day totals */
        confirmedAt: timestampSchema_1.timestampSchema.optional(),
        /** Set when the user requests a late-recap discussion with the AI */
        discussRequestedAt: timestampSchema_1.timestampSchema.optional(),
    }),
});
