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
  outcome: outcomeEnum.optional(),
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
