/**
 * Constants for behavior categories including colors and display properties
 */
import { z } from "zod";

export const BEHAVIOR_CATEGORIES = {
  helpful: {
    id: 'helpful',
    label: 'Helpful',
    explanation: 'the user wants to increase or maintain this behavior',
    colors: {
      light: '$green2', // background
      accent: '$green11', // text accent
      icon: '$green11', // icon color
    }
  },
  mixed: {
    id: 'mixed',
    label: 'Mixed',
    explanation: 'this behavior has both positive and negative aspects for the user',
    colors: {
      light: '$yellow2', // background
      accent: '$yellow11', // text accent
      icon: '$yellow11', // icon color
    }
  },
  unhelpful: {
    id: 'unhelpful',
    label: 'Unhelpful',
    explanation: 'the user is trying to avoid or minimize this behavior',
    colors: {
      light: '$red2', // background
      accent: '$red11', // text accent
      icon: '$red11', // icon color
    }
  },
  unsure: {
    id: 'unsure',
    label: 'Unsure',
    explanation: 'the user is uncertain about whether this behavior is beneficial',
    colors: {
      light: '$blue2', // background
      accent: '$blue11', // text accent
      icon: '$blue11', // icon color
    }
  }
} as const;

export type BehaviorCategoryKey = keyof typeof BEHAVIOR_CATEGORIES;

/**
 * Get color configuration for a specific behavior category
 */
export const getBehaviorCategoryColors = (category: BehaviorCategoryKey | null | undefined) => {
  if (!category || !(category in BEHAVIOR_CATEGORIES)) {
    // Default to unsure if category is invalid or not provided
    return BEHAVIOR_CATEGORIES.unsure.colors;
  }
  
  return BEHAVIOR_CATEGORIES[category].colors;
};

/**
 * Get the label for a specific behavior category
 */
export const getBehaviorCategoryLabel = (category: BehaviorCategoryKey | null | undefined) => {
  if (!category || !(category in BEHAVIOR_CATEGORIES)) {
    return BEHAVIOR_CATEGORIES.unsure.label;
  }
  
  return BEHAVIOR_CATEGORIES[category].label;
};

/**
 * Get the explanation for a specific behavior category
 */
export const getBehaviorCategoryExplanation = (category: BehaviorCategoryKey | null | undefined) => {
  if (!category || !(category in BEHAVIOR_CATEGORIES)) {
    return BEHAVIOR_CATEGORIES.unsure.explanation;
  }
  
  return BEHAVIOR_CATEGORIES[category].explanation;
};

/**
 * Zod schema for behavior category validation
 */
const categoryKeys = Object.keys(BEHAVIOR_CATEGORIES) as BehaviorCategoryKey[];

export const categorySchema = z.custom<BehaviorCategoryKey>((val) =>
  categoryKeys.includes(val as BehaviorCategoryKey)
);
