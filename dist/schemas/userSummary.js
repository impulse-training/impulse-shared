"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserSummary = exports.userSummarySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const timestampSchema_1 = require("../utils/timestampSchema");
/**
 * Schema for user summary documents stored in userSummaries collection
 * Contains pre-computed summary information for AI agents
 */
exports.userSummarySchema = zod_1.default.object({
    userId: zod_1.default.string(),
    summary: zod_1.default.string(),
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
const isUserSummary = (value) => exports.userSummarySchema.safeParse(value).success;
exports.isUserSummary = isUserSummary;
