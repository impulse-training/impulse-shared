import { z } from "zod";
export declare const slider1To10QuestionSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    updatedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    textAfterResponse: z.ZodOptional<z.ZodString>;
    metricId: z.ZodOptional<z.ZodString>;
    lastAskedAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    lastAnsweredAt: z.ZodOptional<z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>>;
    numberOfAnswers: z.ZodOptional<z.ZodNumber>;
    isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    responseType: z.ZodLiteral<"slider1To10">;
    scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
} & {
    sliderConfig: z.ZodObject<{
        minLabel: z.ZodOptional<z.ZodString>;
        maxLabel: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    }, {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    }>;
    text: z.ZodString;
    state: z.ZodOptional<z.ZodObject<{
        questionId: z.ZodString;
        windows: z.ZodObject<{
            short: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                averageValue: z.ZodOptional<z.ZodNumber>;
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                sampleCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            }>;
            medium: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                averageValue: z.ZodOptional<z.ZodNumber>;
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                sampleCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            }>;
            long: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                averageValue: z.ZodOptional<z.ZodNumber>;
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                sampleCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
        }, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
        }>;
        meta: z.ZodObject<{
            lastUpdatedAt: z.ZodType<import("../../types").Timestamp, z.ZodTypeDef, import("../../types").Timestamp>;
            dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
        }, "strip", z.ZodTypeAny, {
            lastUpdatedAt: import("../../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        }, {
            lastUpdatedAt: import("../../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        }>;
    }, "strip", z.ZodTypeAny, {
        questionId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
    }, {
        questionId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    text: string;
    isTemplate: boolean;
    responseType: "slider1To10";
    scope: "impulse" | "setback" | "success" | "recap";
    sliderConfig: {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    textAfterResponse?: string | undefined;
    metricId?: string | undefined;
    lastAskedAt?: import("../../types").Timestamp | undefined;
    lastAnsweredAt?: import("../../types").Timestamp | undefined;
    numberOfAnswers?: number | undefined;
    isPinned?: boolean | undefined;
    state?: {
        questionId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
    } | undefined;
}, {
    text: string;
    responseType: "slider1To10";
    scope: "impulse" | "setback" | "success" | "recap";
    sliderConfig: {
        minLabel?: string | undefined;
        maxLabel?: string | undefined;
    };
    id?: string | undefined;
    createdAt?: import("../../types").Timestamp | undefined;
    updatedAt?: import("../../types").Timestamp | undefined;
    textAfterResponse?: string | undefined;
    metricId?: string | undefined;
    lastAskedAt?: import("../../types").Timestamp | undefined;
    lastAnsweredAt?: import("../../types").Timestamp | undefined;
    numberOfAnswers?: number | undefined;
    isTemplate?: boolean | undefined;
    isPinned?: boolean | undefined;
    state?: {
        questionId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageValue?: number | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
    } | undefined;
}>;
export type Slider1To10Question = z.infer<typeof slider1To10QuestionSchema>;
