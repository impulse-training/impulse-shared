"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logIsQuestionLog = exports.questionLogSchema = exports.questionsLogSchema = exports.recapResponseValueSchema = void 0;
const zod_1 = require("zod");
const behavior_1 = require("../behavior");
const daySummary_1 = require("../daySummary");
const question_1 = require("../question");
const base_1 = require("./base");
/** Schema for recap response value - includes behavior totals, goals, and behaviors snapshot */
exports.recapResponseValueSchema = zod_1.z.object({
    behaviorTotals: zod_1.z.record(zod_1.z.string(), zod_1.z.object({
        value: zod_1.z.number(),
        formattedValue: zod_1.z.string(),
        behaviorName: zod_1.z.string(),
    })),
    summaryText: zod_1.z.string(),
    /** Goal comparison data keyed by behaviorId */
    goalComparisonByBehaviorId: zod_1.z
        .record(zod_1.z.string(), daySummary_1.goalComparisonEntrySchema)
        .optional(),
    /** Snapshot of behaviors at the time of recap, keyed by behaviorId */
    behaviorsById: zod_1.z.record(zod_1.z.string(), behavior_1.behaviorSchema).optional(),
});
const responseSchema = zod_1.z.object({
    responseType: zod_1.z.enum([
        "text",
        "shortText",
        "emotion",
        "slider1To10",
        "behaviorSelection",
        "recap",
    ]),
    value: zod_1.z.union([zod_1.z.any(), zod_1.z.array(zod_1.z.any())]), // Support both single values and arrays
    formattedValue: zod_1.z.string(),
    color: zod_1.z.string().optional(),
});
/** Single question with its response */
const questionEntrySchema = zod_1.z.object({
    questionId: zod_1.z.string().optional(),
    question: question_1.questionSchema,
    response: responseSchema.optional(),
});
/**
 * Multi-question log - supports multiple questions and their responses.
 * Used for experiment metrics and other multi-question scenarios.
 */
exports.questionsLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("questions"),
    isDisplayable: zod_1.z.literal(true),
    /** Display text shown above the questions */
    text: zod_1.z.string().optional(),
    data: zod_1.z.object({
        /** Array of questions with their responses */
        questions: zod_1.z.array(questionEntrySchema),
    }),
});
/**
 * Single question log - legacy format for backward compatibility.
 * New code should use QuestionsLog instead.
 */
exports.questionLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("question"),
    isDisplayable: zod_1.z.literal(true),
    data: zod_1.z.object({
        questionId: zod_1.z.string().optional(),
        question: question_1.questionSchema,
        response: responseSchema.optional(),
    }),
});
const logIsQuestionLog = (value) => value.type === "question";
exports.logIsQuestionLog = logIsQuestionLog;
