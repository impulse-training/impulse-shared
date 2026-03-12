import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";
import { sessionSchema } from "./session";

export const llmAuditEntrySchema = z.object({
  userId: z.string(),
  logId: z.string(),
  timestamp: timestampSchema.optional(),
  messages: z.array(z.any()),
  response: z.any(),
  toolDefinitions: z.array(z.any()),
  // Snapshot of the session at the time of the audit entry
  session: sessionSchema.optional(),
  // Timing instrumentation
  startedAt: timestampSchema.optional(),
  endedAt: timestampSchema.optional(),
  durationMs: z.number().optional(),
  // Model used for the call
  model: z.string().optional(),
});

export type LLMAuditEntry = z.infer<typeof llmAuditEntrySchema>;
