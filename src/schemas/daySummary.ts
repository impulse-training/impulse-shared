import * as yup from "yup";
import { objectOf, optionalObjectOf, timestampSchema } from "../utils";
import { outcomeSchema } from "../utils/outcomes";
import { behaviorTrackingDataSchema } from "./log";
import { supportGroupPermissionsSchema } from "./supportGroup";
import { tacticSchema } from "./tactic";

export const daySummarySchema = yup.object({
  id: yup.string(),
  dateString: yup.string().required(),
  userId: yup.string().required(),
  impulseThreadOutcomesById: objectOf(outcomeSchema.required()),
  outcome: outcomeSchema,
  behaviorDataTotalByBehaviorId: objectOf(
    behaviorTrackingDataSchema.required()
  ),
  tacticsUsed: yup.array().of(tacticSchema).default([]),
  summaryText: yup.string().default(""),
  supportGroupPermissionsById: optionalObjectOf(supportGroupPermissionsSchema),
  sharedWithUserIds: yup.array().of(yup.string().required()),
  checkInCompletedAt: timestampSchema,
  createdAt: timestampSchema,
  updatedAt: timestampSchema,
});

export type DaySummary = yup.InferType<typeof daySummarySchema>;

/**
 * Check if a value is a DaySummary
 */
export function isValidDaySummary(value: unknown): value is DaySummary {
  return daySummarySchema.isValidSync(value);
}
