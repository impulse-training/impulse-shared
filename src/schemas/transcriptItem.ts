import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const transcriptItemSchema = z.object({
  role: z.enum(["user", "assistant"]),
  text: z.string(),
  ts: timestampSchema,
  interrupted: z.boolean().optional(),
  type: z.enum(["final", "partial"]).optional(),
});

export type TranscriptItem = z.infer<typeof transcriptItemSchema>;

export function isTranscriptItem(value: unknown): value is TranscriptItem {
  return transcriptItemSchema.safeParse(value).success;
}
