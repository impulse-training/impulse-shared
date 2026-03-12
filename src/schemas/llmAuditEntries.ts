import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";
import { sessionSchema } from "./session";

export const llmAuditEntrySchema = z.object({
  userId: z.string(),
  logId: z.string(),
  timestamp: timestampSchema.optional(),
  // System prompt / instructions sent to the model
  instructions: z.string().optional(),
  // Input messages sent to the model
  inputMessages: z.array(z.record(z.unknown())),
  // Raw model response
  response: z.record(z.unknown()),
  // Tool definitions provided to the model
  toolDefinitions: z.array(z.record(z.unknown())),
  // Snapshot of the session at the time of the audit entry
  session: sessionSchema.optional(),
  // Timing instrumentation
  startedAt: timestampSchema.optional(),
  endedAt: timestampSchema.optional(),
  durationMs: z.number().optional(),
  // Total processing time including prompt generation, tool execution, etc.
  processingTimeMs: z.number().optional(),
  // Model used for the call
  model: z.string().optional(),
});

export type LLMAuditEntry = z.infer<typeof llmAuditEntrySchema>;
