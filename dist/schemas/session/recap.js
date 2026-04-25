"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recapSessionSchema = exports.recapQuestionSourceSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.recapQuestionSourceSchema = zod_1.z.enum([
    "sequence",
    "baseline",
    "milestone",
    "trend",
    "approaching_milestone",
]);
exports.recapSessionSchema = base_1.sessionBaseSchema.extend({
    type: zod_1.z.literal("recap"),
    /** Set when user confirms day totals — mirrors daySummary.dayTotalsConfirmedAt */
    completedAt: timestampSchema_1.timestampSchema.nullable().optional(),
    recapQuestionId: zod_1.z.string().nullable().optional(),
    recapQuestionSource: exports.recapQuestionSourceSchema.optional(),
    focusBehaviorId: zod_1.z.string().optional(),
    focusBehaviorName: zod_1.z.string().optional(),
    focusBehaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
    focusBehaviorNames: zod_1.z.array(zod_1.z.string()).optional(),
});
