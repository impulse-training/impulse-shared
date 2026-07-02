import { z } from "zod";
import { baseStepSchema } from "./base";

// A voice-conversation step. Wire value stays "zara" to keep existing tactic docs valid.
export const voiceStepSchema = baseStepSchema.extend({
  mode: z.literal("zara"),
  direction: z.string().optional(),
});

export type VoiceStep = z.infer<typeof voiceStepSchema>;
