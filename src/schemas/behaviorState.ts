import { z } from "zod";
import { timestampSchema } from "../utils/timestampSchema";

/**
 * Trend indicates the direction of behavior adherence over time
 */
export const trendSchema = z.enum([
  "IMPROVING",
  "DECLINING",
  "STABLE",
  "VOLATILE",
  "INSUFFICIENT_DATA",
]);
export type Trend = z.infer<typeof trendSchema>;

/**
 * Stability indicates how consistent the behavior pattern is
 */
export const stabilitySchema = z.enum(["HIGH", "MEDIUM", "LOW"]);
export type Stability = z.infer<typeof stabilitySchema>;

/**
 * Data completeness indicates how much data is available for the window
 */
export const dataCompletenessSchema = z.enum(["HIGH", "MEDIUM", "LOW"]);
export type DataCompleteness = z.infer<typeof dataCompletenessSchema>;

/**
 * Goal type for behavior state (simplified from the behavior goal schema)
 */
export const behaviorStateGoalTypeSchema = z.enum([
  "MAX_PER_DAY",
  "MIN_PER_DAY",
  "ELIMINATE",
  "CUSTOM",
]);
export type BehaviorStateGoalType = z.infer<typeof behaviorStateGoalTypeSchema>;

/**
 * Streaks tracking for a behavior window
 */
export const streaksSchema = z.object({
  longestMet: z.number(),
  currentMet: z.number(),
  currentFail: z.number(),
});
export type Streaks = z.infer<typeof streaksSchema>;

/**
 * BehaviorWindow represents computed metrics for a specific time window (7, 30, or 90 days)
 */
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

/**
 * Goal information stored in behavior state
 */
export const behaviorStateGoalSchema = z.object({
  goalLabel: z.string(),
  unit: z.string(),
  targetValue: z.number().optional(),
  goalType: behaviorStateGoalTypeSchema,
});
export type BehaviorStateGoal = z.infer<typeof behaviorStateGoalSchema>;

/**
 * Metadata for the behavior state document
 */
export const behaviorStateMetaSchema = z.object({
  lastUpdatedAt: timestampSchema,
  dataCompleteness: dataCompletenessSchema,
});
export type BehaviorStateMeta = z.infer<typeof behaviorStateMetaSchema>;

/**
 * BehaviorState represents the current behavioral state for a single behavior.
 * Stored at: users/{userId}/behaviorStates/{behaviorId}
 *
 * This document is derived from daySummary documents and is fully recomputable.
 * It tracks short (7d), medium (30d), and long (90d) windows of behavior data.
 */
export const behaviorStateSchema = z.object({
  behaviorId: z.string(),

  goal: behaviorStateGoalSchema.optional(),

  windows: z.object({
    short: behaviorWindowSchema,
    medium: behaviorWindowSchema,
    long: behaviorWindowSchema,
  }),

  meta: behaviorStateMetaSchema,
});
export type BehaviorState = z.infer<typeof behaviorStateSchema>;

export function isBehaviorState(value: unknown): value is BehaviorState {
  return behaviorStateSchema.safeParse(value).success;
}

/**
 * Window size constants
 */
export const WINDOW_SIZES = {
  short: 7,
  medium: 30,
  long: 90,
} as const;

export type WindowKey = keyof typeof WINDOW_SIZES;
