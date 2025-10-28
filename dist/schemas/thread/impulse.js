"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impulseThreadSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.impulseThreadSchema = base_1.threadBaseSchema.extend({
    type: zod_1.z.literal("impulse"),
    behaviorDocs: zod_1.z.array(documentReferenceSchema_1.documentReferenceSchema),
    isSuccess: zod_1.z.boolean().optional(),
    allImpulseQuestionsAnsweredAt: timestampSchema_1.timestampSchema.optional(),
    debriefAfter: timestampSchema_1.timestampSchema.optional(),
    debriefStartedAt: timestampSchema_1.timestampSchema.optional(),
    debriefFinishedAt: timestampSchema_1.timestampSchema.nullable(),
    outcomeSelectedAt: timestampSchema_1.timestampSchema.optional(),
});
