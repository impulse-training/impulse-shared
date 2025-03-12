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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBehaviorTrackedLog = exports.validateImpulseLog = exports.validateTacticActivityLog = exports.validateMessageLog = exports.validateActivityLog = exports.behaviorTrackedLogSchema = exports.impulseLogSchema = exports.tacticActivityLogSchema = exports.messageLogSchema = exports.activityLogSchema = exports.activityTypes = void 0;
/**
 * Log Schemas
 *
 * Defines Yup schemas for thread log data
 */
const yup = __importStar(require("yup"));
// Activity Types
exports.activityTypes = [
    'message',
    'tactic_completed',
    'tactic_uncompleted',
    'impulse_button_pressed',
    'behavior_tracked'
];
// Base Activity Log Schema
exports.activityLogSchema = yup.object({
    id: yup.string().required(),
    type: yup.string().oneOf(exports.activityTypes).required(),
    timestamp: yup.date().required(),
    data: yup.mixed().required()
});
// Message Log Schema
exports.messageLogSchema = exports.activityLogSchema.shape({
    type: yup.string().oneOf(['message']).required(),
    data: yup.object({
        role: yup.string().oneOf(['user', 'assistant']).required(),
        content: yup.string().required()
    }).required()
});
// Tactic Activity Log Schema
exports.tacticActivityLogSchema = exports.activityLogSchema.shape({
    type: yup.string().oneOf(['tactic_completed', 'tactic_uncompleted', 'tactic_viewed']).required(),
    data: yup.object({
        tacticId: yup.string().required(),
        tacticTitle: yup.string().required(),
        tacticType: yup.string().required()
    }).required()
});
// Impulse Log Schema
exports.impulseLogSchema = exports.activityLogSchema.shape({
    type: yup.string().oneOf(['impulse_button_pressed']).required(),
    data: yup.object({
        behaviorId: yup.string().required(),
        behaviorName: yup.string().required()
    }).required()
});
// Behavior Tracked Log Schema
exports.behaviorTrackedLogSchema = exports.activityLogSchema.shape({
    type: yup.string().oneOf(['behavior_tracked']).required(),
    data: yup.object({
        behaviorId: yup.string().required(),
        behaviorName: yup.string().required(),
        trackingType: yup.string().oneOf(['counter', 'timer']).required(),
        value: yup.number().required(), // Count or time in seconds
        notes: yup.string().nullable()
    }).required()
});
// Helper functions for validation
const validateActivityLog = (data) => {
    return exports.activityLogSchema.validate(data);
};
exports.validateActivityLog = validateActivityLog;
const validateMessageLog = (data) => {
    return exports.messageLogSchema.validate(data);
};
exports.validateMessageLog = validateMessageLog;
const validateTacticActivityLog = (data) => {
    return exports.tacticActivityLogSchema.validate(data);
};
exports.validateTacticActivityLog = validateTacticActivityLog;
const validateImpulseLog = (data) => {
    return exports.impulseLogSchema.validate(data);
};
exports.validateImpulseLog = validateImpulseLog;
const validateBehaviorTrackedLog = (data) => {
    return exports.behaviorTrackedLogSchema.validate(data);
};
exports.validateBehaviorTrackedLog = validateBehaviorTrackedLog;
