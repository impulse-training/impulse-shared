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
exports.isValidDebriefSummaryEditedLog = exports.logIsDebriefSummaryEditedLog = exports.isValidDebriefSummaryLog = exports.logIsDebriefSummaryLog = exports.isValidDebriefSummaryRequestLog = exports.logIsDebriefSummaryRequestLog = exports.isValidDebriefOutcomeLog = exports.logIsDebriefOutcomeLog = exports.isValidDebriefAnswerLog = exports.logIsDebriefAnswerLog = exports.isValidGameplanLog = exports.logIsGameplanLog = exports.isValidUserLog = exports.logIsUserLog = exports.isValidTacticLog = exports.logIsTacticLog = exports.isValidQuestionLog = exports.logIsQuestionLog = exports.isValidToolCallLog = exports.logIsToolCallLog = exports.isValidImpulseLog = exports.logIsImpulseLog = exports.isValidBehaviorTrackedLog = exports.logIsBehaviorTrackedLog = exports.isValidAiAgentLog = exports.logIsAiAgentLog = exports.logTypes = void 0;
const aiAgentLog_1 = require("./aiAgentLog");
const behaviorTrackedLog_1 = require("./behaviorTrackedLog");
// TODO: this is too complex / no good
const debriefLog_1 = require("./debriefLog");
const gameplanLog_1 = require("./gameplanLog");
const impulseLog_1 = require("./impulseLog");
const questionLog_1 = require("./questionLog");
const tacticLog_1 = require("./tacticLog");
const toolCallLog_1 = require("./toolCallLog");
const userLog_1 = require("./userLog");
// Activity Types
exports.logTypes = [
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
];
__exportStar(require("./aiAgentLog"), exports);
__exportStar(require("./behaviorTrackedLog"), exports);
__exportStar(require("./debriefLog"), exports);
__exportStar(require("./gameplanLog"), exports);
__exportStar(require("./impulseLog"), exports);
__exportStar(require("./questionLog"), exports);
__exportStar(require("./tacticLog"), exports);
__exportStar(require("./toolCallLog"), exports);
__exportStar(require("./userLog"), exports);
// Export log type guards
const logIsAiAgentLog = (value) => value.type === "ai_agent";
exports.logIsAiAgentLog = logIsAiAgentLog;
const isValidAiAgentLog = (value) => {
    try {
        aiAgentLog_1.aiAgentLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidAiAgentLog = isValidAiAgentLog;
const logIsBehaviorTrackedLog = (value) => value.type === "behavior_tracked";
exports.logIsBehaviorTrackedLog = logIsBehaviorTrackedLog;
const isValidBehaviorTrackedLog = (value) => {
    try {
        behaviorTrackedLog_1.behaviorTrackedLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidBehaviorTrackedLog = isValidBehaviorTrackedLog;
const logIsImpulseLog = (value) => value.type === "impulse_button_pressed";
exports.logIsImpulseLog = logIsImpulseLog;
const isValidImpulseLog = (value) => {
    try {
        impulseLog_1.impulseLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidImpulseLog = isValidImpulseLog;
const logIsToolCallLog = (value) => value.type === "tool_call";
exports.logIsToolCallLog = logIsToolCallLog;
const isValidToolCallLog = (value) => {
    try {
        toolCallLog_1.toolCallLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidToolCallLog = isValidToolCallLog;
const logIsQuestionLog = (value) => value.type === "question";
exports.logIsQuestionLog = logIsQuestionLog;
const isValidQuestionLog = (value) => {
    try {
        questionLog_1.questionLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidQuestionLog = isValidQuestionLog;
const logIsTacticLog = (value) => value.type === "tactic_completed";
exports.logIsTacticLog = logIsTacticLog;
const isValidTacticLog = (value) => {
    try {
        tacticLog_1.tacticLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidTacticLog = isValidTacticLog;
const logIsUserLog = (value) => value.type === "user";
exports.logIsUserLog = logIsUserLog;
const isValidUserLog = (value) => {
    try {
        userLog_1.userLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidUserLog = isValidUserLog;
const logIsGameplanLog = (value) => value.type === "gameplan";
exports.logIsGameplanLog = logIsGameplanLog;
const isValidGameplanLog = (value) => {
    try {
        gameplanLog_1.gameplanLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidGameplanLog = isValidGameplanLog;
// Debrief log type guards
const logIsDebriefAnswerLog = (value) => value.type === "debrief_answer";
exports.logIsDebriefAnswerLog = logIsDebriefAnswerLog;
const isValidDebriefAnswerLog = (value) => {
    try {
        debriefLog_1.debriefAnswerLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidDebriefAnswerLog = isValidDebriefAnswerLog;
const logIsDebriefOutcomeLog = (value) => value.type === "debrief_outcome";
exports.logIsDebriefOutcomeLog = logIsDebriefOutcomeLog;
const isValidDebriefOutcomeLog = (value) => {
    try {
        debriefLog_1.debriefOutcomeLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidDebriefOutcomeLog = isValidDebriefOutcomeLog;
const logIsDebriefSummaryRequestLog = (value) => value.type === "debrief_summary_request";
exports.logIsDebriefSummaryRequestLog = logIsDebriefSummaryRequestLog;
const isValidDebriefSummaryRequestLog = (value) => {
    try {
        debriefLog_1.debriefSummaryRequestLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidDebriefSummaryRequestLog = isValidDebriefSummaryRequestLog;
const logIsDebriefSummaryLog = (value) => value.type === "debrief_summary";
exports.logIsDebriefSummaryLog = logIsDebriefSummaryLog;
const isValidDebriefSummaryLog = (value) => {
    try {
        debriefLog_1.debriefSummaryLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidDebriefSummaryLog = isValidDebriefSummaryLog;
const logIsDebriefSummaryEditedLog = (value) => value.type === "debrief_summary_edited";
exports.logIsDebriefSummaryEditedLog = logIsDebriefSummaryEditedLog;
const isValidDebriefSummaryEditedLog = (value) => {
    try {
        debriefLog_1.debriefSummaryEditedLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidDebriefSummaryEditedLog = isValidDebriefSummaryEditedLog;
