import { z } from "zod";
import { objectOf, optionalObjectOf } from "../utils/objectOf";
import { outcomeSchema } from "../utils/outcomes";
import { timestampSchema } from "../utils/timestampSchema";
import { behaviorSchema } from "./behavior";
import { behaviorTrackingDataSchema } from "./log";
import { supportGroupPermissionsSchema } from "./supportGroupPermissions";
import { supportGroupSummarySchema } from "./utils/supportGroupSummary";

const outcomeEnum = outcomeSchema;

/** Schema for a single goal comparison entry */
export const goalComparisonEntrySchema = z.object({
  goalLabel: z.string(),
  unit: z.string(),
  measured: z.number(),
  targetValue: z.number().optional(),
  status: z.enum(["MET", "NOT_MET_FAIL", "UNSPECIFIED_FOR_DAY", "NO_GOAL"]),
});
export type GoalComparisonEntry = z.infer<typeof goalComparisonEntrySchema>;

/**
 * Per-behavior first/last occurrence times for the day (eliminate-goal stretch
 * metric). An absent or null field means "unknown" — the stretch engine applies
 * conservative start-of-day / end-of-day defaults AT COMPUTE TIME; defaults are
 * never stored here.
 */
export const behaviorDayBoundsSchema = z.object({
  firstAt: timestampSchema.nullable().optional(),
  lastAt: timestampSchema.nullable().optional(),
  // true = the user attested this field at recap; server-side derivation from
  // timed logs must not overwrite a confirmed field.
  firstAtConfirmed: z.boolean().optional(),
  lastAtConfirmed: z.boolean().optional(),
});
export type BehaviorDayBounds = z.infer<typeof behaviorDayBoundsSchema>;

/** Structured value emitted by the RecapResponseControl when the user confirms totals */
export const recapResponseValueSchema = z.object({
  behaviorTotals: z.record(
    z.string(),
    z.object({
      value: z.number(),
      formattedValue: z.string(),
      behaviorName: z.string(),
    }),
  ),
  summaryText: z.string(),
  goalComparisonByBehaviorId: z
    .record(z.string(), goalComparisonEntrySchema)
    .optional(),
  behaviorsById: z.record(z.string(), behaviorSchema).optional(),
});
export type RecapResponseValue = z.infer<typeof recapResponseValueSchema>;

export const daySummarySchema = z.object({
  id: z.string().optional(),
  // dateString: z.string(),
  userId: z.string(),
  impulseSessionOutcomesById: objectOf(outcomeEnum),
  // value units: minutes for timer, raw count for counter, scale level (1-3) for scale
  behaviorDataTotalByBehaviorId: objectOf(behaviorTrackingDataSchema),
  behaviorsById: objectOf(behaviorSchema).optional(),
  tacticsUsed: z.array(z.any()).default([]),
  summaryText: z.string().nullable(),
  supportGroupSummariesById: objectOf(supportGroupSummarySchema),
  supportGroupPermissionsById: optionalObjectOf(supportGroupPermissionsSchema),
  sharedWithUserIds: z.array(z.string()),
  // Per-behavior goal comparison for the day
  goalComparisonByBehaviorId: z
    .record(z.string(), goalComparisonEntrySchema)
    .optional(),
  // Per-session impulse data, keyed by sessionId for clean deletion tracking
  impulsesBySessionId: z
    .record(
      z.string(),
      z.object({
        behaviorIds: z.array(z.string()),
        actedOnUrge: z.boolean(),
      }),
    )
    .optional(),
  // Per-behavior first/last occurrence times (eliminate-goal stretch metric)
  behaviorDayBoundsByBehaviorId: optionalObjectOf(behaviorDayBoundsSchema),
  // When the user confirms their day totals
  dayTotalsConfirmedAt: timestampSchema.nullable(),
  // When the user confirms totals and starts the recap flow
  recapStartedAt: timestampSchema.optional(),
  recapCutoffTime: timestampSchema.optional(),
  // Tracks which support groups have been notified about this day's recap
  supportGroupNotificationSentAtById: z
    .record(z.string(), timestampSchema)
    .optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type DaySummary = z.infer<typeof daySummarySchema>;

export function isValidDaySummary(value: unknown): value is DaySummary {
  return daySummarySchema.safeParse(value).success;
}
