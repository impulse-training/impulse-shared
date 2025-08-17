import { z } from "zod";
export declare const trackingTypes: readonly ["counter", "timer"];
export declare const categorySchema: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
export declare const behaviorTemplateSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
    hasQuestions: z.ZodOptional<z.ZodBoolean>;
    trackingType: z.ZodEnum<["counter", "timer"]>;
    trackingUnit: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
}, "strip", z.ZodTypeAny, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
}, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
}>, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
}, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
}>;
export type BehaviorTemplate = z.infer<typeof behaviorTemplateSchema>;
export declare const behaviorSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
    hasQuestions: z.ZodOptional<z.ZodBoolean>;
    trackingType: z.ZodEnum<["counter", "timer"]>;
    trackingUnit: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    updatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
} & {
    id: z.ZodOptional<z.ZodString>;
    description: z.ZodString;
    ordinal: z.ZodDefault<z.ZodNumber>;
    benefits: z.ZodArray<z.ZodString, "many">;
    drawbacks: z.ZodArray<z.ZodString, "many">;
    goal: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["greaterThan", "lessThanOrEqualTo"]>;
        target: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "greaterThan" | "lessThanOrEqualTo";
        target: number;
    }, {
        type: "greaterThan" | "lessThanOrEqualTo";
        target: number;
    }>>;
    lastTrackedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
}, "strip", z.ZodTypeAny, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    description: string;
    ordinal: number;
    benefits: string[];
    drawbacks: string[];
    lastTrackedAt: import("../types").Timestamp;
    id?: string | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    goal?: {
        type: "greaterThan" | "lessThanOrEqualTo";
        target: number;
    } | undefined;
}, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    description: string;
    benefits: string[];
    drawbacks: string[];
    lastTrackedAt: import("../types").Timestamp;
    id?: string | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    ordinal?: number | undefined;
    goal?: {
        type: "greaterThan" | "lessThanOrEqualTo";
        target: number;
    } | undefined;
}>, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    description: string;
    ordinal: number;
    benefits: string[];
    drawbacks: string[];
    lastTrackedAt: import("../types").Timestamp;
    id?: string | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    goal?: {
        type: "greaterThan" | "lessThanOrEqualTo";
        target: number;
    } | undefined;
}, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    createdAt: import("../types").Timestamp;
    updatedAt: import("../types").Timestamp;
    description: string;
    benefits: string[];
    drawbacks: string[];
    lastTrackedAt: import("../types").Timestamp;
    id?: string | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    ordinal?: number | undefined;
    goal?: {
        type: "greaterThan" | "lessThanOrEqualTo";
        target: number;
    } | undefined;
}>;
export type TrackingType = (typeof trackingTypes)[number];
export type Behavior = z.infer<typeof behaviorSchema>;
export declare const isBehavior: (value: unknown) => value is Behavior;
