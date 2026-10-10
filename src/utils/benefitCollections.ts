import type { BenefitNeed } from "../schemas/behavior";

/**
 * The benefit question a recurring feeling raises, for the build_collection
 * task. Frustration keeps showing up in impulse moments → "What helps you
 * relax?" → a collection of the user's own answers, offered first the next
 * time an impulse moment is tagged frustrated.
 *
 * Keyed by the default Feeling tag group's option ids (seeds/defaultTagGroups
 * in impulse-functions). A feeling without an entry never raises a task.
 */
export interface BenefitCollectionPrompt {
  need: BenefitNeed;
  /** Asked to the user, and stored on the collection's source. */
  question: string;
  /** The collection's display name. */
  collectionName: string;
  emoji: string;
}

export const BENEFIT_COLLECTION_PROMPTS: Readonly<
  Record<string, BenefitCollectionPrompt>
> = {
  frustrated: {
    need: "relaxation",
    question: "What helps you relax?",
    collectionName: "What helps you relax",
    emoji: "🌿",
  },
  stressed: {
    need: "relaxation",
    question: "What helps you unwind?",
    collectionName: "What helps you unwind",
    emoji: "🌊",
  },
  anxious: {
    need: "comfort",
    question: "What helps you feel steadier?",
    collectionName: "What steadies you",
    emoji: "🪨",
  },
  bored: {
    need: "stimulation",
    question: "What gives you a lift when you're bored?",
    collectionName: "What gives you a lift",
    emoji: "⚡️",
  },
  lonely: {
    need: "connection",
    question: "What helps you feel connected?",
    collectionName: "What connects you",
    emoji: "🤝",
  },
  sad: {
    need: "comfort",
    question: "What comforts you when you're low?",
    collectionName: "What comforts you",
    emoji: "☕️",
  },
  tired: {
    need: "focus",
    question: "What helps you recharge?",
    collectionName: "What recharges you",
    emoji: "🔋",
  },
  exhausted: {
    need: "comfort",
    question: "What helps you recover when you're running on empty?",
    collectionName: "What helps you recover",
    emoji: "🛌",
  },
};

/** How many impulse moments a feeling must appear in before it raises a task. */
export const BENEFIT_COLLECTION_MIN_OCCURRENCES = 2;

/** Deterministic ids so retries and re-evaluation never duplicate. */
export const benefitCollectionId = (feelingOptionId: string) =>
  `benefit_${feelingOptionId}`;
export const buildCollectionTaskId = (
  feelingOptionId: string,
  stage: "explore" | "revisit",
) => `build_collection_${stage}_${feelingOptionId}`;
