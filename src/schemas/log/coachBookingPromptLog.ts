import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

const availabilitySlotSchema = z.object({
  dayOfWeek: z.number().int().min(0).max(6),
  startTime: z.string(),
  endTime: z.string(),
});

export const coachBookingPromptLogSchema = logBaseSchema.extend({
  type: z.literal("coach_booking_prompt"),
  isDisplayable: z.literal(true),
  data: z.object({
    slots: z.array(availabilitySlotSchema),
    coachTimezone: z.string(),
    selectedSlot: availabilitySlotSchema.nullable().optional(),
    respondedAt: timestampSchema.nullable().optional(),
    taskId: z.string().optional(),
  }),
});

export type CoachBookingPromptLog = z.infer<
  typeof coachBookingPromptLogSchema
>;
