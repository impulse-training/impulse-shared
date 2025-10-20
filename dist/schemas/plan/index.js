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
exports.isValidLocationPlan = exports.planIsLocationPlan = exports.isValidRecapPlan = exports.planIsRecapPlan = exports.isValidTimePlan = exports.planIsTimePlan = exports.planWithIdSchema = exports.planSchema = void 0;
const zod_1 = require("zod");
const withId_1 = require("../../utils/withId");
const locationPlan_1 = require("./locationPlan");
const recapPlan_1 = require("./recapPlan");
const timePlan_1 = require("./timePlan");
__exportStar(require("./locationPlan"), exports);
__exportStar(require("./recapPlan"), exports);
__exportStar(require("./timePlan"), exports);
exports.planSchema = zod_1.z.discriminatedUnion("type", [
    timePlan_1.timePlanSchema,
    locationPlan_1.locationPlanSchema,
    recapPlan_1.recapPlanSchema,
]);
// WithId variant for plans
exports.planWithIdSchema = zod_1.z.union([
    (0, withId_1.withIdSchema)(timePlan_1.timePlanSchema),
    (0, withId_1.withIdSchema)(locationPlan_1.locationPlanSchema),
    (0, withId_1.withIdSchema)(recapPlan_1.recapPlanSchema),
]);
const planIsTimePlan = (value) => value.type === "time";
exports.planIsTimePlan = planIsTimePlan;
const isValidTimePlan = (value) => timePlan_1.timePlanSchema.safeParse(value).success;
exports.isValidTimePlan = isValidTimePlan;
const planIsRecapPlan = (value) => value.type === "recap";
exports.planIsRecapPlan = planIsRecapPlan;
const isValidRecapPlan = (value) => recapPlan_1.recapPlanSchema.safeParse(value).success;
exports.isValidRecapPlan = isValidRecapPlan;
const planIsLocationPlan = (value) => value.type === "location";
exports.planIsLocationPlan = planIsLocationPlan;
const isValidLocationPlan = (value) => locationPlan_1.locationPlanSchema.safeParse(value).success;
exports.isValidLocationPlan = isValidLocationPlan;
