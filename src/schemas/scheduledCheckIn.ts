import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const scheduledCheckInStatusSchema = z.enum([
  "pending",
  "sent",
  "cancelled",
]);

export const scheduledCheckInSchema = z.object({
  id: z.string().optional(),
  scheduledFor: timestampSchema,
  message: z.string(),
  instructions: z.string(),
  sessionId: z.string().nullable().optional(),
  sourceSessionId: z.string(),
  status: scheduledCheckInStatusSchema,
  sentAt: timestampSchema.nullable().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type ScheduledCheckIn = z.infer<typeof scheduledCheckInSchema>;
