import { z } from "zod";
import { BehaviorLog, behaviorLogSchema } from "./behaviorLog";
import { BreathingLog, breathingLogSchema } from "./breathingLog";
import { CallLog, callLogSchema } from "./callLog";
import {
  EnableNotificationsCtaLog,
  enableNotificationsCtaLogSchema,
} from "./enableNotificationsCtaLog";
import { LinkLog, linkLogSchema } from "./linkLog";
import {
  ImpulseStartedLog,
  impulseStartedLogSchema,
} from "./impulseStartedLog";
import {
  ProposedExperimentLog,
  proposedExperimentLogSchema,
} from "./proposedExperimentLog";
import {
  AssistantMessageLog,
  assistantMessageLogSchema,
  MessageLog,
  SystemMessageLog,
  systemMessageLogSchema,
  UserMessageLog,
  userMessageLogSchema,
} from "./messageLog";
import {
  NotifySupportGroupLog,
  notifySupportGroupLogSchema,
} from "./notifySupportGroupLog";
import { PlansLog, plansLogSchema } from "./plansLog";
import { SharedMomentLog, sharedMomentLogSchema } from "./sharedMomentLog";
import { SummaryLog, summaryLogSchema } from "./summaryLog";
import {
  SupportGroupDaySummaryLog,
  supportGroupDaySummaryLogSchema,
} from "./supportGroupDaySummaryLog";
import { TacticLog, tacticLogSchema } from "./tacticLog";
import { ToolCallLog, toolCallLogSchema } from "./toolCallLog";
import { VideoLog, videoLogSchema } from "./videoLog";
import { MetricLog, metricLogSchema } from "./metricLog";
import {
  RecapTimePreferenceLog,
  recapTimePreferenceLogSchema,
} from "./recapTimePreferenceLog";
import {
  DayTotalsPromptLog,
  dayTotalsPromptLogSchema,
} from "./dayTotalsPromptLog";
import {
  TriggerSelectionLog,
  triggerSelectionLogSchema,
} from "./triggerSelectionLog";
import { WidgetSetupLog, widgetSetupLogSchema } from "./widgetSetupLog";
import {
  RequestPermissionsLog,
  requestPermissionsLogSchema,
} from "./requestPermissionsLog";
import {
  TacticReviewLog,
  tacticReviewLogSchema,
} from "./tacticReviewLog";
import {
  SetupModeChoiceLog,
  setupModeChoiceLogSchema,
} from "./setupModeChoiceLog";
import {
  TagsUpdatedLog,
  tagsUpdatedLogSchema,
} from "./tagsUpdatedLog";
import {
  CrisisResourceLog,
  crisisResourceLogSchema,
} from "./crisisResourceLog";
import {
  RecoveryKeyLog,
  recoveryKeyLogSchema,
} from "./recoveryKeyLog";
import {
  CloseButtonLog,
  closeButtonLogSchema,
} from "./closeButtonLog";
import {
  ImageLog,
  imageLogSchema,
} from "./imageLog";
import {
  PhotoLog,
  photoLogSchema,
} from "./photoLog";

export const logSchemas = {
  user: userMessageLogSchema,
  assistant_message: assistantMessageLogSchema,
  system_message: systemMessageLogSchema,
  call: callLogSchema,
  tool_call: toolCallLogSchema,
  tactic: tacticLogSchema,
  tactic_viewed: tacticLogSchema,
  behavior: behaviorLogSchema,
  breathing: breathingLogSchema,
  plans: plansLogSchema,
  summary: summaryLogSchema,
  widget_setup: widgetSetupLogSchema,
  link: linkLogSchema,
  notify_support_group: notifySupportGroupLogSchema,
  video: videoLogSchema,
  shared_moment: sharedMomentLogSchema,
  support_group_day_summary: supportGroupDaySummaryLogSchema,
  enable_notifications_cta: enableNotificationsCtaLogSchema,
  proposed_experiment: proposedExperimentLogSchema,
  impulse_started: impulseStartedLogSchema,
  metric: metricLogSchema,
  recap_time_preference: recapTimePreferenceLogSchema,
  day_totals_prompt: dayTotalsPromptLogSchema,
  trigger_selection: triggerSelectionLogSchema,
  request_permissions: requestPermissionsLogSchema,
  tactic_review: tacticReviewLogSchema,
  setup_mode_choice: setupModeChoiceLogSchema,
  tags_updated: tagsUpdatedLogSchema,
  crisis_resource: crisisResourceLogSchema,
  recovery_key: recoveryKeyLogSchema,
  close_button: closeButtonLogSchema,
  image: imageLogSchema,
  photo: photoLogSchema,
};
export const logTypes = Object.keys(logSchemas);

export type LogType = (typeof logTypes)[number];

// Union type of all logs
export type Log =
  | TacticLog
  | BehaviorLog
  | BreathingLog
  | PlansLog
  | ToolCallLog
  | MessageLog
  | SummaryLog
  | CallLog
  | WidgetSetupLog
  | LinkLog
  | NotifySupportGroupLog
  | SharedMomentLog
  | VideoLog
  | SupportGroupDaySummaryLog
  | EnableNotificationsCtaLog
  | ProposedExperimentLog
  | ImpulseStartedLog
  | MetricLog
  | RecapTimePreferenceLog
  | DayTotalsPromptLog
  | TriggerSelectionLog
  | RequestPermissionsLog
  | TacticReviewLog
  | SetupModeChoiceLog
  | TagsUpdatedLog
  | CrisisResourceLog
  | RecoveryKeyLog
  | CloseButtonLog
  | ImageLog
  | PhotoLog;

export * from "./behaviorLog";
export * from "./breathingLog";
export * from "./callLog";
export * from "./enableNotificationsCtaLog";
export * from "./linkLog";
export * from "./messageLog";
export * from "./notifySupportGroupLog";
export * from "./plansLog";
export * from "./sharedMomentLog";
export * from "./tourStep";
export * from "./summaryLog";
export * from "./supportGroupDaySummaryLog";
export * from "./tacticLog";
export * from "./toolCallLog";
export * from "./videoLog";
export * from "./widgetSetupLog";
export * from "./proposedExperimentLog";
export * from "./impulseStartedLog";
export * from "./metricLog";
export * from "./recapTimePreferenceLog";
export * from "./dayTotalsPromptLog";
export * from "./triggerSelectionLog";
export * from "./requestPermissionsLog";
export * from "./tacticReviewLog";
export * from "./setupModeChoiceLog";
export * from "./tagsUpdatedLog";
export * from "./crisisResourceLog";
export * from "./recoveryKeyLog";
export * from "./closeButtonLog";
export * from "./imageLog";
export * from "./photoLog";

// Discriminated union schema across all log variants
export const logSchema = z.discriminatedUnion("type", [
  userMessageLogSchema,
  assistantMessageLogSchema,
  systemMessageLogSchema,
  callLogSchema,
  toolCallLogSchema,
  tacticLogSchema,
  behaviorLogSchema,
  breathingLogSchema,
  plansLogSchema,
  summaryLogSchema,
  widgetSetupLogSchema,
  linkLogSchema,
  notifySupportGroupLogSchema,
  sharedMomentLogSchema,
  videoLogSchema,
  supportGroupDaySummaryLogSchema,
  enableNotificationsCtaLogSchema,
  proposedExperimentLogSchema,
  impulseStartedLogSchema,
  metricLogSchema,
  recapTimePreferenceLogSchema,
  dayTotalsPromptLogSchema,
  triggerSelectionLogSchema,
  requestPermissionsLogSchema,
  tacticReviewLogSchema,
  tagsUpdatedLogSchema,
  crisisResourceLogSchema,
  recoveryKeyLogSchema,
  closeButtonLogSchema,
  imageLogSchema,
  photoLogSchema,
]);

// Export log type guards

export const logIsAssistantMessageLog = (
  value: Omit<Log, "id">,
): value is AssistantMessageLog => value.type === "assistant_message";
export const isValidAssistantMessageLog = (
  value: unknown,
): value is AssistantMessageLog => {
  return assistantMessageLogSchema.safeParse(value).success;
};

export const logIsSystemMessageLog = (
  value: Omit<Log, "id">,
): value is SystemMessageLog => value.type === "system_message";
export const isValidSystemMessageLog = (
  value: unknown,
): value is SystemMessageLog => {
  return systemMessageLogSchema.safeParse(value).success;
};

export const logIsNotifySupportGroupLog = (
  value: Omit<Log, "id">,
): value is NotifySupportGroupLog => value.type === "notify_support_group";
export const isValidNotifySupportGroupLog = (
  value: unknown,
): value is NotifySupportGroupLog => {
  return notifySupportGroupLogSchema.safeParse(value).success;
};

export const logIsSharedMomentLog = (
  value: Omit<Log, "id">,
): value is SharedMomentLog => value.type === "shared_moment";
export const isValidSharedMomentLog = (
  value: unknown,
): value is SharedMomentLog => {
  return sharedMomentLogSchema.safeParse(value).success;
};

export const logIsBehaviorLog = (
  value: Omit<Log, "id">,
): value is BehaviorLog => value.type === "behavior";
export const isValidBehaviorLog = (value: unknown): value is BehaviorLog => {
  return behaviorLogSchema.safeParse(value).success;
};

export const logIsCallLog = (value: Omit<Log, "id">): value is CallLog =>
  value.type === "call";
export const isValidCallLog = (value: unknown): value is CallLog => {
  return callLogSchema.safeParse(value).success;
};

export const logIsToolCallLog = (
  value: Omit<Log, "id">,
): value is ToolCallLog => value.type === "tool_call";
export const isValidToolCallLog = (value: unknown): value is ToolCallLog => {
  return toolCallLogSchema.safeParse(value).success;
};

export const logIsWidgetSetupLog = (
  value: Omit<Log, "id">,
): value is WidgetSetupLog => value.type === "widget_setup";
export const isValidWidgetSetupLog = (
  value: unknown,
): value is WidgetSetupLog => {
  return widgetSetupLogSchema.safeParse(value).success;
};

export const logIsTacticLog = (value: Omit<Log, "id">): value is TacticLog =>
  value.type === "tactic";
export const isValidTacticLog = (value: unknown): value is TacticLog => {
  return tacticLogSchema.safeParse(value).success;
};

export const logIsUserMessageLog = (
  value: Omit<Log, "id">,
): value is UserMessageLog => value.type === "user_message";
export const isValidUserMessageLog = (
  value: unknown,
): value is UserMessageLog => {
  return userMessageLogSchema.safeParse(value).success;
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

export const logIsBreathingLog = (
  value: Omit<Log, "id">,
): value is BreathingLog => value.type === "breathing";
export const isValidBreathingLog = (value: unknown): value is BreathingLog => {
  return breathingLogSchema.safeParse(value).success;
};

export const logIsSupportGroupDaySummaryLog = (
  value: Omit<Log, "id">,
): value is SupportGroupDaySummaryLog =>
  value.type === "support_group_day_summary";
export const isValidSupportGroupDaySummaryLog = (
  value: unknown,
): value is SupportGroupDaySummaryLog => {
  return supportGroupDaySummaryLogSchema.safeParse(value).success;
};

export const logIsEnableNotificationsCtaLog = (
  value: Omit<Log, "id">,
): value is EnableNotificationsCtaLog =>
  value.type === "enable_notifications_cta";
export const isValidEnableNotificationsCtaLog = (
  value: unknown,
): value is EnableNotificationsCtaLog => {
  return enableNotificationsCtaLogSchema.safeParse(value).success;
};

export const logIsMetricLog = (value: Omit<Log, "id">): value is MetricLog =>
  value.type === "metric";
export const isValidMetricLog = (value: unknown): value is MetricLog => {
  return metricLogSchema.safeParse(value).success;
};

export const logIsRecapTimePreferenceLog = (
  value: Omit<Log, "id">,
): value is RecapTimePreferenceLog => value.type === "recap_time_preference";
export const isValidRecapTimePreferenceLog = (
  value: unknown,
): value is RecapTimePreferenceLog => {
  return recapTimePreferenceLogSchema.safeParse(value).success;
};

export const logIsDayTotalsPromptLog = (
  value: Omit<Log, "id">,
): value is DayTotalsPromptLog => value.type === "day_totals_prompt";
export const isValidDayTotalsPromptLog = (
  value: unknown,
): value is DayTotalsPromptLog => {
  return dayTotalsPromptLogSchema.safeParse(value).success;
};

export const logIsImpulseStartedLog = (
  value: Omit<Log, "id">,
): value is ImpulseStartedLog => value.type === "impulse_started";
export const isValidImpulseStartedLog = (
  value: unknown,
): value is ImpulseStartedLog => {
  return impulseStartedLogSchema.safeParse(value).success;
};

export const logIsRequestPermissionsLog = (
  value: Omit<Log, "id">,
): value is RequestPermissionsLog => value.type === "request_permissions";
export const isValidRequestPermissionsLog = (
  value: unknown,
): value is RequestPermissionsLog => {
  return requestPermissionsLogSchema.safeParse(value).success;
};

export const logIsTriggerSelectionLog = (
  value: Omit<Log, "id">,
): value is TriggerSelectionLog => value.type === "trigger_selection";
export const isValidTriggerSelectionLog = (
  value: unknown,
): value is TriggerSelectionLog => {
  return triggerSelectionLogSchema.safeParse(value).success;
};

export const logIsTacticReviewLog = (
  value: Omit<Log, "id">,
): value is TacticReviewLog => value.type === "tactic_review";
export const isValidTacticReviewLog = (
  value: unknown,
): value is TacticReviewLog => {
  return tacticReviewLogSchema.safeParse(value).success;
};

export const logIsSetupModeChoiceLog = (
  value: Omit<Log, "id">,
): value is SetupModeChoiceLog => value.type === "setup_mode_choice";

export const logIsTagsUpdatedLog = (
  value: Omit<Log, "id">,
): value is TagsUpdatedLog => value.type === "tags_updated";

export const logIsCrisisResourceLog = (
  value: Omit<Log, "id">,
): value is CrisisResourceLog => value.type === "crisis_resource";

export const logIsRecoveryKeyLog = (
  value: Omit<Log, "id">,
): value is RecoveryKeyLog => value.type === "recovery_key";

export const logIsCloseButtonLog = (
  value: Omit<Log, "id">,
): value is CloseButtonLog => value.type === "close_button";

export const logIsImageLog = (
  value: Omit<Log, "id">,
): value is ImageLog => value.type === "image";

export const logIsPhotoLog = (
  value: Omit<Log, "id">,
): value is PhotoLog => value.type === "photo";
