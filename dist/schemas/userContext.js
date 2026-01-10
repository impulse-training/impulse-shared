"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserContext = exports.isAIMemory = exports.isTacticContext = exports.isBehaviorContext = exports.userContextSchema = exports.aiMemorySchema = exports.tacticContextSchema = exports.behaviorContextSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const timestampSchema_1 = require("../utils/timestampSchema");
exports.behaviorContextSchema = zod_1.default.object({
    behaviorId: zod_1.default.string(),
    behaviorName: zod_1.default.string(),
    trackingType: zod_1.default.enum(["counter", "timer", "boolean"]),
    description: zod_1.default.string().optional(),
    benefits: zod_1.default.array(zod_1.default.string()).optional(),
    drawbacks: zod_1.default.array(zod_1.default.string()).optional(),
    trackingUnit: zod_1.default.string().optional(),
    streakDays: zod_1.default.number().default(0),
    totalTracked: zod_1.default.number().default(0),
    insights: zod_1.default.array(zod_1.default.string()).default([]),
    effectiveTactics: zod_1.default.array(zod_1.default.string()).default([]),
    planTacticIds: zod_1.default.array(zod_1.default.string()).default([]),
});
exports.tacticContextSchema = zod_1.default.object({
    tacticId: zod_1.default.string(),
    tacticTitle: zod_1.default.string(),
    tacticType: zod_1.default.string(),
    completedCount: zod_1.default.number().default(0),
    effectiveness: zod_1.default.number().min(1).max(10).default(5),
});
exports.aiMemorySchema = zod_1.default.object({
    id: zod_1.default.string(),
    content: zod_1.default.string(),
    source: zod_1.default.string(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
});
exports.userContextSchema = zod_1.default.object({
    behaviors: zod_1.default.record(exports.behaviorContextSchema),
    tactics: zod_1.default.record(exports.tacticContextSchema),
    aiMemories: zod_1.default.array(exports.aiMemorySchema).default([]),
    overallInsights: zod_1.default.array(zod_1.default.string()).default([]),
    consolidatedMemory: zod_1.default.string().default(""),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
// Type guard functions
const isBehaviorContext = (value) => {
    return exports.behaviorContextSchema.safeParse(value).success;
};
exports.isBehaviorContext = isBehaviorContext;
const isTacticContext = (value) => {
    return exports.tacticContextSchema.safeParse(value).success;
};
exports.isTacticContext = isTacticContext;
const isAIMemory = (value) => {
    return exports.aiMemorySchema.safeParse(value).success;
};
exports.isAIMemory = isAIMemory;
const isUserContext = (value) => {
    return exports.userContextSchema.safeParse(value).success;
};
exports.isUserContext = isUserContext;
