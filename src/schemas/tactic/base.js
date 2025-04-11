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
exports.tacticBaseSchema = void 0;
const yup = __importStar(require("yup"));
const utils_1 = require("../../utils");
const attachment_1 = require("../attachment");
// Tactic Schema
exports.tacticBaseSchema = yup.object({
    id: yup.string(),
    type: yup.string().required(),
    title: yup.string(),
    description: yup.string().optional(),
    durationSeconds: yup.number().optional(), // Target duration in seconds
    // Media attachments - each can be present independently
    imageAttachment: attachment_1.attachmentSchema.optional().default(undefined),
    // Which behaviors the tactic should be associated with
    allBehaviors: yup.boolean().optional(),
    behaviorIds: yup.array().of(yup.string().required()).optional(),
    routineIds: yup.array().of(yup.string().required()).optional(),
    // Ordinal for display ordering
    ordinal: yup.number().required(),
    // The owner of the tactic
    userId: yup.string().optional(),
    // The original creator of the tactic
    createdBy: yup.string(),
    // When shared with a support group, this is set
    supportGroupId: yup.string(),
    isPublic: yup.boolean().optional(),
    createdAt: utils_1.timestampSchema,
    updatedAt: utils_1.timestampSchema,
});
