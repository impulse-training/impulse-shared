/**
 * Log Types
 *
 * TypeScript type definitions for thread log data
 */
import { InferType } from "yup";
import { activityTypes, behaviorTrackedLogSchema, impulseLogSchema, messageLogSchema, questionLogSchema, tacticLogSchema } from "../schemas/log";
export type ActivityType = (typeof activityTypes)[number];
export type MessageLog = InferType<typeof messageLogSchema>;
export type TacticLog = InferType<typeof tacticLogSchema>;
export type ImpulseLog = InferType<typeof impulseLogSchema>;
export type BehaviorTrackedLog = InferType<typeof behaviorTrackedLogSchema>;
export type QuestionLog = InferType<typeof questionLogSchema>;
export type Log = MessageLog | TacticLog | ImpulseLog | BehaviorTrackedLog | QuestionLog;
export declare const isLog: (value: unknown) => value is Log;
