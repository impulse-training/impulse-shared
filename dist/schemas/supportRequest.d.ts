import { z } from "zod";
export declare const supportRequestSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    topic: z.ZodEnum<["general", "account", "billing", "bug_report", "feature_request"]>;
    message: z.ZodString;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    message: string;
    name: string;
    email: string;
    topic: "general" | "account" | "billing" | "bug_report" | "feature_request";
}, {
    createdAt: import("../types").Timestamp;
    message: string;
    name: string;
    email: string;
    topic: "general" | "account" | "billing" | "bug_report" | "feature_request";
}>;
export type SupportRequest = z.infer<typeof supportRequestSchema>;
