import * as yup from "yup";
import {
  BehaviorTrackedLog,
  behaviorTrackedLogSchema,
} from "./behaviorTrackedLog";
import { CallLog, callLogSchema } from "./callLog";
import { GameplanLog, gameplanLogSchema } from "./gameplanLog";
import { ImpulseLog, impulseLogSchema } from "./impulseLog";
import { LinkLog, linkLogSchema } from "./linkLog";
import {
  AssistantMessageLog,
  assistantMessageLogSchema,
  MessageLog,
} from "./messageLog";
import {
  UserMessageLog,
  userMessageLogSchema,
} from "./messageLog/userMessageLog";
import { OutcomeLog, outcomeLogSchema } from "./outcomeLog";
import { QuestionLog, questionLogSchema } from "./questionLog";
import { ShowTourLog, showTourLogSchema } from "./showTourLog";
import { SummaryLog, summaryLogSchema } from "./summaryLog";
import { TacticLog, tacticLogSchema } from "./tacticLog";
import { ToolCallLog, toolCallLogSchema } from "./toolCallLog";
import { WidgetSetupLog, widgetSetupLogSchema } from "./widgetSetupLog";

export const logSchemas = {
  user: userMessageLogSchema,
  assistant_message: assistantMessageLogSchema,
  call: callLogSchema,
  tool_call: toolCallLogSchema,
  tactic_completed: tacticLogSchema,
  tactic_viewed: tacticLogSchema,
  impulse_button_pressed: impulseLogSchema,
  behavior_tracked: behaviorTrackedLogSchema,
  question: questionLogSchema,
  gameplan: gameplanLogSchema,
  summary: summaryLogSchema,
  outcome: outcomeLogSchema,
  widget_setup: widgetSetupLogSchema,
  show_tour: showTourLogSchema,
  link: linkLogSchema,
};
export const logTypes = Object.keys(logSchemas);

export type LogType = (typeof logTypes)[number];

// Union type of all logs
export type Log =
  | TacticLog
  | ImpulseLog
  | BehaviorTrackedLog
  | QuestionLog
  | GameplanLog
  | OutcomeLog
  | ToolCallLog
  | MessageLog
  | SummaryLog
  | CallLog
  | WidgetSetupLog
  | ShowTourLog
  | LinkLog;

export * from "./behaviorTrackedLog";
export * from "./callLog";
export * from "./gameplanLog";
export * from "./impulseLog";
export * from "./linkLog";
export * from "./messageLog";
export * from "./outcomeLog";
export * from "./questionLog";
export * from "./showTourLog";
export * from "./summaryLog";
export * from "./tacticLog";
export * from "./toolCallLog";
export * from "./widgetSetupLog";

// Dynamic schema that selects the appropriate schema based on the tactic type
export const logSchema = yup.lazy((value) => {
  if (typeof value?.type === "string" && value.type in logSchemas) {
    return logSchemas[value.type as keyof typeof logSchemas] as yup.Schema<Log>;
  }

  // Fallback schema for validation when type is missing or invalid
  return yup.object({
    type: yup
      .string()
      .oneOf(Object.keys(logSchemas))
      .required("Tactic type is required"),
  }) as unknown as yup.Schema<Log>;
});

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

export const logIsShowTourLog = (
  value: Omit<Log, "id">
): value is ShowTourLog => value.type === "show_tour";
export const isValidShowTourLog = (value: unknown): value is ShowTourLog => {
  try {
    showTourLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsOutcomeLog = (value: Omit<Log, "id">): value is OutcomeLog =>
  value.type === "outcome";
export const isValidOutcomeLog = (value: unknown): value is OutcomeLog => {
  try {
    outcomeLogSchema.validateSync(value);
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

export const logIsCallLog = (value: Omit<Log, "id">): value is CallLog =>
  value.type === "call";
export const isValidCallLog = (value: unknown): value is CallLog => {
  try {
    callLogSchema.validateSync(value);
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

export const logIsWidgetSetupLog = (
  value: Omit<Log, "id">
): value is WidgetSetupLog => value.type === "widget_setup";
export const isValidWidgetSetupLog = (value: unknown): value is ToolCallLog => {
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

export const logIsSummaryLog = (value: Omit<Log, "id">): value is SummaryLog =>
  value.type === "summary";
export const isValidSummaryLog = (value: unknown): value is SummaryLog => {
  try {
    summaryLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsLinkLog = (value: Omit<Log, "id">): value is LinkLog =>
  value.type === "link";
export const isValidLinkLog = (value: unknown): value is LinkLog => {
  try {
    linkLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};
