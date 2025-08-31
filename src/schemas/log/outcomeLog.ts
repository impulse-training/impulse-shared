import { z } from "zod";
import { logBaseSchema } from "./base";

export const outcomeLogSchema = logBaseSchema.extend({
  type: z.literal("outcome"),
  isDisplayable: z.literal(true),
  data: z.object({
    isSuccess: z.boolean(),
  }),
});

export type OutcomeLog = z.infer<typeof outcomeLogSchema>;
