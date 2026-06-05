import { z } from "zod";
import { dataCompletenessSchema, trendSchema } from "./behavior";
import { timestampSchema } from "../utils/timestampSchema";

export const behaviorContextSchema = z.object({
  behaviorId: z.string(),
  behaviorName: z.string(),
  trackingType: z.enum(["counter", "timer", "boolean", "scale"]),
  description: z.string().optional(),
  benefits: z.array(z.string()).optional(),
  drawbacks: z.array(z.string()).optional(),
  trackingUnit: z.string().optional(),
  goalLabel: z.string().optional(),
});

export const tacticContextSchema = z.object({
  tacticId: z.string(),
  title: z.string(),
  description: z.string().optional(),
  instructions: z.string().optional(),
});

export const activeExperimentContextSchema = z.object({
  behaviorIds: z.array(z.string()),
  behaviorNames: z.array(z.string()),
  experimentQuestion: z.string(),
  observations: z.array(z.string()),
});

/**
 * One time-window of Impulse Mode catch-rate data. Mirrors the behavior-state
 * windowing (short/medium/long = 7/30/90 days) so the two trend systems read
 * consistently. `trend` compares this window's catch rate to its longer-window
 * baseline; `dataCompleteness` reflects how many events fell in the window
 * (impulse events are far sparser than daily behavior samples, so absolute
 * event-count thresholds are used rather than a per-day ratio).
 */
export const catchRateWindowSchema = z.object({
  windowSizeDays: z.union([z.literal(7), z.literal(30), z.literal(90)]),
  /** Impulse Mode sessions in the window (caught moments). */
  activations: z.number(),
  /** Direct behavior logs in the window (missed moments). */
  misses: z.number(),
  /** activations / (activations + misses); null when no events in the window. */
  catchRate: z.number().min(0).max(1).nullable(),
  /** activations + misses. */
  sampleCount: z.number(),
  trend: trendSchema,
  dataCompleteness: dataCompletenessSchema,
});

export type CatchRateWindow = z.infer<typeof catchRateWindowSchema>;

/**
 * Denormalized Impulse Mode usage stats, refreshed daily at recap-build (and by
 * the backfill script). Lets the recap AI calibrate framing to the user's real
 * engagement — critically, the catch rate: how often they reach for Impulse Mode
 * when an urge hits (activations) vs. logging the behavior directly (misses).
 */
export const impulseUsageStatsSchema = z.object({
  /** Lifetime count of Impulse Mode sessions (caught moments). */
  impulseActivations: z.number(),
  /** Lifetime count of behavior occurrence logs NOT tied to an impulse session (misses). */
  directLogs: z.number(),
  catchRateLifetime: z.number().nullable(),
  /** Catch-rate windows mirroring behavior-state windowing (7/30/90 days). */
  windows: z.object({
    short: catchRateWindowSchema,
    medium: catchRateWindowSchema,
    long: catchRateWindowSchema,
  }),
  firstImpulseAt: timestampSchema.nullable().optional(),
  lastImpulseAt: timestampSchema.nullable().optional(),
  /** Local date the stats were last computed for; used to skip same-day recompute. */
  computedDateString: z.string().optional(),
  computedAt: timestampSchema.optional(),
});

export type ImpulseUsageStats = z.infer<typeof impulseUsageStatsSchema>;

export const userContextSchema = z.object({
  behaviors: z.record(behaviorContextSchema),
  tactics: z.record(tacticContextSchema),
  activeExperiment: activeExperimentContextSchema.nullable().optional(),
  communicationProfile: z.string().optional(),
  communicationProfileVersion: z.number().optional(),
  usage: impulseUsageStatsSchema.optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

// Export types inferred from schemas
export type BehaviorContext = z.infer<typeof behaviorContextSchema>;
export type TacticContext = z.infer<typeof tacticContextSchema>;
export type ActiveExperimentContext = z.infer<
  typeof activeExperimentContextSchema
>;
export type UserContext = z.infer<typeof userContextSchema>;

// Type guard functions
export const isBehaviorContext = (value: unknown): value is BehaviorContext => {
  return behaviorContextSchema.safeParse(value).success;
};

export const isTacticContext = (value: unknown): value is TacticContext => {
  return tacticContextSchema.safeParse(value).success;
};

export const isUserContext = (value: unknown): value is UserContext => {
  return userContextSchema.safeParse(value).success;
};
