"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.threadSummarySchema = void 0;
const zod_1 = require("zod");
const threadTypeSchema = zod_1.z.enum([
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
exports.threadSummarySchema = zod_1.z.object({
    type: threadTypeSchema,
    tacticsByTitle: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.any())),
    behaviorsByName: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.any())),
    outcomeLogs: zod_1.z.array(zod_1.z.any()),
    daySummaryLog: zod_1.z.any().optional(),
    questionLogs: zod_1.z.array(zod_1.z.any()),
    firstMessageLog: zod_1.z.any().optional(),
    firstCallLog: zod_1.z.any().optional(),
    hasContent: zod_1.z.boolean(),
});
