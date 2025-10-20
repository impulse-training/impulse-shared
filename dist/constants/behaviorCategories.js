"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categorySchema = exports.getBehaviorCategoryExplanation = exports.getBehaviorCategoryLabel = exports.getBehaviorCategoryColors = exports.BEHAVIOR_CATEGORIES = void 0;
/**
 * Constants for behavior categories including colors and display properties
 */
const zod_1 = require("zod");
exports.BEHAVIOR_CATEGORIES = {
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
};
/**
 * Get color configuration for a specific behavior category
 */
const getBehaviorCategoryColors = (category) => {
    if (!category || !(category in exports.BEHAVIOR_CATEGORIES)) {
        // Default to unsure if category is invalid or not provided
        return exports.BEHAVIOR_CATEGORIES.unsure.colors;
    }
    return exports.BEHAVIOR_CATEGORIES[category].colors;
};
exports.getBehaviorCategoryColors = getBehaviorCategoryColors;
/**
 * Get the label for a specific behavior category
 */
const getBehaviorCategoryLabel = (category) => {
    if (!category || !(category in exports.BEHAVIOR_CATEGORIES)) {
        return exports.BEHAVIOR_CATEGORIES.unsure.label;
    }
    return exports.BEHAVIOR_CATEGORIES[category].label;
};
exports.getBehaviorCategoryLabel = getBehaviorCategoryLabel;
/**
 * Get the explanation for a specific behavior category
 */
const getBehaviorCategoryExplanation = (category) => {
    if (!category || !(category in exports.BEHAVIOR_CATEGORIES)) {
        return exports.BEHAVIOR_CATEGORIES.unsure.explanation;
    }
    return exports.BEHAVIOR_CATEGORIES[category].explanation;
};
exports.getBehaviorCategoryExplanation = getBehaviorCategoryExplanation;
/**
 * Zod schema for behavior category validation
 */
const categoryKeys = Object.keys(exports.BEHAVIOR_CATEGORIES);
exports.categorySchema = zod_1.z.custom((val) => categoryKeys.includes(val));
