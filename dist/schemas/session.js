"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.sessionSchema = zod_1.z.object({
    participantUids: zod_1.z.array(zod_1.z.string()),
    startTime: timestampSchema_1.timestampSchema.optional(),
    durationMinutes: zod_1.z.number(),
    title: zod_1.z.string().optional(),
    transcriptSummary: zod_1.z.string().optional(),
    code: zod_1.z.string(),
});
