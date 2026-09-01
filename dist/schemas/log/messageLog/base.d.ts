import { z } from "zod";
export declare const voiceTurnSchema: z.ZodObject<{
    callLogId: z.ZodString;
    interrupted: z.ZodOptional<z.ZodBoolean>;
    backfilled: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    callLogId: string;
    interrupted?: boolean | undefined;
    backfilled?: boolean | undefined;
}, {
    callLogId: string;
    interrupted?: boolean | undefined;
    backfilled?: boolean | undefined;
}>;
export declare const messageBaseLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>;
    dateString: z.ZodString;
    sessionId: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    impulseId: z.ZodOptional<z.ZodString>;
    respondingToLogId: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodEnum<["user_message", "assistant_message", "system_message"]>;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        message: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        message?: any;
    }, {
        message?: any;
    }>;
    voice: z.ZodOptional<z.ZodObject<{
        callLogId: z.ZodString;
        interrupted: z.ZodOptional<z.ZodBoolean>;
        backfilled: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        callLogId: string;
        interrupted?: boolean | undefined;
        backfilled?: boolean | undefined;
    }, {
        callLogId: string;
        interrupted?: boolean | undefined;
        backfilled?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../../types").Timestamp;
    updatedAt: import("../../../types").Timestamp;
    type: "user_message" | "assistant_message" | "system_message";
    userId: string;
    sessionId: string;
    dateString: string;
    timestamp: import("../../../types").Timestamp;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
    voice?: {
        callLogId: string;
        interrupted?: boolean | undefined;
        backfilled?: boolean | undefined;
    } | undefined;
}, {
    createdAt: import("../../../types").Timestamp;
    updatedAt: import("../../../types").Timestamp;
    type: "user_message" | "assistant_message" | "system_message";
    userId: string;
    sessionId: string;
    dateString: string;
    timestamp: import("../../../types").Timestamp;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
    respondingToLogId?: string | undefined;
    voice?: {
        callLogId: string;
        interrupted?: boolean | undefined;
        backfilled?: boolean | undefined;
    } | undefined;
}>;
export type VoiceTurn = z.infer<typeof voiceTurnSchema>;
