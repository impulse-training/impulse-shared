"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recapQuestionSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.recapQuestionSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    question: zod_1.z.string(),
    metaInstructions: zod_1.z.string(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
