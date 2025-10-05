import { z } from "zod";
import { documentReferenceSchema, timestampSchema } from "../../utils";

export function planBaseSchema<T extends string>(type: T) {
  return z.object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional(),
    type: z.literal(type) as unknown as z.ZodType<T>,
    ordinal: z.number().optional(),
    isTemplate: z.boolean().optional(),
    summary: z.string().optional(),
    tactics: z.array(documentReferenceSchema),
    lastUsedAt: timestampSchema.optional(),
    createdAt: timestampSchema.optional(),
    updatedAt: timestampSchema.optional(),
    deletedAt: timestampSchema.optional(),
  });
}
