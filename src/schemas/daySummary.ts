import * as yup from "yup";
import { objectOf, timestampSchema } from "../utils";
import { outcomeSchema } from "../utils/outcomes";
import { behaviorTrackingDataSchema } from "./log";
import { tacticSchema } from "./tactic";

export const insightSchema = yup.object({
  type: yup.string().required(),
  text: yup.string().required(),
});
export type Insight = yup.InferType<typeof insightSchema>;

export const daySummarySchema = yup.object({
  id: yup.string(),
  dateString: yup.string().required(),
  userId: yup.string().required(),
  impulseThreadOutcomesById: objectOf(outcomeSchema.required()),
  behaviorDataTotalByBehaviorId: objectOf(
    behaviorTrackingDataSchema.required()
  ),
  tacticsUsed: yup.array().of(tacticSchema).default([]),
  summaryText: yup.string().default(""),
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
