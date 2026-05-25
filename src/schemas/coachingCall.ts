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
  notifiedAt: timestampSchema.optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type CoachingCall = z.infer<typeof coachingCallSchema>;
export type CoachingCallStatus = z.infer<typeof coachingCallStatusSchema>;
