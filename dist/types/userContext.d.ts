/**
 * User Context Types
 *
 * TypeScript type definitions for user context data
 */
import { InferType } from 'yup';
import { behaviorContextSchema, tacticContextSchema, aiMemorySchema, userContextSchema } from '../schemas/userContext';
export type BehaviorContext = InferType<typeof behaviorContextSchema>;
export type TacticContext = InferType<typeof tacticContextSchema>;
export type AIMemory = InferType<typeof aiMemorySchema>;
export interface UserContext extends Omit<InferType<typeof userContextSchema>, 'behaviors' | 'tactics'> {
    behaviors: Record<string, BehaviorContext>;
    tactics: Record<string, TacticContext>;
}
export declare const isBehaviorContext: (value: unknown) => value is BehaviorContext;
export declare const isTacticContext: (value: unknown) => value is TacticContext;
export declare const isAIMemory: (value: unknown) => value is AIMemory;
export declare const isUserContext: (value: unknown) => value is UserContext;
