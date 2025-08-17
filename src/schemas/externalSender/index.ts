import { z } from "zod";
import {
  WhatsappExternalSender,
  whatsappExternalSender,
} from "./whatsappExternalSender";

export * from "./whatsappExternalSender";

// Map is retained for compatibility if referenced elsewhere
export const externalSenderSchemas = {
  whatsapp: whatsappExternalSender,
} as const;

export const externalSenderSchema = z.discriminatedUnion("type", [
  externalSenderSchemas.whatsapp,
]);

export type ExternalSenderValue = WhatsappExternalSender;
