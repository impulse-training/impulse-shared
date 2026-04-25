import { z } from "zod";
export declare const behaviorContextSchema: z.ZodObject<{
    behaviorId: z.ZodString;
    behaviorName: z.ZodString;
    trackingType: z.ZodEnum<["counter", "timer", "boolean", "scale"]>;
    description: z.ZodOptional<z.ZodString>;
    benefits: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    drawbacks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    trackingUnit: z.ZodOptional<z.ZodString>;
    goalLabel: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    behaviorId: string;
    behaviorName: string;
    trackingType: "boolean" | "counter" | "timer" | "scale";
    trackingUnit?: string | undefined;
    goalLabel?: string | undefined;
    description?: string | undefined;
    benefits?: string[] | undefined;
    drawbacks?: string[] | undefined;
}, {
    behaviorId: string;
    behaviorName: string;
    trackingType: "boolean" | "counter" | "timer" | "scale";
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
    behaviorIds: z.ZodArray<z.ZodString, "many">;
    behaviorNames: z.ZodArray<z.ZodString, "many">;
    experimentQuestion: z.ZodString;
    observations: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    behaviorIds: string[];
    behaviorNames: string[];
    experimentQuestion: string;
    observations: string[];
}, {
    behaviorIds: string[];
    behaviorNames: string[];
    experimentQuestion: string;
    observations: string[];
}>;
export declare const userContextSchema: z.ZodObject<{
    behaviors: z.ZodRecord<z.ZodString, z.ZodObject<{
        behaviorId: z.ZodString;
        behaviorName: z.ZodString;
        trackingType: z.ZodEnum<["counter", "timer", "boolean", "scale"]>;
        description: z.ZodOptional<z.ZodString>;
        benefits: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        drawbacks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        trackingUnit: z.ZodOptional<z.ZodString>;
        goalLabel: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer" | "scale";
        trackingUnit?: string | undefined;
        goalLabel?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }, {
        behaviorId: string;
        behaviorName: string;
        trackingType: "boolean" | "counter" | "timer" | "scale";
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
        behaviorIds: z.ZodArray<z.ZodString, "many">;
        behaviorNames: z.ZodArray<z.ZodString, "many">;
        experimentQuestion: z.ZodString;
        observations: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        behaviorIds: string[];
        behaviorNames: string[];
        experimentQuestion: string;
        observations: string[];
    }, {
        behaviorIds: string[];
        behaviorNames: string[];
        experimentQuestion: string;
        observations: string[];
    }>>>;
    communicationProfile: z.ZodOptional<z.ZodString>;
    communicationProfileVersion: z.ZodOptional<z.ZodNumber>;
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
        trackingType: "boolean" | "counter" | "timer" | "scale";
        trackingUnit?: string | undefined;
        goalLabel?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }>;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    activeExperiment?: {
        behaviorIds: string[];
        behaviorNames: string[];
        experimentQuestion: string;
        observations: string[];
    } | null | undefined;
    communicationProfile?: string | undefined;
    communicationProfileVersion?: number | undefined;
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
        trackingType: "boolean" | "counter" | "timer" | "scale";
        trackingUnit?: string | undefined;
        goalLabel?: string | undefined;
        description?: string | undefined;
        benefits?: string[] | undefined;
        drawbacks?: string[] | undefined;
    }>;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    activeExperiment?: {
        behaviorIds: string[];
        behaviorNames: string[];
        experimentQuestion: string;
        observations: string[];
    } | null | undefined;
    communicationProfile?: string | undefined;
    communicationProfileVersion?: number | undefined;
}>;
export type BehaviorContext = z.infer<typeof behaviorContextSchema>;
export type TacticContext = z.infer<typeof tacticContextSchema>;
export type ActiveExperimentContext = z.infer<typeof activeExperimentContextSchema>;
export type UserContext = z.infer<typeof userContextSchema>;
export declare const isBehaviorContext: (value: unknown) => value is BehaviorContext;
export declare const isTacticContext: (value: unknown) => value is TacticContext;
export declare const isUserContext: (value: unknown) => value is UserContext;
