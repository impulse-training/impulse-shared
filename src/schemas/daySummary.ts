import { z } from "zod";
import { objectOf, optionalObjectOf, timestampSchema } from "../utils";
import { behaviorTrackingDataSchema } from "./log";
import { behaviorSchema } from "./behavior";

const outcomeEnum = z.enum(["success", "partial", "setback"]);

export const daySummarySchema = z.object({
  id: z.string().optional(),
  dateString: z.string(),
  userId: z.string(),
  impulseThreadOutcomesById: objectOf(outcomeEnum),
  outcome: outcomeEnum.optional(),
  behaviorDataTotalByBehaviorId: objectOf(behaviorTrackingDataSchema),
  behaviorsById: objectOf(behaviorSchema).optional(),
  trackingLogsById: z.record(z.string(), z.any()).optional(),
  // TODO: tighten once tactic schemas are finalized
  tacticsUsed: z.array(z.any()).default([]),
  summaryText: z.string().default(""),
  // Relaxed until supportGroup schema is migrated to Zod
  supportGroupPermissionsById: optionalObjectOf(z.any()),
  sharedWithUserIds: z.array(z.string()),
  checkInCompletedAt: timestampSchema.optional(),
  createdAt: timestampSchema.optional(),
  updatedAt: timestampSchema.optional(),
});

export type DaySummary = z.infer<typeof daySummarySchema>;

export function isValidDaySummary(value: unknown): value is DaySummary {
  return daySummarySchema.safeParse(value).success;
}
