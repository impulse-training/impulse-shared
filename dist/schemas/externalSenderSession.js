"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.externalSenderSessionSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.externalSenderSessionSchema = zod_1.z.object({
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    expiresAt: timestampSchema_1.timestampSchema.optional(),
    systemMessage: zod_1.z.string(),
    filesUpdatedAt: timestampSchema_1.timestampSchema.optional(),
    senderName: zod_1.z.string().optional(),
    targetTacticRef: documentReferenceSchema_1.documentReferenceSchema.optional(),
});
