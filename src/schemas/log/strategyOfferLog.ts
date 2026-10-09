import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { logBaseSchema } from "./base";

/**
 * The evening recap's card for a strategy idea waiting for the user (a
 * proposal not started yet): "Look at it" puts it in this chat's sheet, "Not
 * now" leaves it for another day, and a second "not now" retires it. A card,
 * not a coach question: in a recap the coach's own questions took the turns
 * and an offer it was meant to make never came (2026-10-09).
 */
export const strategyOfferLogSchema = logBaseSchema.extend({
  type: z.literal("strategy_offer"),
  isDisplayable: z.literal(true),
  data: z.object({
    targetDateString: z.string(),
    strategyId: z.string(),
    title: z.string(),
    answer: z.enum(["go_through", "not_now"]).optional(),
    answeredAt: timestampSchema.optional(),
  }),
});

export type StrategyOfferLog = z.infer<typeof strategyOfferLogSchema>;
