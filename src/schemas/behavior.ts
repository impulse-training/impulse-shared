/**
 * Behavior Schemas
 * 
 * Defines Yup schemas for behavior data
 */
import * as yup from 'yup';

// Tracking Types
export const trackingTypes = ['counter', 'timer'] as const;

// Behavior Schema
export const behaviorSchema = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
  description: yup.string().required(),
  trackingType: yup.string().oneOf(trackingTypes).required(),
  gameplanTacticIds: yup.array().of(yup.string()).default([]),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required()
});

// Helper functions for validation
export const validateBehavior = (data: unknown) => {
  return behaviorSchema.validate(data);
};
