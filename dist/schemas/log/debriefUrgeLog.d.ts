import { z } from "zod";
export declare const debriefUrgeLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"debriefUrge">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        debriefAfter: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
        debriefedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
        actedOnUrge: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        debriefAfter: import("../../types").Timestamp;
        debriefedAt?: import("../../types").Timestamp | undefined;
        actedOnUrge?: boolean | undefined;
    }, {
        debriefAfter: import("../../types").Timestamp;
        debriefedAt?: import("../../types").Timestamp | undefined;
        actedOnUrge?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "debriefUrge";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        debriefAfter: import("../../types").Timestamp;
        debriefedAt?: import("../../types").Timestamp | undefined;
        actedOnUrge?: boolean | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "debriefUrge";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        debriefAfter: import("../../types").Timestamp;
        debriefedAt?: import("../../types").Timestamp | undefined;
        actedOnUrge?: boolean | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
}>;
export type DebriefUrgeLog = z.infer<typeof debriefUrgeLogSchema>;
