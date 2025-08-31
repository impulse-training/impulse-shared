import { z } from "zod";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.extend({
  type: z.literal("impulse"),
  isSuccess: z.boolean().optional(),
  // Current tactic step context (set by clients when user is viewing a tactic step)
  currentConservationMode: z.enum(["default", "debrief"]).optional(),
  // Current stage in the distract → reflect → power-up flow
  currentStage: z.enum(["distract", "reflect", "powerUp"]).optional(),
});

export type ImpulseThread = z.infer<typeof impulseThreadSchema>;
