import { z } from "zod";
import { logBaseSchema } from "./base";

/**
 * Finish Recap Log - displayed when all recap requirements are met.
 * Shows a button/link for the user to explicitly mark their recap as complete.
 */
export const finishRecapLogSchema = logBaseSchema.extend({
  type: z.literal("finish_recap"),
  isDisplayable: z.literal(true),
  data: z.object({
    /** Whether the user has clicked the finish button */
    finishedAt: z.any().optional(), // timestampSchema but optional
  }),
});

export type FinishRecapLog = z.infer<typeof finishRecapLogSchema>;
