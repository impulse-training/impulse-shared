"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserContext = exports.isAIMemory = exports.isTacticContext = exports.isBehaviorContext = exports.userContextSchema = exports.aiMemorySchema = exports.activeExperimentContextSchema = exports.tacticContextSchema = exports.behaviorContextSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.behaviorContextSchema = zod_1.z.object({
    behaviorId: zod_1.z.string(),
    behaviorName: zod_1.z.string(),
    trackingType: zod_1.z.enum(["counter", "timer", "boolean"]),
    description: zod_1.z.string().optional(),
    benefits: zod_1.z.array(zod_1.z.string()).optional(),
    drawbacks: zod_1.z.array(zod_1.z.string()).optional(),
    trackingUnit: zod_1.z.string().optional(),
    goalLabel: zod_1.z.string().optional(),
});
exports.tacticContextSchema = zod_1.z.object({
    tacticId: zod_1.z.string(),
    title: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    instructions: zod_1.z.string().optional(),
});
exports.activeExperimentContextSchema = zod_1.z.object({
    behaviorIds: zod_1.z.array(zod_1.z.string()),
    behaviorNames: zod_1.z.array(zod_1.z.string()),
    experimentQuestion: zod_1.z.string(),
    observations: zod_1.z.array(zod_1.z.string()),
});
exports.aiMemorySchema = zod_1.z.object({
    id: zod_1.z.string(),
    content: zod_1.z.string(),
    source: zod_1.z.string(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
});
exports.userContextSchema = zod_1.z.object({
    behaviors: zod_1.z.record(exports.behaviorContextSchema),
    tactics: zod_1.z.record(exports.tacticContextSchema),
    activeExperiment: exports.activeExperimentContextSchema.nullable().optional(),
    aiMemories: zod_1.z.array(exports.aiMemorySchema).default([]),
    consolidatedMemory: zod_1.z.string().default(""),
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
