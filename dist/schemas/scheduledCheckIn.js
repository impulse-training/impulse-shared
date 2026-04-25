"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduledCheckInSchema = exports.scheduledCheckInStatusSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.scheduledCheckInStatusSchema = zod_1.z.enum([
    "pending",
    "sent",
    "cancelled",
]);
exports.scheduledCheckInSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    scheduledFor: timestampSchema_1.timestampSchema,
    message: zod_1.z.string(),
    instructions: zod_1.z.string(),
    sessionId: zod_1.z.string().nullable().optional(),
    sourceSessionId: zod_1.z.string(),
    status: exports.scheduledCheckInStatusSchema,
    sentAt: timestampSchema_1.timestampSchema.nullable().optional(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
});
