import * as yup from "yup";
import { documentReferenceSchema, timestampSchema } from "../../utils";

export function routineBaseSchema<T extends string>(type: T) {
  return yup.object({
    id: yup.string(),
    name: yup.string().required(),
    type: yup.mixed<T>().oneOf([type]).required(),
    ordinal: yup.number(),
    // items can be tactics or folders
    isLocked: yup.boolean().optional().default(undefined),
    isTemplate: yup.boolean().optional().default(undefined),
    items: yup.array().of(documentReferenceSchema.required()).required(),
    lastUsedAt: timestampSchema,
    createdAt: timestampSchema,
    updatedAt: timestampSchema,
    deletedAt: timestampSchema,
  });
}
