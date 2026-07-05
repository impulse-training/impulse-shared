import { z } from "zod";
import { logBaseSchema } from "./base";

export const impulseStartedLogSchema = logBaseSchema.extend({
  type: z.literal("impulse_started"),
  isDisplayable: z.literal(true),
  data: z.object({
    behaviorIds: z.array(z.string()).optional(),
    // True when the user pressed the impulse button again while an existing
    // recent impulse session was reused (instead of a new session being
    // created). Signals the backend to respond — the urge is back/ongoing.
    repress: z.boolean().optional(),
  }),
});

export type ImpulseStartedLog = z.infer<typeof impulseStartedLogSchema>;
