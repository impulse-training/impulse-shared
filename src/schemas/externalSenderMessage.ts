import * as yup from "yup";
import { documentReferenceSchema, timestampSchema } from "../utils";

// This is a message from an external service, like Whatsapp, delivered to an inbox
export const externalSenderMessageSchema = yup.object({
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
  date: timestampSchema,
  content: yup.string().nullable().defined(),
  senderUid: yup.string(),
  attachments: yup.array().of(documentReferenceSchema),
  externalId: yup.string(),
  role: yup
    .mixed<"user" | "assistant" | "system" | "tool">()
    .oneOf(["assistant", "user", "system", "tool"])
    .required(),
});
export type ExternalSenderMessage = yup.InferType<
  typeof externalSenderMessageSchema
>;
