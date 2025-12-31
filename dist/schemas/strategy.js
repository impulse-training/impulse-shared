"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategySchema = exports.strategyCoachSchema = exports.strategyPlanItemSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
const plan_1 = require("./plan");
const coach_1 = require("./coach");
exports.strategyPlanItemSchema = zod_1.z.object({
    planId: zod_1.z.string(),
    plan: plan_1.planSchema,
    description: zod_1.z.string(),
});
exports.strategyCoachSchema = zod_1.z.object({
    coachId: zod_1.z.string(),
    coach: coach_1.coachSchema,
});
exports.strategySchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    isImported: zod_1.z.boolean().optional(),
    plans: zod_1.z.array(exports.strategyPlanItemSchema),
    coach: exports.strategyCoachSchema,
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
