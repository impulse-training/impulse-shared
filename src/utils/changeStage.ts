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

const SOUNDS_LIKE: Record<ChangeStage, (name: string) => string> = {
  precontemplation: (name) => `${name} isn't something you're looking to change right now`,
  contemplation: (name) => `you're thinking about whether to change ${name}`,
  preparation: (name) => `you're getting ready to change ${name}`,
  action: (name) => `you're actively working on ${name}`,
  maintenance: (name) => `you're protecting the change you've made with ${name}`,
  relapse: (name) => `you're bouncing back after a slip with ${name}`,
};

/**
 * What a stage sounds like, said back to the user in the second person:
 * "you're getting ready to change Vaping". For a proposal whose evidence is
 * something they said rather than a streak.
 */
export const changeStageSoundsLike = (stage: ChangeStage, behaviorName: string): string =>
  SOUNDS_LIKE[stage](behaviorName);
