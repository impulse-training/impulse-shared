"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llmAuditEntrySchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
const thread_1 = require("./thread");
exports.llmAuditEntrySchema = zod_1.z.object({
    userId: zod_1.z.string(),
    logId: zod_1.z.string(),
    timestamp: timestampSchema_1.timestampSchema.optional(),
    messages: zod_1.z.array(zod_1.z.any()),
    response: zod_1.z.any(),
    toolDefinitions: zod_1.z.array(zod_1.z.any()),
    // Snapshot of the thread at the time of the audit entry
    thread: thread_1.threadSchema.optional(),
    // Timing instrumentation
    startedAt: timestampSchema_1.timestampSchema.optional(),
    endedAt: timestampSchema_1.timestampSchema.optional(),
    durationMs: zod_1.z.number().optional(),
    // Model used for the call
    model: zod_1.z.string().optional(),
});
