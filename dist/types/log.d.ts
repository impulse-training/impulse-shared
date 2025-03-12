/**
 * Log Types
 *
 * TypeScript type definitions for thread log data
 */
import { InferType } from 'yup';
import { activityLogSchema, messageLogSchema, tacticActivityLogSchema, impulseLogSchema, behaviorTrackedLogSchema, activityTypes } from '../schemas/log';
export type ActivityType = typeof activityTypes[number];
export type ActivityLog = InferType<typeof activityLogSchema>;
export type MessageLog = InferType<typeof messageLogSchema>;
export type TacticActivityLog = InferType<typeof tacticActivityLogSchema>;
export type ImpulseLog = InferType<typeof impulseLogSchema>;
export type BehaviorTrackedLog = InferType<typeof behaviorTrackedLogSchema>;
export declare const isActivityLog: (value: unknown) => value is ActivityLog;
export declare const isMessageLog: (value: unknown) => value is MessageLog;
export declare const isTacticActivityLog: (value: unknown) => value is TacticActivityLog;
export declare const isImpulseLog: (value: unknown) => value is ImpulseLog;
export declare const isBehaviorTrackedLog: (value: unknown) => value is BehaviorTrackedLog;
