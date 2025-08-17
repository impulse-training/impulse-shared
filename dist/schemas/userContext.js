"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserContext = exports.isAIMemory = exports.isTacticContext = exports.isBehaviorContext = exports.userContextSchema = exports.aiMemorySchema = exports.tacticContextSchema = exports.behaviorContextSchema = void 0;
const zod_1 = require("zod");
const utils_1 = require("../utils");
exports.behaviorContextSchema = zod_1.z.object({
    behaviorId: zod_1.z.string(),
    behaviorName: zod_1.z.string(),
    trackingType: zod_1.z.enum(["counter", "timer", "boolean"]),
    description: zod_1.z.string().optional(),
    benefits: zod_1.z.array(zod_1.z.string()).optional(),
    drawbacks: zod_1.z.array(zod_1.z.string()).optional(),
    category: zod_1.z.string().optional(),
    trackingUnit: zod_1.z.string().optional(),
    streakDays: zod_1.z.number().default(0),
    totalTracked: zod_1.z.number().default(0),
    insights: zod_1.z.array(zod_1.z.string()).default([]),
    effectiveTactics: zod_1.z.array(zod_1.z.string()).default([]),
    planTacticIds: zod_1.z.array(zod_1.z.string()).default([]),
});
exports.tacticContextSchema = zod_1.z.object({
    tacticId: zod_1.z.string(),
    tacticTitle: zod_1.z.string(),
    tacticType: zod_1.z.string(),
    completedCount: zod_1.z.number().default(0),
    effectiveness: zod_1.z.number().min(1).max(10).default(5),
});
exports.aiMemorySchema = zod_1.z.object({
    id: zod_1.z.string(),
    content: zod_1.z.string(),
    source: zod_1.z.string(),
    createdAt: utils_1.timestampSchema,
});
exports.userContextSchema = zod_1.z.object({
    behaviors: zod_1.z.record(exports.behaviorContextSchema),
    tactics: zod_1.z.record(exports.tacticContextSchema),
    aiMemories: zod_1.z.array(exports.aiMemorySchema).default([]),
    overallInsights: zod_1.z.array(zod_1.z.string()).default([]),
    consolidatedMemory: zod_1.z.string().default(""),
    createdAt: utils_1.timestampSchema,
    updatedAt: utils_1.timestampSchema,
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
