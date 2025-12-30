"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticSchema = exports.indicationSchema = exports.behaviorIndicationSchema = exports.questionResponseIndicationSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const step_1 = require("./step");
// Indication schemas for tactic suggestion logic
exports.questionResponseIndicationSchema = zod_1.z.object({
    // Reference to the question that this indication is based on
    questionId: zod_1.z.string(),
    // The prompt or text of the question (denormalized for convenience)
    questionPrompt: zod_1.z.string(),
    // Substrings to look for in the user's response to match this indication
    responseSubstrings: zod_1.z.array(zod_1.z.string()).min(1),
    // Weight for how strongly this indication should influence suggestion ranking
    weight: zod_1.z.number(),
});
exports.behaviorIndicationSchema = zod_1.z.object({
    // Reference to the behavior this indication relates to
    behaviorId: zod_1.z.string(),
    // The behavior name (denormalized for convenience)
    behaviorName: zod_1.z.string(),
    // Weight for how strongly this indication should influence suggestion ranking
    weight: zod_1.z.number(),
});
// Container schema that can include multiple sources of indications
exports.indicationSchema = zod_1.z.object({
    questionResponses: zod_1.z.array(exports.questionResponseIndicationSchema).optional(),
    behaviors: zod_1.z.array(exports.behaviorIndicationSchema).optional(),
});
exports.tacticSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string().min(1).optional(),
    description: zod_1.z.string().optional(),
    aiInstructions: zod_1.z.string().optional(),
    createdByUid: zod_1.z.string().optional(),
    recommended: zod_1.z.boolean().optional(),
    steps: zod_1.z.array(step_1.tacticStepSchema).min(1),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    isMultiStep: zod_1.z.boolean().optional(), // If true, show multi-step editor UI
    autoplay: zod_1.z.boolean().optional(), // Auto-start timers and auto-advance steps
    // AI metadata for tactic suggestion
    indications: exports.indicationSchema.optional(),
    contraindications: exports.indicationSchema.optional(),
    effectiveness: zod_1.z.enum(["low", "medium", "high"]).optional(), // General effectiveness rating
    timeToComplete: zod_1.z.enum(["quick", "medium", "long"]).optional(), // How long the tactic takes
    aiConfiguration: zod_1.z
        .object({
        defaultConversationMode: zod_1.z.enum(["voice", "text"]).optional(),
        goal: zod_1.z.string().min(1),
        prompt: zod_1.z.string().optional(),
    })
        .optional(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
});
