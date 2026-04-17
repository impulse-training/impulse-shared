"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIsSetupModeChoiceLog = exports.isValidTacticReviewLog = exports.logIsTacticReviewLog = exports.isValidTriggerSelectionLog = exports.logIsTriggerSelectionLog = exports.isValidRequestPermissionsLog = exports.logIsRequestPermissionsLog = exports.isValidImpulseStartedLog = exports.logIsImpulseStartedLog = exports.isValidDayTotalsPromptLog = exports.logIsDayTotalsPromptLog = exports.isValidRecapTimePreferenceLog = exports.logIsRecapTimePreferenceLog = exports.isValidMetricLog = exports.logIsMetricLog = exports.isValidEnableNotificationsCtaLog = exports.logIsEnableNotificationsCtaLog = exports.isValidSupportGroupDaySummaryLog = exports.logIsSupportGroupDaySummaryLog = exports.isValidBreathingLog = exports.logIsBreathingLog = exports.isValidLinkLog = exports.logIsLinkLog = exports.isValidSummaryLog = exports.logIsSummaryLog = exports.isValidPlansLog = exports.logIsPlansLog = exports.isValidUserMessageLog = exports.logIsUserMessageLog = exports.isValidTacticLog = exports.logIsTacticLog = exports.isValidWidgetSetupLog = exports.logIsWidgetSetupLog = exports.isValidToolCallLog = exports.logIsToolCallLog = exports.isValidCallLog = exports.logIsCallLog = exports.isValidBehaviorLog = exports.logIsBehaviorLog = exports.isValidSharedMomentLog = exports.logIsSharedMomentLog = exports.isValidNotifySupportGroupLog = exports.logIsNotifySupportGroupLog = exports.isValidSystemMessageLog = exports.logIsSystemMessageLog = exports.isValidAssistantMessageLog = exports.logIsAssistantMessageLog = exports.logSchema = exports.logTypes = exports.logSchemas = void 0;
exports.logIsImageLog = exports.logIsCloseButtonLog = exports.logIsRecoveryKeyLog = exports.logIsCrisisResourceLog = exports.logIsTagsUpdatedLog = void 0;
const zod_1 = require("zod");
const behaviorLog_1 = require("./behaviorLog");
const breathingLog_1 = require("./breathingLog");
const callLog_1 = require("./callLog");
const enableNotificationsCtaLog_1 = require("./enableNotificationsCtaLog");
const linkLog_1 = require("./linkLog");
const impulseStartedLog_1 = require("./impulseStartedLog");
const proposedExperimentLog_1 = require("./proposedExperimentLog");
const messageLog_1 = require("./messageLog");
const notifySupportGroupLog_1 = require("./notifySupportGroupLog");
const plansLog_1 = require("./plansLog");
const sharedMomentLog_1 = require("./sharedMomentLog");
const summaryLog_1 = require("./summaryLog");
const supportGroupDaySummaryLog_1 = require("./supportGroupDaySummaryLog");
const tacticLog_1 = require("./tacticLog");
const toolCallLog_1 = require("./toolCallLog");
const videoLog_1 = require("./videoLog");
const metricLog_1 = require("./metricLog");
const recapTimePreferenceLog_1 = require("./recapTimePreferenceLog");
const dayTotalsPromptLog_1 = require("./dayTotalsPromptLog");
const triggerSelectionLog_1 = require("./triggerSelectionLog");
const widgetSetupLog_1 = require("./widgetSetupLog");
const requestPermissionsLog_1 = require("./requestPermissionsLog");
const tacticReviewLog_1 = require("./tacticReviewLog");
const setupModeChoiceLog_1 = require("./setupModeChoiceLog");
const tagsUpdatedLog_1 = require("./tagsUpdatedLog");
const crisisResourceLog_1 = require("./crisisResourceLog");
const recoveryKeyLog_1 = require("./recoveryKeyLog");
const closeButtonLog_1 = require("./closeButtonLog");
const imageLog_1 = require("./imageLog");
exports.logSchemas = {
    user: messageLog_1.userMessageLogSchema,
    assistant_message: messageLog_1.assistantMessageLogSchema,
    system_message: messageLog_1.systemMessageLogSchema,
    call: callLog_1.callLogSchema,
    tool_call: toolCallLog_1.toolCallLogSchema,
    tactic: tacticLog_1.tacticLogSchema,
    tactic_viewed: tacticLog_1.tacticLogSchema,
    behavior: behaviorLog_1.behaviorLogSchema,
    breathing: breathingLog_1.breathingLogSchema,
    plans: plansLog_1.plansLogSchema,
    summary: summaryLog_1.summaryLogSchema,
    widget_setup: widgetSetupLog_1.widgetSetupLogSchema,
    link: linkLog_1.linkLogSchema,
    notify_support_group: notifySupportGroupLog_1.notifySupportGroupLogSchema,
    video: videoLog_1.videoLogSchema,
    shared_moment: sharedMomentLog_1.sharedMomentLogSchema,
    support_group_day_summary: supportGroupDaySummaryLog_1.supportGroupDaySummaryLogSchema,
    enable_notifications_cta: enableNotificationsCtaLog_1.enableNotificationsCtaLogSchema,
    proposed_experiment: proposedExperimentLog_1.proposedExperimentLogSchema,
    impulse_started: impulseStartedLog_1.impulseStartedLogSchema,
    metric: metricLog_1.metricLogSchema,
    recap_time_preference: recapTimePreferenceLog_1.recapTimePreferenceLogSchema,
    day_totals_prompt: dayTotalsPromptLog_1.dayTotalsPromptLogSchema,
    trigger_selection: triggerSelectionLog_1.triggerSelectionLogSchema,
    request_permissions: requestPermissionsLog_1.requestPermissionsLogSchema,
    tactic_review: tacticReviewLog_1.tacticReviewLogSchema,
    setup_mode_choice: setupModeChoiceLog_1.setupModeChoiceLogSchema,
    tags_updated: tagsUpdatedLog_1.tagsUpdatedLogSchema,
    crisis_resource: crisisResourceLog_1.crisisResourceLogSchema,
    recovery_key: recoveryKeyLog_1.recoveryKeyLogSchema,
    close_button: closeButtonLog_1.closeButtonLogSchema,
    image: imageLog_1.imageLogSchema,
};
exports.logTypes = Object.keys(exports.logSchemas);
__exportStar(require("./behaviorLog"), exports);
__exportStar(require("./breathingLog"), exports);
__exportStar(require("./callLog"), exports);
__exportStar(require("./enableNotificationsCtaLog"), exports);
__exportStar(require("./linkLog"), exports);
__exportStar(require("./messageLog"), exports);
__exportStar(require("./notifySupportGroupLog"), exports);
__exportStar(require("./plansLog"), exports);
__exportStar(require("./sharedMomentLog"), exports);
__exportStar(require("./tourStep"), exports);
__exportStar(require("./summaryLog"), exports);
__exportStar(require("./supportGroupDaySummaryLog"), exports);
__exportStar(require("./tacticLog"), exports);
__exportStar(require("./toolCallLog"), exports);
__exportStar(require("./videoLog"), exports);
__exportStar(require("./widgetSetupLog"), exports);
__exportStar(require("./proposedExperimentLog"), exports);
__exportStar(require("./impulseStartedLog"), exports);
__exportStar(require("./metricLog"), exports);
__exportStar(require("./recapTimePreferenceLog"), exports);
__exportStar(require("./dayTotalsPromptLog"), exports);
__exportStar(require("./triggerSelectionLog"), exports);
__exportStar(require("./requestPermissionsLog"), exports);
__exportStar(require("./tacticReviewLog"), exports);
__exportStar(require("./setupModeChoiceLog"), exports);
__exportStar(require("./tagsUpdatedLog"), exports);
__exportStar(require("./crisisResourceLog"), exports);
__exportStar(require("./recoveryKeyLog"), exports);
__exportStar(require("./closeButtonLog"), exports);
__exportStar(require("./imageLog"), exports);
// Discriminated union schema across all log variants
exports.logSchema = zod_1.z.discriminatedUnion("type", [
    messageLog_1.userMessageLogSchema,
    messageLog_1.assistantMessageLogSchema,
    messageLog_1.systemMessageLogSchema,
    callLog_1.callLogSchema,
    toolCallLog_1.toolCallLogSchema,
    tacticLog_1.tacticLogSchema,
    behaviorLog_1.behaviorLogSchema,
    breathingLog_1.breathingLogSchema,
    plansLog_1.plansLogSchema,
    summaryLog_1.summaryLogSchema,
    widgetSetupLog_1.widgetSetupLogSchema,
    linkLog_1.linkLogSchema,
    notifySupportGroupLog_1.notifySupportGroupLogSchema,
    sharedMomentLog_1.sharedMomentLogSchema,
    videoLog_1.videoLogSchema,
    supportGroupDaySummaryLog_1.supportGroupDaySummaryLogSchema,
    enableNotificationsCtaLog_1.enableNotificationsCtaLogSchema,
    proposedExperimentLog_1.proposedExperimentLogSchema,
    impulseStartedLog_1.impulseStartedLogSchema,
    metricLog_1.metricLogSchema,
    recapTimePreferenceLog_1.recapTimePreferenceLogSchema,
    dayTotalsPromptLog_1.dayTotalsPromptLogSchema,
    triggerSelectionLog_1.triggerSelectionLogSchema,
    requestPermissionsLog_1.requestPermissionsLogSchema,
    tacticReviewLog_1.tacticReviewLogSchema,
    tagsUpdatedLog_1.tagsUpdatedLogSchema,
    crisisResourceLog_1.crisisResourceLogSchema,
    recoveryKeyLog_1.recoveryKeyLogSchema,
    closeButtonLog_1.closeButtonLogSchema,
    imageLog_1.imageLogSchema,
]);
// Export log type guards
const logIsAssistantMessageLog = (value) => value.type === "assistant_message";
exports.logIsAssistantMessageLog = logIsAssistantMessageLog;
const isValidAssistantMessageLog = (value) => {
    return messageLog_1.assistantMessageLogSchema.safeParse(value).success;
};
exports.isValidAssistantMessageLog = isValidAssistantMessageLog;
const logIsSystemMessageLog = (value) => value.type === "system_message";
exports.logIsSystemMessageLog = logIsSystemMessageLog;
const isValidSystemMessageLog = (value) => {
    return messageLog_1.systemMessageLogSchema.safeParse(value).success;
};
exports.isValidSystemMessageLog = isValidSystemMessageLog;
const logIsNotifySupportGroupLog = (value) => value.type === "notify_support_group";
exports.logIsNotifySupportGroupLog = logIsNotifySupportGroupLog;
const isValidNotifySupportGroupLog = (value) => {
    return notifySupportGroupLog_1.notifySupportGroupLogSchema.safeParse(value).success;
};
exports.isValidNotifySupportGroupLog = isValidNotifySupportGroupLog;
const logIsSharedMomentLog = (value) => value.type === "shared_moment";
exports.logIsSharedMomentLog = logIsSharedMomentLog;
const isValidSharedMomentLog = (value) => {
    return sharedMomentLog_1.sharedMomentLogSchema.safeParse(value).success;
};
exports.isValidSharedMomentLog = isValidSharedMomentLog;
const logIsBehaviorLog = (value) => value.type === "behavior";
exports.logIsBehaviorLog = logIsBehaviorLog;
const isValidBehaviorLog = (value) => {
    return behaviorLog_1.behaviorLogSchema.safeParse(value).success;
};
exports.isValidBehaviorLog = isValidBehaviorLog;
const logIsCallLog = (value) => value.type === "call";
exports.logIsCallLog = logIsCallLog;
const isValidCallLog = (value) => {
    return callLog_1.callLogSchema.safeParse(value).success;
};
exports.isValidCallLog = isValidCallLog;
const logIsToolCallLog = (value) => value.type === "tool_call";
exports.logIsToolCallLog = logIsToolCallLog;
const isValidToolCallLog = (value) => {
    return toolCallLog_1.toolCallLogSchema.safeParse(value).success;
};
exports.isValidToolCallLog = isValidToolCallLog;
const logIsWidgetSetupLog = (value) => value.type === "widget_setup";
exports.logIsWidgetSetupLog = logIsWidgetSetupLog;
const isValidWidgetSetupLog = (value) => {
    return widgetSetupLog_1.widgetSetupLogSchema.safeParse(value).success;
};
exports.isValidWidgetSetupLog = isValidWidgetSetupLog;
const logIsTacticLog = (value) => value.type === "tactic";
exports.logIsTacticLog = logIsTacticLog;
const isValidTacticLog = (value) => {
    return tacticLog_1.tacticLogSchema.safeParse(value).success;
};
exports.isValidTacticLog = isValidTacticLog;
const logIsUserMessageLog = (value) => value.type === "user_message";
exports.logIsUserMessageLog = logIsUserMessageLog;
const isValidUserMessageLog = (value) => {
    return messageLog_1.userMessageLogSchema.safeParse(value).success;
};
exports.isValidUserMessageLog = isValidUserMessageLog;
const logIsPlansLog = (value) => value.type === "plans";
exports.logIsPlansLog = logIsPlansLog;
const isValidPlansLog = (value) => {
    return plansLog_1.plansLogSchema.safeParse(value).success;
};
exports.isValidPlansLog = isValidPlansLog;
const logIsSummaryLog = (value) => value.type === "summary";
exports.logIsSummaryLog = logIsSummaryLog;
const isValidSummaryLog = (value) => {
    return summaryLog_1.summaryLogSchema.safeParse(value).success;
};
exports.isValidSummaryLog = isValidSummaryLog;
const logIsLinkLog = (value) => value.type === "link";
exports.logIsLinkLog = logIsLinkLog;
const isValidLinkLog = (value) => {
    return linkLog_1.linkLogSchema.safeParse(value).success;
};
exports.isValidLinkLog = isValidLinkLog;
const logIsBreathingLog = (value) => value.type === "breathing";
exports.logIsBreathingLog = logIsBreathingLog;
const isValidBreathingLog = (value) => {
    return breathingLog_1.breathingLogSchema.safeParse(value).success;
};
exports.isValidBreathingLog = isValidBreathingLog;
const logIsSupportGroupDaySummaryLog = (value) => value.type === "support_group_day_summary";
exports.logIsSupportGroupDaySummaryLog = logIsSupportGroupDaySummaryLog;
const isValidSupportGroupDaySummaryLog = (value) => {
    return supportGroupDaySummaryLog_1.supportGroupDaySummaryLogSchema.safeParse(value).success;
};
exports.isValidSupportGroupDaySummaryLog = isValidSupportGroupDaySummaryLog;
const logIsEnableNotificationsCtaLog = (value) => value.type === "enable_notifications_cta";
exports.logIsEnableNotificationsCtaLog = logIsEnableNotificationsCtaLog;
const isValidEnableNotificationsCtaLog = (value) => {
    return enableNotificationsCtaLog_1.enableNotificationsCtaLogSchema.safeParse(value).success;
};
exports.isValidEnableNotificationsCtaLog = isValidEnableNotificationsCtaLog;
const logIsMetricLog = (value) => value.type === "metric";
exports.logIsMetricLog = logIsMetricLog;
const isValidMetricLog = (value) => {
    return metricLog_1.metricLogSchema.safeParse(value).success;
};
exports.isValidMetricLog = isValidMetricLog;
const logIsRecapTimePreferenceLog = (value) => value.type === "recap_time_preference";
exports.logIsRecapTimePreferenceLog = logIsRecapTimePreferenceLog;
const isValidRecapTimePreferenceLog = (value) => {
    return recapTimePreferenceLog_1.recapTimePreferenceLogSchema.safeParse(value).success;
};
exports.isValidRecapTimePreferenceLog = isValidRecapTimePreferenceLog;
const logIsDayTotalsPromptLog = (value) => value.type === "day_totals_prompt";
exports.logIsDayTotalsPromptLog = logIsDayTotalsPromptLog;
const isValidDayTotalsPromptLog = (value) => {
    return dayTotalsPromptLog_1.dayTotalsPromptLogSchema.safeParse(value).success;
};
exports.isValidDayTotalsPromptLog = isValidDayTotalsPromptLog;
const logIsImpulseStartedLog = (value) => value.type === "impulse_started";
exports.logIsImpulseStartedLog = logIsImpulseStartedLog;
const isValidImpulseStartedLog = (value) => {
    return impulseStartedLog_1.impulseStartedLogSchema.safeParse(value).success;
};
exports.isValidImpulseStartedLog = isValidImpulseStartedLog;
const logIsRequestPermissionsLog = (value) => value.type === "request_permissions";
exports.logIsRequestPermissionsLog = logIsRequestPermissionsLog;
const isValidRequestPermissionsLog = (value) => {
    return requestPermissionsLog_1.requestPermissionsLogSchema.safeParse(value).success;
};
exports.isValidRequestPermissionsLog = isValidRequestPermissionsLog;
const logIsTriggerSelectionLog = (value) => value.type === "trigger_selection";
exports.logIsTriggerSelectionLog = logIsTriggerSelectionLog;
const isValidTriggerSelectionLog = (value) => {
    return triggerSelectionLog_1.triggerSelectionLogSchema.safeParse(value).success;
};
exports.isValidTriggerSelectionLog = isValidTriggerSelectionLog;
const logIsTacticReviewLog = (value) => value.type === "tactic_review";
exports.logIsTacticReviewLog = logIsTacticReviewLog;
const isValidTacticReviewLog = (value) => {
    return tacticReviewLog_1.tacticReviewLogSchema.safeParse(value).success;
};
exports.isValidTacticReviewLog = isValidTacticReviewLog;
const logIsSetupModeChoiceLog = (value) => value.type === "setup_mode_choice";
exports.logIsSetupModeChoiceLog = logIsSetupModeChoiceLog;
const logIsTagsUpdatedLog = (value) => value.type === "tags_updated";
exports.logIsTagsUpdatedLog = logIsTagsUpdatedLog;
const logIsCrisisResourceLog = (value) => value.type === "crisis_resource";
exports.logIsCrisisResourceLog = logIsCrisisResourceLog;
const logIsRecoveryKeyLog = (value) => value.type === "recovery_key";
exports.logIsRecoveryKeyLog = logIsRecoveryKeyLog;
const logIsCloseButtonLog = (value) => value.type === "close_button";
exports.logIsCloseButtonLog = logIsCloseButtonLog;
const logIsImageLog = (value) => value.type === "image";
exports.logIsImageLog = logIsImageLog;
