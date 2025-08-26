import { z } from "zod";
import { timestampSchema } from "../utils";

export const auditChangeTypeSchema = z.enum(["create", "update", "delete"]);

export const auditEntrySchema = z.object({
  collectionPathPattern: z.string(),
  exportName: z.string(),
  fullPath: z.string(),
  docId: z.string().nullable(),
  params: z.record(z.string()),
  changeType: auditChangeTypeSchema,
  before: z.unknown().nullable(),
  after: z.unknown().nullable(),
  eventId: z.string(),
  updatedAt: timestampSchema.optional(),
});

export type AuditChangeType = z.infer<typeof auditChangeTypeSchema>;
export type AuditEntry = z.infer<typeof auditEntrySchema>;
