import { z } from "zod";
export declare const userMessageLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        message: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        message?: any;
    }, {
        message?: any;
    }>;
} & {
    type: z.ZodLiteral<"user_message">;
    audioAttachment: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        updatedAt: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
        uri: z.ZodString;
        storagePath: z.ZodString;
        contentType: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
        metadata: z.ZodOptional<z.ZodObject<{
            width: z.ZodOptional<z.ZodNumber>;
            height: z.ZodOptional<z.ZodNumber>;
            durationMs: z.ZodOptional<z.ZodNumber>;
            transcript: z.ZodOptional<z.ZodString>;
            meterings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                db: z.ZodNumber;
                timestampMs: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                db: number;
                timestampMs?: number | undefined;
            }, {
                db: number;
                timestampMs?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }, {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../../types").Timestamp;
    updatedAt: import("../../../types").Timestamp;
    type: "user_message";
    userId: string;
    timestamp: import("../../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
    audioAttachment?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
}, {
    createdAt: import("../../../types").Timestamp;
    updatedAt: import("../../../types").Timestamp;
    type: "user_message";
    userId: string;
    timestamp: import("../../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
    audioAttachment?: {
        uri: string;
        storagePath: string;
        contentType: string;
        createdAt?: import("../../../types").Timestamp | undefined;
        updatedAt?: import("../../../types").Timestamp | undefined;
        title?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: {
            width?: number | undefined;
            height?: number | undefined;
            durationMs?: number | undefined;
            transcript?: string | undefined;
            meterings?: {
                db: number;
                timestampMs?: number | undefined;
            }[] | undefined;
        } | undefined;
    } | undefined;
}>;
export type UserMessageLog = z.infer<typeof userMessageLogSchema>;
