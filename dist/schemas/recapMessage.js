"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recapMessageSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.recapMessageSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    role: zod_1.z.enum(["user", "assistant"]),
    content: zod_1.z.string(),
    createdAt: timestampSchema_1.timestampSchema,
});
