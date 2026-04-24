"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemMessageLogSchema = exports.systemMessageContentSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.systemMessageContentSchema = zod_1.z.union([
    zod_1.z.string(),
    zod_1.z
        .object({
        title: zod_1.z.string().optional(),
        body: zod_1.z.string().optional(),
        message: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
        icon: zod_1.z.string().optional(),
        tone: zod_1.z.enum(["info", "success", "warning", "neutral"]).optional(),
        ctaLabel: zod_1.z.string().optional(),
        ctaPath: zod_1.z.string().optional(),
    })
        .passthrough(),
]);
exports.systemMessageLogSchema = base_1.messageBaseLogSchema.extend({
    type: zod_1.z.literal("system_message"),
    data: zod_1.z.object({
        message: exports.systemMessageContentSchema,
    }),
});
