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
exports.isValidDebriefUrgeLog = exports.logIsDebriefUrgeLog = exports.isValidEnableNotificationsCtaLog = exports.logIsEnableNotificationsCtaLog = exports.isValidSupportGroupDaySummaryLog = exports.logIsSupportGroupDaySummaryLog = exports.isValidResistedLog = exports.logIsResistedLog = exports.isValidBreathingLog = exports.logIsBreathingLog = exports.isValidReadyToDebriefLog = exports.logIsReadyToDebriefLog = exports.isValidLinkLog = exports.logIsLinkLog = exports.isValidSummaryLog = exports.logIsSummaryLog = exports.isValidPlansLog = exports.logIsPlansLog = exports.isValidUserMessageLog = exports.logIsUserMessageLog = exports.isValidTacticLog = exports.logIsTacticLog = exports.isValidQuestionsLog = exports.logIsQuestionsLog = exports.isValidWidgetSetupLog = exports.logIsWidgetSetupLog = exports.isValidToolCallLog = exports.logIsToolCallLog = exports.isValidCallLog = exports.logIsCallLog = exports.isValidBehaviorLog = exports.logIsBehaviorLog = exports.isValidSharedMomentLog = exports.logIsSharedMomentLog = exports.isValidNotifySupportGroupLog = exports.logIsNotifySupportGroupLog = exports.isValidShowTourLog = exports.logIsShowTourLog = exports.isValidSystemMessageLog = exports.logIsSystemMessageLog = exports.isValidAssistantMessageLog = exports.logIsAssistantMessageLog = exports.logSchema = exports.logTypes = exports.logSchemas = void 0;
const zod_1 = require("zod");
const behaviorLog_1 = require("./behaviorLog");
const breathingLog_1 = require("./breathingLog");
const callLog_1 = require("./callLog");
const debriefUrgeLog_1 = require("./debriefUrgeLog");
const enableNotificationsCtaLog_1 = require("./enableNotificationsCtaLog");
const linkLog_1 = require("./linkLog");
const messageLog_1 = require("./messageLog");
const notifySupportGroupLog_1 = require("./notifySupportGroupLog");
const plansLog_1 = require("./plansLog");
const questionsLog_1 = require("./questionsLog");
const readyToDebriefLog_1 = require("./readyToDebriefLog");
const resistedLog_1 = require("./resistedLog");
const sharedMomentLog_1 = require("./sharedMomentLog");
const showTourLog_1 = require("./showTourLog");
const summaryLog_1 = require("./summaryLog");
const supportGroupDaySummaryLog_1 = require("./supportGroupDaySummaryLog");
const tacticLog_1 = require("./tacticLog");
const toolCallLog_1 = require("./toolCallLog");
const videoLog_1 = require("./videoLog");
const widgetSetupLog_1 = require("./widgetSetupLog");
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
    outcome: resistedLog_1.resistedLogSchema,
    questions: questionsLog_1.questionsLogSchema,
    plans: plansLog_1.plansLogSchema,
    summary: summaryLog_1.summaryLogSchema,
    widget_setup: widgetSetupLog_1.widgetSetupLogSchema,
    show_tour: showTourLog_1.showTourLogSchema,
    link: linkLog_1.linkLogSchema,
    notify_support_group: notifySupportGroupLog_1.notifySupportGroupLogSchema,
    video: videoLog_1.videoLogSchema,
    shared_moment: sharedMomentLog_1.sharedMomentLogSchema,
    ready_to_debrief: readyToDebriefLog_1.readyToDebriefLogSchema,
    support_group_day_summary: supportGroupDaySummaryLog_1.supportGroupDaySummaryLogSchema,
    enable_notifications_cta: enableNotificationsCtaLog_1.enableNotificationsCtaLogSchema,
    debriefUrge: debriefUrgeLog_1.debriefUrgeLogSchema,
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
__exportStar(require("./questionsLog"), exports);
__exportStar(require("./readyToDebriefLog"), exports);
__exportStar(require("./resistedLog"), exports);
__exportStar(require("./sharedMomentLog"), exports);
__exportStar(require("./debriefUrgeLog"), exports);
__exportStar(require("./showTourLog"), exports);
__exportStar(require("./summaryLog"), exports);
__exportStar(require("./supportGroupDaySummaryLog"), exports);
__exportStar(require("./tacticLog"), exports);
__exportStar(require("./toolCallLog"), exports);
__exportStar(require("./videoLog"), exports);
__exportStar(require("./widgetSetupLog"), exports);
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
    resistedLog_1.resistedLogSchema,
    questionsLog_1.questionsLogSchema,
    plansLog_1.plansLogSchema,
    summaryLog_1.summaryLogSchema,
    widgetSetupLog_1.widgetSetupLogSchema,
    showTourLog_1.showTourLogSchema,
    linkLog_1.linkLogSchema,
    notifySupportGroupLog_1.notifySupportGroupLogSchema,
    sharedMomentLog_1.sharedMomentLogSchema,
    videoLog_1.videoLogSchema,
    readyToDebriefLog_1.readyToDebriefLogSchema,
    supportGroupDaySummaryLog_1.supportGroupDaySummaryLogSchema,
    enableNotificationsCtaLog_1.enableNotificationsCtaLogSchema,
    debriefUrgeLog_1.debriefUrgeLogSchema,
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
const logIsShowTourLog = (value) => value.type === "show_tour";
exports.logIsShowTourLog = logIsShowTourLog;
const isValidShowTourLog = (value) => {
    return showTourLog_1.showTourLogSchema.safeParse(value).success;
};
exports.isValidShowTourLog = isValidShowTourLog;
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
const logIsQuestionsLog = (value) => value.type === "questions";
exports.logIsQuestionsLog = logIsQuestionsLog;
const isValidQuestionsLog = (value) => {
    return questionsLog_1.questionsLogSchema.safeParse(value).success;
};
exports.isValidQuestionsLog = isValidQuestionsLog;
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
const logIsReadyToDebriefLog = (value) => value.type === "ready_to_debrief";
exports.logIsReadyToDebriefLog = logIsReadyToDebriefLog;
const isValidReadyToDebriefLog = (value) => {
    return readyToDebriefLog_1.readyToDebriefLogSchema.safeParse(value).success;
};
exports.isValidReadyToDebriefLog = isValidReadyToDebriefLog;
const logIsBreathingLog = (value) => value.type === "breathing";
exports.logIsBreathingLog = logIsBreathingLog;
const isValidBreathingLog = (value) => {
    return breathingLog_1.breathingLogSchema.safeParse(value).success;
};
exports.isValidBreathingLog = isValidBreathingLog;
const logIsResistedLog = (value) => value.type === "resisted";
exports.logIsResistedLog = logIsResistedLog;
const isValidResistedLog = (value) => {
    return resistedLog_1.resistedLogSchema.safeParse(value).success;
};
exports.isValidResistedLog = isValidResistedLog;
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
const logIsDebriefUrgeLog = (value) => value.type === "debriefUrge";
exports.logIsDebriefUrgeLog = logIsDebriefUrgeLog;
const isValidDebriefUrgeLog = (value) => {
    return debriefUrgeLog_1.debriefUrgeLogSchema.safeParse(value).success;
};
exports.isValidDebriefUrgeLog = isValidDebriefUrgeLog;
