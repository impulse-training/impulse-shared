"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.callSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    livekitRoomName: zod_1.z.string(),
    startTime: timestampSchema_1.timestampSchema,
    durationMinutes: zod_1.z.number(),
    bookedByUserId: zod_1.z.string().optional(),
    bookedAt: timestampSchema_1.timestampSchema.optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
