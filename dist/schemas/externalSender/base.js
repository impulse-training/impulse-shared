"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.externalSenderBaseSchema = externalSenderBaseSchema;
const zod_1 = __importDefault(require("zod"));
const documentReferenceSchema_1 = require("../../utils/documentReferenceSchema");
const timestampSchema_1 = require("../../utils/timestampSchema");
function externalSenderBaseSchema(type) {
    return zod_1.default.object({
        type: zod_1.default.literal(type),
        uid: zod_1.default.string(),
        senderName: zod_1.default.string().optional(),
        defaultTargetTacticRef: documentReferenceSchema_1.documentReferenceSchema.optional(),
        createdAt: timestampSchema_1.timestampSchema.optional(),
        updatedAt: timestampSchema_1.timestampSchema.optional(),
        filesUpdatedAt: timestampSchema_1.timestampSchema.optional(),
    });
}
