import { z } from "zod";
import { attachmentSchema } from "../../attachment";
import { baseStepSchema } from "./base";

export const audioStepSchema = baseStepSchema.extend({
  mode: z.literal("audio"),
  /** Audio attachment — optional when tactic is pending generation */
  audio: attachmentSchema.optional(),
  /** @deprecated Use tactic-level generationProviderJobId instead */
  generationJobId: z.string().optional(),
  /** Auto-play the audio when the step is presented */
  autoplay: z.boolean().optional(),
  /** Number of times to loop playback (undefined = no loop) */
  loopCount: z.number().int().positive().optional(),
});

export type AudioStep = z.infer<typeof audioStepSchema>;
