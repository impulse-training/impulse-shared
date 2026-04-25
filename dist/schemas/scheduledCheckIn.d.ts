import { z } from "zod";
export declare const scheduledCheckInStatusSchema: z.ZodEnum<["pending", "sent", "cancelled"]>;
export declare const scheduledCheckInSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    scheduledFor: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    message: z.ZodString;
    instructions: z.ZodString;
    sessionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceSessionId: z.ZodString;
    status: z.ZodEnum<["pending", "sent", "cancelled"]>;
    sentAt: z.ZodOptional<z.ZodNullable<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    message: string;
    status: "pending" | "sent" | "cancelled";
    instructions: string;
    scheduledFor: import("../types").Timestamp;
    sourceSessionId: string;
    id?: string | undefined;
    sessionId?: string | null | undefined;
    sentAt?: import("../types").Timestamp | null | undefined;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    message: string;
    status: "pending" | "sent" | "cancelled";
    instructions: string;
    scheduledFor: import("../types").Timestamp;
    sourceSessionId: string;
    id?: string | undefined;
    sessionId?: string | null | undefined;
    sentAt?: import("../types").Timestamp | null | undefined;
}>;
export type ScheduledCheckIn = z.infer<typeof scheduledCheckInSchema>;
