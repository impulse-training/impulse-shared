import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";
import { goalSchema } from "./goal";
import { behaviorTrackingDataSchema } from "./behaviorTrackingData";
import { behaviorTemplateBase } from "./behaviorTemplate";
import { behaviorTopicIdSchema } from "./behaviorTopic";
import { questionSchema } from "./question";

// Re-export for backward compatibility
export { trackingTypes } from "./behaviorTemplate";
export type { BehaviorTemplate, TrackingType } from "./behaviorTemplate";
export { behaviorTemplateSchema } from "./behaviorTemplate";

// Trend indicates the direction of behavior adherence over time
export const trendSchema = z.enum([
  "IMPROVING",
  "DECLINING",
  "STABLE",
  "VOLATILE",
  "INSUFFICIENT_DATA",
]);
export type Trend = z.infer<typeof trendSchema>;

// Stability indicates how consistent the behavior pattern is
export const stabilitySchema = z.enum(["HIGH", "MEDIUM", "LOW"]);
export type Stability = z.infer<typeof stabilitySchema>;

// Data completeness indicates how much data is available for the window
export const dataCompletenessSchema = z.enum(["HIGH", "MEDIUM", "LOW"]);
export type DataCompleteness = z.infer<typeof dataCompletenessSchema>;

// Goal type for behavior state (simplified from the behavior goal schema)
export const behaviorStateGoalTypeSchema = z.enum([
  "MAX_PER_DAY",
  "MIN_PER_DAY",
  "ELIMINATE",
  "CUSTOM",
]);
export type BehaviorStateGoalType = z.infer<typeof behaviorStateGoalTypeSchema>;

// Streaks tracking for a behavior window (window-scoped)
export const streaksSchema = z.object({
  longestMet: z.number(),
  currentMet: z.number(),
  currentFail: z.number(),
});
export type Streaks = z.infer<typeof streaksSchema>;

// Global streaks tracking (not limited to any window)
export const globalStreaksSchema = z.object({
  currentStreak: z.number(),
  longestStreak: z.number(),
  // Date when the current streak started (ISO date string)
  currentStreakStartDate: z.string().optional(),
  // Date when the longest streak started (ISO date string)
  longestStreakStartDate: z.string().optional(),
});
export type GlobalStreaks = z.infer<typeof globalStreaksSchema>;

// Rich, reflective meaning associated with a behavior
export const behaviorMeaningSchema = z.object({
  importance: z.enum(["LOW", "MEDIUM", "HIGH", "CORE"]),
  emotionalTone: z.object({
    primary: z.enum([
      "NEUTRAL",
      "FRUSTRATED",
      "ASHAMED",
      "CONFLICTED",
      "MOTIVATED",
      "RESIGNED",
    ]),
    confidence: z.enum(["LOW", "MEDIUM", "HIGH"]),
  }),
  motivation: z.object({
    reasons: z.array(z.string()),
    valuesLinked: z.array(z.string()),
    avoidanceDriven: z.boolean(),
  }),
  selfNarrative: z.object({
    identityStatement: z.string().optional(),
    perceivedControl: z.enum(["LOW", "MEDIUM", "HIGH"]),
  }),
  friction: z
    .object({
      commonTriggers: z.array(z.string()).optional(),
      highRiskContexts: z.array(z.string()).optional(),
    })
    .optional(),
});
export type BehaviorMeaning = z.infer<typeof behaviorMeaningSchema>;

// BehaviorWindow represents computed metrics for a specific time window (7, 30, or 90 days)
export const behaviorWindowSchema = z.object({
  windowSizeDays: z.union([z.literal(7), z.literal(30), z.literal(90)]),

  adherenceRate: z.number().min(0).max(1),
  averageMeasured: z.number().optional(),

  trend: trendSchema,
  stability: stabilitySchema,

  streaks: streaksSchema,

  recencyWeightedScore: z.number().min(0).max(1),

  sampleCount: z.number(),
});
export type BehaviorWindow = z.infer<typeof behaviorWindowSchema>;

// TrackingWindow represents computed metrics for a specific time window based on measured values
// (used for behaviors without goals).
export const trackingWindowSchema = z.object({
  windowSizeDays: z.union([z.literal(7), z.literal(30), z.literal(90)]),

  averageMeasured: z.number().optional(),

  trend: trendSchema,
  stability: stabilitySchema,

  sampleCount: z.number(),
});
export type TrackingWindow = z.infer<typeof trackingWindowSchema>;

// Goal information stored in behavior state
export const behaviorStateGoalSchema = z.object({
  goalLabel: z.string(),
  unit: z.string(),
  targetValue: z.number().optional(),
  goalType: behaviorStateGoalTypeSchema,
});
export type BehaviorStateGoal = z.infer<typeof behaviorStateGoalSchema>;

// Metadata for the behavior state
export const behaviorStateMetaSchema = z.object({
  lastUpdatedAt: timestampSchema,
  dataCompleteness: dataCompletenessSchema,
});
export type BehaviorStateMeta = z.infer<typeof behaviorStateMetaSchema>;

export const recentSliceSchema = z.object({
  days: z
    .array(
      z.object({
        offset: z.number().int().min(0),
        measured: z.number(),
        status: z.enum(["MET", "NOT_MET_FAIL", "UNSPECIFIED_FOR_DAY"]),
      }),
    )
    .max(5),

  direction: z.enum(["IMPROVING", "DECLINING", "FLAT", "MIXED"]),

  contrast: z.enum(["LOW", "MODERATE", "STRONG"]),

  salience: z.enum(["LOW", "MEDIUM", "HIGH"]),
});
export type RecentSlice = z.infer<typeof recentSliceSchema>;

// Window size constants
export const WINDOW_SIZES = {
  short: 7,
  medium: 30,
  long: 90,
} as const;
export type WindowKey = keyof typeof WINDOW_SIZES;

// BehaviorState represents the embedded state for a single behavior at
// users/{userId}/behaviors/{behaviorId}.state
export const behaviorStateSchema = z.object({
  behaviorId: z.string(),

  goal: behaviorStateGoalSchema.optional(),

  meaning: behaviorMeaningSchema.optional(),

  // Global streaks (not limited to any window)
  globalStreaks: globalStreaksSchema.optional(),

  windows: z.object({
    short: behaviorWindowSchema,
    medium: behaviorWindowSchema,
    long: behaviorWindowSchema,
  }),

  trackingWindows: z
    .object({
      short: trackingWindowSchema,
      medium: trackingWindowSchema,
      long: trackingWindowSchema,
    })
    .optional(),

  recentSlice: recentSliceSchema.optional(),

  meta: behaviorStateMetaSchema,
});
export type BehaviorState = z.infer<typeof behaviorStateSchema>;

export function isBehaviorState(value: unknown): value is BehaviorState {
  return behaviorStateSchema.safeParse(value).success;
}

// These are stored at the user-level, as in, users/$userId/behaviors/$behaviorId
export const behaviorSchema = behaviorTemplateBase
  .extend({
    id: z.string().optional(),
    description: z.string(),
    ordinal: z.number().default(0),
    benefits: z.array(z.string()),
    drawbacks: z.array(z.string()),
    goal: goalSchema.optional(),
    lastTrackedAt: timestampSchema.optional(),
    tactics: z.array(documentReferenceSchema).optional(),
    initialUsage: behaviorTrackingDataSchema.optional(),
    hidden: z.boolean().optional().default(false),
    // Reference to the behavior topic (e.g., "substances", "digital-screen-use")
    // Used for matching users to support groups with similar focus areas
    behaviorTopicId: behaviorTopicIdSchema.optional(),
    // Questions to ask during debrief (success/setback)
    debriefQuestions: z
      .object({
        success: z.array(questionSchema),
        setback: z.array(questionSchema),
      })
      .optional(),
    // Computed state for this behavior (windows, trend, etc.)
    state: behaviorStateSchema.optional(),
  })
  .superRefine((val, ctx) => {
    if (val.trackingType === "counter" && !val.trackingUnit) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Tracking unit is required when tracking type is 'counter'",
        path: ["trackingUnit"],
      });
    }
  });

// Export types inferred from schemas
export type Behavior = z.infer<typeof behaviorSchema>;

export const isBehavior = (value: unknown): value is Behavior =>
  behaviorSchema.safeParse(value).success;
