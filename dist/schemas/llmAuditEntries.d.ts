import { z } from "zod";
export declare const llmAuditEntrySchema: z.ZodObject<any>;
export type LLMAuditEntry = z.infer<typeof llmAuditEntrySchema>;
