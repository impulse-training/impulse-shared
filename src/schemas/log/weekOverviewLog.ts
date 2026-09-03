import { z } from "zod";
import { logBaseSchema } from "./base";
import { trendSchema } from "../behavior";

/**
 * One per-behavior card in the weekly review's overview. Built from already-cached
 * data (daySummary totals + behavior state trend + behaviorPatternsCache tags) —
 * deliberately NOT a new reporting pipeline.
 */
export const weekOverviewBehaviorCardSchema = z.object({
  behaviorId: z.string(),
  name: z.string(),
  trackingType: z.enum(["counter", "timer", "scale", "occurrence"]).optional(),
  unit: z.string().optional(),
  /** Summed measured value across the week (minutes for timers, count for counters). */
  weeklyTotal: z.number(),
  /** Display string, e.g. "2 hrs tracked" or "5 times". */
  weeklyTotalFormatted: z.string(),
  /**
   * Fractional change vs the prior week (-0.2 = down 20%). Null when there's no
   * prior-week data to compare against (so the card just shows the total).
   */
  pctChangeFromLastWeek: z.number().nullable().optional(),
  /**
   * Per-day totals across the week, oldest to newest (same units as
   * weeklyTotal). Null marks a day with no total at all — untracked, not zero.
   * The card draws these as a sparkline: the week's shape shown, not labelled.
   */
  dailyValues: z.array(z.number().nullable()).optional(),
  /**
   * @deprecated No longer written. The behavior's short-window adherence slope
   * was shown as "Trending up/down", which is a different fact from the
   * week-over-week change beside it and read as a contradiction ("Trending up"
   * under "↓ 74% from last week"). Kept so cards logged before dailyValues
   * still parse.
   */
  trend: trendSchema.optional(),
  /** Top trigger tag labels (e.g. ["Stressed", "Bored"]); all-time until week-scoped. */
  mainTriggers: z.array(z.string()).optional(),
});

export type WeekOverviewBehaviorCard = z.infer<typeof weekOverviewBehaviorCardSchema>;

/**
 * The weekly review's overview beat — a swipeable set of per-behavior trend cards
 * shown after totals are confirmed and before the reflection. Produced
 * deterministically by the show_week_overview task; the AI does not author it.
 */
export const weekOverviewLogSchema = logBaseSchema.extend({
  type: z.literal("week_overview"),
  isDisplayable: z.literal(true),
  data: z.object({
    /** Inclusive week window (Sunday-ish start → the recap date). */
    weekStartDateString: z.string(),
    weekEndDateString: z.string(),
    behaviors: z.array(weekOverviewBehaviorCardSchema),
  }),
});

export type WeekOverviewLog = z.infer<typeof weekOverviewLogSchema>;
