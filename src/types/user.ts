/**
 * User Types
 * 
 * TypeScript type definitions for user data
 */
import { InferType } from 'yup';
import { userSchema } from '../schemas/user';
import { Timestamp } from '../types/firebase';

// Export User type inferred from schema
export type User = InferType<typeof userSchema>;

// Using the same pattern as Thread type
export type UserData = InferType<typeof userSchema> & {
  // Notification settings
  notificationsEnabled?: boolean;
  
  // Daily recap settings
  dayRecapEnabled?: boolean;
  dayRecapTime?: Timestamp;
  lastDayRecapDate?: Timestamp;
  
  // User preferences
  theme?: 'light' | 'dark' | 'system';
  
  // Admin and role settings
  isAdmin?: boolean;
  role?: 'user' | 'admin' | 'coach';
};

// Type guard for User
export const isUser = (value: unknown): value is User => {
  try {
    userSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
