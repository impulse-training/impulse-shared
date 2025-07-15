import * as yup from "yup";
import { documentReferenceSchema, timestampSchema } from "../utils";

export const gameplanSchema = yup.object({
  id: yup.string(),
  name: yup.string().required(),
  ordinal: yup.number(),
  // items can be tactics or tacticCollections
  items: yup.array().of(documentReferenceSchema.required()).required(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  lastUsedAt: timestampSchema.optional().default(undefined),
  deletedAt: timestampSchema.optional().default(undefined),
});
export type Gameplan = yup.InferType<typeof gameplanSchema>;
