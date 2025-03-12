/**
 * Thread Types
 * 
 * TypeScript type definitions for thread data
 */
import { InferType } from 'yup';
import { threadSchema } from '../schemas/thread';
import { Log } from './log';

// Export type inferred from schema
export type Thread = InferType<typeof threadSchema> & {
  logs?: Log[];
};

// Type guard function
export const isThread = (value: unknown): value is Thread => {
  try {
    threadSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
