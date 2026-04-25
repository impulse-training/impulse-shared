"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answeredRecapQuestionSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
/**
 * Stored at users/{userId}/answeredRecapQuestions/{questionId}
 *
 * Tracks which sequence questions the user has completed.
 * Contextual questions (baseline, milestone, experiment, trend) are NOT
 * tracked here — they are gated by current state instead.
 */
exports.answeredRecapQuestionSchema = zod_1.z.object({
    answeredAt: timestampSchema_1.timestampSchema,
    sessionId: zod_1.z.string(),
    dateString: zod_1.z.string(),
    answerSummary: zod_1.z.string().optional(),
    behaviorIds: zod_1.z.array(zod_1.z.string()).optional(),
});
