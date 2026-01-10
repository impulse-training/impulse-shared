"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditEntrySchema = exports.auditChangeTypeSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.auditChangeTypeSchema = zod_1.z.enum(["create", "update", "delete"]);
exports.auditEntrySchema = zod_1.z.object({
    collectionPathPattern: zod_1.z.string(),
    exportName: zod_1.z.string(),
    fullPath: zod_1.z.string(),
    docId: zod_1.z.string().nullable(),
    params: zod_1.z.record(zod_1.z.string()),
    changeType: exports.auditChangeTypeSchema,
    before: zod_1.z.unknown().nullable(),
    after: zod_1.z.unknown().nullable(),
    eventId: zod_1.z.string(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
