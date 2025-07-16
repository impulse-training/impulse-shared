import * as yup from "yup";
export declare const behaviorContextSchema: yup.ObjectSchema<{
    behaviorId: string;
    behaviorName: string;
    trackingType: NonNullable<"boolean" | "counter" | "timer" | undefined>;
    streakDays: number;
    totalTracked: number;
    insights: (string | undefined)[];
    effectiveTactics: (string | undefined)[];
    planTacticIds: (string | undefined)[];
}, yup.AnyObject, {
    behaviorId: undefined;
    behaviorName: undefined;
    trackingType: undefined;
    streakDays: 0;
    totalTracked: 0;
    insights: never[];
    effectiveTactics: never[];
    planTacticIds: never[];
}, "">;
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
export declare const aiMemorySchema: yup.ObjectSchema<{
    id: string;
    content: string;
    source: string;
    createdAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    id: undefined;
    content: undefined;
    source: undefined;
    createdAt: undefined;
}, "">;
export declare const userContextSchema: yup.ObjectSchema<{
    behaviors: {
        [x: string]: {
            behaviorId: string;
            behaviorName: string;
            trackingType: NonNullable<"boolean" | "counter" | "timer" | undefined>;
            streakDays: number;
            totalTracked: number;
            insights: (string | undefined)[];
            effectiveTactics: (string | undefined)[];
            planTacticIds: (string | undefined)[];
        };
    };
    tactics: {
        [x: string]: {
            tacticId: string;
            tacticTitle: string;
            tacticType: string;
            completedCount: number;
            effectiveness: number;
        };
    };
    aiMemories: {
        createdAt?: import("../types").Timestamp | undefined;
        id: string;
        content: string;
        source: string;
    }[];
    overallInsights: (string | undefined)[];
    createdAt: import("../types").Timestamp | undefined;
    updatedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    behaviors: undefined;
    tactics: undefined;
    aiMemories: never[];
    overallInsights: never[];
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type BehaviorContext = yup.InferType<typeof behaviorContextSchema>;
export type TacticContext = yup.InferType<typeof tacticContextSchema>;
export type AIMemory = yup.InferType<typeof aiMemorySchema>;
export interface UserContext extends Omit<yup.InferType<typeof userContextSchema>, "behaviors" | "tactics"> {
    behaviors: Record<string, BehaviorContext>;
    tactics: Record<string, TacticContext>;
}
export declare const isBehaviorContext: (value: unknown) => value is BehaviorContext;
export declare const isTacticContext: (value: unknown) => value is TacticContext;
export declare const isAIMemory: (value: unknown) => value is AIMemory;
export declare const isUserContext: (value: unknown) => value is UserContext;
