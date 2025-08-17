import { z } from "zod";
import { documentReferenceSchema, timestampSchema } from "../../utils";

export function questionBaseSchema<T extends string>(type: T) {
  return z.object({
    id: z.string().optional(),
    createdAt: timestampSchema.optional(),
    updatedAt: timestampSchema.optional(),
    plans: z.array(documentReferenceSchema).optional(),
    text: z.string().optional(), // Optional text to display before the question
    question: z.string().min(1, "Question text is required"), // The actual question content
    lastAskedAt: timestampSchema.optional(),
    lastAnsweredAt: timestampSchema.optional(),
    numberOfAnswers: z.number().optional(),
    isTemplate: z.boolean().optional().default(false),
    isPinned: z.boolean().optional(),
    responseType: z.literal(type),
    scope: z.enum(["impulse", "plan"]).optional(),
  });
}
