"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidScheduledPlan = exports.planIsScheduledPlan = exports.isValidTriggerPlan = exports.planIsTriggerPlan = exports.planWithIdSchema = exports.planSchema = void 0;
const zod_1 = require("zod");
const withId_1 = require("../../utils/withId");
const triggerPlan_1 = require("./triggerPlan");
const scheduledPlan_1 = require("./scheduledPlan");
__exportStar(require("./triggerPlan"), exports);
__exportStar(require("./scheduledPlan"), exports);
exports.planSchema = zod_1.z.discriminatedUnion("type", [
    triggerPlan_1.triggerPlanSchema,
    scheduledPlan_1.scheduledPlanSchema,
]);
// WithId variant for plans
exports.planWithIdSchema = zod_1.z.union([
    (0, withId_1.withIdSchema)(triggerPlan_1.triggerPlanSchema),
    (0, withId_1.withIdSchema)(scheduledPlan_1.scheduledPlanSchema),
]);
const planIsTriggerPlan = (value) => value.type === "trigger";
exports.planIsTriggerPlan = planIsTriggerPlan;
const isValidTriggerPlan = (value) => triggerPlan_1.triggerPlanSchema.safeParse(value).success;
exports.isValidTriggerPlan = isValidTriggerPlan;
const planIsScheduledPlan = (value) => value.type === "scheduled";
exports.planIsScheduledPlan = planIsScheduledPlan;
const isValidScheduledPlan = (value) => scheduledPlan_1.scheduledPlanSchema.safeParse(value).success;
exports.isValidScheduledPlan = isValidScheduledPlan;
