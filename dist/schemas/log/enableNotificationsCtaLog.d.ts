import { z } from "zod";
export declare const enableNotificationsCtaLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    sessionId: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    impulseId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"enable_notifications_cta">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        triggeredByUserMessageLogId: z.ZodString;
        respondedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        enabled: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        triggeredByUserMessageLogId: string;
        respondedAt?: import("../../types").Timestamp | undefined;
        enabled?: boolean | undefined;
    }, {
        triggeredByUserMessageLogId: string;
        respondedAt?: import("../../types").Timestamp | undefined;
        enabled?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "enable_notifications_cta";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        triggeredByUserMessageLogId: string;
        respondedAt?: import("../../types").Timestamp | undefined;
        enabled?: boolean | undefined;
    };
    id?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    impulseId?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "enable_notifications_cta";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../types").Timestamp;
    isDisplayable: true;
    data: {
        triggeredByUserMessageLogId: string;
        respondedAt?: import("../../types").Timestamp | undefined;
        enabled?: boolean | undefined;
    };
    id?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    impulseId?: string | undefined;
}>;
export type EnableNotificationsCtaLog = z.infer<typeof enableNotificationsCtaLogSchema>;
