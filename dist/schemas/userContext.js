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
exports.isUserContext = exports.isAIMemory = exports.isTacticContext = exports.isBehaviorContext = exports.userContextSchema = exports.aiMemorySchema = exports.tacticContextSchema = exports.behaviorContextSchema = void 0;
const yup = __importStar(require("yup"));
const utils_1 = require("../utils");
const objectOf_1 = require("../utils/objectOf");
exports.behaviorContextSchema = yup.object({
    behaviorId: yup.string().required(),
    behaviorName: yup.string().required(),
    trackingType: yup.string().oneOf(["counter", "timer", "boolean"]).required(),
    streakDays: yup.number().default(0),
    totalTracked: yup.number().default(0),
    insights: yup.array().of(yup.string()).default([]),
    effectiveTactics: yup.array().of(yup.string()).default([]),
    planTacticIds: yup.array().of(yup.string()).default([]),
});
exports.tacticContextSchema = yup.object({
    tacticId: yup.string().required(),
    tacticTitle: yup.string().required(),
    tacticType: yup.string().required(),
    completedCount: yup.number().default(0),
    effectiveness: yup.number().min(1).max(10).default(5),
});
exports.aiMemorySchema = yup.object({
    id: yup.string().required(),
    content: yup.string().required(),
    source: yup.string().required(),
    createdAt: utils_1.timestampSchema,
});
exports.userContextSchema = yup.object({
    behaviors: (0, objectOf_1.objectOf)(exports.behaviorContextSchema),
    tactics: (0, objectOf_1.objectOf)(exports.tacticContextSchema),
    aiMemories: yup.array().of(exports.aiMemorySchema).default([]),
    overallInsights: yup.array().of(yup.string()).default([]),
    consolidatedMemory: yup.string().default(""),
    createdAt: utils_1.timestampSchema,
    updatedAt: utils_1.timestampSchema,
});
// Type guard functions
const isBehaviorContext = (value) => {
    try {
        exports.behaviorContextSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isBehaviorContext = isBehaviorContext;
const isTacticContext = (value) => {
    try {
        exports.tacticContextSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isTacticContext = isTacticContext;
const isAIMemory = (value) => {
    try {
        exports.aiMemorySchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isAIMemory = isAIMemory;
const isUserContext = (value) => {
    try {
        exports.userContextSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isUserContext = isUserContext;
