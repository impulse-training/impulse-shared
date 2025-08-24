import { z } from "zod";

/**
 * Canonical conversation/question scopes and helpers
 */

export const QUESTION_SCOPES = {
  impulse: {
    id: "impulse",
    label: "Impulse Moment",
    description: "Asked whenever you press the impulse button",
  },
  debrief: {
    id: "debrief",
    label: "Debrief",
    description: "Asked during an immediate or reflective debrief",
  },
  recap: {
    id: "recap",
    label: "Daily Recap",
    description: "Asked during your regular daily recap",
  },
} as const;

export type QuestionScope = keyof typeof QUESTION_SCOPES;
export const QUESTION_SCOPE_VALUES = Object.keys(
  QUESTION_SCOPES
) as QuestionScope[];
export const questionScopeSchema = z.enum(
  QUESTION_SCOPE_VALUES as [QuestionScope, ...QuestionScope[]]
);

export type QuestionScopeKey = keyof typeof QUESTION_SCOPES;

export const getQuestionScopeLabel = (
  scope: QuestionScopeKey | null | undefined
) => {
  if (!scope || !(scope in QUESTION_SCOPES)) return "Unknown Scope";
  return QUESTION_SCOPES[scope].label;
};

export const getQuestionScopeDescription = (
  scope: QuestionScopeKey | null | undefined
) => {
  if (!scope || !(scope in QUESTION_SCOPES)) return "";
  return QUESTION_SCOPES[scope].description;
};
