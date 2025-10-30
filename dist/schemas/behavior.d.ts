import { z } from "zod";
export declare const trackingTypes: readonly ["counter", "timer"];
export declare const behaviorTemplateSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
    hasQuestions: z.ZodOptional<z.ZodBoolean>;
    trackingType: z.ZodEnum<["counter", "timer"]>;
    trackingUnit: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
}, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
}>, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
}, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
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
    goal: z.ZodOptional<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"eliminate">;
    }, "strip", z.ZodTypeAny, {
        type: "eliminate";
    }, {
        type: "eliminate";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"reduceEveryDay">;
        target: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "reduceEveryDay";
        target: number;
    }, {
        type: "reduceEveryDay";
        target: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"reduceIndividualDays">;
        dailyTargets: z.ZodObject<{
            0: z.ZodNumber;
            1: z.ZodNumber;
            2: z.ZodNumber;
            3: z.ZodNumber;
            4: z.ZodNumber;
            5: z.ZodNumber;
            6: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            0: number;
            5: number;
            1: number;
            2: number;
            4: number;
            3: number;
            6: number;
        }, {
            0: number;
            5: number;
            1: number;
            2: number;
            4: number;
            3: number;
            6: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            5: number;
            1: number;
            2: number;
            4: number;
            3: number;
            6: number;
        };
    }, {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            5: number;
            1: number;
            2: number;
            4: number;
            3: number;
            6: number;
        };
    }>]>>;
    lastTrackedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    tactics: z.ZodOptional<z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
    initialUsage: z.ZodOptional<z.ZodObject<{
        behaviorId: z.ZodString;
        behaviorName: z.ZodString;
        behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
        trackingType: z.ZodEnum<["counter", "timer"]>;
        category: z.ZodType<"helpful" | "mixed" | "unhelpful" | "unsure", z.ZodTypeDef, "helpful" | "mixed" | "unhelpful" | "unsure">;
        value: z.ZodNumber;
        formattedValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }, {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }>>;
    hidden: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    impulseQuestions: z.ZodOptional<z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
    debriefQuestions: z.ZodOptional<z.ZodObject<{
        success: z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">;
        setback: z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">;
    }, "strip", z.ZodTypeAny, {
        setback: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
        success: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
    }, {
        setback: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
        success: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
    }>>;
    activePlanId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    description: string;
    ordinal: number;
    benefits: string[];
    drawbacks: string[];
    hidden: boolean;
    activePlanId: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    goal?: {
        type: "eliminate";
    } | {
        type: "reduceEveryDay";
        target: number;
    } | {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            5: number;
            1: number;
            2: number;
            4: number;
            3: number;
            6: number;
        };
    } | undefined;
    lastTrackedAt?: import("../types").Timestamp | undefined;
    tactics?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    initialUsage?: {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    } | undefined;
    impulseQuestions?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    debriefQuestions?: {
        setback: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
        success: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
    } | undefined;
}, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    description: string;
    benefits: string[];
    drawbacks: string[];
    activePlanId: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    ordinal?: number | undefined;
    goal?: {
        type: "eliminate";
    } | {
        type: "reduceEveryDay";
        target: number;
    } | {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            5: number;
            1: number;
            2: number;
            4: number;
            3: number;
            6: number;
        };
    } | undefined;
    lastTrackedAt?: import("../types").Timestamp | undefined;
    tactics?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    initialUsage?: {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    } | undefined;
    hidden?: boolean | undefined;
    impulseQuestions?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    debriefQuestions?: {
        setback: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
        success: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
    } | undefined;
}>, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    description: string;
    ordinal: number;
    benefits: string[];
    drawbacks: string[];
    hidden: boolean;
    activePlanId: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    goal?: {
        type: "eliminate";
    } | {
        type: "reduceEveryDay";
        target: number;
    } | {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            5: number;
            1: number;
            2: number;
            4: number;
            3: number;
            6: number;
        };
    } | undefined;
    lastTrackedAt?: import("../types").Timestamp | undefined;
    tactics?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    initialUsage?: {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    } | undefined;
    impulseQuestions?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    debriefQuestions?: {
        setback: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
        success: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
    } | undefined;
}, {
    trackingType: "counter" | "timer";
    category: "helpful" | "mixed" | "unhelpful" | "unsure";
    name: string;
    description: string;
    benefits: string[];
    drawbacks: string[];
    activePlanId: string;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    ordinal?: number | undefined;
    goal?: {
        type: "eliminate";
    } | {
        type: "reduceEveryDay";
        target: number;
    } | {
        type: "reduceIndividualDays";
        dailyTargets: {
            0: number;
            5: number;
            1: number;
            2: number;
            4: number;
            3: number;
            6: number;
        };
    } | undefined;
    lastTrackedAt?: import("../types").Timestamp | undefined;
    tactics?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    initialUsage?: {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        category: "helpful" | "mixed" | "unhelpful" | "unsure";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    } | undefined;
    hidden?: boolean | undefined;
    impulseQuestions?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    debriefQuestions?: {
        setback: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
        success: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[];
    } | undefined;
}>;
export type TrackingType = (typeof trackingTypes)[number];
export type Behavior = z.infer<typeof behaviorSchema>;
export declare const isBehavior: (value: unknown) => value is Behavior;
