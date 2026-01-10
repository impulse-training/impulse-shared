"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.impulseThreadSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
const timestampSchema_1 = require("../../utils/timestampSchema");
const base_1 = require("./base");
exports.impulseThreadSchema = base_1.threadBaseSchema.extend({
    type: zod_1.default.literal("impulse"),
    behaviorDocs: zod_1.default.array(documentReferenceSchema_1.documentReferenceSchema),
    behaviorIds: zod_1.default.array(zod_1.default.string()).optional(),
    allImpulseQuestionsAnsweredAt: timestampSchema_1.timestampSchema.optional(),
    debriefAfter: timestampSchema_1.timestampSchema.optional(),
    debriefBefore: timestampSchema_1.timestampSchema.optional(),
    debriefStartedAt: timestampSchema_1.timestampSchema.optional(),
    debriefFinishedAt: timestampSchema_1.timestampSchema.nullable(),
    outcomeSelectedAt: timestampSchema_1.timestampSchema.optional(),
});
