"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedMomentLogSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
const emojiId_1 = require("../emojiId");
const threadSummary_1 = require("../thread/threadSummary");
const base_1 = require("./base");
exports.sharedMomentLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("shared_moment"),
    // For support group feed rendering
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        // Reference to the original thread document (users/{uid}/threads/{threadId})
        threadRef: documentReferenceSchema_1.documentReferenceSchema,
        // thread schema
        threadSummaryData: threadSummary_1.threadSummarySchema,
        // Snapshot of the sharer's emoji identity (to avoid extra reads)
        emojiId: emojiId_1.emojiIdSchema.optional(),
        // Optional custom message when sharing (e.g., from NotifySupport step)
        message: zod_1.z.string().optional(),
    }),
});
