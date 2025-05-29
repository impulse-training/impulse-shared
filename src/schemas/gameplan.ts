import * as yup from "yup";
import { documentReferenceSchema, timestampSchema } from "../utils";

export const gameplanSchema = yup.object({
  id: yup.string(),
  name: yup.string().required(),
  ordinal: yup.number(),
  tactics: yup.array().of(documentReferenceSchema.required()).required(),
  behaviorIds: yup.array().of(yup.string().required()).required(),
  lastUsedAt: timestampSchema,
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  deletedAt: timestampSchema,
});
export type Gameplan = yup.InferType<typeof gameplanSchema>;
