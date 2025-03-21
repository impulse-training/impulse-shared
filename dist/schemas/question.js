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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.isQuestion = exports.questionSchema = exports.questionConditions = exports.questionOutcomes = exports.responseTypes = void 0;
const yup = __importStar(require("yup"));
// Response types for questions
exports.responseTypes = ["text", "slider", "multiple_choice"];
// Define outcome types for questions
exports.questionOutcomes = ["setback", "partial", "success"];
// Define condition types for next question rules
exports.questionConditions = ["equals", "contains", "greater_than", "less_than"];
// Base Question Schema
exports.questionSchema = yup.object({
    id: yup.string(),
    content: yup.string().required(),
    responseType: yup.mixed().oneOf(exports.responseTypes).required(),
    suggestedResponses: yup
        .array()
        .of(yup.string())
        .when("responseType", {
        is: (val) => val === "text" || val === "multiple_choice",
        then: (schema) => schema.required().min(1),
        otherwise: (schema) => schema.default([]),
    }),
    sliderConfig: yup
        .object({
        min: yup.number().required(),
        max: yup.number().required(),
        step: yup.number().default(1),
        minLabel: yup.string(),
        maxLabel: yup.string(),
        defaultValue: yup.number(),
    })
        .when("responseType", {
        is: "slider",
        then: (schema) => schema.required(),
        otherwise: (schema) => schema.optional().default(undefined),
    }),
    scope: yup.string().oneOf(["debrief"]).optional(),
    order: yup.number().optional(),
    requiresOutcome: yup.boolean().optional().default(false),
    visibleForOutcomes: yup
        .array()
        .of(yup.string().oneOf(exports.questionOutcomes))
        .optional(),
    nextQuestionRule: yup
        .object({
        condition: yup.mixed().oneOf(exports.questionConditions).required(),
        value: yup.mixed().required(),
        nextQuestionId: yup.string().required(),
    })
        .optional(),
});
const isQuestion = (value) => {
    try {
        exports.questionSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isQuestion = isQuestion;
