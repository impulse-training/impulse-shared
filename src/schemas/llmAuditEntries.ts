import { z } from "zod";
import { timestampSchema } from "../utils";
import { threadSchema } from "./thread";

export const llmAuditEntrySchema = z.object({
  userId: z.string(),
  logId: z.string(),
  timestamp: timestampSchema.optional(),
  messages: z.array(z.any()),
  response: z.any(),
  toolDefinitions: z.array(z.any()),
  // Snapshot of the thread at the time of the audit entry
  thread: threadSchema.optional(),
  // Timing instrumentation
  startedAt: timestampSchema.optional(),
  endedAt: timestampSchema.optional(),
  durationMs: z.number().optional(),
  // Model used for the call
  model: z.string().optional(),
});

export type LLMAuditEntry = z.infer<typeof llmAuditEntrySchema>;
