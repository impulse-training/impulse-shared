import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";

export function triggerBaseSchema<T extends string>(type: T) {
  return z.object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional(),
    type: z.literal(type) as unknown as z.ZodType<T>,
    ordinal: z.number().optional(),
    createdAt: timestampSchema.optional(),
    updatedAt: timestampSchema.optional(),
    deletedAt: timestampSchema.optional(),
  });
}
