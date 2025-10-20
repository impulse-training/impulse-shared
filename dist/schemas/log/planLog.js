"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planLogSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const plan_1 = require("../plan");
const base_1 = require("./base");
// Plan Log Schema
exports.planLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("plan"),
    // Plan logs are always displayed in the UI
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        planId: zod_1.z.string(),
        plan: plan_1.planWithIdSchema,
        introduction: zod_1.z.string().optional(),
        acceptedAt: timestampSchema_1.timestampSchema.optional(),
        tacticsByPath: zod_1.z.record(zod_1.z.string(), zod_1.z.any()).optional(),
    }),
});
