"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUserLog = exports.logIsUserLog = exports.isValidTacticLog = exports.logIsTacticLog = exports.isValidQuestionLog = exports.logIsQuestionLog = exports.isValidToolCallLog = exports.logIsToolCallLog = exports.isValidImpulseLog = exports.logIsImpulseLog = exports.isValidBehaviorTrackedLog = exports.logIsBehaviorTrackedLog = exports.isValidAiAgentLog = exports.logIsAiAgentLog = void 0;
const log_1 = require("../schemas/log");
const toolCallLog_1 = require("../schemas/log/toolCallLog");
const logIsAiAgentLog = (value) => value.type === "ai_agent";
exports.logIsAiAgentLog = logIsAiAgentLog;
const isValidAiAgentLog = (value) => {
    try {
        log_1.aiAgentLogSchema.validateSync(value);
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
        log_1.behaviorTrackedLogSchema.validateSync(value);
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
        log_1.impulseLogSchema.validateSync(value);
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
        log_1.questionLogSchema.validateSync(value);
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
        log_1.tacticLogSchema.validateSync(value);
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
        log_1.userLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidUserLog = isValidUserLog;
