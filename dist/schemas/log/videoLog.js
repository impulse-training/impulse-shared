"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoLogSchema = void 0;
const zod_1 = require("zod");
const base_1 = require("./base");
exports.videoLogSchema = base_1.logBaseSchema.extend({
    type: zod_1.z.literal("video"),
    isDisplayable: zod_1.z.literal(true),
    title: zod_1.z.string().optional(),
    text: zod_1.z.string().optional(),
    data: zod_1.z.object({
        sourceUri: zod_1.z.string(),
    }),
});
