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
exports.isQuestionStep = exports.QuestionStepSchemas = exports.isValidSlider1To10QuestionStep = exports.questionStepIsSlider1To10Question = exports.isValidTextQuestionStep = exports.questionStepIsTextQuestion = exports.questionStepSchema = exports.isQuestionStepMode = exports.textQuestionStepSchema = exports.slider1To10QuestionStepSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const slider1To10_1 = require("./slider1To10");
Object.defineProperty(exports, "slider1To10QuestionStepSchema", { enumerable: true, get: function () { return slider1To10_1.slider1To10QuestionStepSchema; } });
const text_1 = require("./text");
Object.defineProperty(exports, "textQuestionStepSchema", { enumerable: true, get: function () { return text_1.textQuestionStepSchema; } });
__exportStar(require("./slider1To10"), exports);
__exportStar(require("./text"), exports);
// Helper function to check if a step is any type of question step
const isQuestionStepMode = (mode) => {
    return mode === "question-text" || mode === "question-slider1To10";
};
exports.isQuestionStepMode = isQuestionStepMode;
// Schema for discriminated union based on mode
exports.questionStepSchema = zod_1.default.discriminatedUnion("mode", [
    text_1.textQuestionStepSchema,
    slider1To10_1.slider1To10QuestionStepSchema,
]);
// Type guards for question steps
const questionStepIsTextQuestion = (value) => value.mode === "question-text";
exports.questionStepIsTextQuestion = questionStepIsTextQuestion;
const isValidTextQuestionStep = (value) => text_1.textQuestionStepSchema.safeParse(value).success;
exports.isValidTextQuestionStep = isValidTextQuestionStep;
const questionStepIsSlider1To10Question = (value) => value.mode === "question-slider1To10";
exports.questionStepIsSlider1To10Question = questionStepIsSlider1To10Question;
const isValidSlider1To10QuestionStep = (value) => slider1To10_1.slider1To10QuestionStepSchema.safeParse(value).success;
exports.isValidSlider1To10QuestionStep = isValidSlider1To10QuestionStep;
// Utility to dynamically select the correct schema based on the QuestionStep type
exports.QuestionStepSchemas = {
    "question-text": text_1.textQuestionStepSchema,
    "question-slider1To10": slider1To10_1.slider1To10QuestionStepSchema,
};
const isQuestionStep = (value) => exports.questionStepSchema.safeParse(value).success;
exports.isQuestionStep = isQuestionStep;
