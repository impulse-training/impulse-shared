import { z } from "zod";
import { logBaseSchema } from "./base";

export const impulseStartedLogSchema = logBaseSchema.extend({
  type: z.literal("impulse_started"),
  isDisplayable: z.literal(true),
  data: z.object({
    behaviorIds: z.array(z.string()).optional(),
  }),
});

export type ImpulseStartedLog = z.infer<typeof impulseStartedLogSchema>;
