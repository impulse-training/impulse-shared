import z from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";

// This is a message from an external service, like Whatsapp, delivered to an inbox
export const externalSenderMessageSchema = z.object({
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
  date: timestampSchema.optional(),
  content: z.string().nullable(),
  senderUid: z.string().optional(),
  attachments: z.array(documentReferenceSchema).optional(),
  externalId: z.string(),
  role: z.enum(["assistant", "user", "system", "tool"]),
});
export type ExternalSenderMessage = z.infer<typeof externalSenderMessageSchema>;
