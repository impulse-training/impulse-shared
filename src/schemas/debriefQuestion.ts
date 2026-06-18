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
 * When a configurable question is asked, relative to the impulse flow:
 * - `impulseMoment`: during the impulse moment itself, once the session's
 *   behaviour(s) are known (i.e. when `setSessionTags` associates behaviours).
 * - `debrief`: during the debrief, after the user resolves the urge as either
 *   "I acted on it" or "I resisted".
 *
 * Defaults to `debrief` so existing documents (which predate this field)
 * keep their original debrief-only behaviour.
 */
export const debriefQuestionTriggerSchema = z.enum([
  "impulseMoment",
  "debrief",
]);

export type DebriefQuestionTrigger = z.infer<
  typeof debriefQuestionTriggerSchema
>;

/**
 * A configurable, per-behavior question with selectable options, asked during
 * an impulse moment or during a debrief (see `trigger`).
 *
 * Stored at `users/{userId}/debriefQuestions/{id}`. When the relevant moment
 * occurs for one of the associated behaviors, a deterministic
 * `debrief_question` session task is queued to ask it.
 */
export const debriefQuestionSchema = z.object({
  id: z.string().optional(),
  question: z.string().min(1),
  options: z.array(debriefQuestionOptionSchema).min(2),
  behaviorIds: z.array(z.string().min(1)).min(1),
  trigger: debriefQuestionTriggerSchema.default("debrief"),
  enabled: z.boolean().default(true),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type DebriefQuestion = z.infer<typeof debriefQuestionSchema>;
