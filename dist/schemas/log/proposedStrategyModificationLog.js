"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proposedStrategyModificationLogSchema = exports.strategyModificationOperationSchema = exports.createPlanStrategyOperationSchema = exports.createTriggerStrategyOperationSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const timestampSchema_1 = require("../../utils/timestampSchema");
const strategyTriggerDraftSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string().optional(),
    behaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
    tags: zod_1.z.record(zod_1.z.string(), zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())])).default({}),
});
const strategyPlanDraftSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string().min(1),
    tacticIds: zod_1.z.array(zod_1.z.string()).min(1),
});
exports.createTriggerStrategyOperationSchema = zod_1.z.object({
    type: zod_1.z.literal("create_trigger"),
    clientId: zod_1.z.string().min(1),
    trigger: strategyTriggerDraftSchema,
});
exports.createPlanStrategyOperationSchema = zod_1.z.object({
    type: zod_1.z.literal("create_plan"),
    triggerClientId: zod_1.z.string().min(1),
    plan: strategyPlanDraftSchema,
});
exports.strategyModificationOperationSchema = zod_1.z.discriminatedUnion("type", [
    exports.createTriggerStrategyOperationSchema,
    exports.createPlanStrategyOperationSchema,
]);
exports.proposedStrategyModificationLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("proposed_strategy_modification"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        title: zod_1.z.string().min(1),
        summary: zod_1.z.string().optional(),
        status: zod_1.z.enum(["pending", "accepted", "declined"]).default("pending"),
        operations: zod_1.z.array(exports.strategyModificationOperationSchema).min(1),
        acceptedAt: timestampSchema_1.timestampSchema.optional(),
        declinedAt: timestampSchema_1.timestampSchema.optional(),
        createdTriggerIds: zod_1.z.array(zod_1.z.string()).optional(),
        createdPlanIds: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
