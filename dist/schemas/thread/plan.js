"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationPlanThreadSchema = exports.timePlanThreadSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
const planThreadBaseSchema = base_1.threadBaseSchema.extend({
    planId: zod_1.z.string(),
});
exports.timePlanThreadSchema = planThreadBaseSchema.extend({
    type: zod_1.z.literal("timePlan"),
});
exports.locationPlanThreadSchema = planThreadBaseSchema.extend({
    type: zod_1.z.literal("locationPlan"),
});
