"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planBaseSchema = planBaseSchema;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
const timestampSchema_1 = require("../../utils/timestampSchema");
function planBaseSchema(type) {
    return zod_1.z.object({
        id: zod_1.z.string().optional(),
        name: zod_1.z.string(),
        description: zod_1.z.string().optional(),
        type: zod_1.z.literal(type),
        ordinal: zod_1.z.number().optional(),
        isTemplate: zod_1.z.boolean().optional(),
        summary: zod_1.z.string().optional(),
        tactics: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema),
        // Pre-fetched tactics data for efficient rendering (loosely typed for now)
        tacticsByPath: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
        questions: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema).optional().default([]),
        lastUsedAt: timestampSchema_1.timestampSchema.optional(),
        createdAt: timestampSchema_1.timestampSchema.optional(),
        updatedAt: timestampSchema_1.timestampSchema.optional(),
        deletedAt: timestampSchema_1.timestampSchema.optional(),
    });
}
