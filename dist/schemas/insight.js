"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insightSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.insightSchema = zod_1.default.object({
    id: zod_1.default.string().optional(),
    emotion: zod_1.default.string(),
    associatedBehaviorDocs: documentReferenceSchema_1.documentReferenceSchema.array().optional(),
    sourceThreadDoc: documentReferenceSchema_1.documentReferenceSchema.optional(),
    sourceLogDoc: documentReferenceSchema_1.documentReferenceSchema.optional(),
    text: zod_1.default.string(),
    /**
     * Insight lifecycle:
     * - Created private
     * - Eligibility evaluated async (null -> eligible | ineligible)
     * - Some eligible insights are surfaced later
     * - Sharing is always user-initiated
     * - Public insights are copies, never live documents
     */
    // contentEligibilityStatus === null || undefined -> not yet evaluated
    contentEligibilityStatus: zod_1.default
        .enum(["eligible", "ineligible"])
        .nullable()
        .optional(),
    contentEligibilityEvaluatedAt: timestampSchema_1.timestampSchema.optional(),
    surfacedForSharingAt: timestampSchema_1.timestampSchema.optional(),
    sharedAt: timestampSchema_1.timestampSchema.optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
