import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const callSchema = z.object({
  id: z.string().optional(),
  livekitRoomName: z.string(),
  startTime: timestampSchema,
  durationMinutes: z.number(),
  bookedByUserId: z.string().optional(),
  bookedAt: timestampSchema.optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type Call = z.infer<typeof callSchema>;
