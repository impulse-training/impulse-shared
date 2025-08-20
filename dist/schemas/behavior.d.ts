import { z } from "zod";
export declare const trackingTypes: readonly ["counter", "timer"];
export declare const categorySchema: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
export declare const behaviorTemplateSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
    hasQuestions: z.ZodOptional<z.ZodBoolean>;
    trackingType: z.ZodEnum<["counter", "timer"]>;
    trackingUnit: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    trackingType: "timer" | "counter";
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
}, {
    name: string;
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    trackingType: "timer" | "counter";
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
}>, {
    name: string;
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    trackingType: "timer" | "counter";
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
}, {
    name: string;
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    trackingType: "timer" | "counter";
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
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
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
    lastTrackedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    ordinal: number;
    description: string;
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    trackingType: "timer" | "counter";
    benefits: string[];
    drawbacks: string[];
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    goal?: {
        type: "greaterThan" | "lessThanOrEqualTo";
        target: number;
    } | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    lastTrackedAt?: import("../types").Timestamp | undefined;
}, {
    name: string;
    description: string;
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    trackingType: "timer" | "counter";
    benefits: string[];
    drawbacks: string[];
    id?: string | undefined;
    ordinal?: number | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    goal?: {
        type: "greaterThan" | "lessThanOrEqualTo";
        target: number;
    } | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    lastTrackedAt?: import("../types").Timestamp | undefined;
}>, {
    name: string;
    ordinal: number;
    description: string;
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    trackingType: "timer" | "counter";
    benefits: string[];
    drawbacks: string[];
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    goal?: {
        type: "greaterThan" | "lessThanOrEqualTo";
        target: number;
    } | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    lastTrackedAt?: import("../types").Timestamp | undefined;
}, {
    name: string;
    description: string;
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    trackingType: "timer" | "counter";
    benefits: string[];
    drawbacks: string[];
    id?: string | undefined;
    ordinal?: number | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    goal?: {
        type: "greaterThan" | "lessThanOrEqualTo";
        target: number;
    } | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    lastTrackedAt?: import("../types").Timestamp | undefined;
}>;
export type TrackingType = (typeof trackingTypes)[number];
export type Behavior = z.infer<typeof behaviorSchema>;
export declare const isBehavior: (value: unknown) => value is Behavior;
