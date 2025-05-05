import * as yup from "yup";
import { documentReferenceSchema, timestampSchema } from "../../utils";

export function guidelineBaseSchema<T extends string>(type: T) {
  return yup.object({
    id: yup.string(),
    name: yup.string().required(),
    type: yup.mixed<T>().oneOf([type]).required(),
    ordinal: yup.number(),
    tactics: yup.array().of(documentReferenceSchema.required()).required(),
    createdAt: timestampSchema,
    updatedAt: timestampSchema,
  });
}
