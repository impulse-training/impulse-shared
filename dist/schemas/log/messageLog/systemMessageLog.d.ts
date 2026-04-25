import { z } from "zod";
export declare const systemMessageContentSchema: z.ZodUnion<[z.ZodString, z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    body: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    tone: z.ZodOptional<z.ZodEnum<["info", "success", "warning", "neutral"]>>;
    ctaLabel: z.ZodOptional<z.ZodString>;
    ctaPath: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    title: z.ZodOptional<z.ZodString>;
    body: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    tone: z.ZodOptional<z.ZodEnum<["info", "success", "warning", "neutral"]>>;
    ctaLabel: z.ZodOptional<z.ZodString>;
    ctaPath: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    title: z.ZodOptional<z.ZodString>;
    body: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    tone: z.ZodOptional<z.ZodEnum<["info", "success", "warning", "neutral"]>>;
    ctaLabel: z.ZodOptional<z.ZodString>;
    ctaPath: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>]>;
export declare const systemMessageLogSchema: z.ZodObject<{
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
    isDisplayable: z.ZodLiteral<true>;
} & {
    type: z.ZodLiteral<"system_message">;
    data: z.ZodObject<{
        message: z.ZodUnion<[z.ZodString, z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            body: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
            tone: z.ZodOptional<z.ZodEnum<["info", "success", "warning", "neutral"]>>;
            ctaLabel: z.ZodOptional<z.ZodString>;
            ctaPath: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            title: z.ZodOptional<z.ZodString>;
            body: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
            tone: z.ZodOptional<z.ZodEnum<["info", "success", "warning", "neutral"]>>;
            ctaLabel: z.ZodOptional<z.ZodString>;
            ctaPath: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            title: z.ZodOptional<z.ZodString>;
            body: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
            tone: z.ZodOptional<z.ZodEnum<["info", "success", "warning", "neutral"]>>;
            ctaLabel: z.ZodOptional<z.ZodString>;
            ctaPath: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>]>;
    }, "strip", z.ZodTypeAny, {
        message: string | z.objectOutputType<{
            title: z.ZodOptional<z.ZodString>;
            body: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
            tone: z.ZodOptional<z.ZodEnum<["info", "success", "warning", "neutral"]>>;
            ctaLabel: z.ZodOptional<z.ZodString>;
            ctaPath: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">;
    }, {
        message: string | z.objectInputType<{
            title: z.ZodOptional<z.ZodString>;
            body: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
            tone: z.ZodOptional<z.ZodEnum<["info", "success", "warning", "neutral"]>>;
            ctaLabel: z.ZodOptional<z.ZodString>;
            ctaPath: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../../types").Timestamp;
    updatedAt: import("../../../types").Timestamp;
    type: "system_message";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../../types").Timestamp;
    isDisplayable: true;
    data: {
        message: string | z.objectOutputType<{
            title: z.ZodOptional<z.ZodString>;
            body: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
            tone: z.ZodOptional<z.ZodEnum<["info", "success", "warning", "neutral"]>>;
            ctaLabel: z.ZodOptional<z.ZodString>;
            ctaPath: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
}, {
    createdAt: import("../../../types").Timestamp;
    updatedAt: import("../../../types").Timestamp;
    type: "system_message";
    sessionId: string;
    dateString: string;
    userId: string;
    timestamp: import("../../../types").Timestamp;
    isDisplayable: true;
    data: {
        message: string | z.objectInputType<{
            title: z.ZodOptional<z.ZodString>;
            body: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
            tone: z.ZodOptional<z.ZodEnum<["info", "success", "warning", "neutral"]>>;
            ctaLabel: z.ZodOptional<z.ZodString>;
            ctaPath: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">;
    };
    id?: string | undefined;
    behaviorIds?: string[] | undefined;
    tacticId?: string | undefined;
    impulseId?: string | undefined;
}>;
export type SystemMessageLog = z.infer<typeof systemMessageLogSchema>;
