import { z } from "zod";
export declare const monthSummaryDayEntrySchema: z.ZodObject<{
    /** Whether dayTotalsConfirmedAt is non-null (day recap is confirmed) */
    confirmed: z.ZodBoolean;
    /** Per-behavior dot status: "full" (filled — goal not met / acted on urge) or "pastel" (ring — within goal / resisted) */
    dots: z.ZodRecord<z.ZodString, z.ZodEnum<["full", "pastel"]>>;
}, "strip", z.ZodTypeAny, {
    confirmed: boolean;
    dots: Record<string, "full" | "pastel">;
}, {
    confirmed: boolean;
    dots: Record<string, "full" | "pastel">;
}>;
export type MonthSummaryDayEntry = z.infer<typeof monthSummaryDayEntrySchema>;
export declare const monthSummarySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    /** Month in "yyyy-MM" format */
    month: z.ZodString;
    /** Per-day entries keyed by 2-digit day string ("01" through "31") */
    days: z.ZodRecord<z.ZodString, z.ZodObject<{
        /** Whether dayTotalsConfirmedAt is non-null (day recap is confirmed) */
        confirmed: z.ZodBoolean;
        /** Per-behavior dot status: "full" (filled — goal not met / acted on urge) or "pastel" (ring — within goal / resisted) */
        dots: z.ZodRecord<z.ZodString, z.ZodEnum<["full", "pastel"]>>;
    }, "strip", z.ZodTypeAny, {
        confirmed: boolean;
        dots: Record<string, "full" | "pastel">;
    }, {
        confirmed: boolean;
        dots: Record<string, "full" | "pastel">;
    }>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    month: string;
    userId: string;
    days: Record<string, {
        confirmed: boolean;
        dots: Record<string, "full" | "pastel">;
    }>;
    id?: string | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
}, {
    month: string;
    userId: string;
    days: Record<string, {
        confirmed: boolean;
        dots: Record<string, "full" | "pastel">;
    }>;
    id?: string | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
}>;
export type MonthSummary = z.infer<typeof monthSummarySchema>;
