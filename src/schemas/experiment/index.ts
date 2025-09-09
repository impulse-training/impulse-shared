import { z } from "zod";
import { documentReferenceSchema, timestampSchema } from "../../utils";

export const experimentSchema = z.object({
  startedAt: timestampSchema.optional(),
  hypothesis: z.string(),
  nextRequirement: z.string(),
  behavior: documentReferenceSchema,
  question: documentReferenceSchema,
});

export type Experiment = z.infer<typeof experimentSchema>;
