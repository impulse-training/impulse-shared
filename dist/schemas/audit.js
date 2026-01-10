"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditEntrySchema = exports.auditChangeTypeSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const timestampSchema_1 = require("../utils/timestampSchema");
exports.auditChangeTypeSchema = zod_1.default.enum(["create", "update", "delete"]);
exports.auditEntrySchema = zod_1.default.object({
    collectionPathPattern: zod_1.default.string(),
    exportName: zod_1.default.string(),
    fullPath: zod_1.default.string(),
    docId: zod_1.default.string().nullable(),
    params: zod_1.default.record(zod_1.default.string()),
    changeType: exports.auditChangeTypeSchema,
    before: zod_1.default.unknown().nullable(),
    after: zod_1.default.unknown().nullable(),
    eventId: zod_1.default.string(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
