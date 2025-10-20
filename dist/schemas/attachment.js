"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachmentSchema = exports.attachmentTypes = void 0;
exports.isAttachment = isAttachment;
/**
 * Attachment Schemas (Zod)
 *
 * Defines Zod schemas for file/media attachments
 */
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
// Attachment Types
exports.attachmentTypes = [
    "image",
    "video",
    "audio",
    "text",
    "document",
];
// Base Attachment Schema
exports.attachmentSchema = zod_1.z.object({
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    // Basic file info
    uri: zod_1.z.string(),
    storagePath: zod_1.z.string(),
    contentType: zod_1.z.string(),
    // Optional display title for the attachment
    title: zod_1.z.string().optional(),
    sizeBytes: zod_1.z.number().optional(),
    // For any additional type-specific data
    metadata: zod_1.z
        .object({
        // Image-specific fields
        width: zod_1.z.number().optional(),
        height: zod_1.z.number().optional(),
        // Audio/video specific fields
        durationMs: zod_1.z.number().optional(),
        // Audio-specific fields
        transcript: zod_1.z.string().optional(),
        meterings: zod_1.z
            .array(zod_1.z.object({
            db: zod_1.z.number(),
            timestampMs: zod_1.z.number().optional(),
        }))
            .optional(),
    })
        .optional(),
});
// Type guard
function isAttachment(value) {
    return exports.attachmentSchema.safeParse(value).success;
}
