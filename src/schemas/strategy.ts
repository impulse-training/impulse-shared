import * as yup from "yup";
import { documentReferenceSchema, timestampSchema } from "../utils";
import { userProfileSchema } from "./userProfile";

export const strategySchema = yup.object({
  id: yup.string(),
  name: yup.string().required(),
  description: yup.string(),
  isImported: yup.boolean().optional().default(undefined),
  plans: yup.array().of(documentReferenceSchema.required()).required(),
  tacticCollections: yup
    .array()
    .of(documentReferenceSchema.required())
    .required(),
  createdByProfile: userProfileSchema.optional(),
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});
export type Strategy = yup.InferType<typeof strategySchema>;
