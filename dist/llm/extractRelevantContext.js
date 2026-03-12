"use strict";
/**
 * Extract Relevant Context
 * Helper functions to extract relevant context from user data
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractRelevantContext = extractRelevantContext;
/**
 * Extract relevant context for a behavior
 *
 * @param userContext User context data
 * @param behaviorId Optional behavior ID
 * @returns Object containing extracted context
 */
function extractRelevantContext(userContext, behaviorId) {
    let behaviorContext = {};
    let relevantTactics = [];
    let relevantMemories = [];
    if (behaviorId &&
        userContext.behaviors &&
        userContext.behaviors[behaviorId]) {
        behaviorContext = userContext.behaviors[behaviorId];
        // Get all tactics from context
        if (userContext.tactics) {
            relevantTactics = Object.values(userContext.tactics);
        }
        // Get relevant memories
        if (userContext.aiMemories) {
            relevantMemories = userContext.aiMemories
                .filter((memory) => memory.content.includes(behaviorId) ||
                memory.source.includes(behaviorId))
                .slice(0, 5); // Limit to 5 memories
        }
    }
    return {
        behaviorContext,
        relevantTactics,
        relevantMemories,
    };
}
