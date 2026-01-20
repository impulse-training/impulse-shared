"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticLogSchema = exports.tacticResponseSchema = void 0;
const zod_1 = require("zod");
const tactic_1 = require("../tactic");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
/** Response schema for tactic question steps - follows the same pattern as questionsLog */
exports.tacticResponseSchema = zod_1.z.object({
    responseType: zod_1.z.enum(["text", "slider1To10"]),
    value: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    formattedValue: zod_1.z.string(),
});
// Tactic Activity Log Schema
exports.tacticLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("tactic"),
    isDisplayable: zod_1.z.boolean(),
    data: zod_1.z.object({
        tactic: tactic_1.tacticSchema,
        // If this tactic activity originated from displaying a plan, include the planId
        planId: zod_1.z.string().optional(),
        // total number of steps in the tactic at the time of logging
        stepCount: zod_1.z.number().int().nonnegative().optional(),
        // 0-based indexes of completed steps (progressive)
        completedStepIndexes: zod_1.z.array(zod_1.z.number().int().nonnegative()).optional(),
        // whether the tactic is fully completed (all steps done)
        completed: zod_1.z.boolean().optional(),
        // Optional response for question-type tactic steps
        response: exports.tacticResponseSchema.optional(),
        // Summary of the tactic chat conversation
        conversationSummary: zod_1.z.string().optional(),
        // Summarization lifecycle tracking
        startedSummarizingConversationAt: timestampSchema_1.timestampSchema.optional(),
        finishedSummarizingConversationAt: timestampSchema_1.timestampSchema.optional(),
    }),
});
