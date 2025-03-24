import { AiAgentLog, aiAgentLogSchema } from "./aiAgentLog";
import {
  BehaviorTrackedLog,
  behaviorTrackedLogSchema,
} from "./behaviorTrackedLog";

// TODO: this is too complex / no good
import {
  DebriefAnswerLog,
  DebriefOutcomeLog,
  DebriefSummaryEditedLog,
  DebriefSummaryLog,
  DebriefSummaryRequestLog,
  debriefAnswerLogSchema,
  debriefOutcomeLogSchema,
  debriefSummaryEditedLogSchema,
  debriefSummaryLogSchema,
  debriefSummaryRequestLogSchema,
} from "./debriefLog";

import { GameplanLog, gameplanLogSchema } from "./gameplanLog";
import { ImpulseLog, impulseLogSchema } from "./impulseLog";
import { QuestionLog, questionLogSchema } from "./questionLog";
import { TacticLog, tacticLogSchema } from "./tacticLog";
import { ToolCallLog, toolCallLogSchema } from "./toolCallLog";
import { UserLog, userLogSchema } from "./userLog";

// Activity Types
export const logTypes = [
  "user", // A simple message from a user or AI
  "ai_agent", // Agent/AI message type
  "tool_call", // Tool call type
  "tactic_completed",
  "tactic_viewed",
  "impulse_button_pressed",
  "behavior_tracked",
  "question",
  "gameplan",
  "debrief_answer",
  "debrief_outcome",
  "debrief_summary_request",
  "debrief_summary",
  "debrief_summary_edited",
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
  | UserLog
  | AiAgentLog
  | DebriefAnswerLog
  | DebriefOutcomeLog
  | DebriefSummaryRequestLog
  | DebriefSummaryLog
  | DebriefSummaryEditedLog;

export * from "./aiAgentLog";
export * from "./behaviorTrackedLog";
export * from "./debriefLog";
export * from "./gameplanLog";
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

// Debrief log type guards
export const logIsDebriefAnswerLog = (
  value: Omit<Log, "id">
): value is DebriefAnswerLog => value.type === "debrief_answer";

export const isValidDebriefAnswerLog = (
  value: unknown
): value is DebriefAnswerLog => {
  try {
    debriefAnswerLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsDebriefOutcomeLog = (
  value: Omit<Log, "id">
): value is DebriefOutcomeLog => value.type === "debrief_outcome";

export const isValidDebriefOutcomeLog = (
  value: unknown
): value is DebriefOutcomeLog => {
  try {
    debriefOutcomeLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsDebriefSummaryRequestLog = (
  value: Omit<Log, "id">
): value is DebriefSummaryRequestLog =>
  value.type === "debrief_summary_request";

export const isValidDebriefSummaryRequestLog = (
  value: unknown
): value is DebriefSummaryRequestLog => {
  try {
    debriefSummaryRequestLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsDebriefSummaryLog = (
  value: Omit<Log, "id">
): value is DebriefSummaryLog => value.type === "debrief_summary";

export const isValidDebriefSummaryLog = (
  value: unknown
): value is DebriefSummaryLog => {
  try {
    debriefSummaryLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsDebriefSummaryEditedLog = (
  value: Omit<Log, "id">
): value is DebriefSummaryEditedLog => value.type === "debrief_summary_edited";

export const isValidDebriefSummaryEditedLog = (
  value: unknown
): value is DebriefSummaryEditedLog => {
  try {
    debriefSummaryEditedLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
