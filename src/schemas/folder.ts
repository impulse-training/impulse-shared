import * as yup from "yup";
import { documentReferenceSchema, timestampSchema } from "../utils";

export const folderSchema = yup.object({
  id: yup.string(),
  name: yup.string().required(),
  ordinal: yup.number(),
  // items are always tactics
  items: yup.array().of(documentReferenceSchema.required()).required(),
  isCollaborative: yup.boolean().optional().default(undefined),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  deletedAt: timestampSchema,
});

export type Folder = yup.InferType<typeof folderSchema>;
