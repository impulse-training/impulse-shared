/**
 * User Context Schemas
 *
 * Yup schemas for user context data validation
 */
import * as yup from "yup";
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
    createdAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    content: undefined;
    source: undefined;
    createdAt: undefined;
}, "">;
/**
 * Schema for user context
 */
export declare const userContextSchema: yup.ObjectSchema<{
    userId: string;
    behaviors: {};
    tactics: {};
    memories: {
        createdAt?: import("..").Timestamp | undefined;
        content: string;
        id: string;
        source: string;
    }[];
    overallInsights: (string | undefined)[];
    createdAt: import("..").Timestamp | undefined;
    updatedAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    userId: undefined;
    behaviors: undefined;
    tactics: undefined;
    memories: never[];
    overallInsights: never[];
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
