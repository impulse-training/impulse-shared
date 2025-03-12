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
exports.userContextSchema = exports.aiMemorySchema = exports.tacticContextSchema = exports.behaviorContextSchema = void 0;
/**
 * User Context Schemas
 *
 * Yup schemas for user context data validation
 */
const yup = __importStar(require("yup"));
const utils_1 = require("../utils");
/**
 * Schema for behavior context
 */
exports.behaviorContextSchema = yup.object({
    behaviorId: yup.string().required(),
    behaviorName: yup.string().required(),
    trackingType: yup.string().oneOf(["counter", "timer", "boolean"]).required(),
    streakDays: yup.number().default(0),
    totalTracked: yup.number().default(0),
    insights: yup.array().of(yup.string()).default([]),
    effectiveTactics: yup.array().of(yup.string()).default([]),
    gameplanTacticIds: yup.array().of(yup.string()).default([]),
});
/**
 * Schema for tactic context
 */
exports.tacticContextSchema = yup.object({
    tacticId: yup.string().required(),
    tacticTitle: yup.string().required(),
    tacticType: yup.string().required(),
    completedCount: yup.number().default(0),
    effectiveness: yup.number().min(1).max(10).default(5),
});
/**
 * Schema for AI memory
 */
exports.aiMemorySchema = yup.object({
    id: yup.string().required(),
    content: yup.string().required(),
    source: yup.string().required(),
    createdAt: utils_1.timestampSchema,
});
/**
 * Schema for user context
 */
exports.userContextSchema = yup.object({
    userId: yup.string().required(),
    // Use lazy to create a record type schema
    behaviors: yup.lazy(() => yup.object().default({})),
    tactics: yup.lazy(() => yup.object().default({})),
    memories: yup.array().of(exports.aiMemorySchema).default([]),
    overallInsights: yup.array().of(yup.string()).default([]),
    createdAt: utils_1.timestampSchema,
    updatedAt: utils_1.timestampSchema,
});
