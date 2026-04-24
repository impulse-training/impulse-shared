"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidBehaviorTopicId = exports.getBehaviorTopicIcon = exports.getBehaviorTopicName = exports.getBehaviorTopic = exports.behaviorTopicIdSchema = exports.behaviorTopicIds = exports.BEHAVIOR_TOPICS = void 0;
const zod_1 = require("zod");
/**
 * BehaviorTopic represents a grouping of behaviors by topic/issue area.
 * These are fixed categories used for matching users to support groups
 * with similar focus areas.
 */
exports.BEHAVIOR_TOPICS = {
    "digital-screen-use": {
        id: "digital-screen-use",
        name: "Digital / Screen Use",
        description: "Impulse-control around stimulation, novelty, and escape through digital devices and screens.",
        icon: "📱",
    },
    substances: {
        id: "substances",
        name: "Substances",
        description: "Chemical substances including alcohol, nicotine, caffeine, and other drugs.",
        icon: "🚬",
    },
    bfrbs: {
        id: "bfrbs",
        name: "Body-Focused Repetitive Behaviors",
        description: "Repetitive self-grooming behaviors like hair pulling, skin picking, and nail biting.",
        icon: "✋",
    },
    "avoidance-productivity": {
        id: "avoidance-productivity",
        name: "Avoidance & Productivity",
        description: "Time, effort, and resistance patterns including procrastination and focus avoidance.",
        icon: "⏰",
    },
    "emotional-cognitive": {
        id: "emotional-cognitive",
        name: "Emotional & Cognitive Patterns",
        description: "Internal behaviors like negative self-talk, rumination, excessive worrying, and anger.",
        icon: "🧠",
    },
    "financial-risk": {
        id: "financial-risk",
        name: "Financial / Risk Behaviors",
        description: "Behaviors involving financial risk like gambling, overspending, and compulsive shopping.",
        icon: "💳",
    },
    eating: {
        id: "eating",
        name: "Eating-Related Behaviors",
        description: "Behaviors related to food consumption patterns like overeating, junk food, and late night snacking.",
        icon: "🍔",
    },
    sexual: {
        id: "sexual",
        name: "Sexual Behaviors",
        description: "Compulsive sexual behaviors including masturbation and other patterns that feel out of control.",
        icon: "🔒",
    },
};
exports.behaviorTopicIds = Object.keys(exports.BEHAVIOR_TOPICS);
exports.behaviorTopicIdSchema = zod_1.z.enum(exports.behaviorTopicIds);
/**
 * Get topic details by ID
 */
const getBehaviorTopic = (id) => exports.BEHAVIOR_TOPICS[id];
exports.getBehaviorTopic = getBehaviorTopic;
/**
 * Get topic name by ID
 */
const getBehaviorTopicName = (id) => exports.BEHAVIOR_TOPICS[id].name;
exports.getBehaviorTopicName = getBehaviorTopicName;
/**
 * Get topic icon by ID
 */
const getBehaviorTopicIcon = (id) => exports.BEHAVIOR_TOPICS[id].icon;
exports.getBehaviorTopicIcon = getBehaviorTopicIcon;
/**
 * Check if a string is a valid behavior topic ID
 */
const isValidBehaviorTopicId = (id) => id in exports.BEHAVIOR_TOPICS;
exports.isValidBehaviorTopicId = isValidBehaviorTopicId;
