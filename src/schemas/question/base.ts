import { z } from "zod";
import { questionScopeSchema } from "../../constants";
import { timestampSchema } from "../../utils/timestampSchema";

export function questionBaseSchema<T extends string>(type: T) {
  return z.object({
    id: z.string().optional(),
    createdAt: timestampSchema.optional(),
    updatedAt: timestampSchema.optional(),
    text: z.string(),
    textAfterResponse: z.string().optional(),
    metricId: z.string().optional(),
    lastAskedAt: timestampSchema.optional(),
    lastAnsweredAt: timestampSchema.optional(),
    numberOfAnswers: z.number().optional(),
    isTemplate: z.boolean().optional().default(false),
    isPinned: z.boolean().optional(),
    responseType: z.literal(type),
    scope: questionScopeSchema,
    debriefBehaviors: z
      .object({
        success: z.array(z.string()),
        setback: z.array(z.string()),
      })
      .optional(),
  });
}
