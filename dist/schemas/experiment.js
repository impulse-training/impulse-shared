"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.experimentProposalSchema = exports.experimentSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
const experimentMemoryNotesEntrySchema = zod_1.z.object({
    behaviorIds: zod_1.z.array(zod_1.z.string()),
    insights: zod_1.z.array(zod_1.z.string()).default([]),
});
const experimentMemorySchema = zod_1.z.object({
    notesByDate: zod_1.z
        .record(zod_1.z.string(), experimentMemoryNotesEntrySchema)
        .default({}),
});
const stageEnum = zod_1.z.enum(["observe", "intervene", "maintain"]);
const stageHistoryEntrySchema = zod_1.z.object({
    stage: stageEnum,
    enteredAt: timestampSchema_1.timestampSchema,
    exitedAt: timestampSchema_1.timestampSchema.optional(),
    summary: zod_1.z.string().optional(),
});
exports.experimentSchema = zod_1.z.object({
    startedAt: timestampSchema_1.timestampSchema.optional(),
    name: zod_1.z.string(),
    experimentQuestion: zod_1.z.string(),
    behaviorIds: zod_1.z.array(zod_1.z.string()).min(1),
    metricIds: zod_1.z.array(zod_1.z.string()).default([]),
    memory: experimentMemorySchema.optional(),
    resultsSummary: zod_1.z.string().optional(),
    archivedAt: timestampSchema_1.timestampSchema.optional(),
    stage: stageEnum.default("observe"),
    stageChangedAt: timestampSchema_1.timestampSchema.optional(),
    stageHistory: zod_1.z.array(stageHistoryEntrySchema).default([]),
    hypothesis: zod_1.z.string().optional(),
    goal: zod_1.z
        .object({
        metricId: zod_1.z.string(),
        target: zod_1.z.number(),
        direction: zod_1.z.enum(["increase", "decrease"]),
    })
        .optional(),
    chartUnlocked: zod_1.z.boolean().optional(),
    insights: zod_1.z
        .array(zod_1.z.object({
        heading: zod_1.z.string(),
        body: zod_1.z.string(),
    }))
        .optional(),
});
exports.experimentProposalSchema = zod_1.z.object({
    proposedBy: zod_1.z.enum(["admin", "ai"]),
    proposedByUid: zod_1.z.string().optional(),
    proposedAt: timestampSchema_1.timestampSchema,
    status: zod_1.z.enum(["pending", "accepted", "declined", "superseded"]),
    changes: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()),
    rationale: zod_1.z.string().optional(),
    respondedAt: timestampSchema_1.timestampSchema.optional(),
    declineNote: zod_1.z.string().optional(),
});
