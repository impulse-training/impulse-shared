import { z } from "zod";
export declare const trackingTypes: readonly ["counter", "timer", "scale"];
export type TrackingType = (typeof trackingTypes)[number];
export declare const baselinePeriods: readonly ["daily", "weekly"];
export type BaselinePeriod = (typeof baselinePeriods)[number];
declare const behaviorTemplateBase: z.ZodObject<{
    name: z.ZodString;
    trackingType: z.ZodEnum<["counter", "timer", "scale"]>;
    trackingUnit: z.ZodOptional<z.ZodString>;
    baselinePeriod: z.ZodOptional<z.ZodEnum<["daily", "weekly"]>>;
    color: z.ZodOptional<z.ZodString>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    recapQuestionSequence: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    trackingType: "counter" | "timer" | "scale";
    name: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    trackingUnit?: string | undefined;
    baselinePeriod?: "daily" | "weekly" | undefined;
    color?: string | undefined;
    synonyms?: string[] | undefined;
    recapQuestionSequence?: string[] | undefined;
}, {
    trackingType: "counter" | "timer" | "scale";
    name: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    trackingUnit?: string | undefined;
    baselinePeriod?: "daily" | "weekly" | undefined;
    color?: string | undefined;
    synonyms?: string[] | undefined;
    recapQuestionSequence?: string[] | undefined;
}>;
export declare const behaviorTemplateSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    trackingType: z.ZodEnum<["counter", "timer", "scale"]>;
    trackingUnit: z.ZodOptional<z.ZodString>;
    baselinePeriod: z.ZodOptional<z.ZodEnum<["daily", "weekly"]>>;
    color: z.ZodOptional<z.ZodString>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    recapQuestionSequence: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
}, "strip", z.ZodTypeAny, {
    trackingType: "counter" | "timer" | "scale";
    name: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    trackingUnit?: string | undefined;
    baselinePeriod?: "daily" | "weekly" | undefined;
    color?: string | undefined;
    synonyms?: string[] | undefined;
    recapQuestionSequence?: string[] | undefined;
}, {
    trackingType: "counter" | "timer" | "scale";
    name: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    trackingUnit?: string | undefined;
    baselinePeriod?: "daily" | "weekly" | undefined;
    color?: string | undefined;
    synonyms?: string[] | undefined;
    recapQuestionSequence?: string[] | undefined;
}>, {
    trackingType: "counter" | "timer" | "scale";
    name: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    trackingUnit?: string | undefined;
    baselinePeriod?: "daily" | "weekly" | undefined;
    color?: string | undefined;
    synonyms?: string[] | undefined;
    recapQuestionSequence?: string[] | undefined;
}, {
    trackingType: "counter" | "timer" | "scale";
    name: string;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    trackingUnit?: string | undefined;
    baselinePeriod?: "daily" | "weekly" | undefined;
    color?: string | undefined;
    synonyms?: string[] | undefined;
    recapQuestionSequence?: string[] | undefined;
}>;
export type BehaviorTemplate = z.infer<typeof behaviorTemplateSchema>;
export { behaviorTemplateBase };
