import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { trialComparisonSchema, trialDecisionSchema } from "../strategy";
import { logBaseSchema } from "./base";

/**
 * The evening recap's card when an experiment's window ends: baseline vs
 * trial, then keep / adjust / drop / run 7 more days. The answer is written
 * here and onto the trial's verdict.
 */
export const trialVerdictLogSchema = logBaseSchema.extend({
  type: z.literal("trial_verdict"),
  isDisplayable: z.literal(true),
  data: z.object({
    targetDateString: z.string(),
    strategyId: z.string(),
    trialId: z.string(),
    title: z.string(),
    comparison: trialComparisonSchema.optional(),
    /** "Run 7 more" is offered: the trial has not reached twice its window. */
    canExtend: z.boolean().optional(),
    answer: trialDecisionSchema.optional(),
    answeredAt: timestampSchema.optional(),
  }),
});

export type TrialVerdictLog = z.infer<typeof trialVerdictLogSchema>;
