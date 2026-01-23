import { z } from "zod";
export declare const debriefUrgeLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"debriefUrge">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        actedOnUrge: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        behaviorId: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodEnum<["scheduled", "manual"]>>;
        resolvedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        behaviorId?: string | undefined;
        actedOnUrge?: boolean | null | undefined;
        source?: "scheduled" | "manual" | undefined;
        resolvedAt?: import("../../types").Timestamp | undefined;
    }, {
        behaviorId?: string | undefined;
        actedOnUrge?: boolean | null | undefined;
        source?: "scheduled" | "manual" | undefined;
        resolvedAt?: import("../../types").Timestamp | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "debriefUrge";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        behaviorId?: string | undefined;
        actedOnUrge?: boolean | null | undefined;
        source?: "scheduled" | "manual" | undefined;
        resolvedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "debriefUrge";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        behaviorId?: string | undefined;
        actedOnUrge?: boolean | null | undefined;
        source?: "scheduled" | "manual" | undefined;
        resolvedAt?: import("../../types").Timestamp | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}>;
export type DebriefUrgeLog = z.infer<typeof debriefUrgeLogSchema>;
