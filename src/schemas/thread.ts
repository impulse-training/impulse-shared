/**
 * Thread Schemas
 * 
 * Defines Yup schemas for thread data
 */
import * as yup from 'yup';
import { timestampSchema } from '../utils/timestampSchema';

// Thread Schema
export const threadSchema = yup.object({
  id: yup.string().required(),
  title: yup.string().required(),
  createdAt: timestampSchema.required(),
  updatedAt: timestampSchema.required(),
  lastUpdated: timestampSchema.required(), // For UI display purposes
  isImpulseMoment: yup.boolean().optional(),
  tactics: yup.array().of(yup.string()).optional()
});

// Helper function for validation
export const validateThread = (data: unknown) => {
  return threadSchema.validate(data);
};
