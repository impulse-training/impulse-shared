import { z } from "zod";
import { baseStepSchema } from "./base";

export const breathingStepSchema = baseStepSchema.extend({
  mode: z.literal("breathing"),
  breathingPattern: z.object({
    inhale: z.number().int().positive(),
    hold: z.number().int().nonnegative().optional(),
    exhale: z.number().int().positive(),
  }),
  cycles: z.number().int().positive().optional(),
});

export type BreathingStep = z.infer<typeof breathingStepSchema>;
