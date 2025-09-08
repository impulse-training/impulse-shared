import { z } from "zod";
import { questionLogSchema } from "../log/questionLog";
import { timestampSchema } from "../../utils";

// Stores all text/shortText responses for a given week (ending date)
// Path: users/{uid}/questions/{questionId}/responseSummaries/{forWeekEndingDateString}
export const textQuestionResponseSummarySchema = z.object({
  forWeekEndingDateString: z.string(), // e.g. 2025-01-01 (YYYY-MM-DD)
  // Map of logId -> QuestionLog
  responses: z.record(questionLogSchema),
  // Optional AI-generated summary of the responses
  summaryText: z.string().optional(),
  updatedAt: timestampSchema.optional(),
});

export type TextQuestionResponseSummary = z.infer<
  typeof textQuestionResponseSummarySchema
>;
