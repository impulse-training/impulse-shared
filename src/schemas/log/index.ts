import { z } from "zod";
import { BehaviorLog, behaviorLogSchema } from "./behaviorLog";
import { BreathingLog, breathingLogSchema } from "./breathingLog";
import { CallLog, callLogSchema } from "./callLog";
import { DebriefUrgeLog, debriefUrgeLogSchema } from "./debriefUrgeLog";
import { FinishRecapLog, finishRecapLogSchema } from "./finishRecapLog";
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
import { PlansLog, plansLogSchema } from "./plansLog";
import {
  QuestionLog,
  questionLogSchema,
  QuestionsLog,
  questionsLogSchema,
} from "./questionLog";
import {
  ReadyToDebriefLog,
  readyToDebriefLogSchema,
} from "./readyToDebriefLog";
import { ResistedLog, resistedLogSchema } from "./resistedLog";
import { SharedMomentLog, sharedMomentLogSchema } from "./sharedMomentLog";
import { ShowTourLog, showTourLogSchema } from "./showTourLog";
import { SummaryLog, summaryLogSchema } from "./summaryLog";
import {
  SupportGroupDaySummaryLog,
  supportGroupDaySummaryLogSchema,
} from "./supportGroupDaySummaryLog";
import { TacticLog, tacticLogSchema } from "./tacticLog";
import { TacticStepLog, tacticStepLogSchema } from "./tacticStepLog";
import {
  TacticSuggestionLog,
  tacticSuggestionLogSchema,
} from "./tacticSuggestionLog";
import { ToolCallLog, toolCallLogSchema } from "./toolCallLog";
import { VideoLog, videoLogSchema } from "./videoLog";
import { WidgetSetupLog, widgetSetupLogSchema } from "./widgetSetupLog";

export const logSchemas = {
  user: userMessageLogSchema,
  assistant_message: assistantMessageLogSchema,
  call: callLogSchema,
  tool_call: toolCallLogSchema,
  tactic: tacticLogSchema,
  tacticStep: tacticStepLogSchema,
  tactic_suggestion: tacticSuggestionLogSchema,
  tactic_viewed: tacticLogSchema,
  impulse_button_pressed: impulseLogSchema,
  behavior: behaviorLogSchema,
  breathing: breathingLogSchema,
  outcome: resistedLogSchema,
  question: questionLogSchema,
  questions: questionsLogSchema,
  plan: planLogSchema,
  plans: plansLogSchema,
  summary: summaryLogSchema,
  widget_setup: widgetSetupLogSchema,
  show_tour: showTourLogSchema,
  link: linkLogSchema,
  notify_support_group: notifySupportGroupLogSchema,
  video: videoLogSchema,
  shared_moment: sharedMomentLogSchema,
  ready_to_debrief: readyToDebriefLogSchema,
  support_group_day_summary: supportGroupDaySummaryLogSchema,
  debriefUrge: debriefUrgeLogSchema,
  finish_recap: finishRecapLogSchema,
};
export const logTypes = Object.keys(logSchemas);

export type LogType = (typeof logTypes)[number];

// Union type of all logs
export type Log =
  | TacticLog
  | TacticStepLog
  | TacticSuggestionLog
  | ImpulseLog
  | BehaviorLog
  | BreathingLog
  | ResistedLog
  | QuestionLog
  | QuestionsLog
  | PlanLog
  | PlansLog
  | ToolCallLog
  | MessageLog
  | SummaryLog
  | CallLog
  | WidgetSetupLog
  | ShowTourLog
  | LinkLog
  | NotifySupportGroupLog
  | SharedMomentLog
  | VideoLog
  | ReadyToDebriefLog
  | SupportGroupDaySummaryLog
  | DebriefUrgeLog
  | FinishRecapLog;

export * from "./behaviorLog";
export * from "./breathingLog";
export * from "./callLog";
export * from "./debriefUrgeLog";
export * from "./finishRecapLog";
export * from "./impulseLog";
export * from "./linkLog";
export * from "./messageLog";
export * from "./notifySupportGroupLog";
export * from "./planLog";
export * from "./plansLog";
export * from "./questionLog";
export * from "./readyToDebriefLog";
export * from "./resistedLog";
export * from "./sharedMomentLog";
export * from "./showTourLog";
export * from "./summaryLog";
export * from "./supportGroupDaySummaryLog";
export * from "./tacticLog";
export * from "./tacticStepLog";
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
  tacticStepLogSchema,
  tacticSuggestionLogSchema,
  impulseLogSchema,
  behaviorLogSchema,
  breathingLogSchema,
  resistedLogSchema,
  questionsLogSchema,
  planLogSchema,
  plansLogSchema,
  summaryLogSchema,
  widgetSetupLogSchema,
  showTourLogSchema,
  linkLogSchema,
  notifySupportGroupLogSchema,
  sharedMomentLogSchema,
  videoLogSchema,
  readyToDebriefLogSchema,
  supportGroupDaySummaryLogSchema,
  debriefUrgeLogSchema,
  finishRecapLogSchema,
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

export const logIsSharedMomentLog = (
  value: Omit<Log, "id">
): value is SharedMomentLog => value.type === "shared_moment";
export const isValidSharedMomentLog = (
  value: unknown
): value is SharedMomentLog => {
  return sharedMomentLogSchema.safeParse(value).success;
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

export const logIsQuestionsLog = (
  value: Omit<Log, "id">
): value is QuestionsLog => value.type === "questions";
export const isValidQuestionsLog = (value: unknown): value is QuestionsLog => {
  return questionsLogSchema.safeParse(value).success;
};

export const logIsTacticLog = (value: Omit<Log, "id">): value is TacticLog =>
  value.type === "tactic";
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

export const logIsPlansLog = (value: Omit<Log, "id">): value is PlansLog =>
  value.type === "plans";

export const isValidPlansLog = (value: unknown): value is PlansLog => {
  return plansLogSchema.safeParse(value).success;
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

export const logIsReadyToDebriefLog = (
  value: Omit<Log, "id">
): value is ReadyToDebriefLog => value.type === "ready_to_debrief";
export const isValidReadyToDebriefLog = (
  value: unknown
): value is ReadyToDebriefLog => {
  return readyToDebriefLogSchema.safeParse(value).success;
};

export const logIsBreathingLog = (
  value: Omit<Log, "id">
): value is BreathingLog => value.type === "breathing";
export const isValidBreathingLog = (value: unknown): value is BreathingLog => {
  return breathingLogSchema.safeParse(value).success;
};

export const logIsResistedLog = (
  value: Omit<Log, "id">
): value is ResistedLog => value.type === "resisted";
export const isValidResistedLog = (value: unknown): value is ResistedLog => {
  return resistedLogSchema.safeParse(value).success;
};

export const logIsSupportGroupDaySummaryLog = (
  value: Omit<Log, "id">
): value is SupportGroupDaySummaryLog =>
  value.type === "support_group_day_summary";
export const isValidSupportGroupDaySummaryLog = (
  value: unknown
): value is SupportGroupDaySummaryLog => {
  return supportGroupDaySummaryLogSchema.safeParse(value).success;
};

export const logIsDebriefUrgeLog = (
  value: Omit<Log, "id">
): value is DebriefUrgeLog => value.type === "debriefUrge";
export const isValidDebriefUrgeLog = (
  value: unknown
): value is DebriefUrgeLog => {
  return debriefUrgeLogSchema.safeParse(value).success;
};

export const logIsTacticStepLog = (
  value: Omit<Log, "id">
): value is TacticStepLog => value.type === "tacticStep";
export const isValidTacticStepLog = (
  value: unknown
): value is TacticStepLog => {
  return tacticStepLogSchema.safeParse(value).success;
};

export const logIsFinishRecapLog = (
  value: Omit<Log, "id">
): value is FinishRecapLog => value.type === "finish_recap";
export const isValidFinishRecapLog = (
  value: unknown
): value is FinishRecapLog => {
  return finishRecapLogSchema.safeParse(value).success;
};
