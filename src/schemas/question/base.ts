import { z } from "zod";
import { timestampSchema } from "../../utils";
import { questionScopeSchema } from "../../constants/questionScopes";

export function questionBaseSchema<T extends string>(type: T) {
  return z.object({
    id: z.string().optional(),
    createdAt: timestampSchema.optional(),
    updatedAt: timestampSchema.optional(),
    text: z.string().optional(), // Optional text to display before the question
    question: z.string().min(1, "Question text is required"), // The actual question content
    lastAskedAt: timestampSchema.optional(),
    lastAnsweredAt: timestampSchema.optional(),
    numberOfAnswers: z.number().optional(),
    isTemplate: z.boolean().optional().default(false),
    isPinned: z.boolean().optional(),
    responseType: z.literal(type),
    scope: questionScopeSchema.optional(),
  });
}
