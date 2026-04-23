import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const recapQuestionSchema = z.object({
  id: z.string().optional(),
  question: z.string(),
  metaInstructions: z.string(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type RecapQuestion = z.infer<typeof recapQuestionSchema>;
