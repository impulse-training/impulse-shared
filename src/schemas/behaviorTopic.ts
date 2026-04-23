import { z } from "zod";

/**
 * BehaviorTopic represents a grouping of behaviors by topic/issue area.
 * These are fixed categories used for matching users to support groups
 * with similar focus areas.
 */

export const BEHAVIOR_TOPICS = {
  "digital-screen-use": {
    id: "digital-screen-use",
    name: "Digital / Screen Use",
    description:
      "Impulse-control around stimulation, novelty, and escape through digital devices and screens.",
    icon: "📱",
  },
  substances: {
    id: "substances",
    name: "Substances",
    description:
      "Chemical substances including alcohol, nicotine, caffeine, and other drugs.",
    icon: "🚬",
  },
  bfrbs: {
    id: "bfrbs",
    name: "Body-Focused Repetitive Behaviors",
    description:
      "Repetitive self-grooming behaviors like hair pulling, skin picking, and nail biting.",
    icon: "✋",
  },
  "avoidance-productivity": {
    id: "avoidance-productivity",
    name: "Avoidance & Productivity",
    description:
      "Time, effort, and resistance patterns including procrastination and focus avoidance.",
    icon: "⏰",
  },
  "emotional-cognitive": {
    id: "emotional-cognitive",
    name: "Emotional & Cognitive Patterns",
    description:
      "Internal behaviors like negative self-talk, rumination, excessive worrying, and anger.",
    icon: "🧠",
  },
  "financial-risk": {
    id: "financial-risk",
    name: "Financial / Risk Behaviors",
    description:
      "Behaviors involving financial risk like gambling, overspending, and compulsive shopping.",
    icon: "💳",
  },
  eating: {
    id: "eating",
    name: "Eating-Related Behaviors",
    description:
      "Behaviors related to food consumption patterns like overeating, junk food, and late night snacking.",
    icon: "🍔",
  },
  sexual: {
    id: "sexual",
    name: "Sexual Behaviors",
    description:
      "Compulsive sexual behaviors including masturbation and other patterns that feel out of control.",
    icon: "🔒",
  },
} as const;

export type BehaviorTopicId = keyof typeof BEHAVIOR_TOPICS;

export const behaviorTopicIds = Object.keys(
  BEHAVIOR_TOPICS
) as BehaviorTopicId[];

export const behaviorTopicIdSchema = z.enum(
  behaviorTopicIds as unknown as readonly [string, ...string[]]
);

/**
 * Get topic details by ID
 */
export const getBehaviorTopic = (id: BehaviorTopicId) => BEHAVIOR_TOPICS[id];

/**
 * Get topic name by ID
 */
export const getBehaviorTopicName = (id: BehaviorTopicId) =>
  BEHAVIOR_TOPICS[id].name;

/**
 * Get topic icon by ID
 */
export const getBehaviorTopicIcon = (id: BehaviorTopicId) =>
  BEHAVIOR_TOPICS[id].icon;

/**
 * Check if a string is a valid behavior topic ID
 */
export const isValidBehaviorTopicId = (id: string): id is BehaviorTopicId =>
  id in BEHAVIOR_TOPICS;
