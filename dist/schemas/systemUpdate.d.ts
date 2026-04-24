import { z } from "zod";
export declare const systemUpdateSchema: z.ZodObject<{
    severity: z.ZodEnum<["normal", "severe"]>;
    iosUpdateId: z.ZodString;
    updateGroupId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    severity: "normal" | "severe";
    iosUpdateId: string;
    updateGroupId?: string | null | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    severity: "normal" | "severe";
    iosUpdateId: string;
    updateGroupId?: string | null | undefined;
}>;
export type SystemUpdate = z.infer<typeof systemUpdateSchema>;
export declare const systemUpdateUserSchema: z.ZodObject<{
    firstOpenedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    downloadedAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
    appliedAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
}, "strip", z.ZodTypeAny, {
    firstOpenedAt: import("../types").Timestamp;
    downloadedAt?: import("../types").Timestamp | null | undefined;
    appliedAt?: import("../types").Timestamp | null | undefined;
}, {
    firstOpenedAt: import("../types").Timestamp;
    downloadedAt?: import("../types").Timestamp | null | undefined;
    appliedAt?: import("../types").Timestamp | null | undefined;
}>;
export type SystemUpdateUser = z.infer<typeof systemUpdateUserSchema>;
