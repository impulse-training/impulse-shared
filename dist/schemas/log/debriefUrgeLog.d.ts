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
        actedOnUrge: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        actedOnUrge?: boolean | undefined;
    }, {
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
        actedOnUrge?: boolean | undefined;
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
        actedOnUrge?: boolean | undefined;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}>;
export type DebriefUrgeLog = z.infer<typeof debriefUrgeLogSchema>;
