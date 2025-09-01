import { z } from "zod";
import { questionScopeSchema } from "../../constants";
import { timestampSchema } from "../../utils";

export function questionBaseSchema<T extends string>(type: T) {
  return z.object({
    id: z.string().optional(),
    createdAt: timestampSchema.optional(),
    updatedAt: timestampSchema.optional(),
    text: z.string(), // Optional text to display before the question
    behaviorIds: z.array(z.string()).optional(),
    lastAskedAt: timestampSchema.optional(),
    lastAnsweredAt: timestampSchema.optional(),
    numberOfAnswers: z.number().optional(),
    isTemplate: z.boolean().optional().default(false),
    isPinned: z.boolean().optional(),
    responseType: z.literal(type),
    scope: questionScopeSchema.optional(),
  });
}
