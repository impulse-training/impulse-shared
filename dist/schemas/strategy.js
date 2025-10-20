"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategySchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
const userProfile_1 = require("./userProfile");
exports.strategySchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    isImported: zod_1.z.boolean().optional(),
    plans: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema),
    createdByProfile: userProfile_1.userProfileSchema.optional(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
