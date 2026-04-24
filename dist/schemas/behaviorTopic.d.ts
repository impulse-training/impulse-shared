import { z } from "zod";
/**
 * BehaviorTopic represents a grouping of behaviors by topic/issue area.
 * These are fixed categories used for matching users to support groups
 * with similar focus areas.
 */
export declare const BEHAVIOR_TOPICS: {
    readonly "digital-screen-use": {
        readonly id: "digital-screen-use";
        readonly name: "Digital / Screen Use";
        readonly description: "Impulse-control around stimulation, novelty, and escape through digital devices and screens.";
        readonly icon: "📱";
    };
    readonly substances: {
        readonly id: "substances";
        readonly name: "Substances";
        readonly description: "Chemical substances including alcohol, nicotine, caffeine, and other drugs.";
        readonly icon: "🚬";
    };
    readonly bfrbs: {
        readonly id: "bfrbs";
        readonly name: "Body-Focused Repetitive Behaviors";
        readonly description: "Repetitive self-grooming behaviors like hair pulling, skin picking, and nail biting.";
        readonly icon: "✋";
    };
    readonly "avoidance-productivity": {
        readonly id: "avoidance-productivity";
        readonly name: "Avoidance & Productivity";
        readonly description: "Time, effort, and resistance patterns including procrastination and focus avoidance.";
        readonly icon: "⏰";
    };
    readonly "emotional-cognitive": {
        readonly id: "emotional-cognitive";
        readonly name: "Emotional & Cognitive Patterns";
        readonly description: "Internal behaviors like negative self-talk, rumination, excessive worrying, and anger.";
        readonly icon: "🧠";
    };
    readonly "financial-risk": {
        readonly id: "financial-risk";
        readonly name: "Financial / Risk Behaviors";
        readonly description: "Behaviors involving financial risk like gambling, overspending, and compulsive shopping.";
        readonly icon: "💳";
    };
    readonly eating: {
        readonly id: "eating";
        readonly name: "Eating-Related Behaviors";
        readonly description: "Behaviors related to food consumption patterns like overeating, junk food, and late night snacking.";
        readonly icon: "🍔";
    };
    readonly sexual: {
        readonly id: "sexual";
        readonly name: "Sexual Behaviors";
        readonly description: "Compulsive sexual behaviors including masturbation and other patterns that feel out of control.";
        readonly icon: "🔒";
    };
};
export type BehaviorTopicId = keyof typeof BEHAVIOR_TOPICS;
export declare const behaviorTopicIds: BehaviorTopicId[];
export declare const behaviorTopicIdSchema: z.ZodEnum<[string, ...string[]]>;
/**
 * Get topic details by ID
 */
export declare const getBehaviorTopic: (id: BehaviorTopicId) => {
    readonly id: "digital-screen-use";
    readonly name: "Digital / Screen Use";
    readonly description: "Impulse-control around stimulation, novelty, and escape through digital devices and screens.";
    readonly icon: "📱";
} | {
    readonly id: "substances";
    readonly name: "Substances";
    readonly description: "Chemical substances including alcohol, nicotine, caffeine, and other drugs.";
    readonly icon: "🚬";
} | {
    readonly id: "bfrbs";
    readonly name: "Body-Focused Repetitive Behaviors";
    readonly description: "Repetitive self-grooming behaviors like hair pulling, skin picking, and nail biting.";
    readonly icon: "✋";
} | {
    readonly id: "avoidance-productivity";
    readonly name: "Avoidance & Productivity";
    readonly description: "Time, effort, and resistance patterns including procrastination and focus avoidance.";
    readonly icon: "⏰";
} | {
    readonly id: "emotional-cognitive";
    readonly name: "Emotional & Cognitive Patterns";
    readonly description: "Internal behaviors like negative self-talk, rumination, excessive worrying, and anger.";
    readonly icon: "🧠";
} | {
    readonly id: "financial-risk";
    readonly name: "Financial / Risk Behaviors";
    readonly description: "Behaviors involving financial risk like gambling, overspending, and compulsive shopping.";
    readonly icon: "💳";
} | {
    readonly id: "eating";
    readonly name: "Eating-Related Behaviors";
    readonly description: "Behaviors related to food consumption patterns like overeating, junk food, and late night snacking.";
    readonly icon: "🍔";
} | {
    readonly id: "sexual";
    readonly name: "Sexual Behaviors";
    readonly description: "Compulsive sexual behaviors including masturbation and other patterns that feel out of control.";
    readonly icon: "🔒";
};
/**
 * Get topic name by ID
 */
export declare const getBehaviorTopicName: (id: BehaviorTopicId) => "Digital / Screen Use" | "Substances" | "Body-Focused Repetitive Behaviors" | "Avoidance & Productivity" | "Emotional & Cognitive Patterns" | "Financial / Risk Behaviors" | "Eating-Related Behaviors" | "Sexual Behaviors";
/**
 * Get topic icon by ID
 */
export declare const getBehaviorTopicIcon: (id: BehaviorTopicId) => "📱" | "🚬" | "✋" | "⏰" | "🧠" | "💳" | "🍔" | "🔒";
/**
 * Check if a string is a valid behavior topic ID
 */
export declare const isValidBehaviorTopicId: (id: string) => id is BehaviorTopicId;
