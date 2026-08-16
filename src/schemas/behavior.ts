import { z } from "zod";
import { documentReferenceSchema } from "../utils/documentReferenceSchema";
import { timestampSchema } from "../utils/timestampSchema";
import { goalSchema } from "./goal";
import { behaviorTrackingDataSchema } from "./behaviorTrackingData";
import { behaviorTemplateBase } from "./behaviorTemplate";
import { behaviorTopicIdSchema } from "./behaviorTopic";
import {
  milestoneProgressSchema,
  milestoneRungSchema,
} from "./milestoneAchievement";

// Re-export for backward compatibility
export { trackingTypes, baselinePeriods, streakLabels } from "./behaviorTemplate";
export type {
  BehaviorTemplate,
  TrackingType,
  BaselinePeriod,
  StreakLabel,
} from "./behaviorTemplate";
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

// Stage of Change (Prochaska & DiClemente's Transtheoretical Model). A
// first-class, user-declared primitive per behavior — NOT inferred from data.
// Drives which reflective recap questions are surfaced: e.g. once a user is in
// "action", questions designed to move them *toward* acting (readiness checks,
// "when did you realize you wanted to change") are no longer served.
export const changeStageSchema = z.enum([
  "precontemplation",
  "contemplation",
  "preparation",
  "action",
  "maintenance",
  "relapse",
]);
export type ChangeStage = z.infer<typeof changeStageSchema>;

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

// Sub-day "time without the behavior" stats for eliminate goals. Wall-clock
// anchored: clients render the live figure as now − currentStartAt.
export const behaviorStretchesSchema = z.object({
  longestMs: z.number(),
  longestStartAt: timestampSchema.optional(),
  // Null/absent while the longest stretch is the ongoing one. Written as an
  // explicit null (not omitted) because behavior state is persisted with a
  // deep merge — omission would leave a stale end time behind.
  longestEndAt: timestampSchema.nullable().optional(),
  // When the current stretch began (last occurrence, or a conservative day
  // boundary when times are unknown). MAY BE IN THE FUTURE (acted today with
  // unknown last time → end of today) — consumers must clamp elapsed to 0.
  currentStartAt: timestampSchema.optional(),
});
export type BehaviorStretches = z.infer<typeof behaviorStretchesSchema>;

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
        // Whether the user confirmed this day's totals (dayTotalsConfirmedAt on
        // the daySummary). Unconfirmed days (incl. an in-progress today) are
        // rendered as gaps in the behavior-card trendline rather than points.
        // Optional so legacy docs (written before this field) stay valid; the
        // writers always populate it, and a missing value reads as unconfirmed.
        confirmed: z.boolean().optional(),
      }),
    )
    .max(7),

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
// How much this behavior actually figures in the user's struggle, derived
// from what the logs prove rather than declared: impulse-session mass over the
// trailing 90 days, recency-weighted (30-day half-life, acted-on urges count
// double), normalized to 0..1 via rw/(rw+K). Computed by updateBehaviorState
// alongside the windows, from the same daySummaries. Consumers should read
// salience through `effectiveBehaviorSalience` (utils), which lets the
// behavior's explicit `importance` override this derived weight.
export const behaviorStruggleSchema = z.object({
  impulseCount90d: z.number(),
  impulseCount7d: z.number(),
  lapseCount90d: z.number(),
  /** Recency-weighted impulse mass the weight was normalized from. */
  recencyWeighted: z.number(),
  /** Normalized 0..1 struggle weight. */
  weight: z.number().min(0).max(1),
  lastImpulseAt: timestampSchema.optional(),
});
export type BehaviorStruggle = z.infer<typeof behaviorStruggleSchema>;

export const behaviorStateSchema = z.object({
  behaviorId: z.string(),

  goal: behaviorStateGoalSchema.optional(),

  meaning: behaviorMeaningSchema.optional(),

  struggle: behaviorStruggleSchema.optional(),

  // Global streaks (not limited to any window)
  globalStreaks: globalStreaksSchema.optional(),

  // Sub-day stretch stats (eliminate goals only)
  stretches: behaviorStretchesSchema.optional(),

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

  milestoneProgress: milestoneProgressSchema.optional(),

  meta: behaviorStateMetaSchema,
});
export type BehaviorState = z.infer<typeof behaviorStateSchema>;

export function isBehaviorState(value: unknown): value is BehaviorState {
  return behaviorStateSchema.safeParse(value).success;
}

// The normalized "need" a behavior serves — the underlying pull behind a
// benefit. Deliberately small and closed: it exists so benefits can be matched
// across behaviors ("things that relax me") when suggesting substitutes.
// `need` is optional on each benefit — the model tags a need only when
// confident; absence means "other/unclassified", so there is no "other" value.
export const benefitNeedSchema = z.enum([
  "relaxation", // winding down, calming, stress relief
  "stimulation", // excitement, novelty, the dopamine hit
  "escape", // numbing / avoiding feelings or situations
  "connection", // social belonging, intimacy, not feeling alone
  "control", // sense of agency, order, autonomy
  "pleasure", // sensory enjoyment (taste, arousal, physical feel)
  "achievement", // progress, mastery, competence
  "boredom_relief", // filling empty time
  "comfort", // self-soothing, familiarity, safety
  "focus", // concentration, alertness, mental energy
]);
export type BenefitNeed = z.infer<typeof benefitNeedSchema>;

// One benefit a behavior gives the user: their own words, plus (when the
// model/coach is confident) the normalized need it serves.
export const behaviorBenefitSchema = z.object({
  /** What the behavior gives them, in the user's own words. */
  text: z.string().min(1),
  need: benefitNeedSchema.optional(),
});
export type BehaviorBenefit = z.infer<typeof behaviorBenefitSchema>;

// Tolerant element schema: benefits were historically bare strings, and old
// docs (and old denormalized userContexts copies) still hold them. Strings
// parse and normalize to `{ text }`, so schema validation stays green across
// both shapes and no deploy ordering hinges on the data migration
// (migrateBehaviorBenefitsShape in impulse-functions is hygiene, not a gate).
export const behaviorBenefitElementSchema = z.union([
  behaviorBenefitSchema,
  z
    .string()
    .min(1)
    .transform((text) => ({ text }))
    .pipe(behaviorBenefitSchema),
]);

/**
 * Normalize a raw `benefits` value (possibly legacy `string[]`, possibly mixed)
 * into structured entries. Most readers cast Firestore data without zod
 * parsing, so anything consuming benefits should go through this.
 */
export const normalizeBehaviorBenefits = (raw: unknown): BehaviorBenefit[] => {
  if (!Array.isArray(raw)) return [];
  const entries: BehaviorBenefit[] = [];
  for (const item of raw) {
    if (typeof item === "string") {
      const text = item.trim();
      if (text) entries.push({ text });
    } else if (
      item &&
      typeof item === "object" &&
      typeof (item as { text?: unknown }).text === "string"
    ) {
      const text = (item as { text: string }).text.trim();
      if (!text) continue;
      const need = (item as { need?: unknown }).need;
      entries.push(
        benefitNeedSchema.safeParse(need).success
          ? { text, need: need as BenefitNeed }
          : { text },
      );
    }
  }
  return entries;
};

/**
 * The one shared rendering of benefits/drawbacks for LLM prompts (used by
 * impulse-tools, impulse-functions and impulse-voice-agent so the framing
 * never drifts). Returns [] when there is nothing to say; callers join with
 * newlines at whatever indent suits their prompt.
 */
export const formatBenefitsForPrompt = (
  benefits: unknown,
  drawbacks: string[] | undefined,
): string[] => {
  const lines: string[] = [];
  const normalized = normalizeBehaviorBenefits(benefits);
  if (normalized.length > 0) {
    const rendered = normalized
      .map((b) => (b.need ? `${b.need.replace("_", " ")}: "${b.text}"` : `"${b.text}"`))
      .join("; ");
    lines.push(`What it gives them: ${rendered}`);
  }
  const cleanedDrawbacks = (drawbacks ?? [])
    .map((d) => d.trim())
    .filter(Boolean);
  if (cleanedDrawbacks.length > 0) {
    lines.push(`What it costs them: ${cleanedDrawbacks.join("; ")}`);
  }
  return lines;
};

// These are stored at the user-level, as in, users/$userId/behaviors/$behaviorId
// A coach-granted, retroactive streak rescue: a specific NOT_MET_FAIL day that
// should NOT break the streak. The usage stays logged and honest — only the
// streak forgives the day. Set only via the coach dashboard (coach-only for now).
export const streakForgivenessEntrySchema = z.object({
  /** Local ISO date (YYYY-MM-DD) of the forgiven day. */
  date: z.string(),
  reason: z.string().optional(),
  byCoachId: z.string().optional(),
  at: timestampSchema,
});
export type StreakForgivenessEntry = z.infer<typeof streakForgivenessEntrySchema>;

export const behaviorSchema = behaviorTemplateBase
  .extend({
    id: z.string().optional(),
    description: z.string(),
    ordinal: z.number().default(0),
    // What the behavior gives the user. Structured (see behaviorBenefitSchema);
    // legacy string entries still parse via the tolerant element schema.
    // Captured conversationally by the understand_behavior task
    // (updateBehaviorUnderstanding tool). Drawbacks stay freeform strings —
    // only benefits need the normalized `need` dimension for substitute
    // matching.
    benefits: z.array(behaviorBenefitElementSchema).default([]),
    drawbacks: z.array(z.string()).default([]),
    goal: goalSchema.optional(),
    lastTrackedAt: timestampSchema.optional(),
    // Tactics pinned to this behavior. Surfaced as a ranking boost for
    // in-the-moment recommendations on sessions involving this behavior.
    tactics: z.array(documentReferenceSchema).optional(),
    // Tactic IDs to never recommend in-the-moment for this behavior. Applied as
    // a hard exclude in the scoring engine. Set by the user or a coach when a
    // tactic is a poor fit for this behavior (e.g. cold-water for arousal urges).
    suppressedTacticIds: z.array(z.string()).optional(),
    initialUsage: behaviorTrackingDataSchema.optional(),
    // The user's (or coach's) explicit statement of how much this behavior
    // matters to their struggle, 1 (peripheral) to 5 (the core of why they're
    // here). Optional: absent means "let the data speak" — the derived
    // state.struggle.weight carries salience instead. Read through
    // `effectiveBehaviorSalience` (utils), never directly, so the override
    // and the derived weight stay interchangeable to consumers.
    importance: z.number().int().min(1).max(5).optional(),
    masked: z.boolean().optional().default(false),
    behaviorTemplateId: z.string().optional(),
    // Display color for this behavior (hex string, e.g. "#C4362C")
    color: z.string().optional(),
    // Reference to the behavior topic (e.g., "substances", "digital-screen-use")
    // Used for matching users to support groups with similar focus areas
    behaviorTopicId: behaviorTopicIdSchema.optional(),
    // When true, the recap session should collect baseline usage data for this behavior
    needsBaselineData: z.boolean().optional().default(false),
    // User-declared Stage of Change for this behavior (Transtheoretical Model).
    // Set explicitly by the user; gates which reflective recap questions are
    // surfaced. Absent = unknown → no stage gating applied.
    changeStage: changeStageSchema.optional(),
    // When the user last set/changed changeStage.
    changeStageUpdatedAt: timestampSchema.optional(),
    customMilestoneRungs: z.array(milestoneRungSchema).optional(),
    mergedIntoBehaviorId: z.string().optional(),
    mergedFromBehaviorIds: z.array(z.string()).optional(),
    mergedAt: timestampSchema.optional(),
    // User-confirmed streak start date (ISO string), set when backdating a streak after a goal change
    streakOverrideStartDate: z.string().optional(),
    // Coach-granted retroactive streak rescues (per-day). A forgiven NOT_MET_FAIL
    // day is treated as non-breaking by computeGlobalStreaks; the underlying
    // usage/logs are untouched. Complementary to `tolerance` (prospective by
    // design and unable to rescue a past break).
    streakForgiveness: z.array(streakForgivenessEntrySchema).optional(),
    // Grace band for win-day streaks, in the same unit as the day's measured
    // total (minutes for timers, raw count for counters). A day still counts
    // toward the streak when its total stays within goal target + tolerance.
    // Sourced from the behavior template's defaultTolerance at creation
    // (0 for abstinence-style behaviors), user-overridable.
    //
    // IMPORTANT: tolerance is invisible prospectively. It is NEVER surfaced as a
    // "remaining today"/spend-down budget anywhere in the UI. The displayed
    // target stays at the goal (0 for eliminate); tolerance only ever operates
    // silently as streak-survival, observed after the fact.
    // Optional (not `.default(0)`) so it stays additive — absent is treated as 0
    // by resolveEffectiveTolerance / computeGoalComparison.
    tolerance: z.number().optional(),
    // A scheduled tolerance change that only takes effect from effectiveDate
    // (local ISO date, YYYY-MM-DD) forward. This is the edit guard: editing
    // tolerance sets effectiveDate = tomorrow so it cannot retroactively rescue
    // a break already in progress for the current day.
    pendingTolerance: z
      .object({ value: z.number(), effectiveDate: z.string() })
      .optional(),
    // Computed state for this behavior (windows, trend, etc.)
    state: behaviorStateSchema.optional(),
    // High-water mark: the largest single-day total ever recorded for this
    // behavior, in the SAME canonical unit as daySummary
    // behaviorDataTotalByBehaviorId.value (minutes for timer, raw count for
    // counter, level for scale). Used purely as the fixed y-axis ceiling for
    // behavior charts so bar heights stay comparable across weeks instead of
    // rescaling to each week's own max. Maintained monotonically by
    // reaggregateDaySummaryBehaviorTotals (bumped when a day's total exceeds
    // it) and populated historically by backfillMaxTrackedPerDay. Absent for
    // behaviors with no tracked data yet; consumers fall back to the visible
    // window's max.
    maxTrackedPerDay: z.number().optional(),
  });

// Export types inferred from schemas
export type Behavior = z.infer<typeof behaviorSchema>;

export const isBehavior = (value: unknown): value is Behavior =>
  behaviorSchema.safeParse(value).success;
