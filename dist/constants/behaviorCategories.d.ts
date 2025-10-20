/**
 * Constants for behavior categories including colors and display properties
 */
import { z } from "zod";
export declare const BEHAVIOR_CATEGORIES: {
    readonly helpful: {
        readonly id: "helpful";
        readonly label: "Helpful";
        readonly explanation: "the user wants to increase or maintain this behavior";
        readonly colors: {
            readonly light: "$green2";
            readonly accent: "$green11";
            readonly icon: "$green11";
        };
    };
    readonly mixed: {
        readonly id: "mixed";
        readonly label: "Mixed";
        readonly explanation: "this behavior has both positive and negative aspects for the user";
        readonly colors: {
            readonly light: "$yellow2";
            readonly accent: "$yellow11";
            readonly icon: "$yellow11";
        };
    };
    readonly unhelpful: {
        readonly id: "unhelpful";
        readonly label: "Unhelpful";
        readonly explanation: "the user is trying to avoid or minimize this behavior";
        readonly colors: {
            readonly light: "$red2";
            readonly accent: "$red11";
            readonly icon: "$red11";
        };
    };
    readonly unsure: {
        readonly id: "unsure";
        readonly label: "Unsure";
        readonly explanation: "the user is uncertain about whether this behavior is beneficial";
        readonly colors: {
            readonly light: "$blue2";
            readonly accent: "$blue11";
            readonly icon: "$blue11";
        };
    };
};
export type BehaviorCategoryKey = keyof typeof BEHAVIOR_CATEGORIES;
/**
 * Get color configuration for a specific behavior category
 */
export declare const getBehaviorCategoryColors: (category: BehaviorCategoryKey | null | undefined) => {
    readonly light: "$green2";
    readonly accent: "$green11";
    readonly icon: "$green11";
} | {
    readonly light: "$yellow2";
    readonly accent: "$yellow11";
    readonly icon: "$yellow11";
} | {
    readonly light: "$red2";
    readonly accent: "$red11";
    readonly icon: "$red11";
} | {
    readonly light: "$blue2";
    readonly accent: "$blue11";
    readonly icon: "$blue11";
};
/**
 * Get the label for a specific behavior category
 */
export declare const getBehaviorCategoryLabel: (category: BehaviorCategoryKey | null | undefined) => "Helpful" | "Mixed" | "Unhelpful" | "Unsure";
/**
 * Get the explanation for a specific behavior category
 */
export declare const getBehaviorCategoryExplanation: (category: BehaviorCategoryKey | null | undefined) => "the user wants to increase or maintain this behavior" | "this behavior has both positive and negative aspects for the user" | "the user is trying to avoid or minimize this behavior" | "the user is uncertain about whether this behavior is beneficial";
export declare const categorySchema: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
