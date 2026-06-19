import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";
import { answerSpecSchema } from "./question/answerSpec";

/**
 * Which debrief outcome(s) a question should be asked after:
 *  - "acted"    — a setback: the user acted on the urge.
 *  - "resisted" — a success: the user resisted the urge.
 */
export const debriefOutcomeSchema = z.enum(["acted", "resisted"]);

export type DebriefOutcome = z.infer<typeof debriefOutcomeSchema>;

const debriefQuestionObjectSchema = z.object({
  id: z.string().optional(),
  question: z.string().min(1),
  behaviorIds: z.array(z.string().min(1)).min(1),
  // Which debrief outcome(s) trigger this question. Defaults to both so a
  // question with no explicit setting (incl. legacy docs) fires on either.
  askOn: z.array(debriefOutcomeSchema).min(1).default(["acted", "resisted"]),
  // How the user answers — shared with tactic question steps.
  answerSpec: answerSpecSchema,
  enabled: z.boolean().default(true),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

/**
 * Lift legacy/flat debrief-question shapes into the unified `answerSpec` model:
 *  - older docs carried a top-level `options` array (choice-only),
 *  - a brief intermediate shape carried a flat `answerType: "choice" | "text"`.
 * Both predate `answerSpec`; map them on read so no data migration is needed.
 */
function liftLegacyDebriefQuestion(val: unknown): unknown {
  if (!val || typeof val !== "object" || Array.isArray(val)) return val;
  const v = val as Record<string, unknown>;
  if (v.answerSpec !== undefined) return v;

  if (v.answerType === "text") {
    return { ...v, answerSpec: { type: "text" } };
  }
  if (Array.isArray(v.options) && v.options.length > 0) {
    return { ...v, answerSpec: { type: "choice", options: v.options } };
  }
  return v;
}

/**
 * A configurable, per-behavior question, asked during the debrief — after the
 * user resolves the urge as either "I acted on it" or "I resisted". The answer
 * is described by the shared `answerSpec` (text / choice / slider).
 *
 * Stored at `users/{userId}/debriefQuestions/{id}`. When the debrief resolves
 * for one of the associated behaviors, a deterministic `debrief_question`
 * session task is queued to ask it — but only when the resolved outcome is in
 * the question's `askOn` set. (In-the-moment questions are authored as
 * question tactics in the plan, not here.)
 */
export const debriefQuestionSchema = z.preprocess(
  liftLegacyDebriefQuestion,
  debriefQuestionObjectSchema,
);

export type DebriefQuestion = z.infer<typeof debriefQuestionSchema>;
