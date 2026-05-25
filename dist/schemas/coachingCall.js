"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coachingCallSchema = exports.coachingCallStatusSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.coachingCallStatusSchema = zod_1.z.enum([
    "scheduled",
    "active",
    "completed",
    "missed",
    "cancelled",
]);
exports.coachingCallSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    groupId: zod_1.z.string(),
    scheduledAt: timestampSchema_1.timestampSchema,
    durationMinutes: zod_1.z.number().default(30),
    status: exports.coachingCallStatusSchema.default("scheduled"),
    livekitRoomName: zod_1.z.string(),
    participantIds: zod_1.z.array(zod_1.z.string()),
    joinedByIds: zod_1.z.array(zod_1.z.string()).default([]),
    connectedParticipantIds: zod_1.z.array(zod_1.z.string()).optional(),
    agentConnected: zod_1.z.boolean().optional(),
    startedAt: timestampSchema_1.timestampSchema.optional(),
    endedAt: timestampSchema_1.timestampSchema.optional(),
    notifiedAt: timestampSchema_1.timestampSchema.optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
