"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedMomentLogSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
const emojiId_1 = require("../emojiId");
const sessionSummary_1 = require("../sessionSummary");
const base_1 = require("./base");
exports.sharedMomentLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("shared_moment"),
    // For support group feed rendering
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        // Reference to the original session document (users/{uid}/sessions/{sessionId})
        sessionRef: documentReferenceSchema_1.documentReferenceSchema,
        // session schema
        sessionSummaryData: sessionSummary_1.sessionSummarySchema,
        // Snapshot of the sharer's emoji identity (to avoid extra reads)
        emojiId: emojiId_1.emojiIdSchema.optional(),
        // Optional custom message when sharing (e.g., from NotifySupport step)
        message: zod_1.z.string().optional(),
    }),
});
