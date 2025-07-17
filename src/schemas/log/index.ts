import * as yup from "yup";
import { BehaviorLog, behaviorLogSchema } from "./behaviorLog";
import { CallLog, callLogSchema } from "./callLog";
import { DaySummaryLog, daySummaryLogSchema } from "./daySummaryLog";
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
import {
  NotifySupportGroupLog,
  notifySupportGroupLogSchema,
} from "./notifySupportGroupLog";
import { PlanLog, planLogSchema } from "./planLog";
import { QuestionLog, questionLogSchema } from "./questionLog";
import { ResistedLog, resistedLogSchema } from "./resistedLog";
import { ShowTourLog, showTourLogSchema } from "./showTourLog";
import { SummaryLog, summaryLogSchema } from "./summaryLog";
import { TacticLog, tacticLogSchema } from "./tacticLog";
import { ToolCallLog, toolCallLogSchema } from "./toolCallLog";
import { VideoLog, videoLogSchema } from "./videoLog";
import { WidgetSetupLog, widgetSetupLogSchema } from "./widgetSetupLog";

export const logSchemas = {
  user: userMessageLogSchema,
  assistant_message: assistantMessageLogSchema,
  call: callLogSchema,
  tool_call: toolCallLogSchema,
  tactic_completed: tacticLogSchema,
  day_summary: daySummaryLogSchema,
  tactic_viewed: tacticLogSchema,
  impulse_button_pressed: impulseLogSchema,
  behavior: behaviorLogSchema,
  question: questionLogSchema,
  plan: planLogSchema,
  summary: summaryLogSchema,
  resisted: resistedLogSchema,
  widget_setup: widgetSetupLogSchema,
  show_tour: showTourLogSchema,
  link: linkLogSchema,
  notify_support_group: notifySupportGroupLogSchema,
  video: videoLogSchema,
};
export const logTypes = Object.keys(logSchemas);

export type LogType = (typeof logTypes)[number];

// Union type of all logs
export type Log =
  | TacticLog
  | ImpulseLog
  | BehaviorLog
  | QuestionLog
  | PlanLog
  | ToolCallLog
  | MessageLog
  | SummaryLog
  | CallLog
  | WidgetSetupLog
  | ShowTourLog
  | LinkLog
  | NotifySupportGroupLog
  | VideoLog
  | ResistedLog
  | DaySummaryLog;

export * from "./behaviorLog";
export * from "./callLog";
export * from "./daySummaryLog";
export * from "./impulseLog";
export * from "./linkLog";
export * from "./messageLog";
export * from "./notifySupportGroupLog";
export * from "./planLog";
export * from "./questionLog";
export * from "./resistedLog";
export * from "./showTourLog";
export * from "./summaryLog";
export * from "./tacticLog";
export * from "./toolCallLog";
export * from "./videoLog";
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

export const logIsNotifySupportGroupLog = (
  value: Omit<Log, "id">
): value is NotifySupportGroupLog => value.type === "notify_support_group";
export const isValidNotifySupportGroupLog = (
  value: unknown
): value is NotifySupportGroupLog => {
  try {
    notifySupportGroupLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsResistedLog = (
  value: Omit<Log, "id">
): value is ResistedLog => value.type === "resisted";
export const isValidResistedLog = (value: unknown): value is ResistedLog => {
  try {
    resistedLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsDaySummaryLog = (
  value: Omit<Log, "id">
): value is DaySummaryLog => value.type === "day_summary";
export const isValidDaySummaryLog = (
  value: unknown
): value is DaySummaryLog => {
  try {
    showTourLogSchema.validateSync(value);
    return true;
  } catch (error) {
    return false;
  }
};

export const logIsBehaviorLog = (
  value: Omit<Log, "id">
): value is BehaviorLog => value.type === "behavior";
export const isValidBehaviorLog = (value: unknown): value is BehaviorLog => {
  try {
    behaviorLogSchema.validateSync(value);
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

export const logIsPlanLog = (value: Omit<Log, "id">): value is PlanLog =>
  value.type === "plan";

export const isValidPlanLog = (value: unknown): value is PlanLog => {
  try {
    planLogSchema.validateSync(value);
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
