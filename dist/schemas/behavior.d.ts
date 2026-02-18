import { z } from "zod";
export { trackingTypes } from "./behaviorTemplate";
export type { BehaviorTemplate, TrackingType } from "./behaviorTemplate";
export { behaviorTemplateSchema } from "./behaviorTemplate";
export declare const trendSchema: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
export type Trend = z.infer<typeof trendSchema>;
export declare const stabilitySchema: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
export type Stability = z.infer<typeof stabilitySchema>;
export declare const dataCompletenessSchema: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
export type DataCompleteness = z.infer<typeof dataCompletenessSchema>;
export declare const behaviorStateGoalTypeSchema: z.ZodEnum<["MAX_PER_DAY", "MIN_PER_DAY", "ELIMINATE", "CUSTOM"]>;
export type BehaviorStateGoalType = z.infer<typeof behaviorStateGoalTypeSchema>;
export declare const streaksSchema: z.ZodObject<{
    longestMet: z.ZodNumber;
    currentMet: z.ZodNumber;
    currentFail: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    longestMet: number;
    currentMet: number;
    currentFail: number;
}, {
    longestMet: number;
    currentMet: number;
    currentFail: number;
}>;
export type Streaks = z.infer<typeof streaksSchema>;
export declare const globalStreaksSchema: z.ZodObject<{
    currentStreak: z.ZodNumber;
    longestStreak: z.ZodNumber;
    currentStreakStartDate: z.ZodOptional<z.ZodString>;
    longestStreakStartDate: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    currentStreak: number;
    longestStreak: number;
    currentStreakStartDate?: string | undefined;
    longestStreakStartDate?: string | undefined;
}, {
    currentStreak: number;
    longestStreak: number;
    currentStreakStartDate?: string | undefined;
    longestStreakStartDate?: string | undefined;
}>;
export type GlobalStreaks = z.infer<typeof globalStreaksSchema>;
export declare const behaviorMeaningSchema: z.ZodObject<{
    importance: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CORE"]>;
    emotionalTone: z.ZodObject<{
        primary: z.ZodEnum<["NEUTRAL", "FRUSTRATED", "ASHAMED", "CONFLICTED", "MOTIVATED", "RESIGNED"]>;
        confidence: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
    }, "strip", z.ZodTypeAny, {
        primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
        confidence: "HIGH" | "MEDIUM" | "LOW";
    }, {
        primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
        confidence: "HIGH" | "MEDIUM" | "LOW";
    }>;
    motivation: z.ZodObject<{
        reasons: z.ZodArray<z.ZodString, "many">;
        valuesLinked: z.ZodArray<z.ZodString, "many">;
        avoidanceDriven: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        reasons: string[];
        valuesLinked: string[];
        avoidanceDriven: boolean;
    }, {
        reasons: string[];
        valuesLinked: string[];
        avoidanceDriven: boolean;
    }>;
    selfNarrative: z.ZodObject<{
        identityStatement: z.ZodOptional<z.ZodString>;
        perceivedControl: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
    }, "strip", z.ZodTypeAny, {
        perceivedControl: "HIGH" | "MEDIUM" | "LOW";
        identityStatement?: string | undefined;
    }, {
        perceivedControl: "HIGH" | "MEDIUM" | "LOW";
        identityStatement?: string | undefined;
    }>;
    friction: z.ZodOptional<z.ZodObject<{
        commonTriggers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        highRiskContexts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        commonTriggers?: string[] | undefined;
        highRiskContexts?: string[] | undefined;
    }, {
        commonTriggers?: string[] | undefined;
        highRiskContexts?: string[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    motivation: {
        reasons: string[];
        valuesLinked: string[];
        avoidanceDriven: boolean;
    };
    importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
    emotionalTone: {
        primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
        confidence: "HIGH" | "MEDIUM" | "LOW";
    };
    selfNarrative: {
        perceivedControl: "HIGH" | "MEDIUM" | "LOW";
        identityStatement?: string | undefined;
    };
    friction?: {
        commonTriggers?: string[] | undefined;
        highRiskContexts?: string[] | undefined;
    } | undefined;
}, {
    motivation: {
        reasons: string[];
        valuesLinked: string[];
        avoidanceDriven: boolean;
    };
    importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
    emotionalTone: {
        primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
        confidence: "HIGH" | "MEDIUM" | "LOW";
    };
    selfNarrative: {
        perceivedControl: "HIGH" | "MEDIUM" | "LOW";
        identityStatement?: string | undefined;
    };
    friction?: {
        commonTriggers?: string[] | undefined;
        highRiskContexts?: string[] | undefined;
    } | undefined;
}>;
export type BehaviorMeaning = z.infer<typeof behaviorMeaningSchema>;
export declare const behaviorWindowSchema: z.ZodObject<{
    windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
    adherenceRate: z.ZodNumber;
    averageMeasured: z.ZodOptional<z.ZodNumber>;
    trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
    stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
    streaks: z.ZodObject<{
        longestMet: z.ZodNumber;
        currentMet: z.ZodNumber;
        currentFail: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        longestMet: number;
        currentMet: number;
        currentFail: number;
    }, {
        longestMet: number;
        currentMet: number;
        currentFail: number;
    }>;
    recencyWeightedScore: z.ZodNumber;
    sampleCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    windowSizeDays: 7 | 30 | 90;
    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
    stability: "HIGH" | "MEDIUM" | "LOW";
    sampleCount: number;
    adherenceRate: number;
    streaks: {
        longestMet: number;
        currentMet: number;
        currentFail: number;
    };
    recencyWeightedScore: number;
    averageMeasured?: number | undefined;
}, {
    windowSizeDays: 7 | 30 | 90;
    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
    stability: "HIGH" | "MEDIUM" | "LOW";
    sampleCount: number;
    adherenceRate: number;
    streaks: {
        longestMet: number;
        currentMet: number;
        currentFail: number;
    };
    recencyWeightedScore: number;
    averageMeasured?: number | undefined;
}>;
export type BehaviorWindow = z.infer<typeof behaviorWindowSchema>;
export declare const trackingWindowSchema: z.ZodObject<{
    windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
    averageMeasured: z.ZodOptional<z.ZodNumber>;
    trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
    stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
    sampleCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    windowSizeDays: 7 | 30 | 90;
    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
    stability: "HIGH" | "MEDIUM" | "LOW";
    sampleCount: number;
    averageMeasured?: number | undefined;
}, {
    windowSizeDays: 7 | 30 | 90;
    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
    stability: "HIGH" | "MEDIUM" | "LOW";
    sampleCount: number;
    averageMeasured?: number | undefined;
}>;
export type TrackingWindow = z.infer<typeof trackingWindowSchema>;
export declare const behaviorStateGoalSchema: z.ZodObject<{
    goalLabel: z.ZodString;
    unit: z.ZodString;
    targetValue: z.ZodOptional<z.ZodNumber>;
    goalType: z.ZodEnum<["MAX_PER_DAY", "MIN_PER_DAY", "ELIMINATE", "CUSTOM"]>;
}, "strip", z.ZodTypeAny, {
    goalLabel: string;
    unit: string;
    goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
    targetValue?: number | undefined;
}, {
    goalLabel: string;
    unit: string;
    goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
    targetValue?: number | undefined;
}>;
export type BehaviorStateGoal = z.infer<typeof behaviorStateGoalSchema>;
export declare const behaviorStateMetaSchema: z.ZodObject<{
    lastUpdatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
    dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
}, "strip", z.ZodTypeAny, {
    lastUpdatedAt: import("../types").Timestamp;
    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
}, {
    lastUpdatedAt: import("../types").Timestamp;
    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
}>;
export type BehaviorStateMeta = z.infer<typeof behaviorStateMetaSchema>;
export declare const recentSliceSchema: z.ZodObject<{
    days: z.ZodArray<z.ZodObject<{
        offset: z.ZodNumber;
        measured: z.ZodNumber;
        status: z.ZodEnum<["MET", "NOT_MET_FAIL", "UNSPECIFIED_FOR_DAY"]>;
    }, "strip", z.ZodTypeAny, {
        status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
        offset: number;
        measured: number;
    }, {
        status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
        offset: number;
        measured: number;
    }>, "many">;
    direction: z.ZodEnum<["IMPROVING", "DECLINING", "FLAT", "MIXED"]>;
    contrast: z.ZodEnum<["LOW", "MODERATE", "STRONG"]>;
    salience: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
}, "strip", z.ZodTypeAny, {
    days: {
        status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
        offset: number;
        measured: number;
    }[];
    direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
    contrast: "LOW" | "MODERATE" | "STRONG";
    salience: "HIGH" | "MEDIUM" | "LOW";
}, {
    days: {
        status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
        offset: number;
        measured: number;
    }[];
    direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
    contrast: "LOW" | "MODERATE" | "STRONG";
    salience: "HIGH" | "MEDIUM" | "LOW";
}>;
export type RecentSlice = z.infer<typeof recentSliceSchema>;
export declare const WINDOW_SIZES: {
    readonly short: 7;
    readonly medium: 30;
    readonly long: 90;
};
export type WindowKey = keyof typeof WINDOW_SIZES;
export declare const behaviorStateSchema: z.ZodObject<{
    behaviorId: z.ZodString;
    goal: z.ZodOptional<z.ZodObject<{
        goalLabel: z.ZodString;
        unit: z.ZodString;
        targetValue: z.ZodOptional<z.ZodNumber>;
        goalType: z.ZodEnum<["MAX_PER_DAY", "MIN_PER_DAY", "ELIMINATE", "CUSTOM"]>;
    }, "strip", z.ZodTypeAny, {
        goalLabel: string;
        unit: string;
        goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
        targetValue?: number | undefined;
    }, {
        goalLabel: string;
        unit: string;
        goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
        targetValue?: number | undefined;
    }>>;
    meaning: z.ZodOptional<z.ZodObject<{
        importance: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CORE"]>;
        emotionalTone: z.ZodObject<{
            primary: z.ZodEnum<["NEUTRAL", "FRUSTRATED", "ASHAMED", "CONFLICTED", "MOTIVATED", "RESIGNED"]>;
            confidence: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
        }, "strip", z.ZodTypeAny, {
            primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
            confidence: "HIGH" | "MEDIUM" | "LOW";
        }, {
            primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
            confidence: "HIGH" | "MEDIUM" | "LOW";
        }>;
        motivation: z.ZodObject<{
            reasons: z.ZodArray<z.ZodString, "many">;
            valuesLinked: z.ZodArray<z.ZodString, "many">;
            avoidanceDriven: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            reasons: string[];
            valuesLinked: string[];
            avoidanceDriven: boolean;
        }, {
            reasons: string[];
            valuesLinked: string[];
            avoidanceDriven: boolean;
        }>;
        selfNarrative: z.ZodObject<{
            identityStatement: z.ZodOptional<z.ZodString>;
            perceivedControl: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
        }, "strip", z.ZodTypeAny, {
            perceivedControl: "HIGH" | "MEDIUM" | "LOW";
            identityStatement?: string | undefined;
        }, {
            perceivedControl: "HIGH" | "MEDIUM" | "LOW";
            identityStatement?: string | undefined;
        }>;
        friction: z.ZodOptional<z.ZodObject<{
            commonTriggers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            highRiskContexts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            commonTriggers?: string[] | undefined;
            highRiskContexts?: string[] | undefined;
        }, {
            commonTriggers?: string[] | undefined;
            highRiskContexts?: string[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        motivation: {
            reasons: string[];
            valuesLinked: string[];
            avoidanceDriven: boolean;
        };
        importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
        emotionalTone: {
            primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
            confidence: "HIGH" | "MEDIUM" | "LOW";
        };
        selfNarrative: {
            perceivedControl: "HIGH" | "MEDIUM" | "LOW";
            identityStatement?: string | undefined;
        };
        friction?: {
            commonTriggers?: string[] | undefined;
            highRiskContexts?: string[] | undefined;
        } | undefined;
    }, {
        motivation: {
            reasons: string[];
            valuesLinked: string[];
            avoidanceDriven: boolean;
        };
        importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
        emotionalTone: {
            primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
            confidence: "HIGH" | "MEDIUM" | "LOW";
        };
        selfNarrative: {
            perceivedControl: "HIGH" | "MEDIUM" | "LOW";
            identityStatement?: string | undefined;
        };
        friction?: {
            commonTriggers?: string[] | undefined;
            highRiskContexts?: string[] | undefined;
        } | undefined;
    }>>;
    globalStreaks: z.ZodOptional<z.ZodObject<{
        currentStreak: z.ZodNumber;
        longestStreak: z.ZodNumber;
        currentStreakStartDate: z.ZodOptional<z.ZodString>;
        longestStreakStartDate: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        currentStreak: number;
        longestStreak: number;
        currentStreakStartDate?: string | undefined;
        longestStreakStartDate?: string | undefined;
    }, {
        currentStreak: number;
        longestStreak: number;
        currentStreakStartDate?: string | undefined;
        longestStreakStartDate?: string | undefined;
    }>>;
    windows: z.ZodObject<{
        short: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            adherenceRate: z.ZodNumber;
            averageMeasured: z.ZodOptional<z.ZodNumber>;
            trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
            stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
            streaks: z.ZodObject<{
                longestMet: z.ZodNumber;
                currentMet: z.ZodNumber;
                currentFail: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            }, {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            }>;
            recencyWeightedScore: z.ZodNumber;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        }>;
        medium: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            adherenceRate: z.ZodNumber;
            averageMeasured: z.ZodOptional<z.ZodNumber>;
            trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
            stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
            streaks: z.ZodObject<{
                longestMet: z.ZodNumber;
                currentMet: z.ZodNumber;
                currentFail: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            }, {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            }>;
            recencyWeightedScore: z.ZodNumber;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        }>;
        long: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            adherenceRate: z.ZodNumber;
            averageMeasured: z.ZodOptional<z.ZodNumber>;
            trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
            stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
            streaks: z.ZodObject<{
                longestMet: z.ZodNumber;
                currentMet: z.ZodNumber;
                currentFail: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            }, {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            }>;
            recencyWeightedScore: z.ZodNumber;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        };
    }, {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        };
    }>;
    trackingWindows: z.ZodOptional<z.ZodObject<{
        short: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            averageMeasured: z.ZodOptional<z.ZodNumber>;
            trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
            stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        }>;
        medium: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            averageMeasured: z.ZodOptional<z.ZodNumber>;
            trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
            stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        }>;
        long: z.ZodObject<{
            windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
            averageMeasured: z.ZodOptional<z.ZodNumber>;
            trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
            stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
    }, {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
    }>>;
    recentSlice: z.ZodOptional<z.ZodObject<{
        days: z.ZodArray<z.ZodObject<{
            offset: z.ZodNumber;
            measured: z.ZodNumber;
            status: z.ZodEnum<["MET", "NOT_MET_FAIL", "UNSPECIFIED_FOR_DAY"]>;
        }, "strip", z.ZodTypeAny, {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
            offset: number;
            measured: number;
        }, {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
            offset: number;
            measured: number;
        }>, "many">;
        direction: z.ZodEnum<["IMPROVING", "DECLINING", "FLAT", "MIXED"]>;
        contrast: z.ZodEnum<["LOW", "MODERATE", "STRONG"]>;
        salience: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
    }, "strip", z.ZodTypeAny, {
        days: {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
            offset: number;
            measured: number;
        }[];
        direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
        contrast: "LOW" | "MODERATE" | "STRONG";
        salience: "HIGH" | "MEDIUM" | "LOW";
    }, {
        days: {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
            offset: number;
            measured: number;
        }[];
        direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
        contrast: "LOW" | "MODERATE" | "STRONG";
        salience: "HIGH" | "MEDIUM" | "LOW";
    }>>;
    meta: z.ZodObject<{
        lastUpdatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
        dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
    }, "strip", z.ZodTypeAny, {
        lastUpdatedAt: import("../types").Timestamp;
        dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
    }, {
        lastUpdatedAt: import("../types").Timestamp;
        dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
    }>;
}, "strip", z.ZodTypeAny, {
    behaviorId: string;
    windows: {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        };
    };
    meta: {
        lastUpdatedAt: import("../types").Timestamp;
        dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
    };
    goal?: {
        goalLabel: string;
        unit: string;
        goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
        targetValue?: number | undefined;
    } | undefined;
    meaning?: {
        motivation: {
            reasons: string[];
            valuesLinked: string[];
            avoidanceDriven: boolean;
        };
        importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
        emotionalTone: {
            primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
            confidence: "HIGH" | "MEDIUM" | "LOW";
        };
        selfNarrative: {
            perceivedControl: "HIGH" | "MEDIUM" | "LOW";
            identityStatement?: string | undefined;
        };
        friction?: {
            commonTriggers?: string[] | undefined;
            highRiskContexts?: string[] | undefined;
        } | undefined;
    } | undefined;
    globalStreaks?: {
        currentStreak: number;
        longestStreak: number;
        currentStreakStartDate?: string | undefined;
        longestStreakStartDate?: string | undefined;
    } | undefined;
    trackingWindows?: {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
    } | undefined;
    recentSlice?: {
        days: {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
            offset: number;
            measured: number;
        }[];
        direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
        contrast: "LOW" | "MODERATE" | "STRONG";
        salience: "HIGH" | "MEDIUM" | "LOW";
    } | undefined;
}, {
    behaviorId: string;
    windows: {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            adherenceRate: number;
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            averageMeasured?: number | undefined;
        };
    };
    meta: {
        lastUpdatedAt: import("../types").Timestamp;
        dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
    };
    goal?: {
        goalLabel: string;
        unit: string;
        goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
        targetValue?: number | undefined;
    } | undefined;
    meaning?: {
        motivation: {
            reasons: string[];
            valuesLinked: string[];
            avoidanceDriven: boolean;
        };
        importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
        emotionalTone: {
            primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
            confidence: "HIGH" | "MEDIUM" | "LOW";
        };
        selfNarrative: {
            perceivedControl: "HIGH" | "MEDIUM" | "LOW";
            identityStatement?: string | undefined;
        };
        friction?: {
            commonTriggers?: string[] | undefined;
            highRiskContexts?: string[] | undefined;
        } | undefined;
    } | undefined;
    globalStreaks?: {
        currentStreak: number;
        longestStreak: number;
        currentStreakStartDate?: string | undefined;
        longestStreakStartDate?: string | undefined;
    } | undefined;
    trackingWindows?: {
        short: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
    } | undefined;
    recentSlice?: {
        days: {
            status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
            offset: number;
            measured: number;
        }[];
        direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
        contrast: "LOW" | "MODERATE" | "STRONG";
        salience: "HIGH" | "MEDIUM" | "LOW";
    } | undefined;
}>;
export type BehaviorState = z.infer<typeof behaviorStateSchema>;
export declare function isBehaviorState(value: unknown): value is BehaviorState;
export declare const behaviorSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
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
        behaviorId: z.ZodOptional<z.ZodString>;
        behaviorName: z.ZodOptional<z.ZodString>;
        behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
        trackingType: z.ZodOptional<z.ZodEnum<["counter", "timer"]>>;
        value: z.ZodOptional<z.ZodNumber>;
        formattedValue: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | undefined;
        formattedValue?: string | undefined;
    }, {
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | undefined;
        formattedValue?: string | undefined;
    }>>;
    hidden: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    behaviorTopicId: z.ZodOptional<z.ZodEnum<[string, ...string[]]>>;
    debriefQuestions: z.ZodOptional<z.ZodObject<{
        success: z.ZodArray<z.ZodDiscriminatedUnion<"responseType", [z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            metricId: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"text">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        } & {
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }, {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            metricId: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"emotion">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        } & {
            suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        }, {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            metricId: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"shortText">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        } & {
            suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        }, {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            metricId: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
                    lastUpdatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
                    dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                }, "strip", z.ZodTypeAny, {
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                }, {
                    lastUpdatedAt: import("../types").Timestamp;
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
                    lastUpdatedAt: import("../types").Timestamp;
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
                    lastUpdatedAt: import("../types").Timestamp;
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
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
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
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            text: z.ZodOptional<z.ZodString>;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            metricId: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"behaviorSelection">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        } & {
            allowMultiple: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            isTemplate: boolean;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            allowMultiple: boolean;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }, {
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            allowMultiple?: boolean | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            metricId: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"recap">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        } & {
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }, {
            text: string;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        }>]>, "many">;
        setback: z.ZodArray<z.ZodDiscriminatedUnion<"responseType", [z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            metricId: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"text">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        } & {
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }, {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            metricId: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"emotion">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        } & {
            suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        }, {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            metricId: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"shortText">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        } & {
            suggestedResponses: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        }, {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            metricId: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
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
                    lastUpdatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
                    dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                }, "strip", z.ZodTypeAny, {
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                }, {
                    lastUpdatedAt: import("../types").Timestamp;
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
                    lastUpdatedAt: import("../types").Timestamp;
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
                    lastUpdatedAt: import("../types").Timestamp;
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
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
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
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            text: z.ZodOptional<z.ZodString>;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            metricId: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"behaviorSelection">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        } & {
            allowMultiple: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            isTemplate: boolean;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            allowMultiple: boolean;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }, {
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            allowMultiple?: boolean | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            updatedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            textAfterResponse: z.ZodOptional<z.ZodString>;
            metricId: z.ZodOptional<z.ZodString>;
            lastAskedAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            lastAnsweredAt: z.ZodOptional<z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>>;
            numberOfAnswers: z.ZodOptional<z.ZodNumber>;
            isTemplate: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            isPinned: z.ZodOptional<z.ZodBoolean>;
            responseType: z.ZodLiteral<"recap">;
            scope: z.ZodEnum<["impulse" | "setback" | "success" | "recap", ...("impulse" | "setback" | "success" | "recap")[]]>;
        } & {
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isTemplate: boolean;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        }, {
            text: string;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        setback: ({
            isTemplate: boolean;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            allowMultiple: boolean;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        })[];
        success: ({
            isTemplate: boolean;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            allowMultiple: boolean;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        })[];
    }, {
        setback: ({
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            allowMultiple?: boolean | undefined;
        } | {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        } | {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        })[];
        success: ({
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            allowMultiple?: boolean | undefined;
        } | {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        } | {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        })[];
    }>>;
    state: z.ZodOptional<z.ZodObject<{
        behaviorId: z.ZodString;
        goal: z.ZodOptional<z.ZodObject<{
            goalLabel: z.ZodString;
            unit: z.ZodString;
            targetValue: z.ZodOptional<z.ZodNumber>;
            goalType: z.ZodEnum<["MAX_PER_DAY", "MIN_PER_DAY", "ELIMINATE", "CUSTOM"]>;
        }, "strip", z.ZodTypeAny, {
            goalLabel: string;
            unit: string;
            goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
            targetValue?: number | undefined;
        }, {
            goalLabel: string;
            unit: string;
            goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
            targetValue?: number | undefined;
        }>>;
        meaning: z.ZodOptional<z.ZodObject<{
            importance: z.ZodEnum<["LOW", "MEDIUM", "HIGH", "CORE"]>;
            emotionalTone: z.ZodObject<{
                primary: z.ZodEnum<["NEUTRAL", "FRUSTRATED", "ASHAMED", "CONFLICTED", "MOTIVATED", "RESIGNED"]>;
                confidence: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
            }, "strip", z.ZodTypeAny, {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            }, {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            }>;
            motivation: z.ZodObject<{
                reasons: z.ZodArray<z.ZodString, "many">;
                valuesLinked: z.ZodArray<z.ZodString, "many">;
                avoidanceDriven: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            }, {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            }>;
            selfNarrative: z.ZodObject<{
                identityStatement: z.ZodOptional<z.ZodString>;
                perceivedControl: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
            }, "strip", z.ZodTypeAny, {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            }, {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            }>;
            friction: z.ZodOptional<z.ZodObject<{
                commonTriggers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                highRiskContexts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            }, {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction?: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            } | undefined;
        }, {
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction?: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            } | undefined;
        }>>;
        globalStreaks: z.ZodOptional<z.ZodObject<{
            currentStreak: z.ZodNumber;
            longestStreak: z.ZodNumber;
            currentStreakStartDate: z.ZodOptional<z.ZodString>;
            longestStreakStartDate: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            currentStreak: number;
            longestStreak: number;
            currentStreakStartDate?: string | undefined;
            longestStreakStartDate?: string | undefined;
        }, {
            currentStreak: number;
            longestStreak: number;
            currentStreakStartDate?: string | undefined;
            longestStreakStartDate?: string | undefined;
        }>>;
        windows: z.ZodObject<{
            short: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                adherenceRate: z.ZodNumber;
                averageMeasured: z.ZodOptional<z.ZodNumber>;
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                streaks: z.ZodObject<{
                    longestMet: z.ZodNumber;
                    currentMet: z.ZodNumber;
                    currentFail: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                }, {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                }>;
                recencyWeightedScore: z.ZodNumber;
                sampleCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            }>;
            medium: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                adherenceRate: z.ZodNumber;
                averageMeasured: z.ZodOptional<z.ZodNumber>;
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                streaks: z.ZodObject<{
                    longestMet: z.ZodNumber;
                    currentMet: z.ZodNumber;
                    currentFail: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                }, {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                }>;
                recencyWeightedScore: z.ZodNumber;
                sampleCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            }>;
            long: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                adherenceRate: z.ZodNumber;
                averageMeasured: z.ZodOptional<z.ZodNumber>;
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                streaks: z.ZodObject<{
                    longestMet: z.ZodNumber;
                    currentMet: z.ZodNumber;
                    currentFail: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                }, {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                }>;
                recencyWeightedScore: z.ZodNumber;
                sampleCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
        }, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
        }>;
        trackingWindows: z.ZodOptional<z.ZodObject<{
            short: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                averageMeasured: z.ZodOptional<z.ZodNumber>;
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                sampleCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            }>;
            medium: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                averageMeasured: z.ZodOptional<z.ZodNumber>;
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                sampleCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            }>;
            long: z.ZodObject<{
                windowSizeDays: z.ZodUnion<[z.ZodLiteral<7>, z.ZodLiteral<30>, z.ZodLiteral<90>]>;
                averageMeasured: z.ZodOptional<z.ZodNumber>;
                trend: z.ZodEnum<["IMPROVING", "DECLINING", "STABLE", "VOLATILE", "INSUFFICIENT_DATA"]>;
                stability: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
                sampleCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
        }, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
        }>>;
        recentSlice: z.ZodOptional<z.ZodObject<{
            days: z.ZodArray<z.ZodObject<{
                offset: z.ZodNumber;
                measured: z.ZodNumber;
                status: z.ZodEnum<["MET", "NOT_MET_FAIL", "UNSPECIFIED_FOR_DAY"]>;
            }, "strip", z.ZodTypeAny, {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
                offset: number;
                measured: number;
            }, {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
                offset: number;
                measured: number;
            }>, "many">;
            direction: z.ZodEnum<["IMPROVING", "DECLINING", "FLAT", "MIXED"]>;
            contrast: z.ZodEnum<["LOW", "MODERATE", "STRONG"]>;
            salience: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
        }, "strip", z.ZodTypeAny, {
            days: {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
                offset: number;
                measured: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        }, {
            days: {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
                offset: number;
                measured: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        }>>;
        meta: z.ZodObject<{
            lastUpdatedAt: z.ZodType<import("../types").Timestamp, z.ZodTypeDef, import("../types").Timestamp>;
            dataCompleteness: z.ZodEnum<["HIGH", "MEDIUM", "LOW"]>;
        }, "strip", z.ZodTypeAny, {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        }, {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        }>;
    }, "strip", z.ZodTypeAny, {
        behaviorId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
        goal?: {
            goalLabel: string;
            unit: string;
            goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
            targetValue?: number | undefined;
        } | undefined;
        meaning?: {
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction?: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            } | undefined;
        } | undefined;
        globalStreaks?: {
            currentStreak: number;
            longestStreak: number;
            currentStreakStartDate?: string | undefined;
            longestStreakStartDate?: string | undefined;
        } | undefined;
        trackingWindows?: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
        } | undefined;
        recentSlice?: {
            days: {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
                offset: number;
                measured: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        } | undefined;
    }, {
        behaviorId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
        goal?: {
            goalLabel: string;
            unit: string;
            goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
            targetValue?: number | undefined;
        } | undefined;
        meaning?: {
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction?: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            } | undefined;
        } | undefined;
        globalStreaks?: {
            currentStreak: number;
            longestStreak: number;
            currentStreakStartDate?: string | undefined;
            longestStreakStartDate?: string | undefined;
        } | undefined;
        trackingWindows?: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
        } | undefined;
        recentSlice?: {
            days: {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
                offset: number;
                measured: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    trackingType: "counter" | "timer";
    name: string;
    description: string;
    ordinal: number;
    benefits: string[];
    drawbacks: string[];
    hidden: boolean;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    state?: {
        behaviorId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
        goal?: {
            goalLabel: string;
            unit: string;
            goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
            targetValue?: number | undefined;
        } | undefined;
        meaning?: {
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction?: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            } | undefined;
        } | undefined;
        globalStreaks?: {
            currentStreak: number;
            longestStreak: number;
            currentStreakStartDate?: string | undefined;
            longestStreakStartDate?: string | undefined;
        } | undefined;
        trackingWindows?: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
        } | undefined;
        recentSlice?: {
            days: {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
                offset: number;
                measured: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        } | undefined;
    } | undefined;
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
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | undefined;
        formattedValue?: string | undefined;
    } | undefined;
    behaviorTopicId?: string | undefined;
    debriefQuestions?: {
        setback: ({
            isTemplate: boolean;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            allowMultiple: boolean;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        })[];
        success: ({
            isTemplate: boolean;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            allowMultiple: boolean;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        })[];
    } | undefined;
}, {
    trackingType: "counter" | "timer";
    name: string;
    description: string;
    benefits: string[];
    drawbacks: string[];
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    state?: {
        behaviorId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
        goal?: {
            goalLabel: string;
            unit: string;
            goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
            targetValue?: number | undefined;
        } | undefined;
        meaning?: {
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction?: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            } | undefined;
        } | undefined;
        globalStreaks?: {
            currentStreak: number;
            longestStreak: number;
            currentStreakStartDate?: string | undefined;
            longestStreakStartDate?: string | undefined;
        } | undefined;
        trackingWindows?: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
        } | undefined;
        recentSlice?: {
            days: {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
                offset: number;
                measured: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        } | undefined;
    } | undefined;
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
    ordinal?: number | undefined;
    lastTrackedAt?: import("../types").Timestamp | undefined;
    tactics?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    initialUsage?: {
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | undefined;
        formattedValue?: string | undefined;
    } | undefined;
    hidden?: boolean | undefined;
    behaviorTopicId?: string | undefined;
    debriefQuestions?: {
        setback: ({
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            allowMultiple?: boolean | undefined;
        } | {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        } | {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        })[];
        success: ({
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            allowMultiple?: boolean | undefined;
        } | {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        } | {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        })[];
    } | undefined;
}>, {
    trackingType: "counter" | "timer";
    name: string;
    description: string;
    ordinal: number;
    benefits: string[];
    drawbacks: string[];
    hidden: boolean;
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    state?: {
        behaviorId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
        goal?: {
            goalLabel: string;
            unit: string;
            goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
            targetValue?: number | undefined;
        } | undefined;
        meaning?: {
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction?: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            } | undefined;
        } | undefined;
        globalStreaks?: {
            currentStreak: number;
            longestStreak: number;
            currentStreakStartDate?: string | undefined;
            longestStreakStartDate?: string | undefined;
        } | undefined;
        trackingWindows?: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
        } | undefined;
        recentSlice?: {
            days: {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
                offset: number;
                measured: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        } | undefined;
    } | undefined;
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
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | undefined;
        formattedValue?: string | undefined;
    } | undefined;
    behaviorTopicId?: string | undefined;
    debriefQuestions?: {
        setback: ({
            isTemplate: boolean;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            allowMultiple: boolean;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        })[];
        success: ({
            isTemplate: boolean;
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            allowMultiple: boolean;
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        } | {
            text: string;
            isTemplate: boolean;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isPinned?: boolean | undefined;
        })[];
    } | undefined;
}, {
    trackingType: "counter" | "timer";
    name: string;
    description: string;
    benefits: string[];
    drawbacks: string[];
    id?: string | undefined;
    createdAt?: import("../types").Timestamp | undefined;
    updatedAt?: import("../types").Timestamp | undefined;
    hasQuestions?: boolean | undefined;
    trackingUnit?: string | undefined;
    state?: {
        behaviorId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                adherenceRate: number;
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                averageMeasured?: number | undefined;
            };
        };
        meta: {
            lastUpdatedAt: import("../types").Timestamp;
            dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
        };
        goal?: {
            goalLabel: string;
            unit: string;
            goalType: "MAX_PER_DAY" | "MIN_PER_DAY" | "ELIMINATE" | "CUSTOM";
            targetValue?: number | undefined;
        } | undefined;
        meaning?: {
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction?: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            } | undefined;
        } | undefined;
        globalStreaks?: {
            currentStreak: number;
            longestStreak: number;
            currentStreakStartDate?: string | undefined;
            longestStreakStartDate?: string | undefined;
        } | undefined;
        trackingWindows?: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
        } | undefined;
        recentSlice?: {
            days: {
                status: "MET" | "NOT_MET_FAIL" | "UNSPECIFIED_FOR_DAY";
                offset: number;
                measured: number;
            }[];
            direction: "IMPROVING" | "DECLINING" | "FLAT" | "MIXED";
            contrast: "LOW" | "MODERATE" | "STRONG";
            salience: "HIGH" | "MEDIUM" | "LOW";
        } | undefined;
    } | undefined;
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
    ordinal?: number | undefined;
    lastTrackedAt?: import("../types").Timestamp | undefined;
    tactics?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    initialUsage?: {
        value?: number | undefined;
        behaviorId?: string | undefined;
        behaviorName?: string | undefined;
        behaviorTrackingUnit?: string | undefined;
        trackingType?: "counter" | "timer" | undefined;
        formattedValue?: string | undefined;
    } | undefined;
    hidden?: boolean | undefined;
    behaviorTopicId?: string | undefined;
    debriefQuestions?: {
        setback: ({
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            allowMultiple?: boolean | undefined;
        } | {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        } | {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        })[];
        success: ({
            responseType: "behaviorSelection";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            text?: string | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            allowMultiple?: boolean | undefined;
        } | {
            text: string;
            responseType: "emotion";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            responseType: "recap";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        } | {
            text: string;
            responseType: "shortText";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
            suggestedResponses?: string[] | undefined;
        } | {
            text: string;
            responseType: "slider1To10";
            scope: "impulse" | "setback" | "success" | "recap";
            sliderConfig: {
                minLabel?: string | undefined;
                maxLabel?: string | undefined;
            };
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
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
                    lastUpdatedAt: import("../types").Timestamp;
                    dataCompleteness: "HIGH" | "MEDIUM" | "LOW";
                };
            } | undefined;
        } | {
            text: string;
            responseType: "text";
            scope: "impulse" | "setback" | "success" | "recap";
            id?: string | undefined;
            createdAt?: import("../types").Timestamp | undefined;
            updatedAt?: import("../types").Timestamp | undefined;
            textAfterResponse?: string | undefined;
            metricId?: string | undefined;
            lastAskedAt?: import("../types").Timestamp | undefined;
            lastAnsweredAt?: import("../types").Timestamp | undefined;
            numberOfAnswers?: number | undefined;
            isTemplate?: boolean | undefined;
            isPinned?: boolean | undefined;
        })[];
    } | undefined;
}>;
export type Behavior = z.infer<typeof behaviorSchema>;
export declare const isBehavior: (value: unknown) => value is Behavior;
