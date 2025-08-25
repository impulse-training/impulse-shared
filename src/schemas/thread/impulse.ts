import { z } from "zod";
import { threadBaseSchema } from "./base";

export const impulseThreadSchema = threadBaseSchema.extend({
  type: z.literal("impulse"),
  // Current tactic step context (set by clients when user is viewing a tactic step)
  currentConservationMode: z.enum(["default", "debrief"]).optional(),
});

export type ImpulseThread = z.infer<typeof impulseThreadSchema>;
