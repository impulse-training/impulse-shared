/**
 * User Context Types
 * 
 * TypeScript type definitions for user context data
 */
import { InferType } from 'yup';
import { 
  behaviorContextSchema, 
  tacticContextSchema, 
  aiMemorySchema, 
  userContextSchema 
} from '../schemas/userContext';

// Export types inferred from schemas
export type BehaviorContext = InferType<typeof behaviorContextSchema>;
export type TacticContext = InferType<typeof tacticContextSchema>;
export type AIMemory = InferType<typeof aiMemorySchema>;

// Extend the inferred UserContext type to properly type the record fields
export interface UserContext extends Omit<InferType<typeof userContextSchema>, 'behaviors' | 'tactics'> {
  behaviors: Record<string, BehaviorContext>;
  tactics: Record<string, TacticContext>;
}

// Type guard functions
export const isBehaviorContext = (value: unknown): value is BehaviorContext => {
  try {
    behaviorContextSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isTacticContext = (value: unknown): value is TacticContext => {
  try {
    tacticContextSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isAIMemory = (value: unknown): value is AIMemory => {
  try {
    aiMemorySchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isUserContext = (value: unknown): value is UserContext => {
  try {
    userContextSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
