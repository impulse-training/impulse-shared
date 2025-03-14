/**
 * Log Types
 *
 * TypeScript type definitions for thread log data
 */
import { ChatCompletionMessageToolCall, ChatCompletionToolMessageParam } from "openai/resources/chat";
import { InferType } from "yup";
import { activityTypes, agentLogSchema, behaviorTrackedLogSchema, impulseLogSchema, questionLogSchema, tacticLogSchema, userLogSchema } from "../schemas/log";
export type ActivityType = (typeof activityTypes)[number];
export type ToolCall = ChatCompletionMessageToolCall;
export type ToolResult = ChatCompletionToolMessageParam;
export type TacticLog = InferType<typeof tacticLogSchema>;
export type ImpulseLog = InferType<typeof impulseLogSchema>;
export type BehaviorTrackedLog = InferType<typeof behaviorTrackedLogSchema>;
export type QuestionLog = InferType<typeof questionLogSchema>;
export type UserLog = InferType<typeof userLogSchema>;
export type AgentLog = InferType<typeof agentLogSchema>;
export type Log = TacticLog | ImpulseLog | BehaviorTrackedLog | QuestionLog | UserLog | AgentLog;
export declare const isAgentLog: (value: unknown) => value is AgentLog;
export declare const isBehaviorTrackedLog: (value: unknown) => value is BehaviorTrackedLog;
export declare const isImpulseLog: (value: unknown) => value is ImpulseLog;
export declare const isQuestionLog: (value: unknown) => value is QuestionLog;
export declare const isTacticLog: (value: unknown) => value is TacticLog;
export declare const isUserLog: (value: unknown) => value is UserLog;
