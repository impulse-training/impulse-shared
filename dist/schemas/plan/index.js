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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDefaultPlan = exports.planIsDefaultPlan = exports.isValidEmotionPlan = exports.planIsEmotionPlan = exports.isValidImpulsePlan = exports.planIsImpulsePlan = exports.isValidLocationPlan = exports.planIsLocationPlan = exports.isValidTimePlan = exports.planIsTimePlan = exports.planWithIdSchema = exports.planSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const withId_1 = require("../../utils/withId");
const defaultPlan_1 = require("./defaultPlan");
const emotionPlan_1 = require("./emotionPlan");
const impulsePlan_1 = require("./impulsePlan");
const locationPlan_1 = require("./locationPlan");
const timePlan_1 = require("./timePlan");
__exportStar(require("./defaultPlan"), exports);
__exportStar(require("./emotionPlan"), exports);
__exportStar(require("./impulsePlan"), exports);
__exportStar(require("./locationPlan"), exports);
__exportStar(require("./timePlan"), exports);
exports.planSchema = zod_1.default.discriminatedUnion("type", [
    defaultPlan_1.defaultPlanSchema,
    emotionPlan_1.emotionPlanSchema,
    impulsePlan_1.impulsePlanSchema,
    timePlan_1.timePlanSchema,
    locationPlan_1.locationPlanSchema,
]);
// WithId variant for plans
exports.planWithIdSchema = zod_1.default.union([
    (0, withId_1.withIdSchema)(defaultPlan_1.defaultPlanSchema),
    (0, withId_1.withIdSchema)(emotionPlan_1.emotionPlanSchema),
    (0, withId_1.withIdSchema)(impulsePlan_1.impulsePlanSchema),
    (0, withId_1.withIdSchema)(timePlan_1.timePlanSchema),
    (0, withId_1.withIdSchema)(locationPlan_1.locationPlanSchema),
]);
const planIsTimePlan = (value) => value.type === "time";
exports.planIsTimePlan = planIsTimePlan;
const isValidTimePlan = (value) => timePlan_1.timePlanSchema.safeParse(value).success;
exports.isValidTimePlan = isValidTimePlan;
const planIsLocationPlan = (value) => value.type === "location";
exports.planIsLocationPlan = planIsLocationPlan;
const isValidLocationPlan = (value) => locationPlan_1.locationPlanSchema.safeParse(value).success;
exports.isValidLocationPlan = isValidLocationPlan;
const planIsImpulsePlan = (value) => value.type === "impulse";
exports.planIsImpulsePlan = planIsImpulsePlan;
const isValidImpulsePlan = (value) => impulsePlan_1.impulsePlanSchema.safeParse(value).success;
exports.isValidImpulsePlan = isValidImpulsePlan;
const planIsEmotionPlan = (value) => value.type === "emotion";
exports.planIsEmotionPlan = planIsEmotionPlan;
const isValidEmotionPlan = (value) => emotionPlan_1.emotionPlanSchema.safeParse(value).success;
exports.isValidEmotionPlan = isValidEmotionPlan;
const planIsDefaultPlan = (value) => value.type === "default";
exports.planIsDefaultPlan = planIsDefaultPlan;
const isValidDefaultPlan = (value) => defaultPlan_1.defaultPlanSchema.safeParse(value).success;
exports.isValidDefaultPlan = isValidDefaultPlan;
