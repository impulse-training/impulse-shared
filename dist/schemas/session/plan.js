"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationPlanSessionSchema = exports.timePlanSessionSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const planSessionBaseSchema = base_1.sessionBaseSchema.extend({
    planId: zod_1.z.string(),
});
exports.timePlanSessionSchema = planSessionBaseSchema.extend({
    type: zod_1.z.literal("timePlan"),
});
exports.locationPlanSessionSchema = planSessionBaseSchema.extend({
    type: zod_1.z.literal("locationPlan"),
});
