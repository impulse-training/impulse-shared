import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

export const debriefQuestionOptionSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1), // button text shown to the user
  responseText: z.string().min(1), // becomes the user's effective chat reply when tapped
});

export type DebriefQuestionOption = z.infer<typeof debriefQuestionOptionSchema>;

/**
 * A configurable, per-behavior debrief question with selectable options.
 *
 * Stored at `users/{userId}/debriefQuestions/{id}`. When the user logs one of
 * the associated behaviors (acting on the urge) inside any session, a
 * deterministic `debrief_question` session task is queued to ask it.
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
