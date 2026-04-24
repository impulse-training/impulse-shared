"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transcriptItemSchema = void 0;
exports.isTranscriptItem = isTranscriptItem;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.transcriptItemSchema = zod_1.z.object({
    role: zod_1.z.enum(["user", "assistant"]),
    text: zod_1.z.string(),
    ts: timestampSchema_1.timestampSchema,
    interrupted: zod_1.z.boolean().optional(),
    type: zod_1.z.enum(["final", "partial"]).optional(),
});
function isTranscriptItem(value) {
    return exports.transcriptItemSchema.safeParse(value).success;
}
