import * as yup from "yup";
import { documentReferenceSchema, timestampSchema } from "../../utils";

export function planBaseSchema<T extends string>(type: T) {
  return yup.object({
    id: yup.string(),
    name: yup.string().required(),
    type: yup.mixed<T>().oneOf([type]).required(),
    ordinal: yup.number(),
    isTemplate: yup.boolean().optional().default(undefined),
    summary: yup.string().optional(),
    summaryRefreshRequired: yup.boolean().optional().default(undefined),
    // items can be tactics or tacticCollections
    items: yup.array().of(documentReferenceSchema.required()).required(),
    lastUsedAt: timestampSchema,
    createdAt: timestampSchema,
    updatedAt: timestampSchema,
    deletedAt: timestampSchema,
  });
}
