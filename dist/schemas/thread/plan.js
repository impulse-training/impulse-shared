"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationPlanThreadSchema = exports.timePlanThreadSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const plan_1 = require("../plan");
const base_1 = require("./base");
const planThreadBaseSchema = base_1.threadBaseSchema.extend({
    plan: plan_1.planWithIdSchema,
});
exports.timePlanThreadSchema = planThreadBaseSchema.extend({
    type: zod_1.default.literal("timePlan"),
});
exports.locationPlanThreadSchema = planThreadBaseSchema.extend({
    type: zod_1.default.literal("locationPlan"),
});
