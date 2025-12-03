"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insightSchema = void 0;
const zod_1 = require("zod");
const utils_1 = require("../utils");
exports.insightSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    emotion: zod_1.z.string(),
    associatedBehaviorDocs: utils_1.documentReferenceSchema.array().optional(),
    sourceThreadDoc: utils_1.documentReferenceSchema.optional(),
    sourceLogDoc: utils_1.documentReferenceSchema.optional(),
    text: zod_1.z.string(),
    createdAt: utils_1.timestampSchema.optional(),
    updatedAt: utils_1.timestampSchema.optional(),
});
