import { z } from "zod";
import { objectOf, optionalObjectOf } from "../utils/objectOf";
import { timestampSchema } from "../utils/timestampSchema";
import { behaviorSchema } from "./behavior";
import { behaviorTrackingDataSchema } from "./log";
import { supportGroupPermissionsSchema } from "./supportGroupPermissions";

const outcomeEnum = z.enum(["success", "partial", "setback"]);

/** Schema for a single goal comparison entry */
export const goalComparisonEntrySchema = z.object({
  goalLabel: z.string(),
  unit: z.string(),
  measured: z.number(),
  targetValue: z.number().optional(),
  status: z.enum(["MET", "NOT_MET_FAIL", "UNSPECIFIED_FOR_DAY", "NO_GOAL"]),
});
export type GoalComparisonEntry = z.infer<typeof goalComparisonEntrySchema>;

export const daySummarySchema = z.object({
  id: z.string().optional(),
  // dateString: z.string(),
  userId: z.string(),
  impulseThreadOutcomesById: objectOf(outcomeEnum),
  outcome: outcomeEnum.optional(),
  behaviorDataTotalByBehaviorId: objectOf(behaviorTrackingDataSchema),
  behaviorsById: objectOf(behaviorSchema).optional(),
  tacticsUsed: z.array(z.any()).default([]),
  summaryText: z.string().default(""),
  supportGroupPermissionsById: optionalObjectOf(supportGroupPermissionsSchema),
  sharedWithUserIds: z.array(z.string()),
  // Per-behavior goal comparison for the day
  goalComparisonByBehaviorId: z
    .record(z.string(), goalComparisonEntrySchema)
    .optional(),
  // When all recap requirements are met (recap question answered + experiment questions if applicable)
  recapCompletedAt: timestampSchema.nullable(),
  // When the user explicitly marks the recap as complete (clicks "Finish Recap" or closes sheet)
  recapMarkedAsCompletedAt: timestampSchema.optional(),
  // When the user confirms totals and starts the recap flow
  recapStartedAt: timestampSchema.optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type DaySummary = z.infer<typeof daySummarySchema>;

export function isValidDaySummary(value: unknown): value is DaySummary {
  return daySummarySchema.safeParse(value).success;
}
