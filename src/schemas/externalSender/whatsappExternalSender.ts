import { z } from "zod";
import { externalSenderBaseSchema } from "./base";

export const whatsappExternalSender = externalSenderBaseSchema(
  "whatsapp"
).extend({
  phoneNumber: z.string(),
  // Default system message for new sessions
  defaultSystemMessage: z.string(),
});

export type WhatsappExternalSender = z.infer<typeof whatsappExternalSender>;
