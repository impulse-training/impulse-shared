/**
 * Log Types
 *
 * TypeScript type definitions for thread log data
 */
import { InferType } from "yup";
import {
  activityTypes,
  behaviorTrackedLogSchema,
  impulseLogSchema,
  logBaseSchema,
  messageLogSchema,
  questionLogSchema,
  tacticLogSchema,
} from "../schemas/log";

// Export activity type
export type ActivityType = (typeof activityTypes)[number];

// Export types inferred from schemas
export type MessageLog = InferType<typeof messageLogSchema>;
export type TacticLog = InferType<typeof tacticLogSchema>;
export type ImpulseLog = InferType<typeof impulseLogSchema>;
export type BehaviorTrackedLog = InferType<typeof behaviorTrackedLogSchema>;
export type QuestionLog = InferType<typeof questionLogSchema>;

export type Log =
  | MessageLog
  | TacticLog
  | ImpulseLog
  | BehaviorTrackedLog
  | QuestionLog;

// Type guard functions
export const isLog = (value: unknown): value is Log => {
  try {
    logBaseSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
