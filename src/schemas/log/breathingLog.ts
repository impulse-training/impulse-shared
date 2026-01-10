import { z } from "zod";
import { logBaseSchema } from "./base";

export const breathingLogSchema = logBaseSchema.extend({
  type: z.literal("breathing"),
  isDisplayable: z.literal(true),
  data: z.object({
    inhaleSeconds: z.number().positive(),
    holdSeconds: z.number().nonnegative(),
    exhaleSeconds: z.number().positive(),
    cycles: z.number().positive(),
    completedCycles: z.number().nonnegative(),
    totalDurationSeconds: z.number().positive(),
  }),
});

export type BreathingLog = z.infer<typeof breathingLogSchema>;
