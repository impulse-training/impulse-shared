import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const debriefQuestionOptionSchema = z.object({
  id: z.string().min(1),
  // Button text shown to the user; also used verbatim as the user's effective
  // chat reply when tapped.
  label: z.string().min(1),
});

export type DebriefQuestionOption = z.infer<typeof debriefQuestionOptionSchema>;

/**
 * A configurable, per-behavior question with selectable options, asked during
 * the debrief — after the user resolves the urge as either "I acted on it" or
 * "I resisted".
 *
 * Stored at `users/{userId}/debriefQuestions/{id}`. When the debrief resolves
 * for one of the associated behaviors, a deterministic `debrief_question`
 * session task is queued to ask it. (In-the-moment questions are authored as
 * question tactics in the plan, not here.)
 */
export const debriefQuestionSchema = z.object({
  id: z.string().optional(),
  question: z.string().min(1),
  options: z.array(debriefQuestionOptionSchema).min(2),
  behaviorIds: z.array(z.string().min(1)).min(1),
  enabled: z.boolean().default(true),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type DebriefQuestion = z.infer<typeof debriefQuestionSchema>;
