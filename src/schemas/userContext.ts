import { z } from "zod";
import {
  behaviorBenefitElementSchema,
  dataCompletenessSchema,
  trendSchema,
} from "./behavior";
import { timestampSchema } from "../utils/timestampSchema";

export const behaviorContextSchema = z.object({
  behaviorId: z.string(),
  behaviorName: z.string(),
  trackingType: z.enum(["counter", "timer", "boolean", "scale", "occurrence"]),
  description: z.string().optional(),
  // Tolerant like behaviorSchema.benefits: old denormalized copies hold bare
  // strings until afterUserBehaviorWrite re-propagates the structured shape.
  benefits: z.array(behaviorBenefitElementSchema).optional(),
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


/**
 * Category of a durable brain memory. The first five are what the weekly
 * insight extraction emits; `self_report` is a captured answer to a recap
 * reflection question, in the user's own words (see
 * impulse-functions/src/brain/captureRecapAnswer.ts).
 */
export const brainMemoryCategorySchema = z.enum([
  "trigger",
  "what_works",
  "what_doesnt",
  "pattern",
  "context",
  "self_report",
]);
export type BrainMemoryCategory = z.infer<typeof brainMemoryCategorySchema>;

/** One durable memory about the user, mirrored from the impulse-brain. */
export const brainMemorySchema = z.object({
  /** Thought id in the brain (for traceability / edits). */
  id: z.string(),
  /** Second-person, standalone statement ("You tend to…"). */
  statement: z.string(),
  category: brainMemoryCategorySchema,
  /** Behavior this memory is about; absent for general memories. */
  behaviorId: z.string().optional(),
  behaviorName: z.string().optional(),
  /** For self_report: the recap question node this answered. */
  questionId: z.string().optional(),
  /** For self_report: the question as it was asked. */
  question: z.string().optional(),
  /** ISO date-time the memory was captured in the brain. */
  createdAt: z.string(),
});
export type BrainMemory = z.infer<typeof brainMemorySchema>;

/**
 * Firestore mirror of what the impulse-brain holds about this user — the
 * living profile summary plus the active insights — so every prompt can inject
 * durable memory without a network hop to the brain at prompt-build time.
 * The brain (Supabase) remains the store of record; this is rewritten whole
 * by syncBrainToUserContext after every derivation / capture.
 */
export const userBrainMirrorSchema = z.object({
  /** The living "what we know about this user" profile, second person. */
  summary: z.string(),
  /** Active (non-superseded) memories, newest first, capped. */
  memories: z.array(brainMemorySchema),
  /** When the mirror was last rewritten from the brain. */
  syncedAt: timestampSchema,
  /** ISO date-time of the last completed insight derivation, if known. */
  derivedAt: z.string().optional(),
});
export type UserBrainMirror = z.infer<typeof userBrainMirrorSchema>;

export const userContextSchema = z.object({
  behaviors: z.record(behaviorContextSchema),
  tactics: z.record(tacticContextSchema),
  activeExperiment: activeExperimentContextSchema.nullable().optional(),
  communicationProfile: z.string().optional(),
  communicationProfileVersion: z.number().optional(),
  usage: impulseUsageStatsSchema.optional(),
  brain: userBrainMirrorSchema.optional(),
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
