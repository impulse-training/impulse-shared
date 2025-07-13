import * as yup from "yup";
import { documentReferenceSchema, timestampSchema } from "../../utils";

export function externalSenderBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().required().oneOf([type]),
    uid: yup.string().required(),
    senderName: yup.string(),
    defaultTargetFolderRef: documentReferenceSchema,
    createdAt: timestampSchema,
    updatedAt: timestampSchema,
    filesUpdatedAt: timestampSchema,
  });
}
