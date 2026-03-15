import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";
import { sessionSchema } from "./session";

export const llmAuditEntrySchema = z.object({
  userId: z.string(),
  logId: z.string(),
  timestamp: timestampSchema.optional(),
  instructions: z.string().optional(),
  inputMessages: z.array(z.record(z.unknown())),
  response: z.record(z.unknown()),
  session: sessionSchema.optional(),
  startedAt: timestampSchema.optional(),
  endedAt: timestampSchema.optional(),
  durationMs: z.number().optional(),
  processingTimeMs: z.number().optional(),
  model: z.string().optional(),
});

export type LLMAuditEntry = z.infer<typeof llmAuditEntrySchema>;
