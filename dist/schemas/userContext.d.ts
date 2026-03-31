import { z } from "zod";
export declare const behaviorContextSchema: z.ZodObject<{
    behaviorId: z.ZodString;
    behaviorName: z.ZodString;
    trackingType: z.ZodEnum<["counter", "timer", "boolean"]>;
    description: z.ZodOptional<z.ZodString>;
    benefits: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    drawbacks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    trackingUnit: z.ZodOptional<z.ZodString>;
    goalLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    behaviorId: string;
    behaviorName: string;
    trackingType: "boolean" | "counter" | "timer";
    trackingUnit?: string | undefined;
    goalLabel?: string | undefined;
    description?: string | undefined;
    benefits?: string[] | undefined;
    drawbacks?: string[] | undefined;
}, {
    behaviorId: string;
    behaviorName: string;
    trackingType: "boolean" | "counter" | "timer";
    trackingUnit?: string | undefined;
    goalLabel?: string | undefined;
    description?: string | undefined;
    benefits?: string[] | undefined;
    drawbacks?: string[] | undefined;
}>;
export declare const tacticContextSchema: z.ZodObject<{
    tacticId: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    instructions: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    tacticId: string;
    description?: string | undefined;
    instructions?: string | undefined;
}, {
    title: string;
    tacticId: string;
    description?: string | undefined;
    instructions?: string | undefined;
}>;
export declare const activeExperimentContextSchema: z.ZodObject<{
    behaviorId: z.ZodString;
    behaviorName: z.ZodString;
    experimentQuestion: z.ZodString;
    observations: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    behaviorId: string;
    behaviorName: string;
    experimentQuestion: string;
    observations: string[];
}, {
    behaviorId: string;
    behaviorName: string;
    experimentQuestion: string;
    observations: string[];
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
        trackingUnit: z.ZodOptional<z.ZodString>;
        goalLabel: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer";
        trackingUnit?: string | undefined;
        goalLabel?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer";
        trackingUnit?: string | undefined;
        goalLabel?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }>>;
    tactics: z.ZodRecord<z.ZodString, z.ZodObject<{
        tacticId: z.ZodString;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        instructions: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        tacticId: string;
        description?: string | undefined;
        instructions?: string | undefined;
    }, {
        title: string;
        tacticId: string;
        description?: string | undefined;
        instructions?: string | undefined;
    }>>;
    activeExperiment: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        behaviorId: z.ZodString;
        behaviorName: z.ZodString;
        experimentQuestion: z.ZodString;
        observations: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        behaviorId: string;
        behaviorName: string;
        experimentQuestion: string;
        observations: string[];
    }, {
        behaviorId: string;
        behaviorName: string;
        experimentQuestion: string;
        observations: string[];
    }>>>;
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
    consolidatedMemory: z.ZodDefault<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    tactics: Record<string, {
        title: string;
        tacticId: string;
        description?: string | undefined;
        instructions?: string | undefined;
    }>;
    behaviors: Record<string, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer";
        trackingUnit?: string | undefined;
        goalLabel?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }>;
    aiMemories: {
        id: string;
        source: string;
        content: string;
        createdAt?: import("../types").Timestamp | undefined;
    }[];
    consolidatedMemory: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    activeExperiment?: {
        behaviorId: string;
        behaviorName: string;
        experimentQuestion: string;
        observations: string[];
    } | null | undefined;
}, {
    tactics: Record<string, {
        title: string;
        tacticId: string;
        description?: string | undefined;
        instructions?: string | undefined;
    }>;
    behaviors: Record<string, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer";
        trackingUnit?: string | undefined;
        goalLabel?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }>;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    activeExperiment?: {
        behaviorId: string;
        behaviorName: string;
        experimentQuestion: string;
        observations: string[];
    } | null | undefined;
    aiMemories?: {
        id: string;
        source: string;
        content: string;
        createdAt?: import("../types").Timestamp | undefined;
    }[] | undefined;
    consolidatedMemory?: string | undefined;
}>;
export type BehaviorContext = z.infer<typeof behaviorContextSchema>;
export type TacticContext = z.infer<typeof tacticContextSchema>;
export type ActiveExperimentContext = z.infer<typeof activeExperimentContextSchema>;
export type AIMemory = z.infer<typeof aiMemorySchema>;
export type UserContext = z.infer<typeof userContextSchema>;
export declare const isBehaviorContext: (value: unknown) => value is BehaviorContext;
export declare const isTacticContext: (value: unknown) => value is TacticContext;
export declare const isAIMemory: (value: unknown) => value is AIMemory;
export declare const isUserContext: (value: unknown) => value is UserContext;
