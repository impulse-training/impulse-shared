/**
 * User Context Schemas
 *
 * Yup schemas for user context data validation
 */
import * as yup from 'yup';
/**
 * Schema for behavior context
 */
export declare const behaviorContextSchema: yup.ObjectSchema<{
    behaviorId: string;
    behaviorName: string;
    trackingType: NonNullable<"boolean" | "counter" | "timer" | undefined>;
    streakDays: number;
    totalTracked: number;
    insights: (string | undefined)[];
    effectiveTactics: (string | undefined)[];
    gameplanTacticIds: (string | undefined)[];
}, yup.AnyObject, {
    behaviorId: undefined;
    behaviorName: undefined;
    trackingType: undefined;
    streakDays: 0;
    totalTracked: 0;
    insights: never[];
    effectiveTactics: never[];
    gameplanTacticIds: never[];
}, "">;
/**
 * Schema for tactic context
 */
export declare const tacticContextSchema: yup.ObjectSchema<{
    tacticId: string;
    tacticTitle: string;
    tacticType: string;
    completedCount: number;
    effectiveness: number;
}, yup.AnyObject, {
    tacticId: undefined;
    tacticTitle: undefined;
    tacticType: undefined;
    completedCount: 0;
    effectiveness: 5;
}, "">;
/**
 * Schema for AI memory
 */
export declare const aiMemorySchema: yup.ObjectSchema<{
    id: string;
    content: string;
    source: string;
    createdAt: Date;
}, yup.AnyObject, {
    id: undefined;
    content: undefined;
    source: undefined;
    createdAt: Date;
}, "">;
/**
 * Schema for user context
 */
export declare const userContextSchema: yup.ObjectSchema<{
    userId: string;
    behaviors: {};
    tactics: {};
    memories: {
        id: string;
        content: string;
        source: string;
        createdAt: Date;
    }[];
    overallInsights: (string | undefined)[];
    lastUpdatedAt: Date;
}, yup.AnyObject, {
    userId: undefined;
    behaviors: undefined;
    tactics: undefined;
    memories: never[];
    overallInsights: never[];
    lastUpdatedAt: Date;
}, "">;
/**
 * Validate user context data
 *
 * @param data Data to validate
 * @returns Validated user context data
 */
export declare function validateUserContext(data: any): Promise<{
    userId: string;
    behaviors: {};
    tactics: {};
    memories: {
        id: string;
        content: string;
        source: string;
        createdAt: Date;
    }[];
    overallInsights: (string | undefined)[];
    lastUpdatedAt: Date;
}>;
/**
 * Validate behavior context data
 *
 * @param data Data to validate
 * @returns Validated behavior context data
 */
export declare function validateBehaviorContext(data: any): Promise<{
    behaviorId: string;
    behaviorName: string;
    trackingType: NonNullable<"boolean" | "counter" | "timer" | undefined>;
    streakDays: number;
    totalTracked: number;
    insights: (string | undefined)[];
    effectiveTactics: (string | undefined)[];
    gameplanTacticIds: (string | undefined)[];
}>;
/**
 * Validate tactic context data
 *
 * @param data Data to validate
 * @returns Validated tactic context data
 */
export declare function validateTacticContext(data: any): Promise<{
    tacticId: string;
    tacticTitle: string;
    tacticType: string;
    completedCount: number;
    effectiveness: number;
}>;
/**
 * Validate AI memory data
 *
 * @param data Data to validate
 * @returns Validated AI memory data
 */
export declare function validateAIMemory(data: any): Promise<{
    id: string;
    content: string;
    source: string;
    createdAt: Date;
}>;
