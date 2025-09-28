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
    description?: string | undefined;
    trackingUnit?: string | undefined;
    benefits?: string[] | undefined;
    drawbacks?: string[] | undefined;
}, {
    behaviorId: string;
    behaviorName: string;
    trackingType: "boolean" | "counter" | "timer";
    category?: string | undefined;
    description?: string | undefined;
    trackingUnit?: string | undefined;
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
    effectiveness: number;
    tacticId: string;
    tacticTitle: string;
    tacticType: string;
    completedCount: number;
}, {
    tacticId: string;
    tacticTitle: string;
    tacticType: string;
    effectiveness?: number | undefined;
    completedCount?: number | undefined;
}>;
export declare const aiMemorySchema: z.ZodObject<{
    id: z.ZodString;
    content: z.ZodString;
    source: z.ZodString;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    source: string;
    content: string;
    createdAt?: import("../types").Timestamp | undefined;
}, {
    id: string;
    source: string;
    content: string;
    createdAt?: import("../types").Timestamp | undefined;
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
        description?: string | undefined;
        trackingUnit?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer";
        category?: string | undefined;
        description?: string | undefined;
        trackingUnit?: string | undefined;
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
        effectiveness: number;
        tacticId: string;
        tacticTitle: string;
        tacticType: string;
        completedCount: number;
    }, {
        tacticId: string;
        tacticTitle: string;
        tacticType: string;
        effectiveness?: number | undefined;
        completedCount?: number | undefined;
    }>>;
    aiMemories: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        content: z.ZodString;
        source: z.ZodString;
        createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        source: string;
        content: string;
        createdAt?: import("../types").Timestamp | undefined;
    }, {
        id: string;
        source: string;
        content: string;
        createdAt?: import("../types").Timestamp | undefined;
    }>, "many">>;
    overallInsights: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    consolidatedMemory: z.ZodDefault<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
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
        description?: string | undefined;
        trackingUnit?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }>;
    tactics: Record<string, {
        effectiveness: number;
        tacticId: string;
        tacticTitle: string;
        tacticType: string;
        completedCount: number;
    }>;
    aiMemories: {
        id: string;
        source: string;
        content: string;
        createdAt?: import("../types").Timestamp | undefined;
    }[];
    overallInsights: string[];
    consolidatedMemory: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
}, {
    behaviors: Record<string, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer";
        category?: string | undefined;
        description?: string | undefined;
        trackingUnit?: string | undefined;
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
        effectiveness?: number | undefined;
        completedCount?: number | undefined;
    }>;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    aiMemories?: {
        id: string;
        source: string;
        content: string;
        createdAt?: import("../types").Timestamp | undefined;
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
