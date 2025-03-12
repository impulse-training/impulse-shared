"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBehaviorTrackedLog = exports.isImpulseLog = exports.isTacticActivityLog = exports.isMessageLog = exports.isActivityLog = void 0;
const log_1 = require("../schemas/log");
// Type guard functions
const isActivityLog = (value) => {
    try {
        log_1.activityLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isActivityLog = isActivityLog;
const isMessageLog = (value) => {
    try {
        log_1.messageLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isMessageLog = isMessageLog;
const isTacticActivityLog = (value) => {
    try {
        log_1.tacticActivityLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isTacticActivityLog = isTacticActivityLog;
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
