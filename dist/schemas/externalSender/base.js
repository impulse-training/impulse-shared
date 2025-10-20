"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.externalSenderBaseSchema = externalSenderBaseSchema;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
const timestampSchema_1 = require("../../utils/timestampSchema");
function externalSenderBaseSchema(type) {
    return zod_1.z.object({
        type: zod_1.z.literal(type),
        uid: zod_1.z.string(),
        senderName: zod_1.z.string().optional(),
        defaultTargetTacticRef: documentReferenceSchema_1.documentReferenceSchema.optional(),
        createdAt: timestampSchema_1.timestampSchema.optional(),
        updatedAt: timestampSchema_1.timestampSchema.optional(),
        filesUpdatedAt: timestampSchema_1.timestampSchema.optional(),
    });
}
