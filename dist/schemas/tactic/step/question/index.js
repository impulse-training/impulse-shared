"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isQuestionStep = exports.questionStepIsChoiceQuestion = exports.questionStepIsSlider1To10Question = exports.questionStepIsTextQuestion = exports.isQuestionStepMode = exports.questionStepSchema = void 0;
const zod_1 = require("zod");
const answerSpec_1 = require("../../../question/answerSpec");
const base_1 = require("../base");
const timestampSchema_1 = require("../../../../utils/timestampSchema");
/**
 * A single tactic question step. The answer model is the shared `answerSpec`
 * (`text | choice | slider1To10`) — the same one debrief questions use. This
 * replaced the legacy `question-text` / `question-slider1To10` modes; see the
 * `preprocess` in `../index.ts` which lifts those legacy shapes on read.
 */
exports.questionStepSchema = base_1.baseStepSchema.extend({
    mode: zod_1.z.literal("question"),
    id: zod_1.z.string().optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    // The question content (prompt).
    text: zod_1.z.string().min(1),
    answerSpec: answerSpec_1.answerSpecSchema,
});
// True for the unified question mode.
const isQuestionStepMode = (mode) => mode === "question";
exports.isQuestionStepMode = isQuestionStepMode;
const questionStepIsTextQuestion = (step) => step.answerSpec.type === "text";
exports.questionStepIsTextQuestion = questionStepIsTextQuestion;
const questionStepIsSlider1To10Question = (step) => step.answerSpec.type === "slider1To10";
exports.questionStepIsSlider1To10Question = questionStepIsSlider1To10Question;
const questionStepIsChoiceQuestion = (step) => step.answerSpec.type === "choice";
exports.questionStepIsChoiceQuestion = questionStepIsChoiceQuestion;
const isQuestionStep = (value) => exports.questionStepSchema.safeParse(value).success;
exports.isQuestionStep = isQuestionStep;
