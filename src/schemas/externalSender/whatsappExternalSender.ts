import * as yup from "yup";
import { timestampSchema } from "../../utils";
import { externalSenderBaseSchema } from "./base";

export const whatsappExternalSender = externalSenderBaseSchema(
  "whatsapp"
).shape({
  phoneNumber: yup.string().required(),
  // Default system message for new sessions
  defaultSystemMessage: yup.string().required(),
});

export type WhatsappExternalSender = yup.InferType<
  typeof whatsappExternalSender
>;
