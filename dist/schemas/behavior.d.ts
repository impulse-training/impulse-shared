import * as yup from "yup";
export declare const trackingTypes: readonly ["counter", "timer"];
export declare const categorySchema: yup.MixedSchema<NonNullable<"helpful" | "mixed" | "unhelpful" | "unsure" | undefined>, yup.AnyObject, undefined, "">;
export declare const behaviorTemplateSchema: yup.ObjectSchema<{
    name: string;
    category: NonNullable<"helpful" | "mixed" | "unhelpful" | "unsure" | undefined>;
    hasQuestions: boolean | undefined;
    trackingType: NonNullable<"counter" | "timer" | undefined>;
    trackingUnit: string | undefined;
    createdAt: import("../types").Timestamp | undefined;
    updatedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    name: undefined;
    category: undefined;
    hasQuestions: undefined;
    trackingType: undefined;
    trackingUnit: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type BehaviorTemplate = yup.InferType<typeof behaviorTemplateSchema>;
export declare const behaviorSchema: yup.ObjectSchema<{
    name: string;
    category: NonNullable<"helpful" | "mixed" | "unhelpful" | "unsure" | undefined>;
    hasQuestions: boolean | undefined;
    trackingType: NonNullable<"counter" | "timer" | undefined>;
    trackingUnit: string | undefined;
    createdAt: import("../types").Timestamp | undefined;
    updatedAt: import("../types").Timestamp | undefined;
    id: string | undefined;
    description: string;
    ordinal: number;
    benefits: string[] | undefined;
    drawbacks: string[] | undefined;
    goal: {
        type: NonNullable<"greaterThan" | "lessThanOrEqualTo" | undefined>;
        target: number;
    } | undefined;
    lastTrackedAt: import("../types").Timestamp | undefined;
}, yup.AnyObject, {
    name: undefined;
    category: undefined;
    hasQuestions: undefined;
    trackingType: undefined;
    trackingUnit: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    id: undefined;
    description: undefined;
    ordinal: 0;
    benefits: "";
    drawbacks: "";
    goal: undefined;
    lastTrackedAt: undefined;
}, "">;
export type TrackingType = (typeof trackingTypes)[number];
export type Behavior = yup.InferType<typeof behaviorSchema>;
export declare const isBehavior: (value: unknown) => value is Behavior;
