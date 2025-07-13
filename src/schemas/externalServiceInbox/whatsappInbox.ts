import * as yup from "yup";
import { timestampSchema } from "../../utils";
import { externalServiceInboxBaseSchema } from "./base";

export const whatsappInbox = externalServiceInboxBaseSchema("whatsapp").shape({
  sessionExpiresAt: timestampSchema,
  phoneNumber: yup.string().required(),
  systemMessage: yup.string().required(),
});

export type WhatsappInbox = yup.InferType<typeof whatsappInbox>;
