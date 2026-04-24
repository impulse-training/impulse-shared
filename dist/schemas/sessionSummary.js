"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSummarySchema = void 0;
const zod_1 = require("zod");
const sessionTypeSchema = zod_1.z.enum([
    "impulse",
    "general",
    "onboarding",
    "recap",
    "behavior",
    "dayRecap",
    "timePlan",
    "locationPlan",
    "adjustment",
]);
exports.sessionSummarySchema = zod_1.z.object({
    type: sessionTypeSchema,
    tacticsByTitle: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.any())),
    behaviorsByName: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.any())),
    outcomeLogs: zod_1.z.array(zod_1.z.any()),
    plansLogs: zod_1.z.array(zod_1.z.any()),
    metricLogs: zod_1.z.array(zod_1.z.any()).optional(),
    firstMessageLog: zod_1.z.any().optional(),
    firstCallLog: zod_1.z.any().optional(),
    hasContent: zod_1.z.boolean(),
});
