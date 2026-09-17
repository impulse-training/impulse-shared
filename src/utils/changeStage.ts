import { ChangeStage } from "../schemas/behavior";

/**
 * Friendly, user-facing labels for the Transtheoretical (Stages of Change)
 * model. "Exploring" and "Repairing" are the softened labels for contemplation
 * and relapse. Single source of truth for the app's stage picker, the behavior
 * card, and server-written stage proposal cards.
 */
export const CHANGE_STAGE_OPTIONS: {
  value: ChangeStage;
  label: string;
  hint: string;
}[] = [
  { value: "precontemplation", label: "Not a problem yet", hint: "Just noticing it" },
  { value: "contemplation", label: "Exploring", hint: "Thinking about changing" },
  { value: "preparation", label: "Getting ready", hint: "Planning to change soon" },
  { value: "action", label: "Actively changing", hint: "Working on it right now" },
  { value: "maintenance", label: "Maintaining", hint: "Protecting the change I've made" },
  { value: "relapse", label: "Repairing", hint: "Bouncing back after a slip" },
];

const OPTION_BY_STAGE = Object.fromEntries(
  CHANGE_STAGE_OPTIONS.map((o) => [o.value, o]),
) as Record<ChangeStage, (typeof CHANGE_STAGE_OPTIONS)[number]>;

export const getChangeStageLabel = (stage: ChangeStage): string =>
  OPTION_BY_STAGE[stage].label;

export const getChangeStageHint = (stage: ChangeStage): string =>
  OPTION_BY_STAGE[stage].hint;
