import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const coachingCallStatusSchema = z.enum([
  "scheduled",
  "active",
  "completed",
  "missed",
  "cancelled",
]);

export const coachingCallSchema = z.object({
  id: z.string().optional(),
  groupId: z.string(),
  // Set when the call originates from an on-demand booking against a recurring
  // slot (handleBook / the recurrence trigger). Absent on calls generated from
  // a group's scheduledCallSlot template.
  slotId: z.string().optional(),
  scheduledAt: timestampSchema,
  durationMinutes: z.number().default(30),
  status: coachingCallStatusSchema.default("scheduled"),
  livekitRoomName: z.string(),
  participantIds: z.array(z.string()),
  joinedByIds: z.array(z.string()).default([]),
  connectedParticipantIds: z.array(z.string()).optional(),
  agentConnected: z.boolean().optional(),
  startedAt: timestampSchema.optional(),
  endedAt: timestampSchema.optional(),
  // Coach "checked in" ahead of time: when set, a scheduled job auto-rings the
  // client at scheduledAt. Cleared if the coach un-checks-in.
  coachReadyAt: timestampSchema.optional(),
  // Set once the auto-ring has fired, so it only rings once.
  autoRingSentAt: timestampSchema.optional(),
  reminderSentAt: z
    .object({
      dayBefore: timestampSchema.optional(),
      tenMinutes: timestampSchema.optional(),
    })
    .optional(),
  notifiedAt: timestampSchema.optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type CoachingCall = z.infer<typeof coachingCallSchema>;
export type CoachingCallStatus = z.infer<typeof coachingCallStatusSchema>;
