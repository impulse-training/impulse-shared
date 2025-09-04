import { z } from "zod";
import { logBaseSchema } from "./base";

export const suggestedTacticsLogSchema = logBaseSchema.extend({
  type: z.literal("suggested_tactics"),
  isDisplayable: z.literal(true),
  data: z.object({
    tactics: z.array(
      z.object({
        tacticPath: z.string(),
        reason: z.string().optional(),
      })
    ),
  }),
});

export type SuggestedTacticsLog = z.infer<typeof suggestedTacticsLogSchema>;
