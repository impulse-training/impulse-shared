import * as yup from "yup";
import { documentReferenceSchema, timestampSchema } from "../utils";

export const tacticCollectionSchema = yup.object({
  id: yup.string(),
  name: yup.string().required(),
  ordinal: yup.number(),
  // items are always tactics
  items: yup.array().of(documentReferenceSchema.required()).required(),
  // Map of userId to array of tactic IDs that are hidden for that user
  userHiddenTactics: yup.object().optional().default({}),
  isCollaborative: yup.boolean().optional().default(undefined),
  inboxCode: yup.string().optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  deletedAt: timestampSchema,
});

export type TacticCollection = yup.InferType<typeof tacticCollectionSchema>;
