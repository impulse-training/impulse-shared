"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategySchema = exports.strategyPlanItemSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
const plan_1 = require("./plan");
exports.strategyPlanItemSchema = zod_1.z.object({
    planId: zod_1.z.string(),
    plan: plan_1.planSchema,
    description: zod_1.z.string(),
});
exports.strategySchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    isImported: zod_1.z.boolean().optional(),
    plans: zod_1.z.array(exports.strategyPlanItemSchema),
    coach: documentReferenceSchema_1.documentReferenceSchema,
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
