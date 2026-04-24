import { z } from "zod";
export declare const supportGroupSummarySchema: z.ZodObject<{
    summary: z.ZodString;
    outcome: z.ZodOptional<z.ZodEnum<["success", "partial", "setback"]>>;
}, "strip", z.ZodTypeAny, {
    summary: string;
    outcome?: "success" | "partial" | "setback" | undefined;
}, {
    summary: string;
    outcome?: "success" | "partial" | "setback" | undefined;
}>;
export type SupportGroupSummary = z.infer<typeof supportGroupSummarySchema>;
