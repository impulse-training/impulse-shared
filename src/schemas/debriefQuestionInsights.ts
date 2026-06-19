import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * LLM-extracted themes over a debrief question's free-text answers. Cached at
 * `users/{userId}/debriefQuestions/{questionId}/cache/insights` (mirrors the
 * `behaviors/{id}/cache/behaviorPatterns` convention) and refreshed lazily by a
 * task when new answers land. Only meaningful for `answerSpec.type === "text"`.
 */
export const debriefQuestionThemeSchema = z.object({
  // Short theme label, e.g. "Boredom / understimulation".
  label: z.string().min(1),
  // One-sentence explanation of the theme.
  description: z.string().min(1),
  // How many of the analyzed answers fit this theme.
  count: z.number().int().nonnegative(),
});

export type DebriefQuestionTheme = z.infer<typeof debriefQuestionThemeSchema>;

export const debriefQuestionInsightsSchema = z.object({
  id: z.string().optional(),
  questionId: z.string().min(1),
  behaviorId: z.string().min(1),
  themes: z.array(debriefQuestionThemeSchema),
  // One-paragraph synthesis across all answers.
  summary: z.string().optional(),
  // The number of answers analyzed at extraction time (used to decide when a
  // refresh is worthwhile).
  responseCountAtExtraction: z.number().int().nonnegative(),
  extractedAt: timestampSchema,
});

export type DebriefQuestionInsights = z.infer<
  typeof debriefQuestionInsightsSchema
>;
