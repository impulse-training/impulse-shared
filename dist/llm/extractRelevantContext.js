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
        // Get relevant tactics
        const tacticIds = [
            ...(userContext.behaviors[behaviorId].planTacticIds || []),
            ...(userContext.behaviors[behaviorId].effectiveTactics || []),
        ];
        if (userContext.tactics) {
            relevantTactics = tacticIds
                .filter((id, index, self) => self.indexOf(id) === index) // Remove duplicates
                .map((id) => {
                // Safely access tactics with the id
                return id && userContext.tactics
                    ? userContext.tactics[id]
                    : undefined;
            })
                .filter((tactic) => tactic !== undefined); // Remove undefined tactics
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
