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
  activityTypes,
  agentLogSchema,
  behaviorTrackedLogSchema,
  impulseLogSchema,
  questionLogSchema,
  tacticLogSchema,
  userLogSchema,
} from "../schemas/log";

// Export activity type
export type ActivityType = (typeof activityTypes)[number];

// Export the OpenAI tool types we need
export type ToolCall = ChatCompletionMessageToolCall;
export type ToolResult = ChatCompletionToolMessageParam;

// Export types inferred from schemas
export type TacticLog = InferType<typeof tacticLogSchema>;
export type ImpulseLog = InferType<typeof impulseLogSchema>;
export type BehaviorTrackedLog = InferType<typeof behaviorTrackedLogSchema>;
export type QuestionLog = InferType<typeof questionLogSchema>;
export type UserLog = InferType<typeof userLogSchema>;
export type AgentLog = InferType<typeof agentLogSchema>;

// Union type of all logs
export type Log =
  | TacticLog
  | ImpulseLog
  | BehaviorTrackedLog
  | QuestionLog
  | UserLog // New user message type
  | AgentLog; // New agent message type with tool calls and results

export const isAgentLog = (value: unknown): value is AgentLog => {
  try {
    agentLogSchema.validateSync(value);
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

export const isImpulseLog = (value: unknown): value is ImpulseLog => {
  try {
    impulseLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isQuestionLog = (value: unknown): value is QuestionLog => {
  try {
    questionLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const isTacticLog = (value: unknown): value is TacticLog => {
  try {
    tacticLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
export const isUserLog = (value: unknown): value is UserLog => {
  try {
    userLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
