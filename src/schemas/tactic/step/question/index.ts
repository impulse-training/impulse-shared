import { z } from "zod";
import { answerSpecSchema } from "../../../question/answerSpec";
import { baseStepSchema } from "../base";
import { timestampSchema } from "../../../../utils/timestampSchema";

/**
 * A single tactic question step. The answer model is the shared `answerSpec`
 * (`text | choice | slider1To10`) — the same one debrief questions use. This
 * replaced the legacy `question-text` / `question-slider1To10` modes; see the
 * `preprocess` in `../index.ts` which lifts those legacy shapes on read.
 */
export const questionStepSchema = baseStepSchema.extend({
  mode: z.literal("question"),
  id: z.string().optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
  // The question content (prompt).
  text: z.string().min(1),
  answerSpec: answerSpecSchema,
});

export type QuestionStep = z.infer<typeof questionStepSchema>;

// True for the unified question mode.
export const isQuestionStepMode = (mode: string): boolean =>
  mode === "question";

export const questionStepIsTextQuestion = (
  step: Pick<QuestionStep, "answerSpec">,
): boolean => step.answerSpec.type === "text";

export const questionStepIsSlider1To10Question = (
  step: Pick<QuestionStep, "answerSpec">,
): boolean => step.answerSpec.type === "slider1To10";

export const questionStepIsChoiceQuestion = (
  step: Pick<QuestionStep, "answerSpec">,
): boolean => step.answerSpec.type === "choice";

export const isQuestionStep = (value: unknown): value is QuestionStep =>
  questionStepSchema.safeParse(value).success;
