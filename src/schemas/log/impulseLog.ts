import { z } from "zod";
import { logBaseSchema } from "./base";

// Impulse Log Schema
export const impulseLogSchema = logBaseSchema.extend({
  type: z.literal("impulse_button_pressed"),
  // Impulse logs are always displayed in the UI
  isDisplayable: z.literal(true),
});

export type ImpulseLog = z.infer<typeof impulseLogSchema>;
