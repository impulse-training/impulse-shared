import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

const availabilitySlotSchema = z.object({
  dayOfWeek: z.number().int().min(0).max(6),
  startTime: z.string(),
  endTime: z.string(),
});

export const supportGroupTaskStatusSchema = z.enum(["open", "completed"]);

export const supportGroupTaskBaseSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  status: supportGroupTaskStatusSchema.default("open"),
  createdBy: z.string(),
  assignedTo: z.string(),
  groupId: z.string(),
  logId: z.string().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  completedAt: timestampSchema.optional(),
});

export const coachBookingTaskSchema = supportGroupTaskBaseSchema.extend({
  type: z.literal("coach_booking"),
  data: z.object({
    slots: z.array(availabilitySlotSchema),
    coachTimezone: z.string(),
    selectedSlot: availabilitySlotSchema.nullable().optional(),
    respondedAt: timestampSchema.nullable().optional(),
  }),
});

export const supportGroupTaskSchema = z.discriminatedUnion("type", [
  coachBookingTaskSchema,
]);

export type SupportGroupTask = z.infer<typeof supportGroupTaskSchema>;
export type CoachBookingTask = z.infer<typeof coachBookingTaskSchema>;
export type SupportGroupTaskStatus = z.infer<typeof supportGroupTaskStatusSchema>;
