import { AiAgentLog, aiAgentLogSchema } from "./aiAgentLog";
import {
  BehaviorTrackedLog,
  behaviorTrackedLogSchema,
} from "./behaviorTrackedLog";
import { ImpulseLog, impulseLogSchema } from "./impulseLog";
import { QuestionLog, questionLogSchema } from "./questionLog";
import { TacticLog, tacticLogSchema } from "./tacticLog";
import { ToolCallLog, toolCallLogSchema } from "./toolCallLog";
import { UserLog, userLogSchema } from "./userLog";

// Activity Types
export const logTypes = [
  "user", // User message type
  "ai_agent", // Agent/AI message type
  "tool_call", // Tool call type
  "tactic_completed",
  "tactic_uncompleted",
  "impulse_button_pressed",
  "behavior_tracked",
  "question",
] as const;

export type LogType = (typeof logTypes)[number];

// Union type of all logs
export type Log =
  | TacticLog
  | ImpulseLog
  | BehaviorTrackedLog
  | QuestionLog
  | ToolCallLog
  | UserLog // New user message type
  | AiAgentLog; // New agent message type with tool calls and results

export * from "./aiAgentLog";
export * from "./behaviorTrackedLog";
export * from "./impulseLog";
export * from "./questionLog";
export * from "./tacticLog";
export * from "./toolCallLog";
export * from "./userLog";

// Export log type guards
export const logIsAiAgentLog = (value: Omit<Log, "id">): value is AiAgentLog =>
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
  value: Omit<Log, "id">
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

export const logIsImpulseLog = (value: Omit<Log, "id">): value is ImpulseLog =>
  value.type === "impulse_button_pressed";
export const isValidImpulseLog = (value: unknown): value is ImpulseLog => {
  try {
    impulseLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsToolCallLog = (
  value: Omit<Log, "id">
): value is ToolCallLog => value.type === "tool_call";
export const isValidToolCallLog = (value: unknown): value is ToolCallLog => {
  try {
    toolCallLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsQuestionLog = (
  value: Omit<Log, "id">
): value is QuestionLog => value.type === "question";
export const isValidQuestionLog = (value: unknown): value is QuestionLog => {
  try {
    questionLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsTacticLog = (value: Omit<Log, "id">): value is TacticLog =>
  value.type === "tactic_completed";
export const isValidTacticLog = (value: unknown): value is TacticLog => {
  try {
    tacticLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsUserLog = (value: Omit<Log, "id">): value is UserLog =>
  value.type === "user";
export const isValidUserLog = (value: unknown): value is UserLog => {
  try {
    userLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
