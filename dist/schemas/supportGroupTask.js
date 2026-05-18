"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportGroupTaskSchema = exports.coachBookingTaskSchema = exports.supportGroupTaskBaseSchema = exports.supportGroupTaskStatusSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
const availabilitySlotSchema = zod_1.z.object({
    dayOfWeek: zod_1.z.number().int().min(0).max(6),
    startTime: zod_1.z.string(),
    endTime: zod_1.z.string(),
});
exports.supportGroupTaskStatusSchema = zod_1.z.enum(["open", "completed"]);
exports.supportGroupTaskBaseSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string(),
    status: exports.supportGroupTaskStatusSchema.default("open"),
    createdBy: zod_1.z.string(),
    assignedTo: zod_1.z.string(),
    groupId: zod_1.z.string(),
    logId: zod_1.z.string().optional(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
    completedAt: timestampSchema_1.timestampSchema.optional(),
});
exports.coachBookingTaskSchema = exports.supportGroupTaskBaseSchema.extend({
    type: zod_1.z.literal("coach_booking"),
    data: zod_1.z.object({
        slots: zod_1.z.array(availabilitySlotSchema),
        coachTimezone: zod_1.z.string(),
        selectedSlot: availabilitySlotSchema.nullable().optional(),
        respondedAt: timestampSchema_1.timestampSchema.nullable().optional(),
    }),
});
exports.supportGroupTaskSchema = zod_1.z.discriminatedUnion("type", [
    exports.coachBookingTaskSchema,
]);
