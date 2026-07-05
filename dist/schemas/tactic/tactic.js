"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticSchema = exports.tacticNoteSchema = exports.tacticLinkSchema = exports.tacticPhaseSchema = exports.indicationSchema = exports.behaviorTopicIndicationSchema = exports.tagIndicationSchema = exports.behaviorIndicationSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../../utils/timestampSchema");
const step_1 = require("./step");
exports.behaviorIndicationSchema = zod_1.z.object({
    // Reference to the behavior this indication relates to
    behaviorId: zod_1.z.string(),
    // The behavior name (denormalized for convenience)
    behaviorName: zod_1.z.string(),
    // Weight for how strongly this indication should influence suggestion ranking
    weight: zod_1.z.number(),
});
exports.tagIndicationSchema = zod_1.z.object({
    // Tag group name (e.g. "activity", "emotion") — matched by name, not ID,
    // since global/seed tactics don't know user-specific Firestore IDs
    tagGroupName: zod_1.z.string(),
    // Option labels to match (case-insensitive), e.g. ["exercising", "walking"]
    optionLabels: zod_1.z.array(zod_1.z.string()).min(1),
    // Weight for how strongly this indication should influence suggestion ranking
    weight: zod_1.z.number(),
});
exports.behaviorTopicIndicationSchema = zod_1.z.object({
    // Behavior topic this indication relates to (e.g. "sexual", "substances").
    // Matched against the session behaviors' behaviorTopicId, so a tactic can be
    // indicated/contraindicated for a whole class of behaviors rather than a
    // single user-specific behaviorId. Lets us, e.g., contraindicate anxiety
    // down-regulators for arousal-driven (sexual) urges.
    behaviorTopicId: zod_1.z.string(),
    // Weight for how strongly this indication should influence ranking
    weight: zod_1.z.number(),
});
exports.indicationSchema = zod_1.z.object({
    behaviors: zod_1.z.array(exports.behaviorIndicationSchema).optional(),
    behaviorTopics: zod_1.z.array(exports.behaviorTopicIndicationSchema).optional(),
    tags: zod_1.z.array(exports.tagIndicationSchema).optional(),
});
exports.tacticPhaseSchema = zod_1.z.enum(["regulate", "shift", "reengage"]);
exports.tacticLinkSchema = zod_1.z.object({
    url: zod_1.z.string().url(),
    title: zod_1.z.string().optional(),
    imageUrl: zod_1.z.string().optional(),
    domain: zod_1.z.string().optional(),
});
exports.tacticNoteSchema = zod_1.z.object({
    // A single thing the user knows / wants to remember about this issue,
    // e.g. "Every time I do this, I end up regretting it".
    text: zod_1.z.string().min(1),
});
exports.tacticSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    title: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    links: zod_1.z.array(exports.tacticLinkSchema).optional(),
    notes: zod_1.z.array(exports.tacticNoteSchema).optional(),
    aiInstructions: zod_1.z.string().optional(),
    createdByUid: zod_1.z.string().optional(),
    recommended: zod_1.z.boolean().optional(),
    phase: exports.tacticPhaseSchema.optional(),
    steps: zod_1.z.array(step_1.tacticStepSchema).min(1),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    isMultiStep: zod_1.z.boolean().optional(), // If true, show multi-step editor UI
    autoplay: zod_1.z.boolean().optional(), // Auto-start timers and auto-advance steps
    // AI metadata for tactic suggestion
    indications: exports.indicationSchema.optional(),
    contraindications: exports.indicationSchema.optional(),
    completionTrigger: zod_1.z.enum(["device-restart"]).optional(), // Auto-complete when this condition is detected
    effectiveness: zod_1.z.enum(["low", "medium", "high"]).optional(), // General effectiveness rating
    timeToComplete: zod_1.z.enum(["quick", "medium", "long"]).optional(), // How long the tactic takes
    // Friction/fit metadata for library filtering (orthogonal to collections)
    effort: zod_1.z.enum(["low", "medium", "high"]).optional(), // Activation energy required to start/do it
    worksAnywhere: zod_1.z.boolean().optional(), // Doable regardless of location/context (public, work, in bed)
    aiConfiguration: zod_1.z
        .object({
        defaultConversationMode: zod_1.z.enum(["voice", "text"]).optional(),
        goal: zod_1.z.string().min(1),
        prompt: zod_1.z.string().optional(),
    })
        .optional(),
    // Audio generation fields — when a tactic is created with AI-generated audio,
    // these track the generation lifecycle directly on the tactic document.
    generationStatus: zod_1.z
        .enum(["pending", "processing", "completed", "failed"])
        .optional(),
    generationError: zod_1.z.string().optional(),
    generationProvider: zod_1.z.string().optional(),
    generationProviderJobId: zod_1.z.string().optional(),
    generationPrompt: zod_1.z.string().optional(),
    generationVoice: zod_1.z.enum(["m", "f"]).nullable().optional(),
    collectionTemplateIds: zod_1.z.array(zod_1.z.string()).optional(),
    createdAt: timestampSchema_1.timestampSchema,
    updatedAt: timestampSchema_1.timestampSchema,
});
