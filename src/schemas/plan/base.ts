import { z } from "zod";
import { documentReferenceSchema } from "../../utils/documentReferenceSchema";
import { timestampSchema } from "../../utils/timestampSchema";

export const planTagIndicationSchema = z.object({
  // Tag group name (e.g. "emotion") matched by label so shared plans can work
  // across users with different Firestore tag-group IDs.
  tagGroupName: z.string(),
  optionLabels: z.array(z.string()).min(1),
  weight: z.number(),
});

export const planIndicationSchema = z.object({
  tags: z.array(planTagIndicationSchema).optional(),
  behaviorTemplateNames: z.array(z.string().min(1)).optional(),
});

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
    // Cross-user affinities for shared plans. These use human-readable labels
    // rather than user-specific Firestore IDs.
    indications: planIndicationSchema.optional(),
    isGenerated: z.boolean().optional(),
    generationSource: z.enum(["impulse_debrief"]).optional(),
    generationSignature: z.string().optional(),
    generatedFromTacticIds: z.array(z.string()).optional(),
    generatedFromSessionCount: z.number().int().nonnegative().optional(),
    // Cross-user effectiveness counters (incremented atomically on shared plan docs)
    numberOfUses: z.number().int().nonnegative().optional(),
    numberOfSuccesses: z.number().int().nonnegative().optional(),
    numberOfSetbacks: z.number().int().nonnegative().optional(),
    lastUsedAt: timestampSchema.optional(),
    createdAt: timestampSchema.optional(),
    updatedAt: timestampSchema.optional(),
    deletedAt: timestampSchema.optional(),
  });
}
