import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";

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
  ordinal: z.number().optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type TacticCollection = z.infer<typeof tacticCollectionSchema>;
