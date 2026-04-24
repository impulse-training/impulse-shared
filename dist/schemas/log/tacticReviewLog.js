"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticReviewLogSchema = exports.tacticReviewItemSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const tactic_1 = require("../tactic");
const base_1 = require("./base");
/** One tactic entry in the review carousel */
exports.tacticReviewItemSchema = zod_1.z.object({
    tactic: tactic_1.tacticSchema,
    /** The original tactic log ID so we can update its rating field */
    tacticLogId: zod_1.z.string(),
    rating: zod_1.z.enum(["helpful", "not_helpful"]).nullable().optional(),
    ratedAt: timestampSchema_1.timestampSchema.optional(),
});
exports.tacticReviewLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("tactic_review"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        tactics: zod_1.z.array(exports.tacticReviewItemSchema),
        /** Set when user finishes reviewing all tactics (or skips to end) */
        completedAt: timestampSchema_1.timestampSchema.optional(),
    }),
});
