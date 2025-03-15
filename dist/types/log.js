"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUserLog = exports.logIsUserLog = exports.isValidTacticLog = exports.logIsTacticLog = exports.isValidQuestionLog = exports.logIsQuestionLog = exports.isValidImpulseLog = exports.logIsImpulseLog = exports.isValidBehaviorTrackedLog = exports.logIsBehaviorTrackedLog = exports.isValidAgentLog = exports.logIsAgentLog = void 0;
const log_1 = require("../schemas/log");
const logIsAgentLog = (value) => value.type === "agent";
exports.logIsAgentLog = logIsAgentLog;
const isValidAgentLog = (value) => {
    try {
        log_1.agentLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isValidAgentLog = isValidAgentLog;
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
