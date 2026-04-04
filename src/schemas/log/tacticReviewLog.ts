import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { tacticSchema } from "../tactic";
import { logBaseSchema } from "./base";

/** One tactic entry in the review carousel */
export const tacticReviewItemSchema = z.object({
  tactic: tacticSchema,
  /** The original tactic log ID so we can update its rating field */
  tacticLogId: z.string(),
  rating: z.enum(["helpful", "not_helpful"]).nullable().optional(),
  ratedAt: timestampSchema.optional(),
});
export type TacticReviewItem = z.infer<typeof tacticReviewItemSchema>;

export const tacticReviewLogSchema = logBaseSchema.extend({
  type: z.literal("tactic_review"),
  isDisplayable: z.literal(true),
  data: z.object({
    tactics: z.array(tacticReviewItemSchema),
    /** Set when user finishes reviewing all tactics (or skips to end) */
    completedAt: timestampSchema.optional(),
  }),
});

export type TacticReviewLog = z.infer<typeof tacticReviewLogSchema>;
