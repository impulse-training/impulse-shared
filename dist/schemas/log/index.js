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
exports.isValidGameplanLog = exports.logIsGameplanLog = exports.isValidUserMessageLog = exports.logIsUserMessageLog = exports.isValidTacticLog = exports.logIsTacticLog = exports.isValidQuestionLog = exports.logIsQuestionLog = exports.isValidToolCallLog = exports.logIsToolCallLog = exports.isValidImpulseLog = exports.logIsImpulseLog = exports.isValidBehaviorTrackedLog = exports.logIsBehaviorTrackedLog = exports.isValidAssistantMessageLog = exports.logIsAssistantMessageLog = exports.logTypes = void 0;
const behaviorTrackedLog_1 = require("./behaviorTrackedLog");
const gameplanLog_1 = require("./gameplanLog");
const impulseLog_1 = require("./impulseLog");
const messageLog_1 = require("./messageLog");
const userMessageLog_1 = require("./messageLog/userMessageLog");
const questionLog_1 = require("./questionLog");
const tacticLog_1 = require("./tacticLog");
const toolCallLog_1 = require("./toolCallLog");
// Activity Types
exports.logTypes = [
    "user", // A simple message from a user or AI
    "assistant_message", // Agent/AI message type
    "tool_call", // Tool call type
    "tactic_completed",
    "tactic_viewed",
    "impulse_button_pressed",
    "behavior_tracked",
    "question",
    "gameplan",
];
__exportStar(require("./behaviorTrackedLog"), exports);
__exportStar(require("./gameplanLog"), exports);
__exportStar(require("./impulseLog"), exports);
__exportStar(require("./messageLog"), exports);
__exportStar(require("./questionLog"), exports);
__exportStar(require("./tacticLog"), exports);
__exportStar(require("./toolCallLog"), exports);
// Export log type guards
const logIsAssistantMessageLog = (value) => value.type === "assistant_message";
exports.logIsAssistantMessageLog = logIsAssistantMessageLog;
const isValidAssistantMessageLog = (value) => {
    try {
        messageLog_1.assistantMessageLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidAssistantMessageLog = isValidAssistantMessageLog;
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
const logIsUserMessageLog = (value) => value.type === "user_message";
exports.logIsUserMessageLog = logIsUserMessageLog;
const isValidUserMessageLog = (value) => {
    try {
        userMessageLog_1.userMessageLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidUserMessageLog = isValidUserMessageLog;
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
