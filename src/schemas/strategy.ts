import { z } from "zod";
import { documentReferenceSchema, timestampSchema } from "../utils";
import { userProfileSchema } from "./userProfile";

export const strategySchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  isImported: z.boolean().optional(),
  plans: z.array(documentReferenceSchema),
  tacticCollections: z.array(documentReferenceSchema),
  createdByProfile: userProfileSchema.optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
export type Strategy = z.infer<typeof strategySchema>;
