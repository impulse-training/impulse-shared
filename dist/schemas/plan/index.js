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
exports.isValidScheduledPlan = exports.planIsScheduledPlan = exports.isValidDefaultPlan = exports.planIsDefaultPlan = exports.isValidTriggerPlan = exports.planIsTriggerPlan = exports.planWithIdSchema = exports.planSchema = void 0;
const zod_1 = require("zod");
const withId_1 = require("../../utils/withId");
const triggerPlan_1 = require("./triggerPlan");
const scheduledPlan_1 = require("./scheduledPlan");
const defaultPlan_1 = require("./defaultPlan");
__exportStar(require("./triggerPlan"), exports);
__exportStar(require("./scheduledPlan"), exports);
__exportStar(require("./defaultPlan"), exports);
exports.planSchema = zod_1.z.discriminatedUnion("type", [
    triggerPlan_1.triggerPlanSchema,
    scheduledPlan_1.scheduledPlanSchema,
    defaultPlan_1.defaultPlanSchema,
]);
// WithId variant for plans
exports.planWithIdSchema = zod_1.z.union([
    (0, withId_1.withIdSchema)(triggerPlan_1.triggerPlanSchema),
    (0, withId_1.withIdSchema)(scheduledPlan_1.scheduledPlanSchema),
    (0, withId_1.withIdSchema)(defaultPlan_1.defaultPlanSchema),
]);
const planIsTriggerPlan = (value) => value.type === "trigger";
exports.planIsTriggerPlan = planIsTriggerPlan;
const isValidTriggerPlan = (value) => triggerPlan_1.triggerPlanSchema.safeParse(value).success;
exports.isValidTriggerPlan = isValidTriggerPlan;
const planIsDefaultPlan = (value) => value.type === "default";
exports.planIsDefaultPlan = planIsDefaultPlan;
const isValidDefaultPlan = (value) => defaultPlan_1.defaultPlanSchema.safeParse(value).success;
exports.isValidDefaultPlan = isValidDefaultPlan;
const planIsScheduledPlan = (value) => value.type === "scheduled";
exports.planIsScheduledPlan = planIsScheduledPlan;
const isValidScheduledPlan = (value) => scheduledPlan_1.scheduledPlanSchema.safeParse(value).success;
exports.isValidScheduledPlan = isValidScheduledPlan;
