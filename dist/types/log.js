"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserLog = exports.isTacticLog = exports.isQuestionLog = exports.isImpulseLog = exports.isBehaviorTrackedLog = exports.isAgentLog = void 0;
const log_1 = require("../schemas/log");
const isAgentLog = (value) => {
    try {
        log_1.agentLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isAgentLog = isAgentLog;
const isBehaviorTrackedLog = (value) => {
    try {
        log_1.behaviorTrackedLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isBehaviorTrackedLog = isBehaviorTrackedLog;
const isImpulseLog = (value) => {
    try {
        log_1.impulseLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isImpulseLog = isImpulseLog;
const isQuestionLog = (value) => {
    try {
        log_1.questionLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isQuestionLog = isQuestionLog;
const isTacticLog = (value) => {
    try {
        log_1.tacticLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isTacticLog = isTacticLog;
const isUserLog = (value) => {
    try {
        log_1.userLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isUserLog = isUserLog;
