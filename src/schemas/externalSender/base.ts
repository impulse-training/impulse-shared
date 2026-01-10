import z from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";

export function externalSenderBaseSchema<K extends string>(type: K) {
  return z.object({
    type: z.literal(type),
    uid: z.string(),
    senderName: z.string().optional(),
    defaultTargetTacticRef: documentReferenceSchema.optional(),
    createdAt: timestampSchema.optional(),
    updatedAt: timestampSchema.optional(),
    filesUpdatedAt: timestampSchema.optional(),
  });
}
