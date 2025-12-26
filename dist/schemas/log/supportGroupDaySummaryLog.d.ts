import { z } from "zod";
export declare const supportGroupDaySummaryLogSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    updatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
    userId: z.ZodString;
    timestamp: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    dateString: z.ZodString;
    tacticId: z.ZodOptional<z.ZodString>;
    callLogDocPath: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"support_group_day_summary">;
    isDisplayable: z.ZodLiteral<true>;
    data: z.ZodObject<{
        summariesByUserId: z.ZodRecord<z.ZodString, z.ZodObject<{
            summary: z.ZodString;
            outcome: z.ZodOptional<z.ZodEnum<["success", "partial", "setback"]>>;
        }, "strip", z.ZodTypeAny, {
            summary: string;
            outcome?: "success" | "setback" | "partial" | undefined;
        }, {
            summary: string;
            outcome?: "success" | "setback" | "partial" | undefined;
        }>>;
        dateString: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        dateString: string;
        summariesByUserId: Record<string, {
            summary: string;
            outcome?: "success" | "setback" | "partial" | undefined;
        }>;
    }, {
        dateString: string;
        summariesByUserId: Record<string, {
            summary: string;
            outcome?: "success" | "setback" | "partial" | undefined;
        }>;
    }>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "support_group_day_summary";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        dateString: string;
        summariesByUserId: Record<string, {
            summary: string;
            outcome?: "success" | "setback" | "partial" | undefined;
        }>;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
}, {
    createdAt: import("../../types").Timestamp;
    updatedAt: import("../../types").Timestamp;
    type: "support_group_day_summary";
    userId: string;
    dateString: string;
    isDisplayable: true;
    data: {
        dateString: string;
        summariesByUserId: Record<string, {
            summary: string;
            outcome?: "success" | "setback" | "partial" | undefined;
        }>;
    };
    id?: string | undefined;
    timestamp?: import("../../types").Timestamp | undefined;
    tacticId?: string | undefined;
    callLogDocPath?: string | undefined;
}>;
export type SupportGroupDaySummaryLog = z.infer<typeof supportGroupDaySummaryLogSchema>;
