"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserContext = getUserContext;
exports.updateUserContext = updateUserContext;
exports.updateBehaviorContext = updateBehaviorContext;
exports.updateTacticContext = updateTacticContext;
exports.addMemoryToUserContext = addMemoryToUserContext;
const userContext_1 = require("../schemas/userContext");
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
async function getUserContext(db, userId) {
    try {
        // Get the user context document
        const userContextRef = db.collection('userContexts').doc(userId);
        const userContextDoc = await userContextRef.get();
        // If the document exists, validate and return it
        if (userContextDoc.exists) {
            const data = userContextDoc.data();
            // Convert Firestore timestamps to Date objects
            const processedData = processTimestamps(data);
            // Validate the data against the schema
            const validatedData = await (0, userContext_1.validateUserContext)(processedData);
            return validatedData;
        }
        // If the document doesn't exist, create a default user context
        const defaultContext = {
            userId,
            behaviors: {},
            tactics: {},
            memories: [],
            overallInsights: [],
            lastUpdatedAt: new Date()
        };
        // Save the default context to Firestore
        await userContextRef.set(defaultContext);
        return defaultContext;
    }
    catch (error) {
        console.error('Error getting user context:', error);
        // Return a default user context in case of error
        return {
            userId,
            behaviors: {},
            tactics: {},
            memories: [],
            overallInsights: [],
            lastUpdatedAt: new Date()
        };
    }
}
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
async function updateUserContext(db, userId, contextData) {
    try {
        // Get the current user context
        const currentContext = await getUserContext(db, userId);
        // Merge the current context with the updated data
        const updatedContext = {
            ...currentContext,
            ...contextData,
            userId, // Ensure userId is set correctly
            lastUpdatedAt: new Date() // Update the lastUpdatedAt timestamp
        };
        // Validate the updated context
        const validatedContext = await (0, userContext_1.validateUserContext)(updatedContext);
        // Update the user context document in Firestore
        const userContextRef = db.collection('userContexts').doc(userId);
        await userContextRef.set(validatedContext);
        return validatedContext;
    }
    catch (error) {
        console.error('Error updating user context:', error);
        throw error;
    }
}
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
async function updateBehaviorContext(db, userId, behaviorId, behaviorData) {
    try {
        // Get the current user context
        const currentContext = await getUserContext(db, userId);
        // Get the current behavior context or create a new one
        const currentBehaviorContext = currentContext.behaviors[behaviorId] || {
            behaviorId,
            behaviorName: behaviorData.behaviorName || '',
            trackingType: behaviorData.trackingType || 'counter',
            streakDays: 0,
            totalTracked: 0,
            insights: [],
            effectiveTactics: [],
            gameplanTacticIds: []
        };
        // Merge the current behavior context with the updated data
        const updatedBehaviorContext = {
            ...currentBehaviorContext,
            ...behaviorData,
            behaviorId // Ensure behaviorId is set correctly
        };
        // Validate the updated behavior context
        const validatedBehaviorContext = await (0, userContext_1.validateBehaviorContext)(updatedBehaviorContext);
        // Update the behavior context in the user context
        await db.runTransaction(async (transaction) => {
            const userContextRef = db.collection('userContexts').doc(userId);
            const userContextDoc = await transaction.get(userContextRef);
            if (!userContextDoc.exists) {
                // Create a new user context with the behavior context
                const newContext = {
                    userId,
                    behaviors: {
                        [behaviorId]: validatedBehaviorContext
                    },
                    tactics: {},
                    memories: [],
                    overallInsights: [],
                    lastUpdatedAt: new Date()
                };
                transaction.set(userContextRef, newContext);
            }
            else {
                // Update the existing user context with the behavior context
                transaction.update(userContextRef, {
                    [`behaviors.${behaviorId}`]: validatedBehaviorContext,
                    lastUpdatedAt: new Date()
                });
            }
        });
        return validatedBehaviorContext;
    }
    catch (error) {
        console.error('Error updating behavior context:', error);
        throw error;
    }
}
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
async function updateTacticContext(db, userId, tacticId, tacticData) {
    try {
        // Get the current user context
        const currentContext = await getUserContext(db, userId);
        // Get the current tactic context or create a new one
        const currentTacticContext = currentContext.tactics[tacticId] || {
            tacticId,
            tacticTitle: tacticData.tacticTitle || '',
            tacticType: tacticData.tacticType || '',
            completedCount: 0,
            effectiveness: 5
        };
        // Merge the current tactic context with the updated data
        const updatedTacticContext = {
            ...currentTacticContext,
            ...tacticData,
            tacticId // Ensure tacticId is set correctly
        };
        // Validate the updated tactic context
        const validatedTacticContext = await (0, userContext_1.validateTacticContext)(updatedTacticContext);
        // Update the tactic context in the user context
        await db.runTransaction(async (transaction) => {
            const userContextRef = db.collection('userContexts').doc(userId);
            const userContextDoc = await transaction.get(userContextRef);
            if (!userContextDoc.exists) {
                // Create a new user context with the tactic context
                const newContext = {
                    userId,
                    behaviors: {},
                    tactics: {
                        [tacticId]: validatedTacticContext
                    },
                    memories: [],
                    overallInsights: [],
                    lastUpdatedAt: new Date()
                };
                transaction.set(userContextRef, newContext);
            }
            else {
                // Update the existing user context with the tactic context
                transaction.update(userContextRef, {
                    [`tactics.${tacticId}`]: validatedTacticContext,
                    lastUpdatedAt: new Date()
                });
            }
        });
        return validatedTacticContext;
    }
    catch (error) {
        console.error('Error updating tactic context:', error);
        throw error;
    }
}
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
async function addMemoryToUserContext(db, userId, memory) {
    try {
        // Generate a unique ID for the memory
        const memoryId = `memory_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        // Create the memory object
        const newMemory = {
            ...memory,
            id: memoryId,
            createdAt: memory.createdAt || new Date()
        };
        // Update the user context with the new memory
        await db.runTransaction(async (transaction) => {
            const userContextRef = db.collection('userContexts').doc(userId);
            const userContextDoc = await transaction.get(userContextRef);
            if (!userContextDoc.exists) {
                // Create a new user context with the memory
                const newContext = {
                    userId,
                    behaviors: {},
                    tactics: {},
                    memories: [newMemory],
                    overallInsights: [],
                    lastUpdatedAt: new Date()
                };
                transaction.set(userContextRef, newContext);
            }
            else {
                // Get the current memories
                const data = userContextDoc.data();
                const currentMemories = data.memories || [];
                // Add the new memory
                const updatedMemories = [...currentMemories, newMemory];
                // Update the user context
                transaction.update(userContextRef, {
                    memories: updatedMemories,
                    lastUpdatedAt: new Date()
                });
            }
        });
        return newMemory;
    }
    catch (error) {
        console.error('Error adding memory to user context:', error);
        throw error;
    }
}
/**
 * Process Firestore timestamps in an object
 *
 * Recursively converts Firestore timestamps to Date objects
 *
 * @param obj Object potentially containing Firestore timestamps
 * @returns Object with timestamps converted to Date objects
 */
function processTimestamps(obj) {
    if (!obj)
        return obj;
    if (Array.isArray(obj)) {
        return obj.map(item => processTimestamps(item));
    }
    if (typeof obj === 'object') {
        // Check if the object is a Firestore timestamp
        if (obj.toDate && typeof obj.toDate === 'function') {
            return obj.toDate();
        }
        // Process each property of the object
        const result = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                result[key] = processTimestamps(obj[key]);
            }
        }
        return result;
    }
    return obj;
}
