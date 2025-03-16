import * as yup from "yup";
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
    createdAt: import("..").Timestamp | undefined;
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
            gameplanTacticIds: (string | undefined)[];
            streakDays: number;
            totalTracked: number;
            insights: (string | undefined)[];
            effectiveTactics: (string | undefined)[];
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
        createdAt?: import("..").Timestamp | undefined;
        content: string;
        id: string;
        source: string;
    }[];
    overallInsights: (string | undefined)[];
    createdAt: import("..").Timestamp | undefined;
    updatedAt: import("..").Timestamp | undefined;
}, yup.AnyObject, {
    behaviors: undefined;
    tactics: undefined;
    aiMemories: never[];
    overallInsights: never[];
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
