"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticCollectionSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
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
    ordinal: zod_1.z.number().optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
