"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insightSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.insightSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    userId: zod_1.z.string().optional(),
    emotion: zod_1.z.string().optional(),
    associatedBehaviorDocs: documentReferenceSchema_1.documentReferenceSchema.array().optional(),
    sourceSessionDoc: documentReferenceSchema_1.documentReferenceSchema.optional(),
    sourceLogDoc: documentReferenceSchema_1.documentReferenceSchema.optional(),
    text: zod_1.z.string(),
    // Coach-review lifecycle (experiment-driven insights).
    // System creates insights with status "pending"; coaches post or dismiss
    // from the dashboard. Only "posted" insights surface to users.
    status: zod_1.z.enum(["pending", "posted", "dismissed"]).optional(),
    // ID of the experiment this insight belongs to (currently always "current")
    experimentId: zod_1.z.string().optional(),
    // Denormalized coach UID for efficient collection-group queries.
    // Authorization uses isCoachFor(userId) in rules (checks the user doc),
    // not this field — it is for query scoping only.
    coachId: zod_1.z.string().nullable().optional(),
    postedAt: timestampSchema_1.timestampSchema.optional(),
    postedBy: zod_1.z.string().optional(), // coach UID who posted
    // Where this insight came from: "experiment" = auto-generated from experiment
    // results, "brain" = promoted from the impulse-brain knowledge graph,
    // "user" = user-authored. Absent on legacy docs (treat as experiment/user).
    source: zod_1.z.enum(["experiment", "brain", "user"]).optional(),
    // Carried over when source === "brain" (for coach context + traceability).
    category: zod_1.z.string().optional(),
    confidence: zod_1.z.number().optional(),
    behavior: zod_1.z.string().optional(),
    brainThoughtId: zod_1.z.string().optional(), // id of the source thought in the brain
    /**
     * Sharing lifecycle (user-created qualitative insights):
     * - Created private
     * - Eligibility evaluated async (null -> eligible | ineligible)
     * - Some eligible insights are surfaced later for sharing UI
     * - Sharing is always user-initiated
     * - Public insights are copies, never live documents
     */
    contentEligibilityStatus: zod_1.z
        .enum(["eligible", "ineligible"])
        .nullable()
        .optional(),
    contentEligibilityEvaluatedAt: timestampSchema_1.timestampSchema.optional(),
    surfacedForSharingAt: timestampSchema_1.timestampSchema.optional(),
    sharedAt: timestampSchema_1.timestampSchema.optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
