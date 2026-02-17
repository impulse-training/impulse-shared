import { z } from "zod";
export declare const messageBaseLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
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
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../../types").Timestamp;
    updatedAt: import("../../../types").Timestamp;
    type: "user_message" | "assistant_message" | "system_message";
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
}, {
    createdAt: import("../../../types").Timestamp;
    updatedAt: import("../../../types").Timestamp;
    type: "user_message" | "assistant_message" | "system_message";
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
}>;
