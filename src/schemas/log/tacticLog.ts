import { z } from "zod";
import { logBaseSchema } from "./base";

// Tactic Activity Log Schema
export const tacticLogSchema = logBaseSchema.extend({
  type: z.literal("tactic_completed"),
  isDisplayable: z.literal(true),
  data: z.object({
    tactic: z.any(),
    // total number of steps in the tactic at the time of logging
    stepCount: z.number().int().nonnegative().optional(),
    // 0-based indexes of completed steps (progressive)
    completedStepIndexes: z.array(z.number().int().nonnegative()).optional(),
    // whether the tactic is fully completed (all steps done)
    completed: z.boolean().optional(),
  }),
});

export type TacticLog = z.infer<typeof tacticLogSchema>;
