import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Stored at users/{userId}/answeredRecapQuestions/{questionId}
 *
 * Tracks which sequence questions the user has completed.
 * Contextual questions (baseline, milestone, experiment, trend) are NOT
 * tracked here — they are gated by current state instead.
 */
export const answeredRecapQuestionSchema = z.object({
  answeredAt: timestampSchema,
  sessionId: z.string(),
  dateString: z.string(),
  answerSummary: z.string().optional(),
});

export type AnsweredRecapQuestion = z.infer<typeof answeredRecapQuestionSchema>;
