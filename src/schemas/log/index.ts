import { z } from "zod";
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
import {
  TacticSuggestionLog,
  tacticSuggestionLogSchema,
} from "./tacticSuggestionLog";

export const logSchemas = {
  user: userMessageLogSchema,
  assistant_message: assistantMessageLogSchema,
  call: callLogSchema,
  tool_call: toolCallLogSchema,
  tactic_completed: tacticLogSchema,
  tactic_suggestion: tacticSuggestionLogSchema,
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
  | TacticSuggestionLog
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
export * from "./tacticSuggestionLog";
export * from "./toolCallLog";
export * from "./videoLog";
export * from "./widgetSetupLog";

// Discriminated union schema across all log variants
export const logSchema = z.discriminatedUnion("type", [
  userMessageLogSchema,
  assistantMessageLogSchema,
  callLogSchema,
  toolCallLogSchema,
  tacticLogSchema,
  tacticSuggestionLogSchema,
  daySummaryLogSchema,
  impulseLogSchema,
  behaviorLogSchema,
  questionLogSchema,
  planLogSchema,
  summaryLogSchema,
  resistedLogSchema,
  widgetSetupLogSchema,
  showTourLogSchema,
  linkLogSchema,
  notifySupportGroupLogSchema,
  videoLogSchema,
]);

// Export log type guards

export const logIsAssistantMessageLog = (
  value: Omit<Log, "id">
): value is AssistantMessageLog => value.type === "assistant_message";
export const isValidAssistantMessageLog = (
  value: unknown
): value is AssistantMessageLog => {
  return assistantMessageLogSchema.safeParse(value).success;
};

export const logIsShowTourLog = (
  value: Omit<Log, "id">
): value is ShowTourLog => value.type === "show_tour";
export const isValidShowTourLog = (value: unknown): value is ShowTourLog => {
  return showTourLogSchema.safeParse(value).success;
};

export const logIsNotifySupportGroupLog = (
  value: Omit<Log, "id">
): value is NotifySupportGroupLog => value.type === "notify_support_group";
export const isValidNotifySupportGroupLog = (
  value: unknown
): value is NotifySupportGroupLog => {
  return notifySupportGroupLogSchema.safeParse(value).success;
};

export const logIsResistedLog = (
  value: Omit<Log, "id">
): value is ResistedLog => value.type === "resisted";
export const isValidResistedLog = (value: unknown): value is ResistedLog => {
  return resistedLogSchema.safeParse(value).success;
};

export const logIsDaySummaryLog = (
  value: Omit<Log, "id">
): value is DaySummaryLog => value.type === "day_summary";
export const isValidDaySummaryLog = (
  value: unknown
): value is DaySummaryLog => {
  return daySummaryLogSchema.safeParse(value).success;
};

export const logIsBehaviorLog = (
  value: Omit<Log, "id">
): value is BehaviorLog => value.type === "behavior";
export const isValidBehaviorLog = (value: unknown): value is BehaviorLog => {
  return behaviorLogSchema.safeParse(value).success;
};

export const logIsCallLog = (value: Omit<Log, "id">): value is CallLog =>
  value.type === "call";
export const isValidCallLog = (value: unknown): value is CallLog => {
  return callLogSchema.safeParse(value).success;
};

export const logIsImpulseLog = (value: Omit<Log, "id">): value is ImpulseLog =>
  value.type === "impulse_button_pressed";
export const isValidImpulseLog = (value: unknown): value is ImpulseLog => {
  return impulseLogSchema.safeParse(value).success;
};

export const logIsToolCallLog = (
  value: Omit<Log, "id">
): value is ToolCallLog => value.type === "tool_call";
export const isValidToolCallLog = (value: unknown): value is ToolCallLog => {
  return toolCallLogSchema.safeParse(value).success;
};

export const logIsWidgetSetupLog = (
  value: Omit<Log, "id">
): value is WidgetSetupLog => value.type === "widget_setup";
export const isValidWidgetSetupLog = (
  value: unknown
): value is WidgetSetupLog => {
  return widgetSetupLogSchema.safeParse(value).success;
};

export const logIsQuestionLog = (
  value: Omit<Log, "id">
): value is QuestionLog => value.type === "question";
export const isValidQuestionLog = (value: unknown): value is QuestionLog => {
  return questionLogSchema.safeParse(value).success;
};

export const logIsTacticLog = (value: Omit<Log, "id">): value is TacticLog =>
  value.type === "tactic_completed";
export const isValidTacticLog = (value: unknown): value is TacticLog => {
  return tacticLogSchema.safeParse(value).success;
};

export const logIsTacticSuggestionLog = (
  value: Omit<Log, "id">
): value is TacticSuggestionLog => value.type === "tactic_suggestion";
export const isValidTacticSuggestionLog = (
  value: unknown
): value is TacticSuggestionLog => {
  return tacticSuggestionLogSchema.safeParse(value).success;
};

export const logIsUserMessageLog = (
  value: Omit<Log, "id">
): value is UserMessageLog => value.type === "user_message";
export const isValidUserMessageLog = (
  value: unknown
): value is UserMessageLog => {
  return userMessageLogSchema.safeParse(value).success;
};

export const logIsPlanLog = (value: Omit<Log, "id">): value is PlanLog =>
  value.type === "plan";

export const isValidPlanLog = (value: unknown): value is PlanLog => {
  return planLogSchema.safeParse(value).success;
};

export const logIsSummaryLog = (value: Omit<Log, "id">): value is SummaryLog =>
  value.type === "summary";
export const isValidSummaryLog = (value: unknown): value is SummaryLog => {
  return summaryLogSchema.safeParse(value).success;
};

export const logIsLinkLog = (value: Omit<Log, "id">): value is LinkLog =>
  value.type === "link";
export const isValidLinkLog = (value: unknown): value is LinkLog => {
  return linkLogSchema.safeParse(value).success;
};
