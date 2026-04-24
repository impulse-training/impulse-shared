"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDashboardCacheSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
const winRateRowSchema = zod_1.z.object({
    month: zod_1.z.string(),
    resist_rate: zod_1.z.number(),
    total_outcomes: zod_1.z.number(),
});
const dauRowSchema = zod_1.z.object({
    date: zod_1.z.string(),
    active_users: zod_1.z.number(),
});
const usersByCountryRowSchema = zod_1.z.object({
    country: zod_1.z.string(),
    count: zod_1.z.number(),
    pct: zod_1.z.number(),
});
/**
 * Cached admin dashboard analytics data.
 * Document: adminCache/dashboard
 *
 * The admin frontend subscribes to this document and bumps `requestedAt`
 * on mount. A backend trigger compares `requestedAt` vs `fetchedAt` and
 * refreshes from BigQuery / Firestore when the cache is stale.
 */
exports.adminDashboardCacheSchema = zod_1.z.object({
    totalUsers: zod_1.z.number(),
    winRateSeries: zod_1.z.array(winRateRowSchema),
    dauSeries: zod_1.z.array(dauRowSchema),
    usersByCountry: zod_1.z.array(usersByCountryRowSchema),
    /** Set by the admin frontend each time the dashboard is viewed */
    requestedAt: timestampSchema_1.timestampSchema,
    /** Set by the backend after a successful refresh */
    fetchedAt: timestampSchema_1.timestampSchema.optional(),
});
