import { z } from "zod";
import { timestampSchema } from "../../utils/timestampSchema";
import { questionsLogSchema } from "../log/questionLog";

/**
 * Schema for question response summary documents
 * Path: users/{userId}/questions/{questionId}/responseSummaries/{forWeekEndingDateString}
 *
 * Aggregates all question log responses for a given week, enabling
 * weekly summaries and historical response tracking.
 */
export const questionResponseSummarySchema = z.object({
  /** Week ending date in YYYY-MM-DD format (Monday-based weeks) */
  forWeekEndingDateString: z.string(),
  /** Map of logId to QuestionsLog for all responses in this week */
  responses: z.record(z.string(), questionsLogSchema),
  /** AI-generated summary of the week's responses */
  summaryText: z.string().optional(),
  /** Timestamp when the summary was generated */
  summarizedAt: timestampSchema.optional(),
});

export type QuestionResponseSummary = z.infer<
  typeof questionResponseSummarySchema
>;

export const isQuestionResponseSummary = (
  value: unknown
): value is QuestionResponseSummary =>
  questionResponseSummarySchema.safeParse(value).success;
