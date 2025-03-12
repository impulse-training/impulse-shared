/**
 * Tactic Types
 * 
 * TypeScript type definitions for tactic data
 */
import { InferType } from 'yup';
import { tacticSchema, tacticTypes } from '../schemas/tactic';

// Export tactic type
export type TacticType = (typeof tacticTypes)[number];

// Export type inferred from schema
export type Tactic = InferType<typeof tacticSchema>;

// Type guard function
export const isTactic = (value: unknown): value is Tactic => {
  try {
    tacticSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
