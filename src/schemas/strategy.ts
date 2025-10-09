import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";
import { userProfileSchema } from "./userProfile";

export const strategySchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  isImported: z.boolean().optional(),
  plans: z.array(documentReferenceSchema),
  createdByProfile: userProfileSchema.optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});
export type Strategy = z.infer<typeof strategySchema>;
