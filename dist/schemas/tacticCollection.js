"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticCollectionSchema = exports.tacticCollectionSourceSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
/**
 * Where a generated collection came from. The Tactics screen builds
 * collections from evidence (a feeling's mix, "what's working") and the user
 * can save one as their own; `source` records that provenance so the screen
 * shows the saved copy in place of the generated one.
 */
exports.tacticCollectionSourceSchema = zod_1.z.discriminatedUnion("kind", [
    // "When you're anxious": tactics indicated for / proven under a feeling tag
    zod_1.z.object({ kind: zod_1.z.literal("feeling"), optionId: zod_1.z.string() }),
    // "What's working": tactics ranked by resisted outcomes across contexts
    zod_1.z.object({ kind: zod_1.z.literal("working") }),
]);
exports.tacticCollectionSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string().min(1),
    emoji: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    // Source of truth for collection membership (user collections)
    tacticIds: zod_1.z.array(zod_1.z.string()).default([]),
    // Legacy field — kept for backward compat with support group collections
    items: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema).optional(),
    userHiddenTactics: zod_1.z.record(zod_1.z.string(), zod_1.z.array(zod_1.z.string())).optional(),
    // Set when a user creates the collection themselves (vs. the seeded default
    // templates, which have none). Lets the Library always show user-created
    // collections, even while empty, instead of hiding them like empty defaults.
    createdByUid: zod_1.z.string().optional(),
    // Set when the user saved a generated collection (see
    // tacticCollectionSourceSchema). Absent on hand-made and seeded collections.
    source: exports.tacticCollectionSourceSchema.optional(),
    ordinal: zod_1.z.number().optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
