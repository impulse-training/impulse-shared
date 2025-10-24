import { z } from "zod";
import { logBaseSchema } from "./base";

// Tactic Step Log Schema
// Represents a single step being started/displayed in a tactic progression
export const tacticStepLogSchema = logBaseSchema.extend({
  type: z.literal("tacticStep"),
  isDisplayable: z.literal(true),
  data: z.object({
    tacticPath: z.string(),
    stepIndex: z.number().int().nonnegative(),
    completedAt: z.any().optional(), // Timestamp for when this step was completed
  }),
});

export type TacticStepLog = z.infer<typeof tacticStepLogSchema>;
