"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolCallLogSchema = exports.chatCompletionMessageSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const base_1 = require("./base");
/**
 * Tool Call Log Schema
 * Represents a log of a tool call in a conversation thread
 * Must include tool calls and tool results
 */
// Approximate OpenAI ChatCompletionMessage schema used in our tool call logging
// Supports assistant messages that include tool_calls, and tool messages that reference tool_call_id
const functionCallSchema = zod_1.default.object({
    name: zod_1.default.string(),
    arguments: zod_1.default.string(), // OpenAI sends arguments as a JSON string
});
const toolCallSchema = zod_1.default.object({
    id: zod_1.default.string(),
    type: zod_1.default.literal("function"),
    function: functionCallSchema,
});
exports.chatCompletionMessageSchema = zod_1.default.object({
    role: zod_1.default.enum(["assistant", "user", "system", "tool"]),
    // OpenAI content can be string, null, or array of content parts. We keep it permissive.
    content: zod_1.default.union([zod_1.default.string(), zod_1.default.null(), zod_1.default.array(zod_1.default.any())]).optional(),
    // For tool role messages
    tool_call_id: zod_1.default.string().optional(),
    // For assistant role with tool calls
    tool_calls: zod_1.default.array(toolCallSchema).optional(),
    // Optional name (system/user tool) — rarely used
    name: zod_1.default.string().optional(),
});
exports.toolCallLogSchema = base_1.logBaseSchema.extend({
    // Tool call logs are never displayed in the UI
    isDisplayable: zod_1.default.literal(false),
    type: zod_1.default.literal("tool_call"),
    data: zod_1.default.object({
        // Must be a valid ChatCompletionMessage-like object
        message: exports.chatCompletionMessageSchema,
        // Array of tool result messages (we keep permissive typing; they follow role: "tool")
        toolCallResults: zod_1.default.array(zod_1.default.any()),
    }),
});
