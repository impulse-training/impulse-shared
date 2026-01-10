"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticSchema = exports.indicationSchema = exports.behaviorIndicationSchema = exports.questionResponseIndicationSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const timestampSchema_1 = require("../../utils/timestampSchema");
const step_1 = require("./step");
// Indication schemas for tactic suggestion logic
exports.questionResponseIndicationSchema = zod_1.default.object({
    // Reference to the question that this indication is based on
    questionId: zod_1.default.string(),
    // The prompt or text of the question (denormalized for convenience)
    questionPrompt: zod_1.default.string(),
    // Substrings to look for in the user's response to match this indication
    responseSubstrings: zod_1.default.array(zod_1.default.string()).min(1),
    // Weight for how strongly this indication should influence suggestion ranking
    weight: zod_1.default.number(),
});
exports.behaviorIndicationSchema = zod_1.default.object({
    // Reference to the behavior this indication relates to
    behaviorId: zod_1.default.string(),
    // The behavior name (denormalized for convenience)
    behaviorName: zod_1.default.string(),
    // Weight for how strongly this indication should influence suggestion ranking
    weight: zod_1.default.number(),
});
// Container schema that can include multiple sources of indications
exports.indicationSchema = zod_1.default.object({
    questionResponses: zod_1.default.array(exports.questionResponseIndicationSchema).optional(),
    behaviors: zod_1.default.array(exports.behaviorIndicationSchema).optional(),
});
exports.tacticSchema = zod_1.default.object({
    id: zod_1.default.string().optional(),
    title: zod_1.default.string().min(1).optional(),
    description: zod_1.default.string().optional(),
    aiInstructions: zod_1.default.string().optional(),
    createdByUid: zod_1.default.string().optional(),
    recommended: zod_1.default.boolean().optional(),
    steps: zod_1.default.array(step_1.tacticStepSchema).min(1),
    tags: zod_1.default.array(zod_1.default.string()).optional(),
    isMultiStep: zod_1.default.boolean().optional(), // If true, show multi-step editor UI
    autoplay: zod_1.default.boolean().optional(), // Auto-start timers and auto-advance steps
    // AI metadata for tactic suggestion
    indications: exports.indicationSchema.optional(),
    contraindications: exports.indicationSchema.optional(),
    effectiveness: zod_1.default.enum(["low", "medium", "high"]).optional(), // General effectiveness rating
    timeToComplete: zod_1.default.enum(["quick", "medium", "long"]).optional(), // How long the tactic takes
    aiConfiguration: zod_1.default
        .object({
        defaultConversationMode: zod_1.default.enum(["voice", "text"]).optional(),
        goal: zod_1.default.string().min(1),
        prompt: zod_1.default.string().optional(),
    })
        .optional(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
});
