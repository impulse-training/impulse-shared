import { z } from "zod";
export declare const auditChangeTypeSchema: z.ZodEnum<["create", "update", "delete"]>;
export declare const auditEntrySchema: z.ZodObject<{
    collectionPathPattern: z.ZodString;
    exportName: z.ZodString;
    fullPath: z.ZodString;
    docId: z.ZodNullable<z.ZodString>;
    params: z.ZodRecord<z.ZodString, z.ZodString>;
    changeType: z.ZodEnum<["create", "update", "delete"]>;
    before: z.ZodNullable<z.ZodUnknown>;
    after: z.ZodNullable<z.ZodUnknown>;
    eventId: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    params: Record<string, string>;
    collectionPathPattern: string;
    exportName: string;
    fullPath: string;
    docId: string | null;
    changeType: "create" | "update" | "delete";
    eventId: string;
    updatedAt?: import("../types").Timestamp | undefined;
    before?: unknown;
    after?: unknown;
}, {
    params: Record<string, string>;
    collectionPathPattern: string;
    exportName: string;
    fullPath: string;
    docId: string | null;
    changeType: "create" | "update" | "delete";
    eventId: string;
    updatedAt?: import("../types").Timestamp | undefined;
    before?: unknown;
    after?: unknown;
}>;
export type AuditChangeType = z.infer<typeof auditChangeTypeSchema>;
export type AuditEntry = z.infer<typeof auditEntrySchema>;
