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
exports.stepIsAffirmationStep = exports.stepIsDefaultStep = exports.stepIsNotifySupportStep = exports.stepIsBreathingStep = exports.stepIsQuestionStep = exports.stepIsMediaStep = exports.tacticStepSchema = void 0;
const zod_1 = __importDefault(require("zod"));
// Import all step schemas
__exportStar(require("./affirmation"), exports);
__exportStar(require("./base"), exports);
__exportStar(require("./breathing"), exports);
__exportStar(require("./default"), exports);
__exportStar(require("./media"), exports);
__exportStar(require("./notifySupport"), exports);
__exportStar(require("./question"), exports);
const affirmation_1 = require("./affirmation");
const breathing_1 = require("./breathing");
const default_1 = require("./default");
const media_1 = require("./media");
const notifySupport_1 = require("./notifySupport");
const question_1 = require("./question");
exports.tacticStepSchema = zod_1.default.discriminatedUnion("mode", [
    default_1.defaultStepSchema,
    breathing_1.breathingStepSchema,
    notifySupport_1.notifySupportStepSchema,
    question_1.textQuestionStepSchema,
    question_1.slider1To10QuestionStepSchema,
    media_1.mediaStepSchema,
    affirmation_1.affirmationStepSchema,
]);
const stepIsMediaStep = (step) => step.mode === "media";
exports.stepIsMediaStep = stepIsMediaStep;
const stepIsQuestionStep = (step) => step.mode === "question-text" || step.mode === "question-slider1To10";
exports.stepIsQuestionStep = stepIsQuestionStep;
const stepIsBreathingStep = (step) => step.mode === "breathing";
exports.stepIsBreathingStep = stepIsBreathingStep;
const stepIsNotifySupportStep = (step) => step.mode === "notifySupport";
exports.stepIsNotifySupportStep = stepIsNotifySupportStep;
const stepIsDefaultStep = (step) => step.mode === "default";
exports.stepIsDefaultStep = stepIsDefaultStep;
const stepIsAffirmationStep = (step) => step.mode === "affirmation";
exports.stepIsAffirmationStep = stepIsAffirmationStep;
