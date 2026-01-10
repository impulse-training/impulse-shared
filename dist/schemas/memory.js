"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMemory = exports.memorySchema = void 0;
const zod_1 = __importDefault(require("zod"));
const timestampSchema_1 = require("../utils/timestampSchema");
exports.memorySchema = zod_1.default.object({
    id: zod_1.default.string(),
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    source: zod_1.default.string(), // e.g., "conversation", "user_input", "system_observation"
    tags: zod_1.default.array(zod_1.default.string()).default([]),
    importance: zod_1.default.number().min(1).max(10).default(5), // 1-10 scale for memory importance
    createdAt: timestampSchema_1.timestampSchema.optional(),
    updatedAt: timestampSchema_1.timestampSchema.optional(),
});
// Type guard function
const isMemory = (value) => exports.memorySchema.safeParse(value).success;
exports.isMemory = isMemory;
