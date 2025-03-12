/**
 * Context Utilities
 * 
 * Functions for retrieving and managing user context
 */
import { UserContext, BehaviorContext, TacticContext, AIMemory } from '../types/userContext';
import { validateUserContext, validateBehaviorContext, validateTacticContext } from '../schemas/userContext';

/**
 * Interface for Firestore document
 */
export interface FirestoreDocument {
  id: string;
  exists: boolean;
  data: () => any;
}

/**
 * Interface for Firestore instance
 */
export interface FirestoreInstance {
  collection: (path: string) => {
    doc: (id: string) => {
      get: () => Promise<FirestoreDocument>;
      set: (data: any, options?: { merge?: boolean }) => Promise<any>;
      update: (data: any) => Promise<any>;
    };
  };
  runTransaction: <T>(updateFunction: (transaction: any) => Promise<T>) => Promise<T>;
  batch: () => {
    set: (ref: any, data: any, options?: { merge?: boolean }) => any;
    update: (ref: any, data: any) => any;
    commit: () => Promise<any>;
  };
}

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
export async function getUserContext(
  db: FirestoreInstance, 
  userId: string
): Promise<UserContext> {
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
      const validatedData = await validateUserContext(processedData);
      return validatedData;
    }
    
    // If the document doesn't exist, create a default user context
    const defaultContext: UserContext = {
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
  } catch (error) {
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
export async function updateUserContext(
  db: FirestoreInstance,
  userId: string,
  contextData: Partial<UserContext>
): Promise<UserContext> {
  try {
    // Get the current user context
    const currentContext = await getUserContext(db, userId);
    
    // Merge the current context with the updated data
    const updatedContext: UserContext = {
      ...currentContext,
      ...contextData,
      userId, // Ensure userId is set correctly
      lastUpdatedAt: new Date() // Update the lastUpdatedAt timestamp
    };
    
    // Validate the updated context
    const validatedContext = await validateUserContext(updatedContext);
    
    // Update the user context document in Firestore
    const userContextRef = db.collection('userContexts').doc(userId);
    await userContextRef.set(validatedContext);
    
    return validatedContext;
  } catch (error) {
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
export async function updateBehaviorContext(
  db: FirestoreInstance,
  userId: string,
  behaviorId: string,
  behaviorData: Partial<BehaviorContext>
): Promise<BehaviorContext> {
  try {
    // Get the current user context
    const currentContext = await getUserContext(db, userId);
    
    // Get the current behavior context or create a new one
    const currentBehaviorContext = currentContext.behaviors[behaviorId] as BehaviorContext | undefined || {
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
    const updatedBehaviorContext: BehaviorContext = {
      ...currentBehaviorContext,
      ...behaviorData,
      behaviorId // Ensure behaviorId is set correctly
    };
    
    // Validate the updated behavior context
    const validatedBehaviorContext = await validateBehaviorContext(updatedBehaviorContext);
    
    // Update the behavior context in the user context
    await db.runTransaction(async (transaction) => {
      const userContextRef = db.collection('userContexts').doc(userId);
      const userContextDoc = await transaction.get(userContextRef);
      
      if (!userContextDoc.exists) {
        // Create a new user context with the behavior context
        const newContext: UserContext = {
          userId,
          behaviors: {
            [behaviorId]: validatedBehaviorContext
          } as Record<string, BehaviorContext>,
          tactics: {},
          memories: [],
          overallInsights: [],
          lastUpdatedAt: new Date()
        };
        
        transaction.set(userContextRef, newContext);
      } else {
        // Update the existing user context with the behavior context
        transaction.update(userContextRef, {
          [`behaviors.${behaviorId}`]: validatedBehaviorContext,
          lastUpdatedAt: new Date()
        });
      }
    });
    
    return validatedBehaviorContext;
  } catch (error) {
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
export async function updateTacticContext(
  db: FirestoreInstance,
  userId: string,
  tacticId: string,
  tacticData: Partial<TacticContext>
): Promise<TacticContext> {
  try {
    // Get the current user context
    const currentContext = await getUserContext(db, userId);
    
    // Get the current tactic context or create a new one
    const currentTacticContext = currentContext.tactics[tacticId] as TacticContext | undefined || {
      tacticId,
      tacticTitle: tacticData.tacticTitle || '',
      tacticType: tacticData.tacticType || '',
      completedCount: 0,
      effectiveness: 5
    };
    
    // Merge the current tactic context with the updated data
    const updatedTacticContext: TacticContext = {
      ...currentTacticContext,
      ...tacticData,
      tacticId // Ensure tacticId is set correctly
    };
    
    // Validate the updated tactic context
    const validatedTacticContext = await validateTacticContext(updatedTacticContext);
    
    // Update the tactic context in the user context
    await db.runTransaction(async (transaction) => {
      const userContextRef = db.collection('userContexts').doc(userId);
      const userContextDoc = await transaction.get(userContextRef);
      
      if (!userContextDoc.exists) {
        // Create a new user context with the tactic context
        const newContext: UserContext = {
          userId,
          behaviors: {},
          tactics: {
            [tacticId]: validatedTacticContext
          } as Record<string, TacticContext>,
          memories: [],
          overallInsights: [],
          lastUpdatedAt: new Date()
        };
        
        transaction.set(userContextRef, newContext);
      } else {
        // Update the existing user context with the tactic context
        transaction.update(userContextRef, {
          [`tactics.${tacticId}`]: validatedTacticContext,
          lastUpdatedAt: new Date()
        });
      }
    });
    
    return validatedTacticContext;
  } catch (error) {
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
export async function addMemoryToUserContext(
  db: FirestoreInstance,
  userId: string,
  memory: Omit<AIMemory, 'id'>
): Promise<AIMemory> {
  try {
    // Generate a unique ID for the memory
    const memoryId = `memory_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Create the memory object
    const newMemory: AIMemory = {
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
        const newContext: UserContext = {
          userId,
          behaviors: {},
          tactics: {},
          memories: [newMemory],
          overallInsights: [],
          lastUpdatedAt: new Date()
        };
        
        transaction.set(userContextRef, newContext);
      } else {
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
  } catch (error) {
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
function processTimestamps(obj: any): any {
  if (!obj) return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(item => processTimestamps(item));
  }
  
  if (typeof obj === 'object') {
    // Check if the object is a Firestore timestamp
    if (obj.toDate && typeof obj.toDate === 'function') {
      return obj.toDate();
    }
    
    // Process each property of the object
    const result: Record<string, any> = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result[key] = processTimestamps(obj[key]);
      }
    }
    return result;
  }
  
  return obj;
}
