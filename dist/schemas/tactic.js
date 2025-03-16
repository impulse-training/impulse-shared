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
exports.tacticSchema = exports.tacticTypes = void 0;
/**
 * Tactic Schemas
 *
 * Defines Yup schemas for tactic data
 */
const yup = __importStar(require("yup"));
const utils_1 = require("../utils");
// Tactic Types
exports.tacticTypes = [
    "action",
    "affirmation",
    "image",
    "video",
    "link",
    "supportGroup",
    "breathingExercise",
];
// Tactic Schema
exports.tacticSchema = yup.object({
    id: yup.string(),
    type: yup.string().oneOf(exports.tacticTypes).required(),
    title: yup.string().required(),
    description: yup.string().optional(),
    content: yup.string().optional(),
    imageUri: yup.string().optional(),
    videoUri: yup.string().optional(),
    audioUri: yup.string().optional(),
    linkUrl: yup.string().optional(),
    supportGroupId: yup.string().optional(),
    supportGroupName: yup.string().optional(),
    completed: yup.boolean().optional(),
    durationSeconds: yup.number().optional(), // Total duration in seconds
    allBehaviors: yup.boolean().optional(),
    behaviorIds: yup.array().of(yup.string().required()).optional(),
    userId: yup.string().optional(),
    isPublic: yup.boolean().optional(),
    createdAt: utils_1.timestampSchema,
    updatedAt: utils_1.timestampSchema,
});
