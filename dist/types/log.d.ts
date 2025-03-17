/**
 * Log Types
 *
 * TypeScript type definitions for thread log data
 */
import { ChatCompletionMessageToolCall, ChatCompletionToolMessageParam } from "openai/resources/chat";
import { InferType } from "yup";
import { aiAgentLogSchema, behaviorTrackedLogSchema, impulseLogSchema, logTypes, questionLogSchema, tacticLogSchema, userLogSchema } from "../schemas/log";
import { toolCallLogSchema } from "../schemas/log/toolCallLog";
export type LogType = (typeof logTypes)[number];
export type ToolCall = ChatCompletionMessageToolCall;
export type ToolResult = ChatCompletionToolMessageParam;
export type TacticLog = InferType<typeof tacticLogSchema>;
export type ImpulseLog = InferType<typeof impulseLogSchema>;
export type BehaviorTrackedLog = InferType<typeof behaviorTrackedLogSchema>;
export type QuestionLog = InferType<typeof questionLogSchema>;
export type UserLog = InferType<typeof userLogSchema>;
export type ToolCallLog = InferType<typeof toolCallLogSchema>;
export type AiAgentLog = InferType<typeof aiAgentLogSchema>;
export type Log = TacticLog | ImpulseLog | BehaviorTrackedLog | QuestionLog | ToolCallLog | UserLog | AiAgentLog;
export declare const logIsAiAgentLog: (value: Log) => value is AiAgentLog;
export declare const isValidAiAgentLog: (value: unknown) => value is AiAgentLog;
export declare const logIsBehaviorTrackedLog: (value: Log) => value is BehaviorTrackedLog;
export declare const isValidBehaviorTrackedLog: (value: unknown) => value is BehaviorTrackedLog;
export declare const logIsImpulseLog: (value: Log) => value is ImpulseLog;
export declare const isValidImpulseLog: (value: unknown) => value is ImpulseLog;
export declare const logIsToolCallLog: (value: Log) => value is ToolCallLog;
export declare const isValidToolCallLog: (value: unknown) => value is ToolCallLog;
export declare const logIsQuestionLog: (value: Log) => value is QuestionLog;
export declare const isValidQuestionLog: (value: unknown) => value is QuestionLog;
export declare const logIsTacticLog: (value: Log) => value is TacticLog;
export declare const isValidTacticLog: (value: unknown) => value is TacticLog;
export declare const logIsUserLog: (value: Log) => value is UserLog;
export declare const isValidUserLog: (value: unknown) => value is UserLog;
