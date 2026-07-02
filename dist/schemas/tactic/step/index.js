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
exports.stepIsVoiceStep = exports.stepIsPhoneCallStep = exports.stepIsPedometerStep = exports.stepIsAffirmationStep = exports.stepIsDefaultStep = exports.stepIsNotifySupportStep = exports.stepIsBreathingStep = exports.stepIsQuestionStep = exports.stepIsAudioStep = exports.stepIsMediaStep = exports.tacticStepSchema = void 0;
const zod_1 = require("zod");
// Import all step schemas
__exportStar(require("./affirmation"), exports);
__exportStar(require("./audio"), exports);
__exportStar(require("./base"), exports);
__exportStar(require("./breathing"), exports);
__exportStar(require("./default"), exports);
__exportStar(require("./media"), exports);
__exportStar(require("./pedometer"), exports);
__exportStar(require("./notifySupport"), exports);
__exportStar(require("./phoneCall"), exports);
__exportStar(require("./question"), exports);
__exportStar(require("./voice"), exports);
const affirmation_1 = require("./affirmation");
const audio_1 = require("./audio");
const breathing_1 = require("./breathing");
const default_1 = require("./default");
const media_1 = require("./media");
const pedometer_1 = require("./pedometer");
const notifySupport_1 = require("./notifySupport");
const phoneCall_1 = require("./phoneCall");
const question_1 = require("./question");
const voice_1 = require("./voice");
const tacticStepUnionSchema = zod_1.z.discriminatedUnion("mode", [
    default_1.defaultStepSchema,
    breathing_1.breathingStepSchema,
    notifySupport_1.notifySupportStepSchema,
    question_1.questionStepSchema,
    media_1.mediaStepSchema,
    audio_1.audioStepSchema,
    affirmation_1.affirmationStepSchema,
    pedometer_1.pedometerStepSchema,
    phoneCall_1.phoneCallStepSchema,
    voice_1.voiceStepSchema,
]);
/**
 * Lift the legacy question step modes into the unified `question` mode + shared
 * `answerSpec` on read, so existing tactic docs (which stored
 * `question-text` / `question-slider1To10`) keep parsing without a migration.
 */
function liftLegacyQuestionStep(val) {
    if (!val || typeof val !== "object" || Array.isArray(val))
        return val;
    const v = val;
    if (v.mode === "question-text") {
        const { suggestedResponses, mode, ...rest } = v;
        return {
            ...rest,
            mode: "question",
            answerSpec: {
                type: "text",
                ...(Array.isArray(suggestedResponses) ? { suggestedResponses } : {}),
            },
        };
    }
    if (v.mode === "question-slider1To10") {
        const { sliderConfig, mode, ...rest } = v;
        return {
            ...rest,
            mode: "question",
            answerSpec: {
                type: "slider1To10",
                sliderConfig: sliderConfig !== null && sliderConfig !== void 0 ? sliderConfig : {},
            },
        };
    }
    return val;
}
exports.tacticStepSchema = zod_1.z.preprocess(liftLegacyQuestionStep, tacticStepUnionSchema);
const stepIsMediaStep = (step) => step.mode === "media";
exports.stepIsMediaStep = stepIsMediaStep;
const stepIsAudioStep = (step) => step.mode === "audio";
exports.stepIsAudioStep = stepIsAudioStep;
const stepIsQuestionStep = (step) => step.mode === "question";
exports.stepIsQuestionStep = stepIsQuestionStep;
const stepIsBreathingStep = (step) => step.mode === "breathing";
exports.stepIsBreathingStep = stepIsBreathingStep;
const stepIsNotifySupportStep = (step) => step.mode === "notifySupport";
exports.stepIsNotifySupportStep = stepIsNotifySupportStep;
const stepIsDefaultStep = (step) => step.mode === "default";
exports.stepIsDefaultStep = stepIsDefaultStep;
const stepIsAffirmationStep = (step) => step.mode === "affirmation";
exports.stepIsAffirmationStep = stepIsAffirmationStep;
const stepIsPedometerStep = (step) => step.mode === "pedometer";
exports.stepIsPedometerStep = stepIsPedometerStep;
const stepIsPhoneCallStep = (step) => step.mode === "phoneCall";
exports.stepIsPhoneCallStep = stepIsPhoneCallStep;
const stepIsVoiceStep = (step) => step.mode === "zara";
exports.stepIsVoiceStep = stepIsVoiceStep;
