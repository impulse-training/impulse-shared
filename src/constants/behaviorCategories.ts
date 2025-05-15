/**
 * Constants for behavior categories including colors and display properties
 */

export const BEHAVIOR_CATEGORIES = {
  helpful: {
    id: 'helpful',
    label: 'Helpful',
    colors: {
      light: '$green2', // background
      accent: '$green11', // text accent
      icon: '$green11', // icon color
    }
  },
  mixed: {
    id: 'mixed',
    label: 'Mixed',
    colors: {
      light: '$yellow2', // background
      accent: '$yellow11', // text accent
      icon: '$yellow11', // icon color
    }
  },
  unhelpful: {
    id: 'unhelpful',
    label: 'Unhelpful',
    colors: {
      light: '$red2', // background
      accent: '$red11', // text accent
      icon: '$red11', // icon color
    }
  },
  unsure: {
    id: 'unsure',
    label: 'Unsure',
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
