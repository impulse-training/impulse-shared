"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.externalSenderSessionSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const documentReferenceSchema_1 = require("../utils/documentReferenceSchema");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.externalSenderSessionSchema = zod_1.default.object({
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
    expiresAt: timestampSchema_1.timestampSchema.optional(),
    systemMessage: zod_1.default.string(),
    filesUpdatedAt: timestampSchema_1.timestampSchema.optional(),
    senderName: zod_1.default.string().optional(),
    targetTacticRef: documentReferenceSchema_1.documentReferenceSchema.optional(),
});
