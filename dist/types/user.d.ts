/**
 * User Types
 *
 * TypeScript type definitions for user data
 */
import { InferType } from 'yup';
import { userSchema } from '../schemas/user';
import { Timestamp } from '../types/firebase';
export type User = InferType<typeof userSchema>;
export type UserData = InferType<typeof userSchema> & {
    notificationsEnabled?: boolean;
    dayRecapEnabled?: boolean;
    dayRecapTime?: Timestamp;
    lastDayRecapDate?: Timestamp;
    theme?: 'light' | 'dark' | 'system';
    isAdmin?: boolean;
    role?: 'user' | 'admin' | 'coach';
};
export declare const isUser: (value: unknown) => value is User;
