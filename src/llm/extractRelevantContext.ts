/**
 * Extract Relevant Context
 * Helper functions to extract relevant context from user data
 */

import {
  AIMemory,
  BehaviorContext,
  TacticContext,
  UserContext,
} from "../schemas";

/**
 * Context extraction result
 */
interface ContextExtractionResult {
  behaviorContext: Partial<BehaviorContext>;
  relevantTactics: TacticContext[];
  relevantMemories: AIMemory[];
}

/**
 * Extract relevant context for a behavior
 *
 * @param userContext User context data
 * @param behaviorId Optional behavior ID
 * @returns Object containing extracted context
 */
export function extractRelevantContext(
  userContext: Partial<UserContext>,
  behaviorId?: string,
): ContextExtractionResult {
  let behaviorContext: Partial<BehaviorContext> = {};
  let relevantTactics: TacticContext[] = [];
  let relevantMemories: AIMemory[] = [];

  if (
    behaviorId &&
    userContext.behaviors &&
    userContext.behaviors[behaviorId]
  ) {
    behaviorContext = userContext.behaviors[behaviorId];

    // Get all tactics from context
    if (userContext.tactics) {
      relevantTactics = Object.values(userContext.tactics);
    }

    // Get relevant memories
    if (userContext.aiMemories) {
      relevantMemories = userContext.aiMemories
        .filter(
          (memory: AIMemory) =>
            memory.content.includes(behaviorId) ||
            memory.source.includes(behaviorId),
        )
        .slice(0, 5); // Limit to 5 memories
    }
  }

  return {
    behaviorContext,
    relevantTactics,
    relevantMemories,
  };
}
