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
exports.behaviorTrackedLogSchema = exports.impulseLogSchema = exports.tacticLogSchema = exports.messageLogSchema = exports.logBaseSchema = exports.activityTypes = void 0;
/**
 * Log Schemas
 *
 * Defines Yup schemas for thread log data
 */
const yup = __importStar(require("yup"));
const timestampSchema_1 = require("../utils/timestampSchema");
// Activity Types
exports.activityTypes = [
    "message",
    "tactic_completed",
    "tactic_uncompleted",
    "impulse_button_pressed",
    "behavior_tracked",
];
// Base Activity Log Schema
exports.logBaseSchema = yup.object({
    type: yup.string().oneOf(exports.activityTypes).required(),
    // This is required for collection group queries security rules
    userId: yup.string().required(),
    timestamp: timestampSchema_1.timestampSchema.required(),
    data: yup.object().default({}),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
});
// Message Log Schema
exports.messageLogSchema = exports.logBaseSchema.shape({
    type: yup.string().oneOf(["message"]).required(),
    data: yup
        .object({
        role: yup.string().oneOf(["user", "assistant"]).required(),
        content: yup.string().required(),
    })
        .required(),
});
// Tactic Activity Log Schema
exports.tacticLogSchema = exports.logBaseSchema.shape({
    type: yup
        .string()
        .oneOf(["tactic_completed", "tactic_uncompleted", "tactic_viewed"])
        .required(),
    data: yup
        .object({
        tacticId: yup.string().required(),
        tacticTitle: yup.string().required(),
        tacticType: yup.string().required(),
    })
        .required(),
});
// Impulse Log Schema
exports.impulseLogSchema = exports.logBaseSchema.shape({
    type: yup.string().oneOf(["impulse_button_pressed"]).required(),
    data: yup.object({}).required(),
});
// Behavior Tracked Log Schema
exports.behaviorTrackedLogSchema = exports.logBaseSchema.shape({
    type: yup.string().oneOf(["behavior_tracked"]).required(),
    data: yup
        .object({
        behaviorId: yup.string().required(),
        behaviorName: yup.string().required(),
        trackingType: yup.string().oneOf(["counter", "timer"]).required(),
        value: yup.number().required(), // Count or time in seconds
        notes: yup.string().nullable(),
    })
        .required(),
});
