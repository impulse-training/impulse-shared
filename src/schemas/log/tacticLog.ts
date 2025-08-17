import { z } from "zod";
import { logBaseSchema } from "./base";

// Tactic Activity Log Schema
export const tacticLogSchema = logBaseSchema.extend({
  type: z.literal("tactic_completed"),
  // Tactic logs are always displayed in the UI
  isDisplayable: z.literal(true),
  data: z.object({
    // TODO: tighten once ../tactic.old is migrated
    tactic: z.any(),
    tacticCollectionId: z.string(),
  }),
});

export type TacticLog = z.infer<typeof tacticLogSchema>;
