"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.llmAuditEntrySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const timestampSchema_1 = require("../utils/timestampSchema");
const thread_1 = require("./thread");
exports.llmAuditEntrySchema = zod_1.default.object({
    userId: zod_1.default.string(),
    logId: zod_1.default.string(),
    timestamp: timestampSchema_1.timestampSchema.optional(),
    messages: zod_1.default.array(zod_1.default.any()),
    response: zod_1.default.any(),
    toolDefinitions: zod_1.default.array(zod_1.default.any()),
    // Snapshot of the thread at the time of the audit entry
    thread: thread_1.threadSchema.optional(),
    // Timing instrumentation
    startedAt: timestampSchema_1.timestampSchema.optional(),
    endedAt: timestampSchema_1.timestampSchema.optional(),
    durationMs: zod_1.default.number().optional(),
    // Model used for the call
    model: zod_1.default.string().optional(),
});
