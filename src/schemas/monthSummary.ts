import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

const dotStatusSchema = z.enum(["full", "pastel"]);

export const monthSummaryDayEntrySchema = z.object({
  /** Whether dayTotalsConfirmedAt is non-null (day recap is confirmed) */
  confirmed: z.boolean(),
  /** Per-behavior dot intensity: "full" (goal not met / acted on urge) or "pastel" (within goal / resisted) */
  dots: z.record(z.string(), dotStatusSchema),
});
export type MonthSummaryDayEntry = z.infer<typeof monthSummaryDayEntrySchema>;

export const monthSummarySchema = z.object({
  userId: z.string(),
  /** Month in "yyyy-MM" format */
  month: z.string(),
  /** Per-day entries keyed by 2-digit day string ("01" through "31") */
  days: z.record(z.string(), monthSummaryDayEntrySchema),
  updatedAt: timestampSchema.optional(),
});
export type MonthSummary = z.infer<typeof monthSummarySchema>;
