/**
 * Behavior Types
 * 
 * TypeScript type definitions for behavior data
 */
import { InferType } from 'yup';
import { behaviorSchema, trackingTypes } from '../schemas/behavior';

// Export tracking type
export type TrackingType = typeof trackingTypes[number];

// Export types inferred from schemas
export type Behavior = InferType<typeof behaviorSchema>;

// Type guard functions
export const isBehavior = (value: unknown): value is Behavior => {
  try {
    behaviorSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
