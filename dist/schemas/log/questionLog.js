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
exports.isQuestionLog = exports.questionLogSchema = void 0;
const yup = __importStar(require("yup"));
const _1 = require(".");
const responseTypes = ["text", "slider"];
// Question Log Schema
exports.questionLogSchema = _1.logBaseSchema.shape({
    type: yup.string().oneOf(["question"]).required(),
    data: yup
        .object({
        content: yup.string().required(),
        responseType: yup
            .mixed()
            .oneOf(responseTypes)
            .required(),
        suggestedResponses: yup
            .array()
            .of(yup.string())
            .when("responseType", {
            is: "text",
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
        response: yup.mixed().nullable().default(null), // This will store the user's response
    })
        .required(),
});
const isQuestionLog = (value) => {
    try {
        exports.questionLogSchema.validateSync(value);
        return true;
    }
    catch (error) {
        return false;
    }
};
exports.isQuestionLog = isQuestionLog;
