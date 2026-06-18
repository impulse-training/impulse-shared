import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";

export const insightSchema = z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  emotion: z.string().optional(),
  associatedBehaviorDocs: documentReferenceSchema.array().optional(),
  sourceSessionDoc: documentReferenceSchema.optional(),
  sourceLogDoc: documentReferenceSchema.optional(),
  text: z.string(),

  // Coach-review lifecycle (experiment-driven insights).
  // System creates insights with status "pending"; coaches post or dismiss
  // from the dashboard. Only "posted" insights surface to users.
  status: z.enum(["pending", "posted", "dismissed"]).optional(),
  // ID of the experiment this insight belongs to (currently always "current")
  experimentId: z.string().optional(),
  // Denormalized coach UID for efficient collection-group queries.
  // Authorization uses isCoachFor(userId) in rules (checks the user doc),
  // not this field — it is for query scoping only.
  coachId: z.string().nullable().optional(),
  postedAt: timestampSchema.optional(),
  postedBy: z.string().optional(), // coach UID who posted

  // Where this insight came from: "experiment" = auto-generated from experiment
  // results, "brain" = promoted from the impulse-brain knowledge graph,
  // "coach" = authored by a coach, "user" = user-authored. Absent on legacy docs.
  source: z.enum(["experiment", "brain", "coach", "user"]).optional(),
  // Carried over when source === "brain" (for coach context + traceability).
  category: z.string().optional(),
  confidence: z.number().optional(),
  behavior: z.string().optional(),
  brainThoughtId: z.string().optional(), // id of the source thought in the brain

  /**
   * Sharing lifecycle (user-created qualitative insights):
   * - Created private
   * - Eligibility evaluated async (null -> eligible | ineligible)
   * - Some eligible insights are surfaced later for sharing UI
   * - Sharing is always user-initiated
   * - Public insights are copies, never live documents
   */
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
