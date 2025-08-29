import { z } from "zod";
import { baseStepSchema } from "./base";

export const timerStepSchema = baseStepSchema.extend({
  mode: z.literal("timer"),
  durationSeconds: z.number().int().positive(),
  text: z.string().min(1),
});

export type TimerStep = z.infer<typeof timerStepSchema>;
