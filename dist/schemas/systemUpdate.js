"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemUpdateUserSchema = exports.systemUpdateSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.systemUpdateSchema = zod_1.z.object({
    severity: zod_1.z.enum(["normal", "severe"]),
    iosUpdateId: zod_1.z.string(),
    updateGroupId: zod_1.z.string().nullable().optional(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
});
exports.systemUpdateUserSchema = zod_1.z.object({
    firstOpenedAt: timestampSchema_1.timestampSchema,
    downloadedAt: timestampSchema_1.timestampSchema.nullable().optional(),
    appliedAt: timestampSchema_1.timestampSchema.nullable().optional(),
});
