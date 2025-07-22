/**
 * Constants for question scopes including display properties
 */

export const QUESTION_SCOPES = {
  impulse: {
    id: "impulse",
    label: "Impulse Moment",
    description: "Asked whenever you press the impulse button",
  },
  recapPlan: {
    id: "recapPlan",
    label: "Daily Recap",
    description: "Asked during your regular daily recap",
  },
} as const;

export type QuestionScopeKey = keyof typeof QUESTION_SCOPES;

/**
 * Get the label for a specific question scope
 */
export const getQuestionScopeLabel = (
  scope: QuestionScopeKey | null | undefined
) => {
  if (!scope || !(scope in QUESTION_SCOPES)) {
    return "Unknown Scope";
  }

  return QUESTION_SCOPES[scope].label;
};

/**
 * Get the description for a specific question scope
 */
export const getQuestionScopeDescription = (
  scope: QuestionScopeKey | null | undefined
) => {
  if (!scope || !(scope in QUESTION_SCOPES)) {
    return "";
  }

  return QUESTION_SCOPES[scope].description;
};
