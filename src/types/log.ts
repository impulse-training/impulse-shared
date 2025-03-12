/**
 * Log Types
 *
 * TypeScript type definitions for thread log data
 */
import { InferType } from "yup";
import {
  activityLogSchema,
  activityTypes,
  behaviorTrackedLogSchema,
  impulseLogSchema,
  messageLogSchema,
  tacticActivityLogSchema,
} from "../schemas/log";

// Export activity type
export type ActivityType = (typeof activityTypes)[number];

// Export types inferred from schemas
export type ActivityLog = InferType<typeof activityLogSchema>;
export type MessageLog = InferType<typeof messageLogSchema>;
export type TacticActivityLog = InferType<typeof tacticActivityLogSchema>;
export type ImpulseLog = InferType<typeof impulseLogSchema>;
export type BehaviorTrackedLog = InferType<typeof behaviorTrackedLogSchema>;

export type Log =
  | ActivityLog
  | MessageLog
  | TacticActivityLog
  | ImpulseLog
  | BehaviorTrackedLog;

// Type guard functions
export const isActivityLog = (value: unknown): value is ActivityLog => {
  try {
    activityLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isMessageLog = (value: unknown): value is MessageLog => {
  try {
    messageLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isTacticActivityLog = (
  value: unknown
): value is TacticActivityLog => {
  try {
    tacticActivityLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isImpulseLog = (value: unknown): value is ImpulseLog => {
  try {
    impulseLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isBehaviorTrackedLog = (
  value: unknown
): value is BehaviorTrackedLog => {
  try {
    behaviorTrackedLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
