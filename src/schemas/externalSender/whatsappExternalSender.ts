import * as yup from "yup";
import { timestampSchema } from "../../utils";
import { externalSenderBaseSchema } from "./base";

export const whatsappExternalSender = externalSenderBaseSchema(
  "whatsapp"
).shape({
  phoneNumber: yup.string().required(),
  // Default system message for new sessions
  defaultSystemMessage: yup.string().required(),
  // Default target folder ID for tactics generation
  defaultTargetFolderId: yup.string(),
});

export type WhatsappExternalSender = yup.InferType<
  typeof whatsappExternalSender
>;
