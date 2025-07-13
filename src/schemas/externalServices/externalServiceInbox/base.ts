import * as yup from "yup";
import { timestampSchema } from "../../../utils";

export function externalServiceInboxBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().required().oneOf([type]),
    uid: yup.string().required(),
    senderName: yup.string(),
    createdAt: timestampSchema,
    updatedAt: timestampSchema,
    filesUpdatedAt: timestampSchema,
  });
}
