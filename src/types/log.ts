/**
 * Log Types
 *
 * TypeScript type definitions for thread log data
 */
import {
  ChatCompletionMessageToolCall,
  ChatCompletionToolMessageParam,
} from "openai/resources/chat";
import { InferType } from "yup";
import {
  aiAgentLogSchema,
  behaviorTrackedLogSchema,
  impulseLogSchema,
  logTypes,
  questionLogSchema,
  tacticLogSchema,
  userLogSchema,
} from "../schemas/log";
import { toolCallLogSchema } from "../schemas/log/toolCallLog";

// Export log type
export type LogType = (typeof logTypes)[number];

// Export the OpenAI tool types we need
export type ToolCall = ChatCompletionMessageToolCall;
export type ToolResult = ChatCompletionToolMessageParam;

// Export types inferred from schemas
export type TacticLog = InferType<typeof tacticLogSchema>;
export type ImpulseLog = InferType<typeof impulseLogSchema>;
export type BehaviorTrackedLog = InferType<typeof behaviorTrackedLogSchema>;
export type QuestionLog = InferType<typeof questionLogSchema>;
export type UserLog = InferType<typeof userLogSchema>;
export type ToolCallLog = InferType<typeof toolCallLogSchema>;
export type AiAgentLog = InferType<typeof aiAgentLogSchema>;

// Union type of all logs
export type Log =
  | TacticLog
  | ImpulseLog
  | BehaviorTrackedLog
  | QuestionLog
  | ToolCallLog
  | UserLog // New user message type
  | AiAgentLog; // New agent message type with tool calls and results

export const logIsAiAgentLog = (value: Log): value is AiAgentLog =>
  value.type === "ai_agent";
export const isValidAiAgentLog = (value: unknown): value is AiAgentLog => {
  try {
    aiAgentLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
export const logIsBehaviorTrackedLog = (
  value: Log
): value is BehaviorTrackedLog => value.type === "behavior_tracked";
export const isValidBehaviorTrackedLog = (
  value: unknown
): value is BehaviorTrackedLog => {
  try {
    behaviorTrackedLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsImpulseLog = (value: Log): value is ImpulseLog =>
  value.type === "impulse_button_pressed";
export const isValidImpulseLog = (value: unknown): value is ImpulseLog => {
  try {
    impulseLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsToolCallLog = (value: Log): value is ToolCallLog =>
  value.type === "tool_call";
export const isValidToolCallLog = (value: unknown): value is ToolCallLog => {
  try {
    toolCallLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsQuestionLog = (value: Log): value is QuestionLog =>
  value.type === "question";
export const isValidQuestionLog = (value: unknown): value is QuestionLog => {
  try {
    questionLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsTacticLog = (value: Log): value is TacticLog =>
  value.type === "tactic_completed";
export const isValidTacticLog = (value: unknown): value is TacticLog => {
  try {
    tacticLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
export const logIsUserLog = (value: Log): value is UserLog =>
  value.type === "user";
export const isValidUserLog = (value: unknown): value is UserLog => {
  try {
    userLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
