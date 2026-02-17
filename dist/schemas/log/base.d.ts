import { z } from "zod";
export declare const logBaseSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    id?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    id?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}>;
