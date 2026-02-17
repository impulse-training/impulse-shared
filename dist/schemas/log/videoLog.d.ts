import { z } from "zod";
export declare const videoLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    behaviorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"video">;
    isDisplayable: z.ZodLiteral<true>;
    title: z.ZodOptional<z.ZodString>;
    text: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        sourceUri: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sourceUri: string;
    }, {
        sourceUri: string;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "video";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        sourceUri: string;
    };
    id?: string | undefined;
    text?: string | undefined;
    title?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "video";
    userId: string;
    timestamp: import("../../types").Timestamp;
    dateString: string;
    isDisplayable: true;
    data: {
        sourceUri: string;
    };
    id?: string | undefined;
    text?: string | undefined;
    title?: string | undefined;
    tacticId?: string | undefined;
    behaviorIds?: string[] | undefined;
    callLogDocPath?: string | undefined;
}>;
export type VideoLog = z.infer<typeof videoLogSchema>;
