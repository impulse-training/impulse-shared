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
exports.isValidAdjustmentThread = exports.threadIsAdjustmentThread = exports.isValidBehaviorThread = exports.threadIsBehaviorThread = exports.isValidLocationPlanThread = exports.threadIsLocationPlanThread = exports.isValidRecapPlanThread = exports.threadIsRecapPlanThread = exports.isValidTimePlanThread = exports.threadIsTimePlanThread = exports.isValidImpulseThread = exports.threadIsImpulseThread = exports.isValidOnboardingThread = exports.threadIsOnboardingThread = exports.isValidGeneralThread = exports.threadIsGeneralThread = exports.threadSchema = exports.threadSchemas = void 0;
const zod_1 = require("zod");
const adjustment_1 = require("./adjustment");
const behavior_1 = require("./behavior");
const general_1 = require("./general");
const impulse_1 = require("./impulse");
const onboarding_1 = require("./onboarding");
const plan_1 = require("./plan");
__exportStar(require("./adjustment"), exports);
__exportStar(require("./behavior"), exports);
__exportStar(require("./general"), exports);
__exportStar(require("./impulse"), exports);
__exportStar(require("./onboarding"), exports);
__exportStar(require("./plan"), exports);
__exportStar(require("./threadSummary"), exports);
// Map of thread types to their schemas
exports.threadSchemas = {
    general: general_1.generalThreadSchema,
    impulse: impulse_1.impulseThreadSchema,
    onboarding: onboarding_1.onboardingThreadSchema,
    timePlan: plan_1.timePlanThreadSchema,
    behavior: behavior_1.behaviorThreadSchema,
    dayRecap: plan_1.recapPlanThreadSchema,
    locationPlan: plan_1.locationPlanThreadSchema,
    adjustment: adjustment_1.adjustmentThreadSchema,
};
// Discriminated union over type
exports.threadSchema = zod_1.z.discriminatedUnion("type", [
    general_1.generalThreadSchema,
    impulse_1.impulseThreadSchema,
    onboarding_1.onboardingThreadSchema,
    behavior_1.behaviorThreadSchema,
    plan_1.timePlanThreadSchema,
    plan_1.recapPlanThreadSchema,
    plan_1.locationPlanThreadSchema,
    adjustment_1.adjustmentThreadSchema,
]);
const threadIsGeneralThread = (value) => value.type === "general";
exports.threadIsGeneralThread = threadIsGeneralThread;
const isValidGeneralThread = (value) => general_1.generalThreadSchema.safeParse(value).success;
exports.isValidGeneralThread = isValidGeneralThread;
const threadIsOnboardingThread = (value) => value.type === "onboarding";
exports.threadIsOnboardingThread = threadIsOnboardingThread;
const isValidOnboardingThread = (value) => onboarding_1.onboardingThreadSchema.safeParse(value).success;
exports.isValidOnboardingThread = isValidOnboardingThread;
const threadIsImpulseThread = (value) => value.type === "impulse";
exports.threadIsImpulseThread = threadIsImpulseThread;
const isValidImpulseThread = (value) => impulse_1.impulseThreadSchema.safeParse(value).success;
exports.isValidImpulseThread = isValidImpulseThread;
const threadIsTimePlanThread = (value) => value.type === "timePlan";
exports.threadIsTimePlanThread = threadIsTimePlanThread;
const isValidTimePlanThread = (value) => plan_1.timePlanThreadSchema.safeParse(value).success;
exports.isValidTimePlanThread = isValidTimePlanThread;
const threadIsRecapPlanThread = (value) => value.type === "recap";
exports.threadIsRecapPlanThread = threadIsRecapPlanThread;
const isValidRecapPlanThread = (value) => plan_1.recapPlanThreadSchema.safeParse(value).success;
exports.isValidRecapPlanThread = isValidRecapPlanThread;
const threadIsLocationPlanThread = (value) => value.type === "locationPlan";
exports.threadIsLocationPlanThread = threadIsLocationPlanThread;
const isValidLocationPlanThread = (value) => plan_1.locationPlanThreadSchema.safeParse(value).success;
exports.isValidLocationPlanThread = isValidLocationPlanThread;
const threadIsBehaviorThread = (value) => value.type === "behavior";
exports.threadIsBehaviorThread = threadIsBehaviorThread;
const isValidBehaviorThread = (value) => behavior_1.behaviorThreadSchema.safeParse(value).success;
exports.isValidBehaviorThread = isValidBehaviorThread;
const threadIsAdjustmentThread = (value) => value.type === "adjustment";
exports.threadIsAdjustmentThread = threadIsAdjustmentThread;
const isValidAdjustmentThread = (value) => adjustment_1.adjustmentThreadSchema.safeParse(value).success;
exports.isValidAdjustmentThread = isValidAdjustmentThread;
