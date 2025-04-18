import * as yup from "yup";
import { objectOf, timestampSchema } from "../utils";
import { outcomeSchema } from "../utils/outcomes";
import { behaviorTrackingDataSchema } from "./log";
import { tacticSchema } from "./tactic";

const supportGroupSharingPermissionsSchema = yup.object({
  impulseMoments: yup.boolean().default(false),
  conversations: yup.boolean().default(false),
  tactics: yup.boolean().default(false),
  behaviorData: yup.boolean().default(false),
  insights: yup.boolean().default(false),
  summary: yup.boolean().default(false),
});

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
  sharedWithSupportGroupIds: yup
    .array()
    .of(yup.string().required())
    .default([]),
  sharedWithUserIds: yup.array().of(yup.string().required()),
  supportGroupPermissions: objectOf(supportGroupSharingPermissionsSchema),
  recapCompletedAt: timestampSchema,
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
