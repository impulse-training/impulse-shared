import {
  BehaviorTrackedLog,
  behaviorTrackedLogSchema,
} from "./behaviorTrackedLog";
import { GameplanLog, gameplanLogSchema } from "./gameplanLog";
import { ImpulseLog, impulseLogSchema } from "./impulseLog";
import {
  AssistantMessageLog,
  MessageLog,
  assistantMessageLogSchema,
} from "./messageLog";
import {
  UserMessageLog,
  userMessageLogSchema,
} from "./messageLog/userMessageLog";
import { QuestionLog, questionLogSchema } from "./questionLog";
import { TacticLog, tacticLogSchema } from "./tacticLog";
import { ToolCallLog, toolCallLogSchema } from "./toolCallLog";

// Activity Types
export const logTypes = [
  "user", // A simple message from a user or AI
  "assistant_message", // Agent/AI message type
  "tool_call", // Tool call type
  "tactic_completed",
  "tactic_viewed",
  "impulse_button_pressed",
  "behavior_tracked",
  "question",
  "gameplan",
] as const;

export type LogType = (typeof logTypes)[number];

// Union type of all logs
export type Log =
  | TacticLog
  | ImpulseLog
  | BehaviorTrackedLog
  | QuestionLog
  | GameplanLog
  | ToolCallLog
  | MessageLog;

export * from "./behaviorTrackedLog";
export * from "./gameplanLog";
export * from "./impulseLog";
export * from "./messageLog";
export * from "./questionLog";
export * from "./tacticLog";
export * from "./toolCallLog";

// Export log type guards
export const logIsAssistantMessageLog = (
  value: Omit<Log, "id">
): value is AssistantMessageLog => value.type === "assistant_message";
export const isValidAssistantMessageLog = (
  value: unknown
): value is AssistantMessageLog => {
  try {
    assistantMessageLogSchema.validateSync(value);
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

export const logIsUserMessageLog = (
  value: Omit<Log, "id">
): value is UserMessageLog => value.type === "user_message";
export const isValidUserMessageLog = (
  value: unknown
): value is UserMessageLog => {
  try {
    userMessageLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsGameplanLog = (
  value: Omit<Log, "id">
): value is GameplanLog => value.type === "gameplan";

export const isValidGameplanLog = (value: unknown): value is GameplanLog => {
  try {
    gameplanLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
