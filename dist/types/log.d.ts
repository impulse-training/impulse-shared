/**
 * Log Types
 *
 * TypeScript type definitions for thread log data
 */
import { ChatCompletionMessageToolCall, ChatCompletionToolMessageParam } from "openai/resources/chat";
import { InferType } from "yup";
import { agentLogSchema, behaviorTrackedLogSchema, impulseLogSchema, logTypes, questionLogSchema, tacticLogSchema, userLogSchema } from "../schemas/log";
export type LogType = (typeof logTypes)[number];
export type ToolCall = ChatCompletionMessageToolCall;
export type ToolResult = ChatCompletionToolMessageParam;
export type TacticLog = InferType<typeof tacticLogSchema>;
export type ImpulseLog = InferType<typeof impulseLogSchema>;
export type BehaviorTrackedLog = InferType<typeof behaviorTrackedLogSchema>;
export type QuestionLog = InferType<typeof questionLogSchema>;
export type UserLog = InferType<typeof userLogSchema>;
export type AgentLog = InferType<typeof agentLogSchema>;
export type Log = TacticLog | ImpulseLog | BehaviorTrackedLog | QuestionLog | UserLog | AgentLog;
export declare const logIsAgentLog: (value: Log) => value is AgentLog;
export declare const isValidAgentLog: (value: unknown) => value is AgentLog;
export declare const logIsBehaviorTrackedLog: (value: Log) => value is BehaviorTrackedLog;
export declare const isValidBehaviorTrackedLog: (value: unknown) => value is BehaviorTrackedLog;
export declare const logIsImpulseLog: (value: Log) => value is ImpulseLog;
export declare const isValidImpulseLog: (value: unknown) => value is ImpulseLog;
export declare const logIsQuestionLog: (value: Log) => value is QuestionLog;
export declare const isValidQuestionLog: (value: unknown) => value is QuestionLog;
export declare const logIsTacticLog: (value: Log) => value is TacticLog;
export declare const isValidTacticLog: (value: unknown) => value is TacticLog;
export declare const logIsUserLog: (value: Log) => value is UserLog;
export declare const isValidUserLog: (value: unknown) => value is UserLog;
