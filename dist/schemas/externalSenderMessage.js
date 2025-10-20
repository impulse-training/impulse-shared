"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.externalSenderMessageSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
// This is a message from an external service, like Whatsapp, delivered to an inbox
exports.externalSenderMessageSchema = zod_1.z.object({
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    date: timestampSchema_1.timestampSchema.optional(),
    content: zod_1.z.string().nullable(),
    senderUid: zod_1.z.string().optional(),
    attachments: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema).optional(),
    externalId: zod_1.z.string(),
    role: zod_1.z.enum(["assistant", "user", "system", "tool"]),
});
