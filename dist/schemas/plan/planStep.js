"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planStepSchema = exports.collectionPickStepSchema = exports.fixedTacticStepSchema = void 0;
const zod_1 = require("zod");
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
exports.fixedTacticStepSchema = zod_1.z.object({
    type: zod_1.z.literal("fixedTactic"),
    tacticRef: documentReferenceSchema_1.documentReferenceSchema,
});
exports.collectionPickStepSchema = zod_1.z.object({
    type: zod_1.z.literal("collectionPick"),
    collectionId: zod_1.z.string(),
    label: zod_1.z.string().optional(),
});
exports.planStepSchema = zod_1.z.discriminatedUnion("type", [
    exports.fixedTacticStepSchema,
    exports.collectionPickStepSchema,
]);
