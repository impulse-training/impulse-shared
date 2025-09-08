import { z } from "zod";
import { questionLogSchema } from "../log/questionLog";

// Stores all text/shortText responses for a given week (ending date)
// Path: users/{uid}/questions/{questionId}/responseSummaries/{forWeekEndingDateString}
export const textQuestionResponseSummarySchema = z.object({
  forWeekEndingDateString: z.string(), // e.g. 2025-01-01 (YYYY-MM-DD)
  // Map of logId -> QuestionLog
  responses: z.record(questionLogSchema),
});

export type TextQuestionResponseSummary = z.infer<
  typeof textQuestionResponseSummarySchema
>;
