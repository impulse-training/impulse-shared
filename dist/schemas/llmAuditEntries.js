"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llmAuditEntrySchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
const session_1 = require("./session");
exports.llmAuditEntrySchema = zod_1.z.object({
    userId: zod_1.z.string(),
    logId: zod_1.z.string(),
    timestamp: timestampSchema_1.timestampSchema.optional(),
    instructions: zod_1.z.string().optional(),
    inputMessages: zod_1.z.array(zod_1.z.record(zod_1.z.unknown())),
    response: zod_1.z.record(zod_1.z.unknown()),
    session: session_1.sessionSchema.optional(),
    startedAt: timestampSchema_1.timestampSchema.optional(),
    endedAt: timestampSchema_1.timestampSchema.optional(),
    durationMs: zod_1.z.number().optional(),
    processingTimeMs: zod_1.z.number().optional(),
    model: zod_1.z.string().optional(),
});
