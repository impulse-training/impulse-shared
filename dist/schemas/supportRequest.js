"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportRequestSchema = void 0;
const zod_1 = require("zod");
const timestampSchema_1 = require("../utils/timestampSchema");
exports.supportRequestSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    topic: zod_1.z.enum([
        "general",
        "account",
        "billing",
        "bug_report",
        "feature_request",
    ]),
    message: zod_1.z.string(),
    createdAt: timestampSchema_1.timestampSchema,
});
