import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

const winRateRowSchema = z.object({
  month: z.string(),
  resist_rate: z.number(),
  total_outcomes: z.number(),
});

const dauRowSchema = z.object({
  date: z.string(),
  active_users: z.number(),
});

const usersByCountryRowSchema = z.object({
  country: z.string(),
  count: z.number(),
  pct: z.number(),
});

/**
 * Cached admin dashboard analytics data.
 * Document: adminCache/dashboard
 *
 * The admin frontend subscribes to this document and bumps `requestedAt`
 * on mount. A backend trigger compares `requestedAt` vs `fetchedAt` and
 * refreshes from BigQuery / Firestore when the cache is stale.
 */
export const adminDashboardCacheSchema = z.object({
  totalUsers: z.number(),
  winRateSeries: z.array(winRateRowSchema),
  dauSeries: z.array(dauRowSchema),
  usersByCountry: z.array(usersByCountryRowSchema),

  /** Set by the admin frontend each time the dashboard is viewed */
  requestedAt: timestampSchema,
  /** Set by the backend after a successful refresh */
  fetchedAt: timestampSchema.optional(),
});

export type AdminDashboardCache = z.infer<typeof adminDashboardCacheSchema>;
export type WinRateRow = z.infer<typeof winRateRowSchema>;
export type DauRow = z.infer<typeof dauRowSchema>;
export type UsersByCountryRow = z.infer<typeof usersByCountryRowSchema>;
