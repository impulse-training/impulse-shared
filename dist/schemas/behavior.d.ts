import z from "zod";
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
    friction: z.ZodObject<{
        commonTriggers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        highRiskContexts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        commonTriggers?: string[] | undefined;
        highRiskContexts?: string[] | undefined;
    }, {
        commonTriggers?: string[] | undefined;
        highRiskContexts?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
    emotionalTone: {
        primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
        confidence: "HIGH" | "MEDIUM" | "LOW";
    };
    motivation: {
        reasons: string[];
        valuesLinked: string[];
        avoidanceDriven: boolean;
    };
    selfNarrative: {
        perceivedControl: "HIGH" | "MEDIUM" | "LOW";
        identityStatement?: string | undefined;
    };
    friction: {
        commonTriggers?: string[] | undefined;
        highRiskContexts?: string[] | undefined;
    };
}, {
    importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
    emotionalTone: {
        primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
        confidence: "HIGH" | "MEDIUM" | "LOW";
    };
    motivation: {
        reasons: string[];
        valuesLinked: string[];
        avoidanceDriven: boolean;
    };
    selfNarrative: {
        perceivedControl: "HIGH" | "MEDIUM" | "LOW";
        identityStatement?: string | undefined;
    };
    friction: {
        commonTriggers?: string[] | undefined;
        highRiskContexts?: string[] | undefined;
    };
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
    adherenceRate: number;
    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
    stability: "HIGH" | "MEDIUM" | "LOW";
    streaks: {
        longestMet: number;
        currentMet: number;
        currentFail: number;
    };
    recencyWeightedScore: number;
    sampleCount: number;
    averageMeasured?: number | undefined;
}, {
    windowSizeDays: 7 | 30 | 90;
    adherenceRate: number;
    trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
    stability: "HIGH" | "MEDIUM" | "LOW";
    streaks: {
        longestMet: number;
        currentMet: number;
        currentFail: number;
    };
    recencyWeightedScore: number;
    sampleCount: number;
    averageMeasured?: number | undefined;
}>;
export type BehaviorWindow = z.infer<typeof behaviorWindowSchema>;
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
        friction: z.ZodObject<{
            commonTriggers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            highRiskContexts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            commonTriggers?: string[] | undefined;
            highRiskContexts?: string[] | undefined;
        }, {
            commonTriggers?: string[] | undefined;
            highRiskContexts?: string[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
        emotionalTone: {
            primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
            confidence: "HIGH" | "MEDIUM" | "LOW";
        };
        motivation: {
            reasons: string[];
            valuesLinked: string[];
            avoidanceDriven: boolean;
        };
        selfNarrative: {
            perceivedControl: "HIGH" | "MEDIUM" | "LOW";
            identityStatement?: string | undefined;
        };
        friction: {
            commonTriggers?: string[] | undefined;
            highRiskContexts?: string[] | undefined;
        };
    }, {
        importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
        emotionalTone: {
            primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
            confidence: "HIGH" | "MEDIUM" | "LOW";
        };
        motivation: {
            reasons: string[];
            valuesLinked: string[];
            avoidanceDriven: boolean;
        };
        selfNarrative: {
            perceivedControl: "HIGH" | "MEDIUM" | "LOW";
            identityStatement?: string | undefined;
        };
        friction: {
            commonTriggers?: string[] | undefined;
            highRiskContexts?: string[] | undefined;
        };
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
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
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
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
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
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
        }, {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        short: {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
    }, {
        short: {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
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
    behaviorId: string;
    windows: {
        short: {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
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
        importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
        emotionalTone: {
            primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
            confidence: "HIGH" | "MEDIUM" | "LOW";
        };
        motivation: {
            reasons: string[];
            valuesLinked: string[];
            avoidanceDriven: boolean;
        };
        selfNarrative: {
            perceivedControl: "HIGH" | "MEDIUM" | "LOW";
            identityStatement?: string | undefined;
        };
        friction: {
            commonTriggers?: string[] | undefined;
            highRiskContexts?: string[] | undefined;
        };
    } | undefined;
}, {
    behaviorId: string;
    windows: {
        short: {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        medium: {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
            averageMeasured?: number | undefined;
        };
        long: {
            windowSizeDays: 7 | 30 | 90;
            adherenceRate: number;
            trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
            stability: "HIGH" | "MEDIUM" | "LOW";
            streaks: {
                longestMet: number;
                currentMet: number;
                currentFail: number;
            };
            recencyWeightedScore: number;
            sampleCount: number;
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
        importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
        emotionalTone: {
            primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
            confidence: "HIGH" | "MEDIUM" | "LOW";
        };
        motivation: {
            reasons: string[];
            valuesLinked: string[];
            avoidanceDriven: boolean;
        };
        selfNarrative: {
            perceivedControl: "HIGH" | "MEDIUM" | "LOW";
            identityStatement?: string | undefined;
        };
        friction: {
            commonTriggers?: string[] | undefined;
            highRiskContexts?: string[] | undefined;
        };
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
        behaviorId: z.ZodString;
        behaviorName: z.ZodString;
        behaviorTrackingUnit: z.ZodOptional<z.ZodString>;
        trackingType: z.ZodEnum<["counter", "timer"]>;
        value: z.ZodNumber;
        formattedValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }, {
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    }>>;
    hidden: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    behaviorTopicId: z.ZodOptional<z.ZodEnum<[string, ...string[]]>>;
    impulseQuestions: z.ZodOptional<z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
    debriefQuestions: z.ZodOptional<z.ZodObject<{
        success: z.ZodOptional<z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
        setback: z.ZodOptional<z.ZodArray<z.ZodType<import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>, z.ZodTypeDef, import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        success?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
        setback?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    }, {
        success?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
        setback?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
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
            friction: z.ZodObject<{
                commonTriggers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                highRiskContexts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            }, {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            };
        }, {
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            };
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
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
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
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
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
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            }, {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
        }, {
            short: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
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
        behaviorId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
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
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            };
        } | undefined;
    }, {
        behaviorId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
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
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            };
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
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    } | undefined;
    behaviorTopicId?: string | undefined;
    impulseQuestions?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    debriefQuestions?: {
        success?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
        setback?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    } | undefined;
    state?: {
        behaviorId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
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
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            };
        } | undefined;
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
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    } | undefined;
    hidden?: boolean | undefined;
    behaviorTopicId?: string | undefined;
    impulseQuestions?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    debriefQuestions?: {
        success?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
        setback?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    } | undefined;
    state?: {
        behaviorId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
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
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            };
        } | undefined;
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
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    } | undefined;
    behaviorTopicId?: string | undefined;
    impulseQuestions?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    debriefQuestions?: {
        success?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
        setback?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    } | undefined;
    state?: {
        behaviorId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
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
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            };
        } | undefined;
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
        value: number;
        behaviorId: string;
        behaviorName: string;
        trackingType: "counter" | "timer";
        formattedValue: string;
        behaviorTrackingUnit?: string | undefined;
    } | undefined;
    hidden?: boolean | undefined;
    behaviorTopicId?: string | undefined;
    impulseQuestions?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    debriefQuestions?: {
        success?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
        setback?: import("../utils/documentReferenceSchema").DocumentReferenceLike<unknown>[] | undefined;
    } | undefined;
    state?: {
        behaviorId: string;
        windows: {
            short: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            medium: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
                averageMeasured?: number | undefined;
            };
            long: {
                windowSizeDays: 7 | 30 | 90;
                adherenceRate: number;
                trend: "IMPROVING" | "DECLINING" | "STABLE" | "VOLATILE" | "INSUFFICIENT_DATA";
                stability: "HIGH" | "MEDIUM" | "LOW";
                streaks: {
                    longestMet: number;
                    currentMet: number;
                    currentFail: number;
                };
                recencyWeightedScore: number;
                sampleCount: number;
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
            importance: "HIGH" | "MEDIUM" | "LOW" | "CORE";
            emotionalTone: {
                primary: "NEUTRAL" | "FRUSTRATED" | "ASHAMED" | "CONFLICTED" | "MOTIVATED" | "RESIGNED";
                confidence: "HIGH" | "MEDIUM" | "LOW";
            };
            motivation: {
                reasons: string[];
                valuesLinked: string[];
                avoidanceDriven: boolean;
            };
            selfNarrative: {
                perceivedControl: "HIGH" | "MEDIUM" | "LOW";
                identityStatement?: string | undefined;
            };
            friction: {
                commonTriggers?: string[] | undefined;
                highRiskContexts?: string[] | undefined;
            };
        } | undefined;
    } | undefined;
}>;
export type Behavior = z.infer<typeof behaviorSchema>;
export declare const isBehavior: (value: unknown) => value is Behavior;
