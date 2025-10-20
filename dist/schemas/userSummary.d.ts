import { z } from "zod";
/**
 * Schema for user summary documents stored in userSummaries collection
 * Contains pre-computed summary information for AI agents
 */
export declare const userSummarySchema: z.ZodObject<{
    userId: z.ZodString;
    summary: z.ZodString;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    summary: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
}, {
    userId: string;
    summary: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
}>;
export type UserSummary = z.infer<typeof userSummarySchema>;
export declare const isUserSummary: (value: unknown) => value is UserSummary;
