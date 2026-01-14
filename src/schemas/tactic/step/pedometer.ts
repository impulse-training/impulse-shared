import { z } from "zod";
import { baseStepSchema } from "./base";

export const pedometerStepSchema = baseStepSchema.extend({
  mode: z.literal("pedometer"),
  targetSteps: z.number().int().positive(),
});

export type PedometerStep = z.infer<typeof pedometerStepSchema>;
