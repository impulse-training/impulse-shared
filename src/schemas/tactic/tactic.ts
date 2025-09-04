import { z } from "zod";
import { timestampSchema } from "../../utils";
import { tacticStepSchema } from "./step";

export const tacticSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  aiInstructions: z.string().optional(),
  createdByUid: z.string().optional(),
  steps: z.array(tacticStepSchema).min(1),
  tags: z.array(z.string()).optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type Tactic = z.infer<typeof tacticSchema>;
