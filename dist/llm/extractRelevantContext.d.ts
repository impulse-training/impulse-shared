/**
 * Extract Relevant Context
 * Helper functions to extract relevant context from user data
 */
import { AIMemory, BehaviorContext, TacticContext, UserContext } from "../schemas";
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
export declare function extractRelevantContext(userContext: Partial<UserContext>, behaviorId?: string): ContextExtractionResult;
export {};
