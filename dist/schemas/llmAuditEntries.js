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
    messages: zod_1.z.array(zod_1.z.any()),
    response: zod_1.z.any(),
    toolDefinitions: zod_1.z.array(zod_1.z.any()),
    // Snapshot of the session at the time of the audit entry
    session: session_1.sessionSchema.optional(),
    // Timing instrumentation
    startedAt: timestampSchema_1.timestampSchema.optional(),
    endedAt: timestampSchema_1.timestampSchema.optional(),
    durationMs: zod_1.z.number().optional(),
    // Model used for the call
    model: zod_1.z.string().optional(),
});
