import { z } from "zod";
import { mediaItemSchema } from "./media";
import { tacticStepSchema } from "./steps";

export const tacticSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  description: z.string().optional(),
  media: z.array(mediaItemSchema).optional(),
  steps: z.array(tacticStepSchema).optional(),
  tags: z.array(z.string()).optional(),
  createdAt: z.number().int().optional(),
  updatedAt: z.number().int().optional(),
});

export type Tactic = z.infer<typeof tacticSchema>;
