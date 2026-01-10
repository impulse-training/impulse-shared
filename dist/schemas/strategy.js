"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategySchema = exports.strategyCoachSchema = exports.strategyPlanItemSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const timestampSchema_1 = require("../utils/timestampSchema");
const plan_1 = require("./plan");
const coach_1 = require("./coach");
exports.strategyPlanItemSchema = zod_1.default.object({
    planId: zod_1.default.string(),
    plan: plan_1.planSchema,
    description: zod_1.default.string(),
});
exports.strategyCoachSchema = zod_1.default.object({
    coachId: zod_1.default.string(),
    coach: coach_1.coachSchema,
});
exports.strategySchema = zod_1.default.object({
    id: zod_1.default.string().optional(),
    name: zod_1.default.string(),
    description: zod_1.default.string().optional(),
    shortDescription: zod_1.default.string().optional(),
    problem: zod_1.default.string().optional(),
    whenUseful: zod_1.default.string().optional(),
    isImported: zod_1.default.boolean().optional(),
    plans: zod_1.default.array(exports.strategyPlanItemSchema),
    coach: exports.strategyCoachSchema,
    publishedAt: timestampSchema_1.timestampSchema.optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
