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
    startedPlanIds: zod_1.z.array(zod_1.z.string()).optional(),
    completedPlanIds: zod_1.z.array(zod_1.z.string()).optional(),
    debriefAfter: timestampSchema_1.timestampSchema.optional(),
    debriefBefore: timestampSchema_1.timestampSchema.optional(),
    debriefUrgeLogInsertedAt: timestampSchema_1.timestampSchema.optional(),
    outcomeSelectedAt: timestampSchema_1.timestampSchema.optional(),
    actedOnUrge: zod_1.z.boolean().nullable().optional(), // true = acted, false = resisted, null/undefined = not answered
});
