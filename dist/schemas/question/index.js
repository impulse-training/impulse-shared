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
Object.defineProperty(exports, "__esModule", { value: true });
exports.isQuestion = exports.isValidBehaviorSelectionQuestion = exports.questionIsBehaviorSelectionQuestion = exports.isValidSlider1To10Question = exports.questionIsSlider1To10Question = exports.isValidShortTextQuestion = exports.questionIsShortTextQuestion = exports.isValidEmotionQuestion = exports.questionIsEmotionQuestion = exports.isValidTextQuestion = exports.questionIsTextQuestion = exports.questionSchema = exports.QuestionSchemas = exports.responseTypeSchema = exports.responseTypes = void 0;
const zod_1 = require("zod");
const behaviorSelection_1 = require("./behaviorSelection");
const emotion_1 = require("./emotion");
const shortText_1 = require("./shortText");
const slider1To10_1 = require("./slider1To10");
const text_1 = require("./text");
__exportStar(require("./behaviorSelection"), exports);
__exportStar(require("./emotion"), exports);
__exportStar(require("./shortText"), exports);
__exportStar(require("./slider1To10"), exports);
__exportStar(require("./text"), exports);
// Response types for questions
exports.responseTypes = [
    "text",
    "shortText",
    "emotion",
    "slider1To10",
    "behaviorSelection",
    "recap",
];
exports.responseTypeSchema = zod_1.z.enum(exports.responseTypes);
// Utility to dynamically select the correct schema based on the Question type
exports.QuestionSchemas = {
    text: text_1.textQuestionSchema,
    emotion: emotion_1.emotionQuestionSchema,
    shortText: shortText_1.shortTextQuestionSchema,
    slider1To10: slider1To10_1.slider1To10QuestionSchema,
    behaviorSelection: behaviorSelection_1.behaviorSelectionQuestionSchema,
};
exports.questionSchema = zod_1.z.discriminatedUnion("responseType", [
    exports.QuestionSchemas.text,
    exports.QuestionSchemas.emotion,
    exports.QuestionSchemas.shortText,
    exports.QuestionSchemas.slider1To10,
    exports.QuestionSchemas.behaviorSelection,
]);
// Type guards for each question type
const questionIsTextQuestion = (value) => value.responseType === "text";
exports.questionIsTextQuestion = questionIsTextQuestion;
const isValidTextQuestion = (value) => text_1.textQuestionSchema.safeParse(value).success;
exports.isValidTextQuestion = isValidTextQuestion;
const questionIsEmotionQuestion = (value) => value.responseType === "emotion";
exports.questionIsEmotionQuestion = questionIsEmotionQuestion;
const isValidEmotionQuestion = (value) => emotion_1.emotionQuestionSchema.safeParse(value).success;
exports.isValidEmotionQuestion = isValidEmotionQuestion;
const questionIsShortTextQuestion = (value) => value.responseType === "shortText";
exports.questionIsShortTextQuestion = questionIsShortTextQuestion;
const isValidShortTextQuestion = (value) => shortText_1.shortTextQuestionSchema.safeParse(value).success;
exports.isValidShortTextQuestion = isValidShortTextQuestion;
const questionIsSlider1To10Question = (value) => value.responseType === "slider1To10";
exports.questionIsSlider1To10Question = questionIsSlider1To10Question;
const isValidSlider1To10Question = (value) => slider1To10_1.slider1To10QuestionSchema.safeParse(value).success;
exports.isValidSlider1To10Question = isValidSlider1To10Question;
const questionIsBehaviorSelectionQuestion = (value) => value.responseType === "behaviorSelection";
exports.questionIsBehaviorSelectionQuestion = questionIsBehaviorSelectionQuestion;
const isValidBehaviorSelectionQuestion = (value) => behaviorSelection_1.behaviorSelectionQuestionSchema.safeParse(value).success;
exports.isValidBehaviorSelectionQuestion = isValidBehaviorSelectionQuestion;
const isQuestion = (value) => exports.questionSchema.safeParse(value).success;
exports.isQuestion = isQuestion;
