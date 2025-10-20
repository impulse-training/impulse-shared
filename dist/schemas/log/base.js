"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logBaseSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
// Base Log Schema
exports.logBaseSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
    userId: zod_1.z.string(), // This is required for collection group queries security rules
    timestamp: timestampSchema_1.timestampSchema.optional(),
    dateString: zod_1.z.string(),
    // A log can be associated with a call, which is also a log. Not all logs should be able to be
    // associated with a call, but it's simplest to just define this as an optional property on our
    // base log schema.
    // TODO: REVIEW
    callLogDocPath: zod_1.z.string().optional(),
    replyTactic: zod_1.z
        .object({
        tactic: zod_1.z.any(),
        currentStepIndex: zod_1.z.number(),
    })
        .optional(),
});
