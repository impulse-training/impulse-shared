import { z } from "zod";
import { baseStepSchema } from "./base";

export const affirmationStepSchema = baseStepSchema.extend({
  mode: z.literal("affirmation"),
  // Use base text as a title/label for the step
  text: z.string().min(1).default("Repeat aloud"),
  affirmationText: z.string().min(1),
  repeatCount: z.number().int().min(1).max(5).default(3),
});

export type AffirmationStep = z.infer<typeof affirmationStepSchema>;
