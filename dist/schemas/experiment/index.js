"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experimentSchema = exports.experimentPhaseEnum = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const daySummary_1 = require("../daySummary");
const goal_1 = require("../goal");
exports.experimentPhaseEnum = zod_1.z.enum(["baseline", "test", "results"]);
exports.experimentSchema = zod_1.z.object({
    startedAt: timestampSchema_1.timestampSchema.optional(),
    name: zod_1.z.string(),
    subtitle: zod_1.z.string(),
    behaviorId: zod_1.z.string(),
    questionIds: zod_1.z.array(zod_1.z.string()),
    config: zod_1.z.object({
        baseline: zod_1.z.object({
            requiredDays: zod_1.z.number().default(5),
            description: zod_1.z.string(),
        }),
        test: zod_1.z
            .object({
            requiredGoal: goal_1.goalSchema,
            requiredDays: zod_1.z.number().default(7),
            requireContiguousDays: zod_1.z.boolean().default(false),
            // E.g. "Go 7 days in a row without watching YouTube"
            description: zod_1.z.string(),
        })
            .optional(),
    }),
    // Map of yyyy-MM-dd -> DaySummary. This is "input" data.
    daySummaries: zod_1.z.record(zod_1.z.string(), daySummary_1.daySummarySchema).default({}),
    // Next, calculate whether requirements were met for a given day for a phase
    requirementsMet: zod_1.z.object({
        baseline: zod_1.z.record(zod_1.z.string(), zod_1.z.boolean()),
        test: zod_1.z.record(zod_1.z.string(), zod_1.z.boolean()),
    }),
    // Finally, compute data for display.
    completion: zod_1.z.object({
        baseline: zod_1.z.object({
            startDateString: zod_1.z.string(),
            days: zod_1.z.array(zod_1.z.object({ date: zod_1.z.string(), requirementsMet: zod_1.z.boolean() })),
        }),
        test: zod_1.z.object({
            startDateString: zod_1.z.string(),
            days: zod_1.z.array(zod_1.z.object({ date: zod_1.z.string(), requirementsMet: zod_1.z.boolean() })),
        }),
    }),
    currentPhase: exports.experimentPhaseEnum.default("baseline"),
});
