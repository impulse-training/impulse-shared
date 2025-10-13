import { z } from "zod";
import { objectOf, optionalObjectOf } from "../utils/objectOf";
import { timestampSchema } from "../utils/timestampSchema";
import { behaviorSchema } from "./behavior";
import { behaviorTrackingDataSchema } from "./log";
import { supportGroupPermissionsSchema } from "./supportGroup";

const outcomeEnum = z.enum(["success", "partial", "setback"]);
export const daySummarySchema = z.object({
  id: z.string().optional(),
  // dateString: z.string(),
  userId: z.string(),
  impulseThreadOutcomesById: objectOf(outcomeEnum),
  outcome: outcomeEnum.optional(),
  behaviorDataTotalByBehaviorId: objectOf(behaviorTrackingDataSchema),
  behaviorsById: objectOf(behaviorSchema).optional(),
  trackingLogsById: z.record(z.string(), z.any()).optional(),
  tacticsUsed: z.array(z.any()).default([]),
  summaryText: z.string().default(""),
  supportGroupPermissionsById: optionalObjectOf(supportGroupPermissionsSchema),
  sharedWithUserIds: z.array(z.string()),
  // Per-behavior goal comparison for the day
  goalComparisonByBehaviorId: z
    .record(
      z.string(),
      z.object({
        goalLabel: z.string(),
        unit: z.string(),
        measured: z.number(),
        targetValue: z.number().optional(),
        status: z.enum([
          "MET",
          "NOT_MET_FAIL",
          "UNSPECIFIED_FOR_DAY",
          "NO_GOAL",
        ]),
      })
    )
    .optional(),
  recapCompletedAt: timestampSchema.optional(),
  // When the user confirms totals and starts the recap flow
  recapStartedAt: timestampSchema.optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type DaySummary = z.infer<typeof daySummarySchema>;
export type GoalComparisonEntry = NonNullable<
  DaySummary["goalComparisonByBehaviorId"]
>[string];

export function isValidDaySummary(value: unknown): value is DaySummary {
  return daySummarySchema.safeParse(value).success;
}
