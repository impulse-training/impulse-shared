import { z } from "zod";
import { logBaseSchema } from "./base";

/**
 * The recap's strategy check-off: one card listing the day's moves from the
 * strategies running that day, each with three answers in its own words. The
 * card holds no answers itself: they live on each strategy's day record
 * (strategies/{id}/days/{dateString}), pre-filled where the app already knew
 * and set by the user's taps, so the Strategy tab, streaks and the coach all
 * read the same record.
 */
export const strategyCheckinLogSchema = logBaseSchema.extend({
  type: z.literal("strategy_checkin"),
  isDisplayable: z.literal(true),
  data: z.object({
    /** The day being checked off (the recapped day). */
    targetDateString: z.string(),
    /** The strategies running that day, in tab order. */
    strategyIds: z.array(z.string()),
  }),
});

export type StrategyCheckinLog = z.infer<typeof strategyCheckinLogSchema>;
