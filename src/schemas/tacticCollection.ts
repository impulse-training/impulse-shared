import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";
import { benefitNeedSchema } from "./behavior";

/**
 * Where a generated collection came from. The Tactics screen builds
 * collections from evidence (a feeling's mix, "what's working") and the user
 * can save one as their own; `source` records that provenance so the screen
 * shows the saved copy in place of the generated one.
 */
export const tacticCollectionSourceSchema = z.discriminatedUnion("kind", [
  // "When you're anxious": tactics indicated for / proven under a feeling tag
  z.object({ kind: z.literal("feeling"), optionId: z.string() }),
  // "What's working": tactics ranked by resisted outcomes across contexts
  z.object({ kind: z.literal("working") }),
  // "What helps you relax": the user's own answers to a benefit question,
  // gathered by the build_collection task when a feeling keeps recurring in
  // their impulse moments. `feelingOptionId` (+ its tag group) is the state
  // the collection answers: an impulse moment tagged with it is offered the
  // collection first (matchPlansForSession).
  z.object({
    kind: z.literal("benefit"),
    need: benefitNeedSchema,
    question: z.string().min(1),
    feelingGroupId: z.string().optional(),
    feelingOptionId: z.string().optional(),
  }),
]);

export type TacticCollectionSource = z.infer<typeof tacticCollectionSourceSchema>;

export const tacticCollectionSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  emoji: z.string().optional(),
  description: z.string().optional(),
  // Source of truth for collection membership (user collections)
  tacticIds: z.array(z.string()).default([]),
  // Legacy field — kept for backward compat with support group collections
  items: z.array(documentReferenceSchema).optional(),
  userHiddenTactics: z.record(z.string(), z.array(z.string())).optional(),
  // Set when a user creates the collection themselves (vs. the seeded default
  // templates, which have none). Lets the Library always show user-created
  // collections, even while empty, instead of hiding them like empty defaults.
  createdByUid: z.string().optional(),
  // Set when the user saved a generated collection (see
  // tacticCollectionSourceSchema). Absent on hand-made and seeded collections.
  source: tacticCollectionSourceSchema.optional(),
  ordinal: z.number().optional(),
  // Benefit collections only: the catalog tactics added AFTER the user's own
  // ideas were explored, so "yours" and "ideas to add" stay distinguishable.
  // Every other member of tacticIds came from the user.
  toppedUpTacticIds: z.array(z.string()).optional(),
  // Benefit collections only: when the top-up ran (it runs once per collection).
  toppedUpAt: timestampSchema.optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type TacticCollection = z.infer<typeof tacticCollectionSchema>;
