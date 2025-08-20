import { z } from "zod";
import { timestampSchema } from "../../utils";
import { tacticStepSchema } from "./steps";

export const tacticSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  description: z.string().optional(),
  aiInstructions: z.string().optional(),
  createdByUid: z.string().optional(),
  steps: z.array(tacticStepSchema).optional(),
  tags: z.array(z.string()).optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type Tactic = z.infer<typeof tacticSchema>;
