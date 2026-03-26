import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";

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
    // Pre-fetched tactics data for efficient rendering (loosely typed for now)
    tacticsByPath: z.record(z.string(), z.any()).optional(),
    questions: z.array(documentReferenceSchema).optional().default([]),
    // Weighted tag affinities for plan matching
    // tagGroupId → { optionId → weight (0-1) }
    // e.g. { "emotionGroupId": { "anxious": 0.9, "stressed": 0.7 }, "activityGroupId": { "waiting": 0.6 } }
    tags: z
      .record(z.string(), z.record(z.string(), z.number()))
      .optional(),
    lastUsedAt: timestampSchema.optional(),
    createdAt: timestampSchema.optional(),
    updatedAt: timestampSchema.optional(),
    deletedAt: timestampSchema.optional(),
  });
}
