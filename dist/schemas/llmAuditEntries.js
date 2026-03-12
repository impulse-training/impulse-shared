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
    // System prompt / instructions sent to the model
    instructions: zod_1.z.string().optional(),
    // Input messages sent to the model
    inputMessages: zod_1.z.array(zod_1.z.record(zod_1.z.unknown())),
    // Raw model response
    response: zod_1.z.record(zod_1.z.unknown()),
    // Tool definitions provided to the model
    toolDefinitions: zod_1.z.array(zod_1.z.record(zod_1.z.unknown())),
    // Snapshot of the session at the time of the audit entry
    session: session_1.sessionSchema.optional(),
    // Timing instrumentation
    startedAt: timestampSchema_1.timestampSchema.optional(),
    endedAt: timestampSchema_1.timestampSchema.optional(),
    durationMs: zod_1.z.number().optional(),
    // Total processing time including prompt generation, tool execution, etc.
    processingTimeMs: zod_1.z.number().optional(),
    // Model used for the call
    model: zod_1.z.string().optional(),
});
