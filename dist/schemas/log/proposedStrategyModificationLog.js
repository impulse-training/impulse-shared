"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proposedStrategyModificationLogSchema = exports.strategyModificationOperationSchema = exports.setBehaviorGoalStrategyOperationSchema = exports.createPlanStrategyOperationSchema = exports.createTriggerStrategyOperationSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const goal_1 = require("../goal");
const tactic_1 = require("../tactic");
const timestampSchema_1 = require("../../utils/timestampSchema");
const strategyTriggerDraftSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string().optional(),
    behaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
    tags: zod_1.z.record(zod_1.z.string(), zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())])).default({}),
    triggerType: zod_1.z.enum(["arrival", "departure"]).optional(),
    locationName: zod_1.z.string().optional(),
});
const newTacticDraftSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().optional(),
    phase: tactic_1.tacticPhaseSchema.optional(),
    // External resources the tactic points at (e.g. specific podcasts), with
    // pre-fetched preview metadata so the created tactic renders LinkCards.
    links: zod_1.z.array(tactic_1.tacticLinkSchema).optional(),
});
const strategyPlanDraftSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string().min(1),
    tacticIds: zod_1.z.array(zod_1.z.string()).default([]),
    newTactics: zod_1.z.array(newTacticDraftSchema).optional(),
    planType: zod_1.z.enum(["trigger", "scheduled"]).optional(),
    hour: zod_1.z.number().min(0).max(23).optional(),
    minute: zod_1.z.number().min(0).max(59).optional(),
    weekdays: zod_1.z.array(zod_1.z.number().min(0).max(6)).optional(),
});
exports.createTriggerStrategyOperationSchema = zod_1.z.object({
    type: zod_1.z.literal("create_trigger"),
    clientId: zod_1.z.string().min(1),
    trigger: strategyTriggerDraftSchema,
});
exports.createPlanStrategyOperationSchema = zod_1.z.object({
    type: zod_1.z.literal("create_plan"),
    triggerClientId: zod_1.z.string().min(1).optional(),
    existingTriggerId: zod_1.z.string().min(1).optional(),
    plan: strategyPlanDraftSchema,
});
// Replaces the behavior's goal wholesale on acceptance (e.g. switching to a
// contain goal with fixed weekly windows). The behavior must belong to the
// user; acceptance updates users/{uid}/behaviors/{behaviorId}.goal.
exports.setBehaviorGoalStrategyOperationSchema = zod_1.z.object({
    type: zod_1.z.literal("set_behavior_goal"),
    behaviorId: zod_1.z.string().min(1),
    goal: goal_1.goalSchema,
});
exports.strategyModificationOperationSchema = zod_1.z.discriminatedUnion("type", [
    exports.createTriggerStrategyOperationSchema,
    exports.createPlanStrategyOperationSchema,
    exports.setBehaviorGoalStrategyOperationSchema,
]);
exports.proposedStrategyModificationLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("proposed_strategy_modification"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        title: zod_1.z.string().min(1),
        summary: zod_1.z.string().optional(),
        status: zod_1.z
            .enum(["pending", "accepted", "declined", "superseded"])
            .default("pending"),
        operations: zod_1.z.array(exports.strategyModificationOperationSchema).min(1),
        acceptedAt: timestampSchema_1.timestampSchema.optional(),
        declinedAt: timestampSchema_1.timestampSchema.optional(),
        /** The suggest_strategy session task this proposal realizes (weekly queue). */
        sourceTaskId: zod_1.z.string().optional(),
        /**
         * When the user chose "Talk it through" (or resolved the proposal), making
         * the card visible in the session thread. A pending, unrevealed proposal is
         * hidden — it's only reachable via the [SHOW_STRATEGY] full-screen view.
         */
        revealedAt: timestampSchema_1.timestampSchema.optional(),
        /**
         * Revision lineage: a revision is a NEW pending log (append-only — the
         * thread stays temporally honest); the one it replaces is marked
         * "superseded" and points forward is not needed — this points BACK.
         */
        revision: zod_1.z.number().int().positive().optional(),
        supersedesLogId: zod_1.z.string().optional(),
        supersededAt: timestampSchema_1.timestampSchema.optional(),
        createdTriggerIds: zod_1.z.array(zod_1.z.string()).optional(),
        createdPlanIds: zod_1.z.array(zod_1.z.string()).optional(),
        updatedBehaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
