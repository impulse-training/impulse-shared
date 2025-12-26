import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";

export const insightSchema = z.object({
  id: z.string().optional(),
  emotion: z.string(),
  associatedBehaviorDocs: documentReferenceSchema.array().optional(),
  sourceThreadDoc: documentReferenceSchema.optional(),
  sourceLogDoc: documentReferenceSchema.optional(),
  text: z.string(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});
export type Insight = z.infer<typeof insightSchema>;
