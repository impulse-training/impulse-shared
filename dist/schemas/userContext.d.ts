import { z } from "zod";
export declare const behaviorContextSchema: z.ZodObject<{
    behaviorId: z.ZodString;
    behaviorName: z.ZodString;
    trackingType: z.ZodEnum<["counter", "timer", "boolean"]>;
    description: z.ZodOptional<z.ZodString>;
    benefits: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    drawbacks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    category: z.ZodOptional<z.ZodString>;
    trackingUnit: z.ZodOptional<z.ZodString>;
    streakDays: z.ZodDefault<z.ZodNumber>;
    totalTracked: z.ZodDefault<z.ZodNumber>;
    insights: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    effectiveTactics: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    planTacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    behaviorId: string;
    behaviorName: string;
    trackingType: "boolean" | "counter" | "timer";
    streakDays: number;
    totalTracked: number;
    insights: string[];
    effectiveTactics: string[];
    planTacticIds: string[];
    category?: string | undefined;
    trackingUnit?: string | undefined;
    description?: string | undefined;
    benefits?: string[] | undefined;
    drawbacks?: string[] | undefined;
}, {
    behaviorId: string;
    behaviorName: string;
    trackingType: "boolean" | "counter" | "timer";
    category?: string | undefined;
    trackingUnit?: string | undefined;
    description?: string | undefined;
    benefits?: string[] | undefined;
    drawbacks?: string[] | undefined;
    streakDays?: number | undefined;
    totalTracked?: number | undefined;
    insights?: string[] | undefined;
    effectiveTactics?: string[] | undefined;
    planTacticIds?: string[] | undefined;
}>;
export declare const tacticContextSchema: z.ZodObject<{
    tacticId: z.ZodString;
    tacticTitle: z.ZodString;
    tacticType: z.ZodString;
    completedCount: z.ZodDefault<z.ZodNumber>;
    effectiveness: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    tacticId: string;
    tacticTitle: string;
    tacticType: string;
    completedCount: number;
    effectiveness: number;
}, {
    tacticId: string;
    tacticTitle: string;
    tacticType: string;
    completedCount?: number | undefined;
    effectiveness?: number | undefined;
}>;
export declare const aiMemorySchema: z.ZodObject<{
    id: z.ZodString;
    content: z.ZodString;
    source: z.ZodString;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: import("../types").Timestamp;
    source: string;
    content: string;
}, {
    id: string;
    createdAt: import("../types").Timestamp;
    source: string;
    content: string;
}>;
export declare const userContextSchema: z.ZodObject<{
    behaviors: z.ZodRecord<z.ZodString, z.ZodObject<{
        behaviorId: z.ZodString;
        behaviorName: z.ZodString;
        trackingType: z.ZodEnum<["counter", "timer", "boolean"]>;
        description: z.ZodOptional<z.ZodString>;
        benefits: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        drawbacks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        category: z.ZodOptional<z.ZodString>;
        trackingUnit: z.ZodOptional<z.ZodString>;
        streakDays: z.ZodDefault<z.ZodNumber>;
        totalTracked: z.ZodDefault<z.ZodNumber>;
        insights: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        effectiveTactics: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        planTacticIds: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer";
        streakDays: number;
        totalTracked: number;
        insights: string[];
        effectiveTactics: string[];
        planTacticIds: string[];
        category?: string | undefined;
        trackingUnit?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer";
        category?: string | undefined;
        trackingUnit?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
        streakDays?: number | undefined;
        totalTracked?: number | undefined;
        insights?: string[] | undefined;
        effectiveTactics?: string[] | undefined;
        planTacticIds?: string[] | undefined;
    }>>;
    tactics: z.ZodRecord<z.ZodString, z.ZodObject<{
        tacticId: z.ZodString;
        tacticTitle: z.ZodString;
        tacticType: z.ZodString;
        completedCount: z.ZodDefault<z.ZodNumber>;
        effectiveness: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        tacticId: string;
        tacticTitle: string;
        tacticType: string;
        completedCount: number;
        effectiveness: number;
    }, {
        tacticId: string;
        tacticTitle: string;
        tacticType: string;
        completedCount?: number | undefined;
        effectiveness?: number | undefined;
    }>>;
    aiMemories: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        content: z.ZodString;
        source: z.ZodString;
        createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        createdAt: import("../types").Timestamp;
        source: string;
        content: string;
    }, {
        id: string;
        createdAt: import("../types").Timestamp;
        source: string;
        content: string;
    }>, "many">>;
    overallInsights: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    consolidatedMemory: z.ZodDefault<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
}, "strip", z.ZodTypeAny, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    behaviors: Record<string, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer";
        streakDays: number;
        totalTracked: number;
        insights: string[];
        effectiveTactics: string[];
        planTacticIds: string[];
        category?: string | undefined;
        trackingUnit?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }>;
    tactics: Record<string, {
        tacticId: string;
        tacticTitle: string;
        tacticType: string;
        completedCount: number;
        effectiveness: number;
    }>;
    aiMemories: {
        id: string;
        createdAt: import("../types").Timestamp;
        source: string;
        content: string;
    }[];
    overallInsights: string[];
    consolidatedMemory: string;
}, {
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    behaviors: Record<string, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer";
        category?: string | undefined;
        trackingUnit?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
        streakDays?: number | undefined;
        totalTracked?: number | undefined;
        insights?: string[] | undefined;
        effectiveTactics?: string[] | undefined;
        planTacticIds?: string[] | undefined;
    }>;
    tactics: Record<string, {
        tacticId: string;
        tacticTitle: string;
        tacticType: string;
        completedCount?: number | undefined;
        effectiveness?: number | undefined;
    }>;
    aiMemories?: {
        id: string;
        createdAt: import("../types").Timestamp;
        source: string;
        content: string;
    }[] | undefined;
    overallInsights?: string[] | undefined;
    consolidatedMemory?: string | undefined;
}>;
export type BehaviorContext = z.infer<typeof behaviorContextSchema>;
export type TacticContext = z.infer<typeof tacticContextSchema>;
export type AIMemory = z.infer<typeof aiMemorySchema>;
export type UserContext = z.infer<typeof userContextSchema>;
export declare const isBehaviorContext: (value: unknown) => value is BehaviorContext;
export declare const isTacticContext: (value: unknown) => value is TacticContext;
export declare const isAIMemory: (value: unknown) => value is AIMemory;
export declare const isUserContext: (value: unknown) => value is UserContext;
