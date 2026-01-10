import { z } from "zod";
export declare const assistantMessageLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../../types").Timestamp, z.ZodTypeDef, import("../../../types").Timestamp>>;
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
    type: z.ZodLiteral<"assistant_message">;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../../types").Timestamp;
    updatedAt: import("../../../types").Timestamp;
    type: "assistant_message";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    timestamp?: import("../../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}, {
    createdAt: import("../../../types").Timestamp;
    updatedAt: import("../../../types").Timestamp;
    type: "assistant_message";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        message?: any;
    };
    id?: string | undefined;
    timestamp?: import("../../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}>;
export type AssistantMessageLog = z.infer<typeof assistantMessageLogSchema>;
