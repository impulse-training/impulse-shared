import z from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";

export const insightSchema = z.object({
  id: z.string().optional(),
  emotion: z.string(),
  associatedBehaviorDocs: documentReferenceSchema.array().optional(),
  sourceThreadDoc: documentReferenceSchema.optional(),
  sourceLogDoc: documentReferenceSchema.optional(),
  text: z.string(),
  /**
   * Insight lifecycle:
   * - Created private
   * - Eligibility evaluated async (null -> eligible | ineligible)
   * - Some eligible insights are surfaced later
   * - Sharing is always user-initiated
   * - Public insights are copies, never live documents
   */
  // contentEligibilityStatus === null || undefined -> not yet evaluated
  contentEligibilityStatus: z
    .enum(["eligible", "ineligible"])
    .nullable()
    .optional(),
  contentEligibilityEvaluatedAt: timestampSchema.optional(),
  surfacedForSharingAt: timestampSchema.optional(),
  sharedAt: timestampSchema.optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});
export type Insight = z.infer<typeof insightSchema>;
