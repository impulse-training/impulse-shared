"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoSessionSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.demoSessionSchema = base_1.sessionBaseSchema.extend({
    type: zod_1.z.literal("demo"),
    demoVisitorIp: zod_1.z.string().optional(),
    demoVisitorFingerprint: zod_1.z.string().optional(),
    demoMaxDurationMs: zod_1.z.number().optional(),
});
