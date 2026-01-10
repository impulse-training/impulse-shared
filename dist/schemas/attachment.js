"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachmentSchema = exports.attachmentTypes = void 0;
exports.isAttachment = isAttachment;
/**
 * Attachment Schemas (Zod)
 *
 * Defines Zod schemas for file/media attachments
 */
const zod_1 = __importDefault(require("zod"));
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
exports.attachmentSchema = zod_1.default.object({
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    // Basic file info
    uri: zod_1.default.string(),
    storagePath: zod_1.default.string(),
    contentType: zod_1.default.string(),
    // Optional display title for the attachment
    title: zod_1.default.string().optional(),
    sizeBytes: zod_1.default.number().optional(),
    // For any additional type-specific data
    metadata: zod_1.default
        .object({
        // Image-specific fields
        width: zod_1.default.number().optional(),
        height: zod_1.default.number().optional(),
        // Audio/video specific fields
        durationMs: zod_1.default.number().optional(),
        // Audio-specific fields
        transcript: zod_1.default.string().optional(),
        meterings: zod_1.default
            .array(zod_1.default.object({
            db: zod_1.default.number(),
            timestampMs: zod_1.default.number().optional(),
        }))
            .optional(),
    })
        .optional(),
});
// Type guard
function isAttachment(value) {
    return exports.attachmentSchema.safeParse(value).success;
}
