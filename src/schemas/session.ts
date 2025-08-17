import { z } from "zod";
import { timestampSchema } from "../utils";

export const sessionSchema = z.object({
  participantUids: z.array(z.string()),
  startTime: timestampSchema,
  durationMinutes: z.number(),
  title: z.string().optional(),
  transcriptSummary: z.string().optional(),
  code: z.string(),
});

export type Session = z.infer<typeof sessionSchema>;
