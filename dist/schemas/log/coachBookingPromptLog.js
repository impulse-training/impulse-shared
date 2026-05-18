"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coachBookingPromptLogSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
const availabilitySlotSchema = zod_1.z.object({
    dayOfWeek: zod_1.z.number().int().min(0).max(6),
    startTime: zod_1.z.string(),
    endTime: zod_1.z.string(),
});
exports.coachBookingPromptLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("coach_booking_prompt"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        slots: zod_1.z.array(availabilitySlotSchema),
        coachTimezone: zod_1.z.string(),
        selectedSlot: availabilitySlotSchema.nullable().optional(),
        respondedAt: timestampSchema_1.timestampSchema.nullable().optional(),
        taskId: zod_1.z.string().optional(),
    }),
});
