import { z } from "zod";
declare const winRateRowSchema: z.ZodObject<{
    month: z.ZodString;
    resist_rate: z.ZodNumber;
    total_outcomes: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    month: string;
    resist_rate: number;
    total_outcomes: number;
}, {
    month: string;
    resist_rate: number;
    total_outcomes: number;
}>;
declare const dauRowSchema: z.ZodObject<{
    date: z.ZodString;
    active_users: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    date: string;
    active_users: number;
}, {
    date: string;
    active_users: number;
}>;
declare const usersByCountryRowSchema: z.ZodObject<{
    country: z.ZodString;
    count: z.ZodNumber;
    pct: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    country: string;
    count: number;
    pct: number;
}, {
    country: string;
    count: number;
    pct: number;
}>;
/**
 * Cached admin dashboard analytics data.
 * Document: adminCache/dashboard
 *
 * The admin frontend subscribes to this document and bumps `requestedAt`
 * on mount. A backend trigger compares `requestedAt` vs `fetchedAt` and
 * refreshes from BigQuery / Firestore when the cache is stale.
 */
export declare const adminDashboardCacheSchema: z.ZodObject<{
    totalUsers: z.ZodNumber;
    winRateSeries: z.ZodArray<z.ZodObject<{
        month: z.ZodString;
        resist_rate: z.ZodNumber;
        total_outcomes: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        month: string;
        resist_rate: number;
        total_outcomes: number;
    }, {
        month: string;
        resist_rate: number;
        total_outcomes: number;
    }>, "many">;
    dauSeries: z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        active_users: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        date: string;
        active_users: number;
    }, {
        date: string;
        active_users: number;
    }>, "many">;
    usersByCountry: z.ZodArray<z.ZodObject<{
        country: z.ZodString;
        count: z.ZodNumber;
        pct: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        country: string;
        count: number;
        pct: number;
    }, {
        country: string;
        count: number;
        pct: number;
    }>, "many">;
    /** Set by the admin frontend each time the dashboard is viewed */
    requestedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    /** Set by the backend after a successful refresh */
    fetchedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    totalUsers: number;
    winRateSeries: {
        month: string;
        resist_rate: number;
        total_outcomes: number;
    }[];
    dauSeries: {
        date: string;
        active_users: number;
    }[];
    usersByCountry: {
        country: string;
        count: number;
        pct: number;
    }[];
    requestedAt: import("../types").Timestamp;
    fetchedAt?: import("../types").Timestamp | undefined;
}, {
    totalUsers: number;
    winRateSeries: {
        month: string;
        resist_rate: number;
        total_outcomes: number;
    }[];
    dauSeries: {
        date: string;
        active_users: number;
    }[];
    usersByCountry: {
        country: string;
        count: number;
        pct: number;
    }[];
    requestedAt: import("../types").Timestamp;
    fetchedAt?: import("../types").Timestamp | undefined;
}>;
export type AdminDashboardCache = z.infer<typeof adminDashboardCacheSchema>;
export type WinRateRow = z.infer<typeof winRateRowSchema>;
export type DauRow = z.infer<typeof dauRowSchema>;
export type UsersByCountryRow = z.infer<typeof usersByCountryRowSchema>;
export {};
