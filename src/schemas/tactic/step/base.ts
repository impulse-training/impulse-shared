import z from "zod";
import { attachmentSchema } from "../../attachment";

export const baseStepSchema = z.object({
  // Make text optional at the base level so certain modes (e.g., breathing)
  // don't require it. Other modes will explicitly require non-empty text.
  text: z.string().optional(), // label/instruction
  // Optional background image for non-media steps
  backgroundImage: attachmentSchema.optional(),
  tags: z.array(z.string()).optional(),
});
