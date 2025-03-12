/**
 * Context Utilities
 *
 * Functions for retrieving and managing user context
 */
import { AIMemory, BehaviorContext, TacticContext, UserContext } from "../types/userContext";
/**
 * Get user context from Firestore
 *
 * This function retrieves the user context document from Firestore
 * and validates it against the schema. If the document doesn't exist,
 * it returns a default user context.
 *
 * @param db Firestore database instance
 * @param userId User ID to get context for
 * @returns Promise resolving to the user context
 */
export declare function getUserContext(db: FirestoreInstance, userId: string): Promise<UserContext>;
/**
 * Update user context in Firestore
 *
 * This function updates the user context document in Firestore
 * with the provided data. It validates the data against the schema
 * before updating.
 *
 * @param db Firestore database instance
 * @param userId User ID to update context for
 * @param contextData Updated user context data
 * @returns Promise resolving to the updated user context
 */
export declare function updateUserContext(db: FirestoreInstance, userId: string, contextData: Partial<UserContext>): Promise<UserContext>;
/**
 * Update behavior context in user context
 *
 * This function updates a specific behavior context within the user context.
 * It's useful for real-time updates when behavior tracking occurs.
 *
 * @param db Firestore database instance
 * @param userId User ID to update context for
 * @param behaviorId Behavior ID to update
 * @param behaviorData Updated behavior context data
 * @returns Promise resolving to the updated behavior context
 */
export declare function updateBehaviorContext(db: FirestoreInstance, userId: string, behaviorId: string, behaviorData: Partial<BehaviorContext>): Promise<BehaviorContext>;
/**
 * Update tactic context in user context
 *
 * This function updates a specific tactic context within the user context.
 * It's useful for real-time updates when tactic completion occurs.
 *
 * @param db Firestore database instance
 * @param userId User ID to update context for
 * @param tacticId Tactic ID to update
 * @param tacticData Updated tactic context data
 * @returns Promise resolving to the updated tactic context
 */
export declare function updateTacticContext(db: FirestoreInstance, userId: string, tacticId: string, tacticData: Partial<TacticContext>): Promise<TacticContext>;
/**
 * Add memory to user context
 *
 * This function adds a new memory to the user context.
 *
 * @param db Firestore database instance
 * @param userId User ID to update context for
 * @param memory Memory to add
 * @returns Promise resolving to the added memory
 */
export declare function addMemoryToUserContext(db: FirestoreInstance, userId: string, memory: Omit<AIMemory, "id">): Promise<AIMemory>;
